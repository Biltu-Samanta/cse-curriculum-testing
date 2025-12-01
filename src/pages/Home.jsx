import React, { useState, useEffect } from 'react';
import { Book, Code, Cpu, Database, Globe, Layers, Layout, Terminal, Zap, ChevronRight, ChevronDown, GraduationCap, Award, Clock, Beaker, Menu, X, FileText, List, CheckCircle, BookOpen, AlertCircle, User, LogIn, LogOut, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

const StatBar = ({ label, value, max, colorClass }) => (
    <div className="mb-2">
        <div className="flex justify-between text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
            <span>{label}</span>
            <span>{value} Credits</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
                className={`h-2.5 rounded-full ${colorClass} transition-all duration-1000 ease-out`}
                style={{ width: `${(value / max) * 100}%` }}
            ></div>
        </div>
    </div>
);

const SubjectCard = ({ subject, onClick }) => {
    const getIcon = (type) => {
        switch (type) {
            case 'Theory': return <Book size={18} className="text-blue-500" />;
            case 'Practical': return <Code size={18} className="text-green-500" />;
            case 'Project': return <Cpu size={18} className="text-purple-500" />;
            case 'Mandatory': return <Award size={18} className="text-yellow-500" />;
            default: return <Layers size={18} className="text-gray-500" />;
        }
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'Theory': return 'bg-blue-50 border-blue-200 text-blue-800';
            case 'Practical': return 'bg-green-50 border-green-200 text-green-800';
            case 'Project': return 'bg-purple-50 border-purple-200 text-purple-800';
            case 'Mandatory': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
            default: return 'bg-gray-50 border-gray-200 text-gray-800';
        }
    };

    return (
        <button
            onClick={() => onClick(subject)}
            className="w-full text-left group bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-indigo-200 relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-transparent -mr-8 -mt-8 rounded-full"></div>

            <div className="flex items-start justify-between relative z-10">
                <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${getTypeColor(subject.type).split(' ')[0]}`}>
                        {getIcon(subject.type)}
                    </div>
                    <div>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${getTypeColor(subject.type)}`}>
                            {subject.type}
                        </span>
                        <h4 className="font-bold text-gray-800 mt-1">{subject.name}</h4>
                        <p className="text-xs text-gray-500 font-mono mt-0.5">{subject.code}</p>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-lg font-bold text-indigo-600">{subject.credits}</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Credits</div>
                </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-gray-500 text-xs">
                <span className="flex items-center"><Clock size={12} className="mr-1" /> (L-T-P): <span className="font-mono font-medium text-gray-700 ml-1">{subject.hours}</span></span>
                {subject.details && (
                    <span className="flex items-center text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        View Syllabus <ChevronRight size={12} className="ml-1" />
                    </span>
                )}
            </div>
        </button>
    );
};

const SubjectDetails = ({ subject, onBack }) => {
    if (!subject) return null;

    const hasDetails = subject.details && (subject.details.modules || subject.details.outcomes);

    return (
        <div className="absolute inset-0 z-50 bg-white flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center space-x-4">
                    <button onClick={onBack} className="p-2 rounded-full hover:bg-white hover:shadow-sm text-gray-500 transition-all">
                        <ChevronRight className="rotate-180" size={20} />
                    </button>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">{subject.name}</h2>
                        <span className="text-sm font-mono text-gray-500 bg-gray-200 px-2 py-0.5 rounded mr-2">{subject.code}</span>
                        <span className="text-sm text-gray-500">{subject.type} • {subject.credits} Credits</span>
                    </div>
                </div>
                <button onClick={onBack} className="p-2 text-gray-400 hover:text-red-500"><X size={24} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
                {!hasDetails ? (
                    <div className="text-center py-20">
                        <div className="bg-gray-100 p-6 rounded-full inline-block mb-4">
                            <FileText size={48} className="text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-600">Syllabus details coming soon...</h3>
                        <p className="text-gray-400 max-w-md mx-auto mt-2">Detailed syllabus for this subject has not been digitized yet. Please refer to the official PDF.</p>
                    </div>
                ) : (
                    <>
                        {/* Outcomes & Objectives */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {subject.details.objectives && (
                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                    <h3 className="flex items-center text-blue-800 font-bold mb-4">
                                        <CheckCircle size={18} className="mr-2" /> Course Objectives
                                    </h3>
                                    <ul className="space-y-2">
                                        {subject.details.objectives.map((obj, i) => (
                                            <li key={i} className="text-sm text-gray-700 flex items-start">
                                                <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                                                {obj}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {subject.details.outcomes && (
                                <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
                                    <h3 className="flex items-center text-green-800 font-bold mb-4">
                                        <Award size={18} className="mr-2" /> Course Outcomes (COs)
                                    </h3>
                                    <ul className="space-y-2">
                                        {subject.details.outcomes.map((out, i) => (
                                            <li key={i} className="text-sm text-gray-700 flex items-start">
                                                <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></span>
                                                {out}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Modules */}
                        {subject.details.modules && (
                            <div>
                                <h3 className="flex items-center text-gray-800 font-bold mb-4 text-lg border-b pb-2">
                                    <List size={20} className="mr-2 text-indigo-600" /> Detailed Syllabus
                                </h3>
                                <div className="space-y-4">
                                    {subject.details.modules.map((mod, i) => (
                                        <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 hover:border-indigo-100 hover:shadow-sm transition-all">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className={`font-bold ${mod.title === "Source Content Missing" ? "text-red-600 flex items-center" : "text-gray-900"}`}>
                                                    {mod.title === "Source Content Missing" && <AlertCircle size={16} className="mr-2" />}
                                                    {mod.title}
                                                </h4>
                                                {mod.hours && <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">{mod.hours}</span>}
                                            </div>
                                            {/* Only render content paragraph if content is not empty */}
                                            {mod.content && (
                                                <p className={`text-sm leading-relaxed ${mod.title === "Source Content Missing" ? "text-red-500 italic" : "text-gray-600"}`}>
                                                    {mod.content}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Books */}
                        {subject.details.books && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {subject.details.books.text && (
                                    <div>
                                        <h3 className="flex items-center text-gray-800 font-bold mb-4 text-lg border-b pb-2">
                                            <BookOpen size={20} className="mr-2 text-indigo-600" /> Textbooks
                                        </h3>
                                        <ul className="space-y-3">
                                            {subject.details.books.text.map((book, i) => (
                                                <li key={i} className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                    {book}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {subject.details.books.refs && (
                                    <div>
                                        <h3 className="flex items-center text-gray-800 font-bold mb-4 text-lg border-b pb-2">
                                            <Book size={20} className="mr-2 text-indigo-600" /> Reference Books
                                        </h3>
                                        <ul className="space-y-3">
                                            {subject.details.books.refs.map((book, i) => (
                                                <li key={i} className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                    {book}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

const SemesterView = ({ data, onClose }) => {
    const [selectedSubject, setSelectedSubject] = useState(null);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-5xl h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 relative">

                {selectedSubject ? (
                    <SubjectDetails subject={selectedSubject} onBack={() => setSelectedSubject(null)} />
                ) : (
                    <>
                        {/* Header */}
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 sm:p-8 text-white relative flex-shrink-0">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-md"
                            >
                                <X size={20} />
                            </button>

                            <h2 className="text-3xl md:text-4xl font-bold mb-2">{data.title}</h2>
                            <div className="flex flex-wrap gap-4 text-indigo-100 text-sm font-medium">
                                <span className="flex items-center bg-white/10 px-3 py-1 rounded-full"><Award size={14} className="mr-2" /> Total Credits: {data.totalCredits}</span>
                                <span className="flex items-center bg-white/10 px-3 py-1 rounded-full"><Book size={14} className="mr-2" /> Total Subjects: {data.subjects.length}</span>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto bg-gray-50/50 p-6 sm:p-8">

                            {/* Stats Section */}
                            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="text-gray-800 font-bold mb-4 flex items-center">
                                        <Layout size={18} className="mr-2 text-indigo-600" /> Credit Distribution
                                    </h3>
                                    <StatBar label="Theory" value={data.stats.theory} max={data.totalCredits} colorClass="bg-blue-500" />
                                    <StatBar label="Practical / Sessional" value={data.stats.practical} max={data.totalCredits} colorClass="bg-green-500" />
                                </div>
                                <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 flex items-center justify-center">
                                    <div className="text-center">
                                        <p className="text-indigo-900 font-medium mb-2">Focus Area</p>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            This semester balances <strong className="text-blue-700">Theory ({data.stats.theory} cr)</strong> foundations with hands-on <strong className="text-green-700">Practical ({data.stats.practical} cr)</strong> experience.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Subjects Grid */}
                            <h3 className="text-gray-800 font-bold mb-4 flex items-center text-lg">
                                <Database size={20} className="mr-2 text-purple-600" /> Detailed Syllabus <span className="ml-2 text-xs font-normal text-gray-500 bg-gray-200 px-2 py-0.5 rounded">Click cards for details</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8">
                                {data.subjects.map((subject, idx) => (
                                    <SubjectCard key={idx} subject={subject} onClick={setSelectedSubject} />
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const YearNode = ({ yearKey, data, activeYear, setActiveYear, setActiveSemester }) => {
    const isActive = activeYear === yearKey;

    return (
        <div className={`relative flex flex-col items-center transition-all duration-500 ${isActive ? 'flex-grow' : 'flex-shrink'}`}>

            {/* Connector Line (Vertical) */}
            {!isActive && <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-8 w-8 h-1 bg-gray-200"></div>}

            {/* Main Year Circle/Card */}
            <button
                onClick={() => setActiveYear(isActive ? null : yearKey)}
                className={`
          relative z-10 w-full md:w-64 p-6 rounded-2xl transition-all duration-300 border-2
          flex flex-col items-center text-center group
          ${isActive
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl scale-105'
                        : 'bg-white border-gray-200 text-gray-600 hover:border-indigo-300 hover:shadow-lg'
                    }
        `}
            >
                <div className={`
          mb-4 p-4 rounded-full transition-colors duration-300
          ${isActive ? 'bg-white/20 text-white' : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100'}
        `}>
                    <GraduationCap size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-1">{data.title}</h2>
                <p className={`text-sm ${isActive ? 'text-indigo-100' : 'text-gray-400'}`}>{data.description}</p>

                <ChevronDown
                    className={`mt-4 transition-transform duration-300 ${isActive ? 'rotate-180 opacity-100' : 'opacity-0 group-hover:opacity-50'}`}
                />
            </button>

            {/* Semesters Expansion Area */}
            <div className={`
        w-full overflow-hidden transition-all duration-500 ease-in-out
        ${isActive ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}
      `}>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch p-2">
                    {Object.entries(data.semesters).map(([semKey, semData]) => (
                        <button
                            key={semKey}
                            onClick={() => setActiveSemester(semData)}
                            className="flex-1 bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 group text-left relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-50 rounded-bl-full -mr-8 -mt-8 group-hover:bg-purple-100 transition-colors"></div>

                            <div className="relative z-10">
                                <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold uppercase rounded mb-2">
                                    {semData.subjects.length} Subjects
                                </span>
                                <h3 className="text-lg font-bold text-gray-800 flex items-center">
                                    {semData.title}
                                    <ChevronRight size={16} className="ml-auto text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                                </h3>
                                <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                                    <span className="flex items-center"><Zap size={12} className="mr-1" /> {semData.totalCredits} Credits</span>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
};

const Home = () => {
    const [activeYear, setActiveYear] = useState(null);
    const [activeSemester, setActiveSemester] = useState(null);
    const [curriculumData, setCurriculumData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { currentUser, userRole, logout } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, "metadata", "curriculum");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setCurriculumData(docSnap.data());
                } else {
                    // Fallback or empty state if no data
                    console.log("No such document!");
                    // Ideally we should have a fallback or initial data here
                }
            } catch (error) {
                console.error("Error getting document:", error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>;
    }

    if (!curriculumData) {
        return <div className="min-h-screen flex items-center justify-center text-gray-500">No curriculum data available. Please contact admin.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">

            {/* Navbar */}
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="bg-indigo-600 p-2 rounded-lg">
                            <Code className="text-white" size={24} />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                            CSE Curriculum
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex text-sm font-medium text-gray-500 mr-4">
                            R25 Regulation • 2025-26 Batch
                        </div>
                        {currentUser ? (
                            <div className="flex items-center space-x-3">
                                {userRole === 'admin' && (
                                    <Link to="/admin" className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800">
                                        <Shield size={16} className="mr-1" /> Admin
                                    </Link>
                                )}
                                <button onClick={logout} className="flex items-center text-sm font-medium text-gray-600 hover:text-red-600">
                                    <LogOut size={16} className="mr-1" /> Logout
                                </button>
                            </div>
                        ) : (
                            <Link to="/login" className="flex items-center text-sm font-medium text-gray-600 hover:text-indigo-600">
                                <LogIn size={16} className="mr-1" /> Login
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative bg-white overflow-hidden border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
                        Your Engineering <span className="text-indigo-600">Journey</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-8">
                        Interactive syllabus breakdown for Computer Science & Engineering.
                        Explore 8 semesters of rigorous academic structure.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <div className="flex items-center text-sm font-semibold text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                            <Terminal size={16} className="mr-2" /> 160+ Credits
                        </div>
                        <div className="flex items-center text-sm font-semibold text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                            <Beaker size={16} className="mr-2" /> 40+ Labs
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline/Infographic Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 items-start relative">

                    {/* Connecting Line (Horizontal for Desktop) */}
                    <div className="hidden lg:block absolute top-[110px] left-32 right-32 h-1 bg-gray-100 -z-10"></div>

                    {Object.entries(curriculumData).map(([yearKey, data]) => (
                        <YearNode
                            key={yearKey}
                            yearKey={yearKey}
                            data={data}
                            activeYear={activeYear}
                            setActiveYear={setActiveYear}
                            setActiveSemester={setActiveSemester}
                        />
                    ))}

                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p>© 2025 CSE Department. All rights reserved.</p>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <p>Based on R25 (B. Tech CSE) Syllabus</p>
                        <p className="text-indigo-400 font-medium mt-1">Made by Biltu Samanta, CSE Student</p>
                    </div>
                </div>
            </footer>

            {/* Modal for Semester Details */}
            {activeSemester && (
                <SemesterView data={activeSemester} onClose={() => setActiveSemester(null)} />
            )}

        </div>
    );
};

export default Home;
