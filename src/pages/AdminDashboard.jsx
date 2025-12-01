import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Save, RefreshCw, AlertTriangle, CheckCircle } from 'lucide-react';

const AdminDashboard = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchCurriculumData();
    }, []);

    const fetchCurriculumData = async () => {
        setLoading(true);
        try {
            const docRef = doc(db, "metadata", "curriculum");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setJsonInput(JSON.stringify(docSnap.data(), null, 2));
            } else {
                setMessage({ type: 'info', text: 'No data found. Please initialize the database.' });
                setJsonInput('{}');
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setMessage({ type: 'error', text: 'Failed to fetch data.' });
        }
        setLoading(false);
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage({ type: '', text: '' });
        try {
            const parsedData = JSON.parse(jsonInput);
            await setDoc(doc(db, "metadata", "curriculum"), parsedData);
            setMessage({ type: 'success', text: 'Curriculum data updated successfully!' });
        } catch (error) {
            console.error("Error saving data:", error);
            if (error instanceof SyntaxError) {
                setMessage({ type: 'error', text: 'Invalid JSON format. Please check your syntax.' });
            } else {
                setMessage({ type: 'error', text: 'Failed to save data to Firestore.' });
            }
        }
        setSaving(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-gray-900 p-6 flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                            <p className="text-gray-400 text-sm">Manage Curriculum Data (JSON Editor)</p>
                        </div>
                        <div className="flex space-x-3">
                            <button
                                onClick={fetchCurriculumData}
                                className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                            >
                                <RefreshCw size={18} className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
                                Refresh
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={saving}
                                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
                            >
                                <Save size={18} className="mr-2" />
                                {saving ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </div>

                    <div className="p-6">
                        {message.text && (
                            <div className={`mb-4 p-4 rounded-lg flex items-center ${message.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' :
                                    message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' :
                                        'bg-blue-50 text-blue-700 border border-blue-200'
                                }`}>
                                {message.type === 'error' ? <AlertTriangle size={20} className="mr-2" /> :
                                    message.type === 'success' ? <CheckCircle size={20} className="mr-2" /> :
                                        <RefreshCw size={20} className="mr-2" />}
                                {message.text}
                            </div>
                        )}

                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Curriculum JSON Data</label>
                            <textarea
                                value={jsonInput}
                                onChange={(e) => setJsonInput(e.target.value)}
                                className="w-full h-[70vh] font-mono text-sm p-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                                spellCheck="false"
                            />
                            <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-white px-2 py-1 rounded border">
                                {jsonInput.length} characters
                            </div>
                        </div>

                        <div className="mt-4 text-sm text-gray-500">
                            <p><strong>Note:</strong> Be careful when editing the JSON structure. Ensure all keys match the expected schema used by the frontend.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
