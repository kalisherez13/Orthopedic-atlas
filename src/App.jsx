import React, { useState, useMemo, useEffect } from 'react';
import { X, ChevronRight, BookOpen, AlertCircle, ArrowLeft, Search, Info, Home, Youtube, Image as ImageIcon, ExternalLink, RotateCw, Stethoscope, Sparkles, ListChecks, AlertTriangle, Siren, Phone, Star, Bookmark, ClipboardList, GitCompare, FileText, Activity, Layers, Calculator, CheckCircle2, XCircle, Target, ClipboardCheck, BarChart3, Brain, Zap, Users, UserPlus, Calendar, Trash2, Edit, Plus } from 'lucide-react';

// ========== טופס מטופל ==========
function PatientForm({ initialData, onSubmit, onCancel, isEdit }) {
  const [formData, setFormData] = useState({
    firstName: initialData?.firstName || '',
    lastName: initialData?.lastName || '',
    age: initialData?.age || '',
    gender: initialData?.gender || '',
    occupation: initialData?.occupation || '',
    startDate: initialData?.startDate || new Date().toISOString().split('T')[0],
    mainComplaint: initialData?.mainComplaint || '',
    mainRegion: initialData?.mainRegion || '',
    diagnosis: initialData?.diagnosis || '',
    history: initialData?.history || '',
    goals: initialData?.goals || ''
  });

  const handleSubmit = () => {
    if (!formData.firstName.trim()) {
      alert('יש להזין שם פרטי');
      return;
    }
    onSubmit(formData);
  };

  const update = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  return (
    <div className="space-y-3">
      <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 mb-3">
        <p className="text-[11px] text-amber-800">
          <strong>⚠️ תזכורת:</strong> אנא הימנע מהזנת פרטים מזהים אמיתיים (כינויים בלבד). הנתונים נשמרים רק לסשן הנוכחי.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-xs font-bold text-slate-700 mb-1 block">שם פרטי / כינוי *</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => update('firstName', e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            placeholder="י.ל. / מטופל 1"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-700 mb-1 block">שם משפחה</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => update('lastName', e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="text-xs font-bold text-slate-700 mb-1 block">גיל</label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) => update('age', e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-700 mb-1 block">מין</label>
          <select
            value={formData.gender}
            onChange={(e) => update('gender', e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          >
            <option value="">בחר</option>
            <option value="זכר">זכר</option>
            <option value="נקבה">נקבה</option>
            <option value="אחר">אחר</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-700 mb-1 block">תאריך התחלה</label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) => update('startDate', e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-bold text-slate-700 mb-1 block">מקצוע / היפעלות</label>
        <input
          type="text"
          value={formData.occupation}
          onChange={(e) => update('occupation', e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          placeholder="לדוגמה: מורה, ספורטאי, פנסיונר"
        />
      </div>

      <div>
        <label className="text-xs font-bold text-slate-700 mb-1 block">אזור פציעה ראשי</label>
        <select
          value={formData.mainRegion}
          onChange={(e) => update('mainRegion', e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent"
        >
          <option value="">בחר אזור</option>
          <option value="כתף">כתף</option>
          <option value="מרפק">מרפק</option>
          <option value="שורש כף יד">שורש כף יד</option>
          <option value="צוואר">צוואר</option>
          <option value="גב מותני">גב מותני</option>
          <option value="ירך">ירך</option>
          <option value="ברך">ברך</option>
          <option value="קרסול וכף רגל">קרסול וכף רגל</option>
          <option value="לסת (TMJ)">לסת (TMJ)</option>
          <option value="אחר">אחר</option>
        </select>
      </div>

      <div>
        <label className="text-xs font-bold text-slate-700 mb-1 block">אבחנה</label>
        <input
          type="text"
          value={formData.diagnosis}
          onChange={(e) => update('diagnosis', e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          placeholder="לדוגמה: Subacromial Impingement"
        />
      </div>

      <div>
        <label className="text-xs font-bold text-slate-700 mb-1 block">תלונה ראשית</label>
        <textarea
          value={formData.mainComplaint}
          onChange={(e) => update('mainComplaint', e.target.value)}
          rows="2"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
          placeholder="תיאור התלונה - מתי התחיל, מה מחמיר, מה מקל..."
        />
      </div>

      <div>
        <label className="text-xs font-bold text-slate-700 mb-1 block">רקע רפואי / היסטוריה</label>
        <textarea
          value={formData.history}
          onChange={(e) => update('history', e.target.value)}
          rows="2"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
          placeholder="פציעות קודמות, מחלות, תרופות, ניתוחים..."
        />
      </div>

      <div>
        <label className="text-xs font-bold text-slate-700 mb-1 block">מטרות הטיפול</label>
        <textarea
          value={formData.goals}
          onChange={(e) => update('goals', e.target.value)}
          rows="2"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
          placeholder="מה המטופל רוצה להשיג? חזרה לספורט, הקלת כאב..."
        />
      </div>

      <div className="grid grid-cols-2 gap-2 pt-3">
        <button
          onClick={onCancel}
          className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-all"
        >
          ביטול
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-3 bg-gradient-to-l from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-xl font-bold transition-all"
        >
          {isEdit ? '✓ שמור שינויים' : '✓ צור כרטיס'}
        </button>
      </div>
    </div>
  );
}

// ========== טופס ביקור ==========
function VisitForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    painLevel: '',
    outcomeMeasure: '',
    outcomeScore: '',
    subjective: '',
    objective: '',
    assessment: '',
    plan: ''
  });

  const update = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  return (
    <div className="space-y-3">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
        <p className="text-[11px] text-blue-800">
          📝 <strong>SOAP Notes</strong> - השיטה הסטנדרטית לתיעוד ביקורים: Subjective, Objective, Assessment, Plan
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-xs font-bold text-slate-700 mb-1 block">תאריך ביקור</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => update('date', e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-700 mb-1 block">רמת כאב (VAS 0-10)</label>
          <input
            type="number"
            min="0"
            max="10"
            value={formData.painLevel}
            onChange={(e) => update('painLevel', e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            placeholder="0-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-xs font-bold text-slate-700 mb-1 block">שאלון</label>
          <select
            value={formData.outcomeMeasure}
            onChange={(e) => update('outcomeMeasure', e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
          >
            <option value="">ללא</option>
            <option value="NDI">NDI - צוואר</option>
            <option value="ODI">ODI - גב מותני</option>
            <option value="QuickDASH">QuickDASH - גף עליון</option>
            <option value="KOOS-PS">KOOS-PS - ברך</option>
            <option value="HOOS-PS">HOOS-PS - ירך</option>
            <option value="FAAM">FAAM - קרסול</option>
            <option value="PSFS">PSFS - תפקודי</option>
            <option value="GROC">GROC - שינוי כללי</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-700 mb-1 block">ציון השאלון</label>
          <input
            type="text"
            value={formData.outcomeScore}
            onChange={(e) => update('outcomeScore', e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            placeholder="לדוגמה: 24%"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-bold text-blue-700 mb-1 block">📝 S - סובייקטיבי (Subjective)</label>
        <textarea
          value={formData.subjective}
          onChange={(e) => update('subjective', e.target.value)}
          rows="2"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-none"
          placeholder="מה המטופל מדווח? כאב, מגבלות, שינויים מהפעם הקודמת..."
        />
      </div>

      <div>
        <label className="text-xs font-bold text-emerald-700 mb-1 block">🔬 O - אובייקטיבי (Objective)</label>
        <textarea
          value={formData.objective}
          onChange={(e) => update('objective', e.target.value)}
          rows="2"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-none"
          placeholder="ROM, כוח, בדיקות מיוחדות, ממצאים נוירולוגיים..."
        />
      </div>

      <div>
        <label className="text-xs font-bold text-amber-700 mb-1 block">🎯 A - הערכה (Assessment)</label>
        <textarea
          value={formData.assessment}
          onChange={(e) => update('assessment', e.target.value)}
          rows="2"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-none"
          placeholder="פרשנות הממצאים, התקדמות מהביקור הקודם, אבחנה..."
        />
      </div>

      <div>
        <label className="text-xs font-bold text-purple-700 mb-1 block">📋 P - תכנית (Plan)</label>
        <textarea
          value={formData.plan}
          onChange={(e) => update('plan', e.target.value)}
          rows="2"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-none"
          placeholder="טיפול שניתן, תרגילים שנתת, ביקור הבא..."
        />
      </div>

      <div className="grid grid-cols-2 gap-2 pt-3">
        <button
          onClick={onCancel}
          className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-all"
        >
          ביטול
        </button>
        <button
          onClick={() => onSubmit(formData)}
          className="px-4 py-3 bg-gradient-to-l from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-xl font-bold transition-all"
        >
          ✓ שמור ביקור
        </button>
      </div>
    </div>
  );
}

// ========== מסך כניסה ==========
const APP_PASSWORD = 'orthoerez555';
const STORAGE_KEY = 'orthopedic_atlas_auth';

function LoginScreen({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (password === APP_PASSWORD) {
      try {
        localStorage.setItem(STORAGE_KEY, 'true');
      } catch (err) {
        // localStorage לא זמין - לא נורא, פשוט נמשיך
      }
      onLogin();
    } else {
      setError('סיסמה שגויה. נסה שוב.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 flex items-center justify-center p-4" dir="rtl" style={{ fontFamily: 'Heebo, Assistant, sans-serif' }}>
      <div className="w-full max-w-md">
        {/* כרטיס כניסה */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header עם גרדיאנט */}
          <div className="bg-gradient-to-l from-cyan-500 via-blue-600 to-indigo-700 px-6 py-8 text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 text-5xl">
              🩺
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white mb-1">
              אטלס קליני אורתופדי
            </h1>
            <p className="text-white/90 text-sm">
              Orthopedic Clinical Atlas
            </p>
          </div>

          {/* תוכן */}
          <div className="p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                🔒 גישה מוגבלת
              </div>
              <h2 className="text-lg font-bold text-slate-800 mb-1">ברוך הבא!</h2>
              <p className="text-sm text-slate-600">
                הזן סיסמה כדי להיכנס לאפליקציה
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block">
                  סיסמה
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSubmit();
                    }}
                    placeholder="הזן סיסמה..."
                    autoFocus
                    className="w-full px-4 py-3 pr-4 pl-12 border-2 border-slate-200 rounded-xl text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors text-lg"
                    title={showPassword ? 'הסתר סיסמה' : 'הצג סיסמה'}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                {error && (
                  <p className="text-xs text-red-600 mt-2 flex items-center gap-1">
                    <span>⚠️</span> {error}
                  </p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={!password}
                className="w-full px-4 py-3.5 bg-gradient-to-l from-cyan-500 via-blue-600 to-indigo-700 hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-800 disabled:from-slate-300 disabled:via-slate-400 disabled:to-slate-500 text-white rounded-xl font-bold text-base transition-all active:scale-[0.98] shadow-lg disabled:cursor-not-allowed"
              >
                כניסה למערכת ←
              </button>

              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  💡 <strong>זכור אותי:</strong> אחרי כניסה ראשונה, המערכת תזכור אותך במכשיר הזה ולא תצטרך להתחבר שוב.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-slate-50 px-6 py-4 text-center border-t border-slate-100">
            <p className="text-[11px] text-slate-500">
              גרסה 29 · מקיף · 91 פתולוגיות · 23 קלאסטרים
            </p>
          </div>
        </div>

        {/* הצהרה */}
        <p className="text-center text-white/60 text-[11px] mt-4 px-4 leading-relaxed">
          האפליקציה מיועדת ללימוד והכשרה בלבד. אינה תחליף לייעוץ רפואי מקצועי.
        </p>
      </div>
    </div>
  );
}

// ========== עוטף האפליקציה הראשית עם בקרת כניסה ==========
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    // בדיקה אם יש כניסה שמורה
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'true') {
        setIsAuthenticated(true);
      }
    } catch (err) {
      // localStorage לא זמין
    }
    setIsCheckingAuth(false);
  }, []);

  // מסך טעינה קצר
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <div className="text-6xl mb-3 animate-pulse">🩺</div>
          <p className="text-white/80 text-sm">טוען...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  return <OrthopedicAtlas onLogout={() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {}
    setIsAuthenticated(false);
  }} />;
}

function OrthopedicAtlas({ onLogout }) {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedPathology, setSelectedPathology] = useState(null);
  const [selectedTest, setSelectedTest] = useState(null);
  const [view, setView] = useState('anterior');
  const [searchQuery, setSearchQuery] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [showSymptomSearch, setShowSymptomSearch] = useState(false);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [symptomTextQuery, setSymptomTextQuery] = useState('');
  const [showRedFlags, setShowRedFlags] = useState(false);
  const [showTreatment, setShowTreatment] = useState(false);
  const [treatmentStage, setTreatmentStage] = useState('acute');
  const [favoritePathologies, setFavoritePathologies] = useState([]);
  const [favoriteTests, setFavoriteTests] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showAnamnesis, setShowAnamnesis] = useState(false);
  const [anamnesisAnswers, setAnamnesisAnswers] = useState({});
  const [showDifferential, setShowDifferential] = useState(false);
  const [selectedDifferential, setSelectedDifferential] = useState(null);
  const [showClusters, setShowClusters] = useState(false);
  const [selectedCluster, setSelectedCluster] = useState(null);
  const [clusterResults, setClusterResults] = useState({});
  const [pretestProb, setPretestProb] = useState(50);
  const [selectedSubLocation, setSelectedSubLocation] = useState(null);
  const [showOutcomeMeasures, setShowOutcomeMeasures] = useState(false);
  const [selectedOutcomeMeasure, setSelectedOutcomeMeasure] = useState(null);
  const [outcomeAnswers, setOutcomeAnswers] = useState({});
  const [showNeuroExam, setShowNeuroExam] = useState(false);
  const [selectedNeuroSection, setSelectedNeuroSection] = useState(null);
  const [neuroFindings, setNeuroFindings] = useState({});
  const [selectedDermatome, setSelectedDermatome] = useState(null);
  const [dermatomeView, setDermatomeView] = useState('anterior');
  const [showPatients, setShowPatients] = useState(false);
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [editingPatient, setEditingPatient] = useState(false);
  const [showNewVisit, setShowNewVisit] = useState(false);
  const [showNewPatientForm, setShowNewPatientForm] = useState(false);
  const [showAnatomy, setShowAnatomy] = useState(false);
  const [selectedAnatomyRegion, setSelectedAnatomyRegion] = useState(null);
  const [anatomyTab, setAnatomyTab] = useState('structures');

  // גלילה לראש העמוד בכל ניווט - חיוני לחוויית משתמש טובה
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedRegion, selectedPathology, selectedTest, showSymptomSearch, showRedFlags, showTreatment, showInfo]);

  // ========== מאגר נתונים מקיף ==========
  const regionsData = {
    shoulder: {
      name: 'כתף',
      nameEn: 'Shoulder',
      pathologies: [
        {
          name: 'תסמונת היצרות תת-אקרומיאלית',
          nameEn: 'Subacromial Impingement Syndrome',
          shortDesc: 'דחיסה של גידי שרוול המסובבים במרחב התת-אקרומיאלי',
          fullDescription: 'תסמונת אורתופדית נפוצה הנגרמת מדחיסה של גידי שרוול המסובבים (בעיקר Supraspinatus) והבורסה התת-אקרומיאלית בין ראש ההומרוס לאקרומיון. מסווגת לפי Neer ל-3 שלבים: שלב 1 (בצקת ודימום, גיל <25), שלב 2 (פיברוזיס וטנדוניטיס, גיל 25-40), שלב 3 (קרעי גידים, גיל >40). גורמי סיכון: צורת אקרומיון "חזק" (Type III), חולשה של מייצבי השכמה, פעילויות מעל הראש.',
          clinicalSigns: 'כאב לטרלי בכתף, מחמיר בהרמת היד מעל הראש (Painful arc), כאב לילי בעת שכיבה על הצד הפגוע, הגבלה תפקודית בפעולות יומיומיות.',
          tests: [
            { name: 'מבחן Neer', nameEn: 'Neer Impingement Test', performance: 'המטופל בישיבה. הבודק עומד מאחור, מקבע את עצם השכמה ביד אחת ובאמצעות היד השנייה מבצע פלקסיה פסיבית מקסימלית של הזרוע במישור הסקפולרי, תוך רוטציה פנימית. התנועה דוחסת את הסופרהספינטוס בין ראש ההומרוס לאקרומיון הקדמי.', positive: 'כאב בקצה הטווח של הפלקסיה מעיד על תוצאה חיובית, נובע מדחיסה של הגידים המודלקים.', sn: '78%', sp: '58%' },
            { name: 'מבחן Hawkins-Kennedy', nameEn: 'Hawkins-Kennedy Test', performance: 'המטופל בישיבה. הבודק מביא את הזרוע לפלקסיה של 90° במישור הסקפולרי, המרפק כפוף 90°. הבודק תומך במרפק ביד אחת ומבצע ביד השנייה רוטציה פנימית פסיבית של הזרוע, תוך כדי איתות לאינפראספינטוס.', positive: 'כאב במהלך הרוטציה הפנימית, בעיקר בקצה הטווח, מעיד על דחיסה של הסופרהספינטוס מתחת לליגמנט הקורקואקרומיאלי.', sn: '79%', sp: '59%' },
            { name: 'Painful Arc', nameEn: 'Painful Arc Test', performance: 'המטופל בעמידה. הבודק מבקש לבצע אבדוקציה פעילה מלאה של הזרוע במישור הקורונלי - מ-0° עד 180° - באטיות מבוקרת.', positive: 'כאב המופיע בטווח 60°-120° ונעלם מעבר אליו - מעיד על מעבר הגיד הסופרהספינטוס מתחת לאקרומיון. כאב מעל 120° מעיד יותר על AC joint.', sn: '74%', sp: '81%' },
            { name: 'Empty Can / Jobe', nameEn: 'Empty Can Test', performance: 'בעמידה, הזרוע באבדוקציה 90°, פלקסיה אופקית 30° במישור הסקפולרי, ורוטציה פנימית מלאה (אגודל כלפי מטה כאילו רוקן פחית). הבודק מפעיל לחץ כלפי מטה על הזרוע, המטופל מתנגד.', positive: 'חולשה משמעותית בהשוואה לצד הנגדי או כאב באזור הסופרהספינטוס מעיד על פגיעה.', sn: '69%', sp: '62%' },
            { name: 'Drop Arm Test', nameEn: 'Drop Arm Test', performance: 'בעמידה. הבודק מרים פסיבית את הזרוע לאבדוקציה של 90° ומבקש מהמטופל להוריד את היד באטיות מבוקרת חזרה לצד הגוף.', positive: 'נפילה פתאומית של היד או חוסר יכולת לבצע הורדה מבוקרת מעידה על קרע גדול בשרוול המסובבים, במיוחד בסופרהספינטוס.', sn: '27%', sp: '88%' }
          ]
        },
        {
          name: 'קרע בשרוול המסובבים',
          nameEn: 'Rotator Cuff Tear',
          shortDesc: 'קרע באחד מארבעת השרירים של שרוול המסובבים',
          fullDescription: 'שרוול המסובבים מורכב מארבעה שרירים: Supraspinatus, Infraspinatus, Teres Minor ו-Subscapularis, שמייצבים את ראש ההומרוס בגלנואיד. הסופרהספינטוס הוא הנפוץ ביותר לקרעים. הקרעים מסווגים ל-Partial-thickness או Full-thickness. גורמים: גיל מבוגר (דגנרציה), חבלה אקוטית, אימפינג\'מנט כרוני. שכיחות עולה משמעותית מעל גיל 60.',
          clinicalSigns: 'כאב לטרלי בכתף עם חולשה משמעותית, ירידה ביכולת התפקודית, קושי בהרמת חפצים, אטרופיה של שרירי הסופר/אינפראספינטוס בקרעים גדולים.',
          tests: [
            { name: 'External Rotation Lag Sign', nameEn: 'ERLS', performance: 'המטופל בישיבה. הבודק מקרב את המרפק לגוף, מכופף 90°, ומסובב את הזרוע לרוטציה חיצונית מקסימלית פסיבית. הבודק משחרר את היד ומבקש מהמטופל לשמור על המנח.', positive: 'אם היד נופלת לרוטציה פנימית (>5°) - חיובי. מצביע על קרע מלא בסופרהספינטוס/אינפראספינטוס.', sn: '70%', sp: '90%' },
            { name: 'Lift-off / IRLS', nameEn: 'Internal Rotation Lag Sign', performance: 'המטופל מניח את גב היד על הגב התחתון. הבודק מרים פסיבית את היד מהגב כ-5-10 ס"מ ומבקש מהמטופל לשמור על המנח.', positive: 'חוסר יכולת לשמור על המנח (היד נופלת חזרה אל הגב) - חיובי לקרע ב-Subscapularis.', sn: '62%', sp: '100%' },
            { name: 'Belly Press Test', nameEn: 'Belly Press', performance: 'המטופל מניח את כף היד על הבטן ודוחק כנגד הבטן. שורש כף היד נשאר ישר, המרפק מקדימה.', positive: 'אם המרפק נופל לאחור או שורש כף היד נכנס לפלקסיה, או חוסר יכולת לדחוף - חיובי לפגיעה ב-Subscapularis העליון.', sn: '40%', sp: '98%' },
            { name: 'Drop Arm Test', nameEn: 'Drop Arm', performance: 'הבודק מרים פסיבית את הזרוע לאבדוקציה של 90° ומבקש מהמטופל להוריד באיטיות.', positive: 'היד נופלת או חוסר יכולת לשליטה - מעיד על קרע גדול.', sn: '27%', sp: '88%' },
            { name: 'Hornblower Sign', nameEn: 'Hornblower\'s Sign', performance: 'הבודק מביא את הזרוע לאבדוקציה 90° במישור הסקפולרי ופלקסיה של 90° במרפק. מבקש מהמטופל לבצע רוטציה חיצונית כנגד התנגדות.', positive: 'חוסר יכולת לשמור על המנח (היד נופלת לרוטציה פנימית) - חיובי לקרע ב-Teres Minor.', sn: '100%', sp: '93%' },
            { name: 'Empty Can', nameEn: 'Empty Can / Jobe', performance: 'אבדוקציה 90°, פלקסיה אופקית 30°, רוטציה פנימית מלאה. לחץ כלפי מטה כנגד התנגדות.', positive: 'חולשה או כאב - מעיד על פגיעה ב-Supraspinatus.', sn: '69%', sp: '62%' }
          ]
        },
        {
          name: 'אי יציבות כתף קדמית',
          nameEn: 'Anterior Shoulder Instability',
          shortDesc: 'תזוזה לא תקינה של ראש ההומרוס קדימה מהגלנואיד',
          fullDescription: 'אי יציבות הכתף הקדמית היא הצורה הנפוצה ביותר של אי יציבות (95% מהמקרים). מתפתחת לרוב לאחר נקע ראשוני (לרוב במנח אבדוקציה + רוטציה חיצונית), שגורם לקרע בלברום הקדמי-תחתון (Bankart lesion) ולעיתים לפגיעה בקופסית או בעצם (Hill-Sachs). שכיחות גבוהה במיוחד בצעירים מתחת לגיל 25.',
          clinicalSigns: 'אנמנזה של נקיעות חוזרות, תחושת "אי-יציבות" או "פחד" במצבי אבדוקציה+רוטציה חיצונית, כאב בעת זריקות או הרמה מעל הראש.',
          tests: [
            { name: 'Apprehension Test', nameEn: 'Anterior Apprehension', performance: 'המטופל בשכיבה על הגב על קצה המיטה. הבודק מביא את הזרוע לאבדוקציה של 90° ומרפק 90°. הבודק מסובב באיטיות לרוטציה חיצונית מקסימלית, תוך הפעלת לחץ קדמי על ראש ההומרוס.', positive: 'תחושת חשש או הימנעות (לאו דווקא כאב!) מהמטופל המבקש להפסיק - חיובי. הכאב לבדו פחות ספציפי.', sn: '72%', sp: '96%' },
            { name: 'Relocation Test', nameEn: 'Jobe Relocation', performance: 'מבוצע מיד לאחר Apprehension חיובי, באותו מנח (אבדוקציה 90°, רוטציה חיצונית מקסימלית). הבודק מחליף ידיים ומפעיל לחץ אחורי על ראש ההומרוס, מאפשר רוטציה חיצונית נוספת.', positive: 'הקלה משמעותית בתחושת החשש או בכאב - מאששת את האבחנה של אי יציבות קדמית.', sn: '81%', sp: '92%' },
            { name: 'Surprise / Release Test', nameEn: 'Anterior Release', performance: 'מבוצע מיד לאחר Relocation - הבודק משחרר פתאומית את הלחץ האחורי, ראש ההומרוס "קופץ" קדימה.', positive: 'חזרה פתאומית של תחושת החשש או של הכאב - הבדיקה הספציפית ביותר לאי יציבות קדמית.', sn: '64%', sp: '99%' },
            { name: 'Load and Shift', nameEn: 'Load and Shift', performance: 'המטופל בישיבה או שכיבה. הבודק מקבע את השכמה ביד אחת ובשנייה אוחז בראש ההומרוס - מפעיל "טעינה" קלה אקסיאלית ואז מנסה להזיז קדימה ואחורה.', positive: 'תזוזה מוגברת בהשוואה לצד הנגדי. מסווג: Grade I (עד שפת הגלנואיד), Grade II (מעל השפה - subluxation), Grade III (נקיעה מלאה).', sn: '50%', sp: '90%' }
          ]
        },
        {
          name: 'פגיעה בלברום (SLAP)',
          nameEn: 'SLAP Lesion',
          shortDesc: 'קרע בלברום העליון - Superior Labrum Anterior to Posterior',
          fullDescription: 'פגיעה בלברום העליון של הגלנואיד באזור היאחזות גיד הביצפס הארוך. סווגה ע"י Snyder ל-4 טיפוסים, מאז הורחבה ל-10 טיפוסים. נפוצה במיוחד באתלטים של ספורט מעל הראש (זורקים), עקב מנגנון "peel-back" של הגיד באבדוקציה+רוטציה חיצונית קיצונית.',
          clinicalSigns: 'כאב עמוק בכתף, "קליקים" או תחושת "תפיסה", ירידה בביצועי זריקה, כאב במנח אבדוקציה ורוטציה חיצונית.',
          tests: [
            { name: "O'Brien Test", nameEn: 'Active Compression Test', performance: 'בעמידה. הזרוע בפלקסיה 90°, אדוקציה אופקית של 10°-15°, ורוטציה פנימית מלאה (אגודל למטה). המטופל מתנגד ללחץ כלפי מטה. חוזרים על הבדיקה עם סופינציה (אגודל למעלה).', positive: 'כאב עמוק בתוך הכתף בתנוחת אגודל למטה שמשתפר/נעלם בתנוחת אגודל למעלה - חיובי ל-SLAP. כאב על AC joint - לפגיעה אקרומיוקלביקולרית.', sn: '67%', sp: '37%' },
            { name: 'Biceps Load II', nameEn: 'Biceps Load II Test', performance: 'בשכיבה. הבודק מביא את הזרוע לאבדוקציה 120°, רוטציה חיצונית מקסימלית, מרפק 90° בסופינציה. מבקש מהמטופל לבצע פלקסיה במרפק כנגד התנגדות.', positive: 'כאב או החמרת כאב בכתף בעת הפעלת ביצפס - מעיד על SLAP.', sn: '90%', sp: '97%' },
            { name: 'Crank Test', nameEn: 'Crank Test', performance: 'בישיבה או שכיבה. הזרוע באבדוקציה 160° במישור הסקפולרי. הבודק מפעיל לחץ ציר על המרפק לאורך ההומרוס + רוטציה פנימית/חיצונית.', positive: 'כאב עמוק או "קליק" בעת הסיבוב - חיובי ל-SLAP.', sn: '46%', sp: '56%' }
          ]
        },
        {
          name: 'כתף קפואה',
          nameEn: 'Adhesive Capsulitis',
          shortDesc: 'הסתיידות והצטמקות הקופסית המפרקית',
          fullDescription: 'מצב המאופיין באובדן תנועה הדרגתי הן פעיל והן פסיבי בכתף, עקב דלקת כרונית והצטמקות של הקופסית המפרקית. שלושה שלבים קלאסיים: 1) שלב הקפיאה (Freezing) - 6 שבועות עד 9 חודשים, כאב חזק. 2) שלב הקפוא (Frozen) - 4-12 חודשים, ירידה בכאב אך הגבלת תנועה משמעותית. 3) שלב הפשרה (Thawing) - 5-26 חודשים, חזרה הדרגתית של התנועה. גורמי סיכון: סוכרת (5x), היפותירואידיזם, גיל 40-60, נשים.',
          clinicalSigns: 'הגבלה של תנועה פסיבית באותו טווח כמו פעיל, "Capsular pattern" - הגבלה של רוטציה חיצונית > אבדוקציה > רוטציה פנימית.',
          tests: [
            { name: 'הגבלת ROM פסיבי', nameEn: 'Passive ROM Loss', performance: 'מדידה השוואתית של טווחי תנועה פסיביים בין שתי הכתפיים. בודקים בעיקר רוטציה חיצונית בצד (מרפק לגוף) ואבדוקציה.', positive: 'הגבלה של >50% ברוטציה חיצונית פסיבית בהשוואה לצד הנגדי, או היעדר רוטציה חיצונית מעבר ל-0° - תוצאה חיובית קלאסית.', sn: '90%', sp: '95%' },
            { name: 'Coracoid Pain Test', nameEn: 'Coracoid Pain Test', performance: 'הבודק לוחץ עם אגודל על תהליך הקורקויד.', positive: 'כאב עז בקורקויד שמשמעותית חזק יותר מבמיקומים אחרים בכתף - חיובי לקפיאה.', sn: '96%', sp: '89%' },
            { name: 'Cross Body Adduction', nameEn: 'Cross Body Adduction', performance: 'הבודק מבצע אדוקציה אופקית פסיבית מלאה של הזרוע מעבר לחזה.', positive: 'הגבלה משמעותית והופעת כאב - חיובי.', sn: '70%', sp: '60%' }
          ]
        },
        {
          name: 'דלקת גיד הביצפס',
          nameEn: 'Bicipital Tendinopathy',
          shortDesc: 'דלקת/טנדינופתיה של הראש הארוך של הביצפס במחורץ הביצפיטלי',
          fullDescription: 'הראש הארוך של הביצפס (LHB) עובר דרך מחורץ הביצפיטלי בין שני הטוברקלים של ההומרוס, ויוצא מהמפרק הגלנוהומרלי. דלקת/טנדינופתיה שלו נפוצה ולעיתים נלווית לפתולוגיות אחרות של הכתף (אימפינג\'מנט, קרעי שרוול, SLAP). יכולה להוביל לסופינציה הפעולה הסופית - קרע ספונטני של LHB ("Popeye sign").',
          clinicalSigns: 'כאב בקדמת הכתף, רגישות במישוש על המחורץ הביצפיטלי, כאב מקרין למעלה ולמטה לאורך הביצפס.',
          tests: [
            { name: 'Speed Test', nameEn: "Speed's Test", performance: 'בעמידה. המרפק מיושר, האמה בסופינציה, הזרוע בפלקסיה של 90°. הבודק מפעיל לחץ כלפי מטה על האמה, המטופל מתנגד.', positive: 'כאב במחורץ הביצפיטלי בקדמת הכתף - חיובי.', sn: '32%', sp: '75%' },
            { name: 'Yergason Test', nameEn: "Yergason's Test", performance: 'בישיבה. המרפק כפוף 90° לצד הגוף, האמה בפרונציה. המטופל מבקש לבצע סופינציה כנגד התנגדות הבודק.', positive: 'כאב במחורץ הביצפיטלי - חיובי. ניתן גם להרגיש סובלוקסציה של הגיד מהמחורץ.', sn: '32%', sp: '78%' },
            { name: 'Ludington Test', nameEn: 'Ludington Test', performance: 'המטופל מניח את שתי הידיים על הראש, האצבעות שלובות. הבודק מבקש לכווץ ולשחרר את הביצפס לסירוגין.', positive: 'כאב בביצפס או היעדר כיווץ נראה (כשיש קרע מלא של LHB) - חיובי.', sn: '50%', sp: '75%' }
          ]
        },
        {
          name: 'הפרדה אקרומיוקלביקולרית',
          nameEn: 'AC Joint Sprain / Separation',
          shortDesc: 'פגיעה במפרק האקרומיוקלביקולרי',
          fullDescription: 'פגיעה במפרק AC, לרוב מנפילה ישירה על הכתף. מסווגת לפי Rockwood ל-6 דרגות (I-VI), בהתאם לרמת הפגיעה ברצועות AC, CC, ושרירים. דרגות I-II - שמרני. דרגה III - שנוי במחלוקת. דרגות IV-VI - ניתוחי.',
          clinicalSigns: 'רגישות מקומית במפרק AC, "מדרגה" נראית בדרגות חמורות, כאב באדוקציה אופקית.',
          tests: [
            { name: 'Cross Body Adduction', nameEn: 'Cross Arm Test', performance: 'בעמידה או ישיבה. הזרוע בפלקסיה 90°. הבודק מבצע אדוקציה אופקית פסיבית מלאה - מביא את היד מעבר לחזה.', positive: 'כאב מקומי במפרק AC (לא עמוק בתוך הכתף) - חיובי.', sn: '77%', sp: '79%' },
            { name: 'Paxinos Sign', nameEn: 'Paxinos Test', performance: 'הבודק עומד מאחורי המטופל היושב. מניח את האגודל מתחת לאספקט הפוסטרולטרלי של האקרומיון, ואצבעות על הקלביקולה הדיסטלית. דוחק עם האגודל קדימה ועם האצבעות אחורה.', positive: 'הופעה או החמרה של כאב במפרק AC - חיובי.', sn: '79%', sp: '50%' },
            { name: "O'Brien Test", nameEn: 'Active Compression', performance: 'פלקסיה 90°, אדוקציה אופקית 10°-15°, רוטציה פנימית מלאה. לחץ כלפי מטה כנגד התנגדות.', positive: 'כאב על המפרק AC (לא עמוק בכתף) - חיובי לפגיעה ב-AC.', sn: '41%', sp: '95%' }
          ]
        },
        {
          name: 'אי יציבות כתף אחורית',
          nameEn: 'Posterior Shoulder Instability',
          shortDesc: 'תזוזה לא תקינה של ראש ההומרוס לאחור',
          fullDescription: 'נדירה יותר מאי יציבות קדמית - מהווה רק 2%-10% ממקרי האי יציבות. מכניזם נפוץ: דחיפה אחורה על זרוע באבדוקציה ופלקסיה (תאונת רכב, נוקאאוט בכבוד), פרכוסים. מתפתחת לעיתים קרובות באתלטים שמבצעים תנועות אחוריות חוזרות (שחקני פוטבול אמריקאי, מטילי מתת).',
          clinicalSigns: 'כאב באחורי הכתף, "תחושת נתינה" בעת לחיצה / push-up, חולשה.',
          tests: [
            { name: 'Posterior Apprehension', nameEn: 'Jerk Test', performance: 'המטופל בישיבה. הזרוע בפלקסיה 90°, אבדוקציה אופקית, רוטציה פנימית. הבודק מפעיל לחץ אקסיאלי לאורך ההומרוס תוך אדוקציה אופקית.', positive: 'כאב או "קליק" אחורי + אצל המטופל מהוסס - חיובי.', sn: '73%', sp: '98%' },
            { name: 'Kim Test', nameEn: 'Kim Test', performance: 'אבדוקציה 90°, הבודק מחזיק את המרפק, הרמה אקסיאלית קלה. אז דחיפה כלפי מטה ולמטה-אחורה של הזרוע.', positive: 'כאב חד אחורי - חיובי לפגיעת לברום אחורי.', sn: '80%', sp: '94%' },
            { name: 'Posterior Drawer', nameEn: 'Posterior Load and Shift', performance: 'בשכיבה. הבודק מקבע את השכמה ביד אחת ובשנייה אוחז בראש ההומרוס - מנסה להזיז אחורה.', positive: 'תזוזה אחורית מוגברת בהשוואה לצד הנגדי.', sn: '50%', sp: '90%' }
          ]
        },
        {
          name: 'דלקת גידים מסויידת',
          nameEn: 'Calcific Tendinitis',
          shortDesc: 'הצטברות סידן בגידי שרוול המסובבים',
          fullDescription: 'הצטברות סידן (קלציום הידרוקסיאפטיט) בגידי שרוול המסובבים - בעיקר ב-Supraspinatus. נפוצה בנשים בגיל 30-50. שלושה שלבים: 1) Pre-calcific (לעיתים אסימפטומטי), 2) Calcific (formative + resorptive - שלב הכאב הקיצוני), 3) Post-calcific (החלמה ספונטנית). בשלב Resorptive - הכאב יכול להיות עז ביותר.',
          clinicalSigns: 'כאב פתאומי וחזק בכתף, ROM מאוד מוגבל בעקבות כאב, רגישות חזקה במישוש מתחת לאקרומיון. הדמיה - הסתיידות גלויה בצילום.',
          tests: [
            { name: 'Hawkins-Kennedy', nameEn: 'Hawkins-Kennedy', performance: 'פלקסיה 90° + רוטציה פנימית.', positive: 'כאב חד - חיובי לאימפינג\'מנט (לפעמים פתח לאבחון של calcific).', sn: '79%', sp: '59%' },
            { name: 'Painful Arc', nameEn: 'Painful Arc', performance: 'אבדוקציה פעילה.', positive: 'כאב ב-60°-120°. בהסתיידות הכאב לרוב חזק יותר ובלתי נסבל.', sn: '74%', sp: '81%' },
            { name: 'מישוש מתחת לאקרומיון', nameEn: 'Subacromial Palpation', performance: 'מישוש מתחת לאקרומיון תוך תנועה של הזרוע.', positive: 'רגישות חדה מאוד - מעורר חשד גם בלי הדמיה.', sn: '85%', sp: '60%' }
          ]
        },
        {
          name: 'קרע ראש ארוך של הביצפס',
          nameEn: 'Long Head Biceps Rupture',
          shortDesc: 'קרע בגיד הביצפס הראש הארוך - "Popeye sign"',
          fullDescription: 'קרע ספונטני של גיד הראש הארוך של הביצפס, לרוב באנשים מעל גיל 50 לאחר טנדינופתיה כרונית. ב-90% מהמקרים יש פגיעה נלווית בשרוול המסובבים. גורם לעיוות ויזואלי קלאסי - "Popeye sign" (גוש שריר באמצע הזרוע). תפקודית - יש איבוד של ~10% בכוח הסופינציה ו-~20% בפלקסיה של המרפק.',
          clinicalSigns: '"Pop" פתאומי + כאב, גוש בולט באמצע הזרוע (Popeye sign), חבלה אקיכמוטית, חולסה קלה בפלקסיה ובסופינציה.',
          tests: [
            { name: 'Popeye Sign', nameEn: 'Popeye Sign Inspection', performance: 'תצפית ויזואלית בעת התכווצות הביצפס - השוואה לצד הנגדי.', positive: 'גוש שריר בולט באמצע הזרוע (במקום ליד המרפק) - חיובי.', sn: '95%', sp: '99%' },
            { name: 'Speed Test', nameEn: "Speed's Test", performance: 'מרפק מיושר, אמה בסופינציה, פלקסיה 90° כנגד התנגדות.', positive: 'כאב במחורץ הביצפיטלי / חולשה.', sn: '32%', sp: '75%' },
            { name: 'Ludington Test', nameEn: 'Ludington Test', performance: 'ידיים על הראש, אצבעות שלובות. כיווץ ושחרור הביצפס.', positive: 'אסימטריה - רואים שהביצפס בצד הפגוע לא מתכווץ במלואו.', sn: '50%', sp: '75%' }
          ]
        },
        {
          name: 'תסמונת מוצא בית החזה',
          nameEn: 'Thoracic Outlet Syndrome',
          shortDesc: 'דחיסה של מבנים נוירו-וסקולריים במוצא בית החזה',
          fullDescription: 'דחיסה של אחד או יותר מהמבנים העוברים במוצא בית החזה: עצב הברכיאלי פלקסוס (Neurogenic - הנפוץ ביותר, 95%), עורק הסבקלאביאן (Arterial), או וריד הסבקלאביאן (Venous). הדחיסה יכולה להיות באחד משלושה מקומות: 1) Scalene triangle, 2) Costoclavicular space, 3) Pectoralis minor space. גורמי סיכון: צלע צווארית מולדת, חבלת Whiplash, תנוחה גרועה, פעילויות מעל הראש חוזרות.',
          clinicalSigns: 'כאב, נימולים וחולשה ביד - מחמירים בפעילויות מעל הראש או בנשיאת משא. לעיתים נפיחות ושינוי צבע (TOS וריד), קור וחיוורון (TOS עורקי).',
          tests: [
            { name: 'Adson Test', nameEn: "Adson's Test", performance: 'בישיבה. הבודק מקבע את הפולס הרדיאלי. המטופל מבצע אקסטנציה ואבדוקציה של הזרוע, מסובב את הראש לכיוון הצד הסימפטומטי, ושואף עמוקות.', positive: 'היחלשות / היעלמות הפולס + שחזור סימפטומים - חיובי. בודק את ה-Scalene triangle.', sn: '79%', sp: '76%' },
            { name: 'Roos Test (EAST)', nameEn: 'Elevated Arm Stress Test', performance: 'הזרועות באבדוקציה 90° + רוטציה חיצונית, מרפקים 90°. המטופל פותח וסוגר אגרופים למשך 3 דקות.', positive: 'שחזור סימפטומים, חולשה, כאב חזק שמחייב הפסקה - חיובי. הבדיקה הרגישה ביותר.', sn: '84%', sp: '30%' },
            { name: 'Wright Test', nameEn: "Wright's Hyperabduction Test", performance: 'הבודק מקבע את הפולס הרדיאלי. הזרוע באבדוקציה 90°+ ורוטציה חיצונית - העמקה הדרגתית.', positive: 'היעלמות הפולס + שחזור סימפטומים - חיובי. בודק את Pectoralis minor space.', sn: '70%', sp: '53%' },
            { name: 'Costoclavicular Test', nameEn: 'Eden Test', performance: 'המטופל בעמדת "חייל" - חזה ברוח, כתפיים אחורה ולמטה. שמירה על תנוחה 30 שניות.', positive: 'היעלמות פולס או שחזור סימפטומים - חיובי לדחיסה ב-Costoclavicular space.', sn: '77%', sp: '43%' },
            { name: 'Cyriax Release Test', nameEn: 'Cyriax Release Test', performance: 'הבודק מאחורי המטופל. אוחז בזרועות ומרים אותן 0.5 ס"מ + תומך במשקל הזרועות.', positive: 'שחזור או החמרה של נימולים תוך 30 שניות - חיובי לפגיעה כרונית.', sn: '94%', sp: '64%' }
          ]
        }
      ]
    },

    elbow: {
      name: 'מרפק',
      nameEn: 'Elbow',
      pathologies: [
        {
          name: 'אפיקונדיליטיס לטרלית (מרפק טניס)',
          nameEn: 'Lateral Epicondylitis (Tennis Elbow)',
          shortDesc: 'טנדינופתיה של גידי האקסטנסורים באפיקונדיל הלטרלי',
          fullDescription: 'הפתולוגיה הנפוצה ביותר במרפק. טנדינופתיה של גידי האקסטנסורים, בעיקר Extensor Carpi Radialis Brevis (ECRB), במקום היאחזותם באפיקונדיל הלטרלי. למרות השם, רק 5%-10% מהמקרים קשורים לטניס - רוב המקרים בעובדי משרד או עבודות ידניות. שכיחות שיא בגיל 35-50.',
          clinicalSigns: 'כאב לטרלי במרפק, רגישות מקסימלית 1-2 ס"מ דיסטלית לאפיקונדיל הלטרלי, מחמיר באחיזה, סחיטה, הרמת כוס קפה.',
          tests: [
            { name: 'מבחן Cozen', nameEn: "Cozen's Test", performance: 'המטופל בישיבה. המרפק בפלקסיה 90°, האמה בפרונציה. הבודק מקבע את המרפק עם אגודל על האפיקונדיל הלטרלי, ומבקש מהמטופל לבצע סטיה רדיאלית ואקסטנציה של שורש כף היד תוך אגירת אגרוף - כנגד התנגדות.', positive: 'כאב חד באפיקונדיל הלטרלי בעת ההתנגדות - חיובי.', sn: '84%', sp: '80%' },
            { name: 'מבחן Mill', nameEn: "Mill's Test", performance: 'המטופל בישיבה. הבודק מבצע פסיבית פלקסיה מלאה של שורש כף היד עם פרונציה של האמה ואקסטנציה מלאה של המרפק.', positive: 'כאב באפיקונדיל הלטרלי בעת המתיחה - חיובי. בדיקה מאוד ספציפית.', sn: '53%', sp: '100%' },
            { name: 'Maudsley Test', nameEn: "Maudsley's Test", performance: 'המטופל בישיבה. המרפק מיושר, האמה בפרונציה. המטופל מבצע אקסטנציה של אצבע 3 (האמצעית) כנגד התנגדות הבודק.', positive: 'כאב באפיקונדיל הלטרלי - חיובי. ייחודי לפגיעה ב-ECRB שמתחבר לבסיס מטקרפל 3.', sn: '88%', sp: '70%' },
            { name: 'Grip Strength Test', nameEn: 'Grip Strength', performance: 'מדידת כוח אחיזה במכשיר Dynamometer במנח של מרפק מיושר לעומת מרפק כפוף 90°.', positive: 'הפחתה משמעותית בכוח האחיזה במרפק מיושר לעומת מרפק כפוף - מעיד על אפיקונדיליטיס לטרלית.', sn: '78%', sp: '80%' }
          ]
        },
        {
          name: 'אפיקונדיליטיס מדיאלית (מרפק גולף)',
          nameEn: 'Medial Epicondylitis (Golfer\'s Elbow)',
          shortDesc: 'טנדינופתיה של גידי הפלקסורים-פרונטורים במדיאלי',
          fullDescription: 'הצורה המדיאלית של טנדינופתיה במרפק. נדירה פי 7-10 מהצורה הלטרלית. פוגעת בגידי Pronator Teres ו-Flexor Carpi Radialis בעיקר. נפוצה בגולפאים, זורקי כדור, ומשתמשי כלי עבודה.',
          clinicalSigns: 'כאב מדיאלי במרפק, רגישות באפיקונדיל המדיאלי, מחמיר בפלקסיה ופרונציה כנגד התנגדות.',
          tests: [
            { name: 'Reverse Cozen', nameEn: 'Medial Epicondylitis Test', performance: 'המרפק באקסטנציה מלאה, האמה בסופינציה. המטופל מבצע פלקסיה של שורש כף היד כנגד התנגדות הבודק.', positive: 'כאב באפיקונדיל המדיאלי - חיובי.', sn: '60%', sp: '85%' },
            { name: 'Polk\'s Test', nameEn: "Polk's Test", performance: 'הרמת חפץ של 2-3 ק"ג עם המרפק כפוף ובעמדת סופינציה (בודק לטרלי) ופרונציה (בודק מדיאלי).', positive: 'כאב מדיאלי בהרמה בפרונציה ולא בסופינציה - חיובי לאפיקונדיליטיס מדיאלית.', sn: '80%', sp: '70%' }
          ]
        },
        {
          name: 'תסמונת התעלה הקוביטלית',
          nameEn: 'Cubital Tunnel Syndrome',
          shortDesc: 'דחיסה של עצב האולנרי במרפק',
          fullDescription: 'הניוב\u200fרופתיה השנייה הנפוצה ביותר ביד האדם (אחרי Carpal Tunnel). דחיסה של העצב האולנרי בתעלה הקוביטלית, בין האפיקונדיל המדיאלי לאולקרנון. גורמת לחולשה של שרירי היד הפנימיים ונימולים באצבעות 4-5. גורמי סיכון: הישענות ממושכת על המרפק, פעולות חוזרות עם פלקסיה במרפק.',
          clinicalSigns: 'נימולים באצבעות 4-5, חולשה באחיזה ופינסוט, אטרופיה של שרירי האינטראוסים בשלבים מתקדמים, סימן Froment חיובי.',
          tests: [
            { name: 'Tinel ב-Cubital', nameEn: "Tinel's Sign at Elbow", performance: 'הבודק מקיש קלות עם פטיש רפלקסים או באצבעו על אזור התעלה הקוביטלית בין האפיקונדיל המדיאלי לאולקרנון.', positive: 'תחושת חשמל/נימולים מקרינה לאצבעות 4-5 - חיובי.', sn: '70%', sp: '98%' },
            { name: 'Elbow Flexion Test', nameEn: 'Elbow Flexion Test', performance: 'המטופל מבצע פלקסיה מקסימלית של המרפק עם אקסטנציה מלאה של שורש כף היד למשך 60 שניות.', positive: 'הופעת נימולים או החמרה בעצבוב האולנרי - חיובי.', sn: '75%', sp: '99%' },
            { name: 'Froment Sign', nameEn: "Froment's Sign", performance: 'המטופל מחזיק דף נייר בין האגודל לצד הרדיאלי של אצבע 2. הבודק מנסה למשוך את הדף.', positive: 'פלקסיה של מפרק IP של האגודל בעת ההתנגדות (כי FPL מפעיל במקום Adductor Pollicis המעוצבב ע"י האולנרי) - חיובי.', sn: '60%', sp: '90%' }
          ]
        },
        {
          name: 'אי יציבות UCL',
          nameEn: 'UCL Instability',
          shortDesc: 'פגיעה ברצועה הקולטרלית האולנרית',
          fullDescription: 'פגיעה ברצועה הקולטרלית האולנרית של המרפק (UCL/MCL), נפוצה במיוחד בזורקי כדור (פיצ\'רים בבייסבול). הרצועה מורכבת מ-3 חלקים: קדמי, אחורי, רוחבי. החלק הקדמי הוא העיקרי שמתנגד לכוחות ולגוס.',
          clinicalSigns: 'כאב מדיאלי במרפק במהלך זריקה, ירידה במהירות זריקה, "תחושה של נתינה".',
          tests: [
            { name: 'Valgus Stress Test', nameEn: 'Valgus Stress at 30°', performance: 'המטופל בישיבה. הבודק מקבע את הזרוע, מכופף את המרפק 30° (לנטרל את האולקרנון), ומפעיל כוח ולגוס על המרפק.', positive: 'תזוזה מוגברת בהשוואה לצד הנגדי או הופעת כאב מדיאלי - חיובי.', sn: '66%', sp: '60%' },
            { name: 'Moving Valgus Stress', nameEn: 'Moving Valgus Test', performance: 'הבודק מביא את המרפק לפלקסיה מלאה תוך הפעלת כוח ולגוס מתמשך, ואז מבצע אקסטנציה מהירה של המרפק.', positive: 'כאב משמעותי בטווח של 70°-120° (Reproduction of pain) - חיובי. הבדיקה הרגישה ביותר ל-UCL.', sn: '100%', sp: '75%' },
            { name: 'Milking Maneuver', nameEn: 'Milking Test', performance: 'המטופל מושיט יד קדימה. הבודק אוחז באגודל של אותה יד ומושך כלפי מטה, יוצר כוח ולגוס על המרפק שבפלקסיה של 90° וסופינציה.', positive: 'כאב מדיאלי במרפק - חיובי.', sn: '64%', sp: '80%' }
          ]
        },
        {
          name: 'בורסיטיס אולקרנון',
          nameEn: 'Olecranon Bursitis',
          shortDesc: 'דלקת בבורסה האולקרנונית',
          fullDescription: 'דלקת/הצטברות נוזל בבורסה האולקרנונית הנמצאת מאחורי קצה האולקרנון. יכולה להיות אספטית (חבלתית או דלקתית), ספטית (זיהומית), או מקרוקריסטלית (גאוט). מאופיינת בנפיחות בולטת ("Popeye elbow").',
          clinicalSigns: 'נפיחות גלויה מאחורי המרפק, אדמומיות וחום בזיהום, רגישות במישוש.',
          tests: [
            { name: 'מישוש ובדיקת חום', nameEn: 'Palpation', performance: 'מישוש של הבורסה - הערכת גודל, חום, רגישות, תכולה (נוזל לעומת מוצק).', positive: 'חום מקומי משמעותי + רגישות + אריתמה - מעיד על בורסיטיס ספטית עד הוכח אחרת.', sn: '90%', sp: '70%' }
          ]
        },
        {
          name: 'קרע גיד הביצפס הדיסטלי',
          nameEn: 'Distal Biceps Tendon Rupture',
          shortDesc: 'קרע בגיד הביצפס בצד הדיסטלי (במרפק)',
          fullDescription: 'קרע נדיר יחסית של גיד הביצפס במקום היאחזותו בטוברוסיטס הרדיאלי. שכיח בגברים בני 40-60, יד דומיננטית, בעת הרמת משא כבד עם מרפק כפוף. מנגנון: עומס אקסצנטרי פתאומי. אובדן כוח משמעותי בסופינציה (~50%) ופלקסיה במרפק (~30%). דורש ניתוח ברוב המקרים בצעירים פעילים.',
          clinicalSigns: '"Pop" פתאומי במרפק הקדמי + כאב, חבלה אקיכמוטית, "Reverse Popeye" - הביצפס מתרומם פרוקסימלי, חולשה משמעותית בסופינציה.',
          tests: [
            { name: 'Hook Test', nameEn: 'Biceps Hook Test', performance: 'המרפק כפוף 90°, אמה בסופינציה. הבודק מנסה "להעיף" את גיד הביצפס מהצד הלטרלי באצבע מקופלת.', positive: 'אם אי אפשר "להתפס" על הגיד - חיובי לקרע מלא.', sn: '92%', sp: '100%' },
            { name: 'Biceps Squeeze', nameEn: 'Biceps Squeeze Test', performance: 'מקבילו של Thompson לאכילס. המרפק 60°-80°, סופינציה. הבודק לוחץ את שריר הביצפס באמה.', positive: 'אין סופינציה ראקטיבית של האמה - חיובי.', sn: '96%', sp: '100%' },
            { name: 'Bicipital Aponeurosis Flex', nameEn: 'BAFT', performance: 'מתח של ה-Lacertus Fibrosus תוך התנגדות לפלקסיה.', positive: 'אם לא ניתן למשש את ה-Aponeurosis - חיובי.', sn: '60%', sp: '100%' }
          ]
        },
        {
          name: 'תסמונת Pronator Syndrome',
          nameEn: 'Pronator Syndrome',
          shortDesc: 'דחיסה של עצב המדיאני בשריר הפרונטור',
          fullDescription: 'דחיסה של עצב המדיאני באזור הפרוקסימלי של האמה - בין שני הראשים של Pronator Teres, או על-ידי Lacertus Fibrosus, Flexor Digitorum Superficialis arch. נפוץ בעובדי פיזיקליים שמבצעים פרונציה חוזרת. מתבטא דומה ל-Carpal Tunnel אך עם כאב באמה הקדמית והבדלים תפקודיים.',
          clinicalSigns: 'כאב באמה קדמית + נימולים בעצבוב מדיאני, מחמיר בפרונציה ממושכת, אין סימפטומים ליליים (בניגוד ל-CTS).',
          tests: [
            { name: 'Pronator Compression', nameEn: 'Pronator Teres Test', performance: 'המטופל מבצע פרונציה כנגד התנגדות עם המרפק כפוף 90°, ואז מתרחב המרפק.', positive: 'נימולים בעצבוב המדיאני / שחזור סימפטומים - חיובי.', sn: '60%', sp: '78%' },
            { name: 'Resisted Long Finger Flexion', nameEn: 'FDS Test', performance: 'פלקסיה של אצבע 3 (PIP) כנגד התנגדות תוך מניעת פלקסיה של שאר האצבעות.', positive: 'נימולים מקרינים - חיובי לדחיסה ע"י Sublimis arch.', sn: '50%', sp: '85%' }
          ]
        },
        {
          name: 'תסמונת התעלה הרדיאלית',
          nameEn: 'Radial Tunnel Syndrome',
          shortDesc: 'דחיסה של ענף עצב הרדיאלי באמה',
          fullDescription: 'דחיסה של ה-Posterior Interosseous Nerve (PIN) באמת המרפק / האמה הפרוקסימלית. מבלבל לעיתים קרובות עם אפיקונדיליטיס לטרלית כי המיקום קרוב, אך הכאב מקרין יותר דיסטלי לאורך האמה. ב-5%-10% מהמקרים יש חופף עם Tennis Elbow.',
          clinicalSigns: 'כאב לטרלי במרפק - 4-5 ס"מ דיסטלית לאפיקונדיל (לעומת 1-2 ס"מ ב-Tennis Elbow), מחמיר בפעולות חזרתיות, ייתכן חולסה קלה באקסטנציה של אצבע 3.',
          tests: [
            { name: 'Resisted Long Finger Extension', nameEn: 'Middle Finger Extension Test', performance: 'אקסטנציה של אצבע 3 כנגד התנגדות עם המרפק מיושר.', positive: 'כאב מקרין דיסטלית לאפיקונדיל הלטרלי - חיובי.', sn: '85%', sp: '80%' },
            { name: 'Resisted Supination', nameEn: 'Resisted Supination Test', performance: 'סופינציה כנגד התנגדות, מרפק כפוף 90°.', positive: 'כאב באמה הפרוקסימלית-לטרלית - חיובי.', sn: '70%', sp: '75%' },
            { name: 'מישוש 4cm דיסטלית לאפיקונדיל', nameEn: 'Radial Tunnel Palpation', performance: 'מישוש של אזור Arcade of Frohse, 3-4 ס"מ דיסטלית לאפיקונדיל הלטרלי.', positive: 'רגישות מקסימלית כאן (ולא באפיקונדיל) - חיובי.', sn: '90%', sp: '70%' }
          ]
        }
      ]
    },

    wrist: {
      name: 'שורש כף יד',
      nameEn: 'Wrist & Hand',
      pathologies: [
        {
          name: 'תסמונת התעלה הקרפלית',
          nameEn: 'Carpal Tunnel Syndrome',
          shortDesc: 'דחיסה של עצב המדיאנוס בתעלה הקרפלית',
          fullDescription: 'הניוב\u200fרופתיה הנפוצה ביותר בגוף האדם. דחיסה של עצב המדיאנוס בתעלה הקרפלית של שורש כף היד. שכיחות גבוהה במיוחד בנשים בגיל 40-60. גורמי סיכון: הריון, סוכרת, היפותירואידיזם, RA, פעולות חזרתיות, תנודות. הסימפטומים הקלאסיים מערבים אצבעות 1-3 וחצי מהקמיצה (עצבוב המדיאנוס).',
          clinicalSigns: 'נימולים נוקטורניים שמעירים את המטופל, צורך לנער את היד להקלה, חולשה ואטרופיה של ה-Thenar בשלבים מתקדמים.',
          tests: [
            { name: 'מבחן Phalen', nameEn: "Phalen's Test", performance: 'המטופל בישיבה. מקרב את גבי כפות הידיים זו לזו עם פלקסיה מקסימלית של שורש כף היד (90°). שומר על התנוחה למשך 60 שניות.', positive: 'הופעת נימולים או החמרה בעצבוב המדיאנוס במהלך הדקה - חיובי.', sn: '68%', sp: '73%' },
            { name: 'מבחן Tinel', nameEn: "Tinel's Sign", performance: 'הבודק מקיש קלות עם אצבע או פטיש רפלקסים על אזור התעלה הקרפלית - בקפל שורש כף היד הקדמי, מעט רדיאלית.', positive: 'תחושת חשמל/נימולים מקרינה לאצבעות 1-3 - חיובי.', sn: '50%', sp: '77%' },
            { name: 'Carpal Compression', nameEn: "Durkan's Test", performance: 'הבודק מפעיל לחץ ישיר ומתמשך עם שני האגודלים על אזור התעלה הקרפלית למשך 30 שניות.', positive: 'הופעת נימולים בעצבוב המדיאנוס תוך 30 שניות - חיובי. הבדיקה הרגישה ביותר.', sn: '64%', sp: '83%' },
            { name: 'Hand Diagram', nameEn: 'Katz Hand Diagram', performance: 'המטופל מסמן על דיאגרמה של היד היכן הוא מרגיש את הסימפטומים.', positive: 'דפוס "קלאסי" (סימפטומים רק באצבעות מדיאנוס) או "סביר" (כולל הקמיצה אך ללא צד אולנרי) - חיובי.', sn: '64%', sp: '90%' },
            { name: 'Reverse Phalen', nameEn: 'Reverse Phalen Test', performance: 'מקבילו של פאלן - אקסטנציה מלאה של שורש כף היד (כפות יד צמודות זו לזו), 60 שניות.', positive: 'הופעת נימולים - חיובי.', sn: '55%', sp: '85%' }
          ]
        },
        {
          name: 'דה-קרבן',
          nameEn: 'De Quervain\'s Tenosynovitis',
          shortDesc: 'טנוסינוביטיס של גידי APL ו-EPB',
          fullDescription: 'טנוסינוביטיס במחלק הראשון של גידי האקסטנסורים, הכולל את Abductor Pollicis Longus (APL) ו-Extensor Pollicis Brevis (EPB). נפוץ במיוחד באמהות חדשות שמרימות תינוק ("Mommy thumb"), ובעלי משרות שדורשות תנועות חוזרות של האגודל. גורם לכאב חזק בצד הרדיאלי של שורש כף היד.',
          clinicalSigns: 'כאב חד באזור Radial Styloid, נפיחות מקומית, "Triggering" של האגודל לעיתים.',
          tests: [
            { name: 'Finkelstein', nameEn: "Finkelstein's Test", performance: 'המטופל מקפל את האגודל לתוך כף היד, סוגר עליו את האצבעות. הבודק מבצע סטייה אולנרית פסיבית של שורש כף היד.', positive: 'כאב חד מאוד באזור הפרוצסוס סטילואידאוס של הרדיוס - חיובי.', sn: '81%', sp: '50%' },
            { name: 'Eichhoff Test', nameEn: 'Eichhoff Test', performance: 'גרסה: המטופל סוגר אגרוף עם האגודל בתוך, ומבצע בעצמו סטייה אולנרית.', positive: 'כאב חד באזור הסטילואיד הרדיאלי - חיובי. רגיש יותר אך פחות ספציפי.', sn: '89%', sp: '14%' },
            { name: 'WHAT Test', nameEn: 'Wrist Hyperflexion + Abduction of Thumb', performance: 'שורש כף היד בפלקסיה מקסימלית, המטופל מבצע אבדוקציה של האגודל כנגד התנגדות.', positive: 'כאב חד בסטילואיד הרדיאלי - חיובי. הבדיקה הספציפית ביותר.', sn: '99%', sp: '29%' }
          ]
        },
        {
          name: 'אי יציבות סקפולונאט',
          nameEn: 'Scapholunate Instability',
          shortDesc: 'קרע ברצועה הסקפולונאטית',
          fullDescription: 'הפגיעה הליגמנטרית הנפוצה ביותר בשורש כף היד. קרע ברצועה הסקפולונאטית (SL) שמייצבת בין הסקפויד ללונאטום. אם לא מטופלת - יכולה להוביל ל-SLAC wrist (Scapholunate Advanced Collapse).',
          clinicalSigns: 'כאב דורסלי בשורש כף היד, נפיחות, חולשה באחיזה, "קליק" בעת תנועה.',
          tests: [
            { name: 'Watson / Scaphoid Shift', nameEn: 'Scaphoid Shift Test', performance: 'הבודק אוחז ביד המטופל. עם אגודל לוחץ על הקוטב הדיסטלי של הסקפויד מהקדמי. מזיז את שורש כף היד מסטיה אולנרית לסטיה רדיאלית.', positive: '"Clunk" שניתן להרגיש או כאב - חיובי. הסקפויד "קופץ" מעל הקצה הדורסלי של הרדיוס.', sn: '69%', sp: '66%' },
            { name: 'Resisted Finger Extension', nameEn: 'Resisted Finger Extension', performance: 'המטופל בפלקסיה של שורש כף היד. הבודק מתנגד לאקסטנציה של אצבעות 2-5.', positive: 'כאב דורסלי באזור SL - חיובי.', sn: '50%', sp: '85%' }
          ]
        },
        {
          name: 'TFCC Tear',
          nameEn: 'Triangular Fibrocartilage Complex Tear',
          shortDesc: 'קרע במתחם הסחוסי המשולש',
          fullDescription: 'ה-TFCC הוא מתחם של רצועות וסחוס בצד האולנרי של שורש כף היד, מקביל למניסקוס בברך. תפקידו: יציבות המפרק הרדיואולנרי הדיסטלי (DRUJ), הספגת זעזועים, ואפשור תנועה חופשית של שורש כף היד. קרעים מסווגים לפי Palmer ל-Class I (חבלתי) ו-Class II (דגנרטיבי).',
          clinicalSigns: 'כאב אולנרי בשורש כף היד, מחמיר בסטיה אולנרית או בסיבובים, "קליק" בתנועה.',
          tests: [
            { name: 'TFCC Compression / Load', nameEn: 'TFCC Load Test', performance: 'הבודק אוחז ביד המטופל ומבצע סטיה אולנרית עם לחץ ציר על הקרפליים.', positive: 'כאב או "קליק" בצד האולנרי - חיובי.', sn: '66%', sp: '64%' },
            { name: 'Press Test', nameEn: 'Press Test', performance: 'המטופל יושב על כיסא ומנסה להרים את עצמו ע"י לחיצה על המושב משני הצדדים.', positive: 'כאב חד בצד האולנרי של שורש כף היד - חיובי.', sn: '100%', sp: '—' },
            { name: 'Piano Key Sign', nameEn: 'DRUJ Ballottement', performance: 'הבודק מקבע את הרדיוס ולוחץ על האולנה הדיסטלית מאחור-קדימה.', positive: 'תזוזה משמעותית של האולנה הדיסטלית - חיובי לאי יציבות DRUJ.', sn: '66%', sp: '64%' }
          ]
        },
        {
          name: 'Trigger Finger',
          nameEn: 'Stenosing Tenosynovitis',
          shortDesc: 'היצרות של נדן הגיד הפלקסורי',
          fullDescription: 'היצרות של ה-A1 pulley ונדן הגיד הפלקסורי, גורמת לחיכוך והתעבות של הגיד. בעת פלקסיה - הגיד "נתפס" ובפתיחה - "נפתח" עם תחושת קליק. אצבעות 3-4 הנפוצות ביותר. שכיחות גבוהה בנשים, בסוכרת, RA.',
          clinicalSigns: 'תפיסה של אצבע בכיפוף, "קליק" כואב בפתיחה, רגישות במישוש על A1 pulley (בסיס האצבע).',
          tests: [
            { name: 'תצפית קלינית', nameEn: 'Clinical Observation', performance: 'בודק את האצבע בעת פלקסיה אקטיבית מלאה ולאחר מכן אקסטנציה.', positive: 'תפיסה ברורה בכיפוף עם פתיחה פתאומית "Click" - חיובי.', sn: '95%', sp: '90%' },
            { name: 'מישוש Nodule', nameEn: 'A1 Pulley Palpation', performance: 'מישוש בקדמת בסיס האצבע (A1 pulley).', positive: 'מימוש "קשר"/Nodule שתואם לתחושה הסובייקטיבית של "קליק" - חיובי.', sn: '85%', sp: '80%' }
          ]
        },
        {
          name: 'מחלת דופוטרון',
          nameEn: 'Dupuytren\'s Contracture',
          shortDesc: 'התעבות והצטמקות של הפסציה הפלמרית',
          fullDescription: 'מחלה פיברופרוליפרטיבית של הפסציה הפלמרית. גורמת ליצירת קשרים וחבלים שמובילים לקונטרקטורות של האצבעות, בעיקר 4-5. שכיחה בגברים מעל גיל 50, עם רקע גנטי (צפון אירופה).',
          clinicalSigns: 'קשרים בכף היד, חבלים גלויים, קונטרקטורה של MCP/PIP של אצבעות 4-5.',
          tests: [
            { name: 'Hueston Tabletop Test', nameEn: 'Tabletop Test', performance: 'המטופל מנסה להניח את כף היד שטוחה על שולחן.', positive: 'אי-יכולת להניח את כף היד שטוחה - חיובי. אינדיקציה לטיפול ניתוחי.', sn: '95%', sp: '95%' }
          ]
        },
        {
          name: 'Mallet Finger',
          nameEn: 'Mallet Finger',
          shortDesc: 'קרע גיד האקסטנסור הדיסטלי',
          fullDescription: 'קרע של הגיד האקסטנסור הדיסטלי במקום היאחזותו בבסיס הפלנגה הדיסטלית, או שבר avulsion של בסיס הפלנגה הדיסטלית. מנגנון נפוץ: כדור פוגע בקצה האצבע (עוקץ אצבע), נסיון לסגור אצבע באקסטנציה. מסווג לפי Doyle ל-4 טיפוסים. רוב המקרים שמרניים בסד אקסטנציה ל-6-8 שבועות.',
          clinicalSigns: 'אצבע "דרופ" - הפלנגה הדיסטלית כפופה ולא ניתנת לאקסטנציה אקטיבית, נפיחות וכאב מעל DIP.',
          tests: [
            { name: 'Active DIP Extension', nameEn: 'Active Extension Test', performance: 'בקשה מהמטופל ליישר את האצבע באופן אקטיבי.', positive: 'חוסר יכולת לאקסטנציה אקטיבית של ה-DIP (אקסטנציה פסיבית תקינה) - חיובי.', sn: '100%', sp: '100%' },
            { name: 'Elson Test', nameEn: 'Elson Test', performance: 'PIP בפלקסיה 90° על שולחן. ניסיון לאקסטנציה של DIP כנגד התנגדות.', positive: 'אקסטנציה חזקה של DIP - חיובי לקרע של Central Slip (Boutonnière).', sn: '95%', sp: '90%' }
          ]
        },
        {
          name: 'Boutonnière Deformity',
          nameEn: 'Boutonnière Deformity',
          shortDesc: 'דפורמציה - PIP פלקסיה + DIP אקסטנציה',
          fullDescription: 'דפורמציה הנגרמת מקרע של ה-Central Slip של גיד האקסטנסור מעל ה-PIP, עם תזוזת ה-Lateral Bands כלפי מטה. גורם לפלקסיה של PIP ואקסטנציה של DIP. נפוץ ב-RA או לאחר חבלה. הטיפול - סד אקסטנציה ל-PIP בלבד למשך 6 שבועות.',
          clinicalSigns: 'PIP בפלקסיה (לא ניתן ליישר), DIP בהיפראקסטנציה, נפיחות מעל PIP.',
          tests: [
            { name: 'Elson Test', nameEn: 'Elson Test', performance: 'PIP בפלקסיה 90° על שולחן. אקסטנציה של DIP כנגד התנגדות.', positive: 'אקסטנציה אקטיבית חזקה של DIP - חיובי לקרע Central Slip (תקין: DIP "רפוי").', sn: '95%', sp: '90%' }
          ]
        },
        {
          name: 'Swan Neck Deformity',
          nameEn: 'Swan Neck Deformity',
          shortDesc: 'דפורמציה - PIP היפראקסטנציה + DIP פלקסיה',
          fullDescription: 'דפורמציה ההפך מ-Boutonnière: PIP בהיפראקסטנציה ו-DIP בפלקסיה. נגרם לרוב מ: 1) פגיעה ב-Volar plate של PIP, 2) Mallet finger לא מטופל, 3) RA. הטיפול שמרני (סד) או ניתוחי - תלוי בגמישות הדפורמציה.',
          clinicalSigns: 'PIP הופכת להיפראקסטנציה בעת אקסטנציה אקטיבית, DIP בפלקסיה, פעמים יש "snap" בעת פלקסיה של האצבע.',
          tests: [
            { name: 'תצפית קלינית', nameEn: 'Visual Inspection', performance: 'תצפית בעת שינוי מצב מאקסטנציה לפלקסיה.', positive: 'דפוס קלאסי של PIP בהיפראקסטנציה ו-DIP בפלקסיה.', sn: '95%', sp: '95%' }
          ]
        },
        {
          name: 'גנגליון',
          nameEn: 'Ganglion Cyst',
          shortDesc: 'ציסטה רכה ניידת מהמפרק או מנדן הגיד',
          fullDescription: 'הגידול הרך הנפוץ ביותר ביד ובשורש כף היד. ציסטה מלאה בנוזל סינוביאלי שמקורה במפרק או מנדן הגיד. מיקום נפוץ: דורסלית בשורש כף היד (60%-70% מהמקרים), פלמרית, על Flexor Tendon Sheath. רוב הציסטות ניתנות למיון על-ידי תצפית ומישוש בלבד. ב-50% חולפות ספונטנית.',
          clinicalSigns: 'גוש רך, ניידא, חצי-נוזלי, לרוב ללא רגישות. לעיתים גורם לרגישות במצב של גודל גדול שדוחס מבנה סמוך.',
          tests: [
            { name: 'Transillumination', nameEn: 'Trans-illumination Test', description: 'הפעלת אור נייד מאחורי הציסטה.', performance: 'הפעלת אור פנס מאחורי הגוש בחדר חשוך.', positive: 'הגוש "מאיר" - חיובי לציסטה (הנוזל מעביר אור).', sn: '90%', sp: '95%' },
            { name: 'מישוש', nameEn: 'Palpation', performance: 'מישוש - הערכת רכות, ניידות, מיקום אנטומי.', positive: 'גוש רך, נייד, חלק - מאפיין ציסטה.', sn: '95%', sp: '85%' }
          ]
        },
        {
          name: 'מחלת קינבק',
          nameEn: "Kienböck's Disease",
          shortDesc: 'נמק avascular של עצם הלונאטום',
          fullDescription: 'אוסטאונקרוזיס של עצם הלונאטום בשורש כף היד. סווגה ע"י Lichtman ל-4 שלבים. גורם נפוץ: Ulnar minus variance (אולנה קצרה יחסית), חבלה חוזרת. שכיחות שיא בגיל 20-40. מתפתחת כאב הדרגתי, הגבלת תנועה, ובשלבים מתקדמים - הרס של המפרק.',
          clinicalSigns: 'כאב דורסלי מרכזי בשורש כף היד, מחמיר בפעילות, הגבלה של דורסיפלקסיה אקטיבית, חולשה באחיזה.',
          tests: [
            { name: 'מישוש על הלונאטום', nameEn: 'Lunate Palpation', performance: 'מישוש דורסלי של אזור הלונאטום, באמצע שורש כף היד.', positive: 'רגישות מקומית בולטת - חיובי.', sn: '90%', sp: '70%' },
            { name: 'Watson Test (שלילי)', nameEn: 'Negative Scaphoid Shift', performance: 'בדיקת Scaphoid Shift - תקינה.', positive: 'בדיקה תקינה (שלילית) למרות כאב מרכזי בשורש כף היד - מעיד על Kienböck ולא על SL.', sn: '—', sp: '—' }
          ]
        },
        {
          name: 'שבר סקפואיד',
          nameEn: 'Scaphoid Fracture',
          shortDesc: 'שבר עצם הסקפואיד - השבר הנפוץ של שורש כף יד',
          fullDescription: 'השבר הנפוץ ביותר של עצמות שורש כף היד (60%-70% משברי הקרפלים). מנגנון נפוץ: נפילה על יד פתוחה (FOOSH) עם דורסיפלקסיה. בעיה קליטית: עד 25% מהשברים אינם נראים בצילום ראשוני! אבחון מאוחר עלול להוביל ל-Avascular Necrosis (AVN) של הקצה הפרוקסימלי או ל-Non-union. אם יש חשד קליני - יש לטפל כ"כן-שבר" עד שלילה ב-MRI / CT, גם אם צילום תקין!',
          clinicalSigns: 'כאב רדיאלי בשורש כף יד, רגישות מקומית ב-Anatomical Snuffbox, נפיחות, חולשה באחיזה, החמרה בדורסיפלקסיה ופרונציה.',
          tests: [
            { name: 'Anatomical Snuffbox Tenderness', nameEn: 'Snuffbox Palpation', performance: 'מישוש מקומי של ה-Anatomical Snuffbox (החוט בין EPL ל-APL/EPB).', positive: 'רגישות מקומית בולטת - חיובי. הסימן הרגיש ביותר.', sn: '90%', sp: '40%' },
            { name: 'Scaphoid Tubercle Tenderness', nameEn: 'Scaphoid Tubercle Palpation', performance: 'מישוש על הטוברקל הפלמרי של הסקפואיד.', positive: 'רגישות חדה - חיובי.', sn: '87%', sp: '57%' },
            { name: 'Thumb Axial Compression', nameEn: 'Axial Loading', performance: 'לחץ אקסיאלי לאורך האגודל לכיוון הסקפואיד.', positive: 'שחזור הכאב - חיובי.', sn: '70%', sp: '85%' },
            { name: 'Combined 3-Test Cluster', nameEn: 'Snuffbox + Tubercle + Compression', performance: 'שילוב של 3 הבדיקות.', positive: 'שלוש שליליות = שלילה. שלוש חיוביות = חשד גבוה לשבר.', sn: '100%', sp: '74%' }
          ]
        }
      ]
    },

    cervical: {
      name: 'עמוד שדרה צווארי',
      nameEn: 'Cervical Spine',
      pathologies: [
        {
          name: 'רדיקולופתיה צווארית',
          nameEn: 'Cervical Radiculopathy',
          shortDesc: 'דחיסה של שורש עצב צווארי',
          fullDescription: 'דחיסה של שורש עצב היוצא מעמוד השדרה הצווארי, לרוב עקב פריצת דיסק או סטנוזיס פורמינלי דגנרטיבי. הרמות הנפוצות ביותר: C5-C6 ו-C6-C7. גורמת לכאב מקרין לזרוע באופן שמתאים לדרמטום ולמיוטום של השורש הספציפי.',
          clinicalSigns: 'כאב צווארי + כאב מקרין לזרוע, נימולים בדרמטום ספציפי, חולשה במיוטום, רפלקסים מופחתים.',
          tests: [
            { name: 'מבחן Spurling', nameEn: "Spurling's Test", performance: 'המטופל בישיבה. הבודק מבצע אקסטנציה, רוטציה והטיה לטרלית של הצוואר לכיוון הסימפטומטי, ואז מפעיל לחץ אקסיאלי כלפי מטה על הראש.', positive: 'הקרנת כאב/נימולים לזרוע באותו צד - חיובי. בדיקה ספציפית מאוד.', sn: '30%', sp: '93%' },
            { name: 'Distraction Test', nameEn: 'Cervical Distraction', performance: 'המטופל בשכיבה על הגב. הבודק אוחז בעדינות בעצם המנדיבולה ובאוקסיפוט, ומפעיל כוח טרקציה כלפי מעלה (כ-14 ק"ג).', positive: 'הקלה משמעותית בסימפטומים בזרוע - חיובי.', sn: '44%', sp: '90%' },
            { name: 'ULTT - Median', nameEn: 'Upper Limb Tension Test 1', performance: 'בשכיבה. רצף תנועות: 1) דיכוי שכמה, 2) אבדוקציה 110°, 3) רוטציה חיצונית של הזרוע, 4) סופינציה של האמה, 5) אקסטנציה של מרפק, 6) אקסטנציה של שורש כף יד ואצבעות. מסיימים עם הטיה לטרלית של הצוואר לכיוון הצד הנגדי לבדוק רגישות.', positive: 'שחזור הסימפטומים שמשתנים עם תנועת הצוואר (החמרה בהטיה הפוכה / הקלה בהטיה לאותו צד) - חיובי.', sn: '97%', sp: '22%' },
            { name: 'Wainner Cluster', nameEn: '4-Test Cluster', performance: 'שילוב של 4 בדיקות: 1) ULTT, 2) Spurling, 3) Distraction, 4) רוטציה צווארית פעילה <60° לצד הסימפטומטי.', positive: 'אם 3 מתוך 4 חיוביים: LR+ של 6.1, ואם כל 4 חיוביים: LR+ של 30.', sn: '39%', sp: '94%' },
            { name: 'Shoulder Abduction Sign', nameEn: 'Bakody Sign', performance: 'המטופל מניח את כף היד של הזרוע הסימפטומטית על ראשו.', positive: 'הקלה משמעותית בסימפטומים - חיובי. הקלת מתח על השורש העצבי.', sn: '17%', sp: '92%' }
          ]
        },
        {
          name: 'אי יציבות צווארית עליונה',
          nameEn: 'Upper Cervical Instability',
          shortDesc: 'אי יציבות של רצועות C0-C2',
          fullDescription: '🚨 דגל אדום! אי יציבות של הרצועות בעמוד שדרה צווארי עליון - בעיקר Transverse ligament ו-Alar ligaments. יכולה להיות מולדת (Down syndrome), דלקתית (RA), חבלתית, או זיהומית. סכנה משמעותית - עלולה להוביל לפגיעה בחוט השדרה.',
          clinicalSigns: 'כאב צווארי עליון, כאב ראש, סחרחורת, סימני VBI, פרסטזיות בפנים, "Lhermitte\'s sign".',
          tests: [
            { name: 'Sharp-Purser Test', nameEn: 'Sharp-Purser Test', performance: 'המטופל בישיבה. הבודק עומד מאחור, מקבע את C2 (פרוצסוס ספינוסוס) ביד אחת. ביד השנייה לוחץ על המצח לפלקסיה צווארית, ואז מפעיל לחץ אחורי על המצח.', positive: 'תחושת "החלקה" של C1 לאחור או הקלה בסימפטומים - חיובי לחוסר יציבות של הרצועה הטרנסברסלית.', sn: '69%', sp: '96%' },
            { name: 'Alar Ligament Stress', nameEn: 'Alar Ligament Test', performance: 'בשכיבה על הגב. הבודק מקבע את C2 בצביטה, ומבצע הטיה לטרלית פסיבית של הראש לכל צד.', positive: 'תנועה מוגברת או היעדר עצירה ברורה (כי C2 לא מסתובב באופן רגיל בעקבות ההטיה) - חיובי.', sn: '69%', sp: '72%' },
            { name: 'Transverse Ligament Stress', nameEn: 'Transverse Ligament Test', performance: 'בשכיבה. הבודק מרים את הראש ומפעיל לחץ קדמי על C1.', positive: 'נימולים, כאב גרון, סימנים נוירולוגיים - חיובי.', sn: '69%', sp: '96%' }
          ]
        },
        {
          name: 'Whiplash',
          nameEn: 'Whiplash Associated Disorder',
          shortDesc: 'פגיעת האצה-בלימה של עמוד השדרה הצווארי',
          fullDescription: 'פגיעה אופיינית של עמוד השדרה הצווארי לאחר תאונת דרכים. מסווגת לפי Quebec Classification ל-Grades 0-IV: Grade 0 (אין סימפטומים), Grade I (כאב בלבד), Grade II (כאב + סימנים מוסקלוסקלטליים), Grade III (סימנים נוירולוגיים), Grade IV (שבר/נקיעה).',
          clinicalSigns: 'כאב וקיפאון צווארי לאחר התאונה, מוגבלות תנועה, כאבי ראש, סחרחורת, הפרעות זיכרון/קוגניטיביות.',
          tests: [
            { name: 'Cervical Flexion Rotation', nameEn: 'Flexion Rotation Test', performance: 'המטופל בשכיבה על הגב. הבודק מבצע פלקסיה צווארית מלאה ופסיבית, ואז מבצע רוטציה פסיבית לכל צד.', positive: 'הגבלה של >10° בהשוואה לצד הנגדי או הופעת כאב - חיובי. בודק בעיקר את C1-C2.', sn: '86%', sp: '100%' },
            { name: 'Neck Disability Index', nameEn: 'NDI Score', performance: 'שאלון של 10 שאלות שמעריך מגבלה תפקודית.', positive: 'ציון >15/50 (>30%) מצביע על מגבלה משמעותית.', sn: '85%', sp: '80%' }
          ]
        },
        {
          name: 'מיאלופתיה צווארית',
          nameEn: 'Cervical Myelopathy',
          shortDesc: 'דחיסה של חוט השדרה הצווארי',
          fullDescription: '🚨 דגל אדום! דחיסה של חוט השדרה הצווארי, לרוב מסיבות דגנרטיביות (CSM - Cervical Spondylotic Myelopathy). גורמת לסימני UMN, חוסר קואורדינציה, הפרעות שלפוחיתיות. ההתקדמות יכולה להיות הדרגתית או מדורגת. דורשת התערבות ניתוחית במקרים רבים.',
          clinicalSigns: 'הליכה רחבת בסיס, חוסר יציבות, אי-קואורדינציה של היד, רפלקסים מוגברים, סימן Babinski, סימן Hoffmann.',
          tests: [
            { name: 'Hoffmann Sign', nameEn: "Hoffmann's Sign", performance: 'הבודק אוחז באצבע 3 של המטופל ומקיש על הציפורן (או המגלל הדיסטלי) כלפי מטה.', positive: 'פלקסיה ראקטיבית של האגודל ואצבע 2 - חיובי. סימן UMN.', sn: '58%', sp: '78%' },
            { name: 'Inverted Supinator', nameEn: 'Inverted Supinator Sign', performance: 'הבודק מקיש עם פטיש רפלקסים על גיד ה-Brachioradialis (קצה הדיסטלי).', positive: 'במקום סופינציה - יש פלקסיה של אצבעות (תגובה ספינלית של C8-T1 דרך מסלול UMN פגוע).', sn: '61%', sp: '78%' },
            { name: 'Cook\'s 5-Item Cluster', nameEn: "Cook's Cluster", performance: 'שילוב 5 פרמטרים: 1) גיל >45, 2) הליכה רחבת בסיס/ספסטית, 3) Hoffmann חיובי, 4) Inverted Supinator חיובי, 5) Babinski חיובי.', positive: '3 מתוך 5 חיובי - LR+ של 30.9. 4 חיוביים - LR+ של ~91.', sn: '94%', sp: '99%' },
            { name: 'Lhermitte Sign', nameEn: 'Lhermitte\'s Sign', performance: 'בישיבה. הבודק מבצע פלקסיה צווארית פסיבית פתאומית.', positive: 'תחושת חשמל יורדת לאורך עמוד השדרה או לגפיים - חיובי. סימן ל-MS, מיאלופתיה.', sn: '27%', sp: '97%' }
          ]
        }
      ]
    },

    thoracic: {
      name: 'עמוד שדרה גבי',
      nameEn: 'Thoracic Spine',
      pathologies: [
        {
          name: 'תסמונת T4',
          nameEn: 'T4 Syndrome',
          shortDesc: 'כאב צווארי-גבי עליון עם הקרנה ליד וכאבי ראש',
          fullDescription: 'תסמונת המקושרת לדיספונקציה של המקטעים הצווארי-גביים העליונים (T2-T7), בעיקר T4. גורמת לכאב מקרין ליד עם פרסטזיות בלתי-דרמטומליות, כאבי ראש, ולעיתים סחרחורת. המנגנון - גירוי של הסימפתטיקוס.',
          clinicalSigns: 'פרסטזיות לא-דרמטומליות ביד, רגישות במפרקים T2-T7, הגבלת תנועה גבית.',
          tests: [
            { name: 'PA Glides', nameEn: 'PA Spring Test', performance: 'המטופל בשכיבה על הבטן. הבודק מפעיל לחץ קדמי-אחורי בודד על כל פרוצסוס ספינוסוס מ-T1 עד T7.', positive: 'שחזור הסימפטומים או רגישות מוגברת ברמה ספציפית - חיובי.', sn: '70%', sp: '70%' }
          ]
        },
        {
          name: 'דיספונקציה קוסטו-ורטברלית',
          nameEn: 'Costovertebral Joint Dysfunction',
          shortDesc: 'בעיה במפרק שבין הצלעות לחוליות',
          fullDescription: 'דיספונקציה של המפרק בין הצלעות לחוליות הגביות. גורמת לכאב חד שמחמיר בנשימה עמוקה, שיעול, או סיבובי גוף. לעיתים מתבלבל עם תעוקה לבבית או פלאוריטיס.',
          clinicalSigns: 'כאב חד מקומי שמחמיר בנשימה, רגישות מקומית, מחמיר בסיבוב.',
          tests: [
            { name: 'Rib Spring Test', nameEn: 'Rib Spring', performance: 'בשכיבה על הבטן. הבודק מפעיל לחץ קדמי-אחורי על הצלעות באופן פרטני.', positive: 'כאב חד מקומי או הגבלה בתנועה - חיובי.', sn: '65%', sp: '75%' }
          ]
        }
      ]
    },

    lumbar: {
      name: 'עמוד שדרה מותני',
      nameEn: 'Lumbar Spine',
      pathologies: [
        {
          name: 'פריצת דיסק מותני',
          nameEn: 'Lumbar Disc Herniation',
          shortDesc: 'בלט של גרעין הפולפי שעלול לדחוס שורש עצב',
          fullDescription: 'בלט של חומר הגרעין הפולפי דרך הטבעת הפיברוטית של הדיסק הבין-חולייתי, לעיתים דוחס שורש עצב וגורם לסיאטיקה. הרמות הנפוצות: L4-L5 ו-L5-S1. שכיחות שיא בגיל 30-50. רוב המקרים (~90%) משתפרים בטיפול שמרני.',
          clinicalSigns: 'כאב גב + כאב מקרין לרגל מתחת לברך, נימולים בדרמטום, חולשה במיוטום, "קשירה" בעת שיעול/התעטשות.',
          tests: [
            { name: 'Straight Leg Raise', nameEn: "SLR / Lasègue's Test", performance: 'המטופל בשכיבה על הגב. הבודק מרים פסיבית את הרגל הסימפטומטית הישרה (ברך מיושרת) באטיות.', positive: 'הקרנת כאב מתחת לברך בטווח של 30°-70° - חיובי. כאב מעל 70° או רק בגב התחתון - אינו חיובי לפריצת דיסק.', sn: '91%', sp: '26%' },
            { name: 'Crossed SLR', nameEn: 'Crossed Straight Leg Raise', performance: 'הרמת הרגל ה\u200fבריאה (הא-סימפטומטית).', positive: 'כאב ברגל הסימפטומטית בעת הרמת הרגל הבריאה - חיובי. אינדיקציה חזקה לפריצת דיסק גדולה.', sn: '29%', sp: '88%' },
            { name: 'Slump Test', nameEn: 'Slump Test', performance: 'המטופל בישיבה על קצה המיטה. רצף: 1) פלקסיה של עמוד שדרה (slump), 2) פלקסיה צווארית, 3) אקסטנציה של ברך, 4) דורסיפלקסיה של קרסול. אם יש סימפטומים - מסירים פלקסיה צווארית.', positive: 'שחזור הסימפטומים שמוקלים עם אקסטנציה צווארית - חיובי למתח של מערכת העצבים.', sn: '84%', sp: '83%' },
            { name: 'Femoral Nerve Stretch', nameEn: 'Reverse SLR / Prone Knee Bend', performance: 'בשכיבה על הבטן. הבודק מבצע פלקסיה פסיבית של הברך, יכול להוסיף אקסטנציה של הירך.', positive: 'כאב בקדמת הירך - חיובי לדחיסה של שורשי L2-L4.', sn: '50%', sp: '100%' },
            { name: 'Bowstring Sign', nameEn: 'Cram Test', performance: 'מבוצע אחרי SLR חיובי. כשמופיע כאב, הבודק מוריד את הרגל מעט ואז מפעיל לחץ על הפוסה הפופליטאלית.', positive: 'הופעת כאב במנח מורד - חיובי.', sn: '70%', sp: '82%' }
          ]
        },
        {
          name: 'דיספונקציה SI',
          nameEn: 'Sacroiliac Joint Dysfunction',
          shortDesc: 'בעיה במפרק הסקרואיליאק',
          fullDescription: 'מפרק SI מחבר בין עצם העצה (Sacrum) לעצם הכסל (Ilium). דיספונקציה יכולה להיות מקור לכאב גב תחתון/עכוז ב-15%-25% מהמקרים. גורמים: היריון, חבלה, לאחר אופרציית גב, אי-סימטריה. אבחנה מתבססת על שילוב של בדיקות פרובוקטיביות (Cluster).',
          clinicalSigns: 'כאב באזור SI, מתחת לקו המותני, יכול להקרין לעכוז ולירך אך לא מתחת לברך.',
          tests: [
            { name: 'FABER Test', nameEn: "Patrick's Test", performance: 'בשכיבה על הגב. הקרסול הסימפטומטי על הברך הנגדית (פלקסיה+אבדוקציה+רוטציה חיצונית). הבודק מקבע את ASIS הנגדי, ולוחץ על הברך הסימפטומטית כלפי מטה.', positive: 'כאב במפרק SI (לא במפשעה - שזה לפתולוגיית ירך) - חיובי.', sn: '70%', sp: '85%' },
            { name: 'Thigh Thrust', nameEn: 'Posterior Shear Test', performance: 'בשכיבה. הירך הסימפטומטית בפלקסיה 90°. הבודק מקבע את האגן הנגדי ומפעיל כוח לאורך ציר הפמור כלפי מטה (אחורה).', positive: 'שחזור הכאב במפרק SI - חיובי. בדיקה רגישה.', sn: '88%', sp: '69%' },
            { name: 'Compression Test', nameEn: 'SI Compression', performance: 'בשכיבה על הצד הא-סימפטומטי. הבודק מפעיל לחץ אנכי כלפי מטה על האגן.', positive: 'שחזור כאב במפרק SI - חיובי.', sn: '69%', sp: '69%' },
            { name: 'Distraction Test', nameEn: 'SI Distraction / Gapping', performance: 'בשכיבה על הגב. הבודק מצליב ידיים על ה-ASIS משני הצדדים ומפעיל לחץ כלפי חוץ ואחורה.', positive: 'שחזור כאב במפרק SI - חיובי.', sn: '60%', sp: '81%' },
            { name: 'Gaenslen Test', nameEn: "Gaenslen's Test", performance: 'בשכיבה. הרגל הסימפטומטית תלויה מעבר לקצה המיטה (בהיפראקסטנציה). הרגל הא-סימפטומטית בפלקסיה מקסימלית לחזה. הבודק מפעיל לחץ נוסף.', positive: 'שחזור כאב במפרק SI - חיובי.', sn: '53%', sp: '71%' },
            { name: 'Laslett 5-Test Cluster', nameEn: '5-Test Cluster', performance: 'שילוב: Distraction, Compression, Thigh Thrust, Sacral Thrust, Gaenslen.', positive: '3 מתוך 5 חיובי - חיובי לבעיה SI. LR+ של 4.', sn: '85%', sp: '79%' }
          ]
        },
        {
          name: 'היצרות תעלת השדרה',
          nameEn: 'Lumbar Spinal Stenosis',
          shortDesc: 'היצרות של תעלת השדרה המותנית',
          fullDescription: 'היצרות של התעלה הספינלית או של ה-Lateral recess בעמוד השדרה המותני, גורמת לדחיסה של שורשי הסוס. לרוב דגנרטיבי - בקשישים. מתבטא ב-Neurogenic Claudication: כאב/חולשה ברגליים בעמידה והליכה, שמוקלים בישיבה או בכיפוף קדימה (פוזיציית "Shopping cart").',
          clinicalSigns: 'קלאודיקציה נוירוגנית, הקלה בכיפוף קדימה, יכולת להליכה ארוכה כשעולים על אופניים (בכיפוף).',
          tests: [
            { name: 'Two-Stage Treadmill', nameEn: 'Treadmill Test', performance: 'המטופל הולך על הליכון פעם אחת בשיפוע 0° (זקוף) ופעם בשיפוע +15° (כפיפה).', positive: 'הופעת סימפטומים מהר יותר במצב זקוף לעומת מצב כפוף - חיובי לסטנוזיס.', sn: '68%', sp: '83%' },
            { name: 'אנמנזה - הקלה בכיפוף', nameEn: 'Forward Flexion Relief', performance: 'שאלה: "האם הסימפטומים מוקלים כשאתה כופף קדימה / יושב / נשען על עגלת קניות?"', positive: 'תשובה חיובית - מצביעה על סטנוזיס.', sn: '79%', sp: '44%' },
            { name: 'Cluster של Cook', nameEn: "Cook's Cluster", performance: 'שילוב: גיל >48, כאב משופר בישיבה, כאב מחמיר בעמידה, מחמיר בהליכה.', positive: '4 מתוך 5 חיוביים: LR+ של 13.', sn: '40%', sp: '95%' }
          ]
        },
        {
          name: 'ספונדילוליסטזיס',
          nameEn: 'Spondylolisthesis',
          shortDesc: 'החלקה קדמית של חוליה',
          fullDescription: 'החלקה של חוליה אחת על השנייה, לרוב קדימה. סווג ל-5 סוגים (Wiltse): Dysplastic, Isthmic, Degenerative, Traumatic, Pathological. הרמה הנפוצה ביותר: L5-S1 (Isthmic) ו-L4-L5 (Degenerative). מסווג לפי Meyerding ל-Grades I-V.',
          clinicalSigns: 'כאב גב תחתון, "מדרגה" ניתנת למישוש בפרוצסוס ספינוסוס, היפראלוסיס מותני, "Hamstring tightness".',
          tests: [
            { name: 'Step-Off Sign', nameEn: 'Palpable Step-Off', performance: 'מישוש פרוצסוסי ספינוסוס מותניים בעמידה - חיפוש "מדרגה".', positive: 'מדרגה ברורה ניתנת למישוש - חיובי. הסימן הקליני המהימן ביותר.', sn: '88%', sp: '60%' },
            { name: 'One-Leg Hyperextension', nameEn: 'Stork Test', performance: 'המטופל עומד על רגל אחת ומבצע אקסטנציה של עמוד השדרה.', positive: 'כאב חד באותו צד - חיובי. בעיקר ל-Spondylolysis (קרע ב-Pars).', sn: '50%', sp: '46%' }
          ]
        },
        {
          name: 'תסמונת קאודה אקווינה',
          nameEn: 'Cauda Equina Syndrome',
          shortDesc: '🚨 חירום! דחיסה של שורשי הסוס',
          fullDescription: '🚨 חירום רפואי! דחיסה משמעותית של שורשי העצבים הקאודלים בתעלת השדרה. הסיבה הנפוצה: פריצת דיסק מסיבית. דורש התערבות ניתוחית דחופה (תוך 24-48 שעות) למניעת נזק קבוע. סימני אזהרה ("Red Flags"): אי שליטה על סוגרים, אנסטזיה אוכף, חולשה דו צדדית של גפיים תחתונות.',
          clinicalSigns: 'אי שליטה על שתן/צואה, אנסטזיה באזור האוכף (פרינאום, אגן פנימי), חולשה דו-צדדית של גפיים תחתונות, אינ\u200fפוטנטיה.',
          tests: [
            { name: 'Saddle Anesthesia', nameEn: 'Saddle Sensation', performance: 'בדיקת תחושה (קל, מחט) באזור הפרינאום, פנים-רגליים, אזור הישבן הפנימי.', positive: 'אנסטזיה או היפואסתזיה משמעותית - חיובי. דגל אדום קריטי.', sn: '75%', sp: '90%' },
            { name: 'Anal Tone / Reflex', nameEn: 'Anal Tone & Bulbocavernosus Reflex', performance: 'בדיקה רקטלית של טונוס הסוגר ורפלקס בולבוקברנוזוס.', positive: 'טונוס מופחת או היעדר רפלקס - חיובי לפגיעה בשורשי הסוס.', sn: '60%', sp: '90%' },
            { name: 'Post-Void Residual', nameEn: 'PVR > 100 ml', performance: 'מדידת שאריות שתן בשלפוחית לאחר השתנה, באמצעות אולטרסאונד או קטטר.', positive: '>100 מ"ל - חשד לאצירת שתן עקב CES.', sn: '90%', sp: '95%' }
          ]
        },
        {
          name: 'מפרק פצטה',
          nameEn: 'Lumbar Facet Joint Syndrome',
          shortDesc: 'דיספונקציה במפרק הזיגאפופיזיאלי',
          fullDescription: 'מקור כאב ב-15%-40% מהמקרים של כאבי גב כרוניים. שחיקה דגנרטיבית של מפרקי הפצטה. מאופיין בכאב מקומי או הקרנה לישבן/ירך (לא מתחת לברך), מחמיר באקסטנציה ובסיבוב, מוקל בכיפוף.',
          clinicalSigns: 'כאב מותני שמחמיר באקסטנציה וסיבוב, רגישות פרסספינלית.',
          tests: [
            { name: 'Lumbar Extension Rotation', nameEn: 'Kemp\'s Test', performance: 'בעמידה. הבודק עומד מאחור, מבצע אקסטנציה של עמוד השדרה תוך הטיה וסיבוב לכיוון הסימפטומטי.', positive: 'שחזור הכאב המקומי - חיובי לפצטה.', sn: '50%', sp: '79%' }
          ]
        },
        {
          name: 'ספונדילוליזיס',
          nameEn: 'Spondylolysis',
          shortDesc: 'שבר עומס ב-Pars Interarticularis',
          fullDescription: 'שבר עומס (לעיתים אקוטי) ב-Pars Interarticularis של החוליה - לרוב L5 (90% מהמקרים), פחות שכיח ב-L4. שונה מספונדילוליסטזיס - זה רק שבר ב-Pars, ללא החלקה. אם דו-צדדי - יכול להוביל לספונדילוליסטזיס איסטמית. נפוץ במיוחד באתלטים צעירים (12-18) שמבצעים אקסטנציה חוזרת של עמוד השדרה (התעמלות, צלילה, כדורגל, קריקט). גורם משמעותי לכאב גב בגיל הצעיר. אבחנה ב-MRI / SPECT scan.',
          clinicalSigns: 'כאב מותני (לרוב חד-צדדי) שמחמיר באקסטנציה ומוקל בכיפוף, מחמיר בפעילות ספורטיבית, רגישות במישוש על ה-Spinous Process של L5.',
          tests: [
            { name: 'Single Leg Hyperextension', nameEn: 'Stork Test', performance: 'המטופל עומד על רגל אחת ומבצע אקסטנציה של עמוד השדרה. חוזרים על שתי הרגליים.', positive: 'כאב חד באותו צד של הרגל העומדת - חיובי. במיוחד אם הסימפטומים חוזרים בעקביות.', sn: '50%', sp: '46%' },
            { name: 'Active SLR', nameEn: 'Active Straight Leg Raise', performance: 'בשכיבה על הגב. המטופל מרים את הרגל הישרה.', positive: 'כאב משמעותי - מצביע על אי יציבות לומבר.', sn: '60%', sp: '70%' },
            { name: 'Lumbar Extension', nameEn: 'Lumbar Extension Test', performance: 'בעמידה. אקסטנציה אקטיבית של עמוד השדרה.', positive: 'כאב מקומי משמעותי - חיובי. במיוחד באתלטים צעירים.', sn: '70%', sp: '65%' }
          ]
        }
      ]
    },

    hip: {
      name: 'ירך',
      nameEn: 'Hip',
      pathologies: [
        {
          name: 'FAI - Femoroacetabular Impingement',
          nameEn: 'Femoroacetabular Impingement',
          shortDesc: 'התנגשות מבנית בין ראש הפמור לאצטבולום',
          fullDescription: 'התנגשות בין ראש הפמור לקצה האצטבולום עקב חריגות מבניות. שלושה סוגים: 1) CAM - חוסר ספריות של ראש הפמור (נפוץ בגברים צעירים, ספורטיבים). 2) Pincer - כיסוי יתר של האצטבולום (נפוץ בנשים בגיל אמצע). 3) Combined - שילוב. גורם לכאב מפשעתי וסיכון מוגבר לקרעי לברום ואוסטאוארתריטיס מוקדמת.',
          clinicalSigns: 'כאב מפשעתי ("C-sign" - אוחזים את הירך עם C של הא-בוהן והאצבעות), הגבלת רוטציה פנימית, מחמיר בישיבה ממושכת, סקווט עמוק.',
          tests: [
            { name: 'FADIR', nameEn: 'Anterior Impingement Test', performance: 'בשכיבה על הגב. הבודק מבצע פלקסיה של הירך ל-90°, אדוקציה (מעבר לקו האמצע), ורוטציה פנימית פסיבית.', positive: 'כאב מפשעתי חד - חיובי. בדיקה מאוד רגישה אך לא ספציפית.', sn: '94%', sp: '9%' },
            { name: 'FABER', nameEn: "Patrick's Test", performance: 'בשכיבה. הקרסול הסימפטומטי על הברך הנגדית (פלקסיה+אבדוקציה+רוטציה חיצונית). לחץ על הברך כלפי מטה.', positive: 'כאב מפשעתי - חיובי. אם כאב SI - לבעיה ב-SI.', sn: '60%', sp: '18%' },
            { name: 'Internal Rotation Loss', nameEn: 'IR ROM at 90° flexion', performance: 'בשכיבה. הירך בפלקסיה 90°, מודדים רוטציה פנימית פסיבית.', positive: 'רוטציה פנימית <20° - חיובי ל-FAI.', sn: '57%', sp: '93%' },
            { name: 'Posterior Impingement', nameEn: 'Posterior Impingement Test', performance: 'בשכיבה, הירך מעבר לקצה המיטה. הבודק מבצע אקסטנציה של הירך עם רוטציה חיצונית.', positive: 'כאב במפשעה האחורית - חיובי לאימפינג\'מנט אחורי.', sn: '60%', sp: '40%' }
          ]
        },
        {
          name: 'GTPS - תסמונת הטרוכנטר הגדול',
          nameEn: 'Greater Trochanteric Pain Syndrome',
          shortDesc: 'טנדינופתיה של גידי הגלוטאוס מדיוס/מינימוס',
          fullDescription: 'בעבר נחשב לבורסיטיס, אך כיום מוכר שב-90% מהמקרים מדובר בטנדינופתיה (ולעיתים קרע) של גידי Gluteus Medius ו-Minimus במקום היאחזותם בטרוכנטר הגדול. נפוץ בנשים בגיל אמצע, רצים, ועם BMI גבוה.',
          clinicalSigns: 'כאב לטרלי בירך, רגישות במישוש על הטרוכנטר הגדול, כאב לילי בשכיבה על הצד הסימפטומטי.',
          tests: [
            { name: 'Trendelenburg', nameEn: 'Trendelenburg Test', performance: 'המטופל עומד על הרגל הסימפטומטית למשך 30 שניות. הבודק צופה באגן.', positive: 'נפילה של האגן בצד הנגדי לרגל העומדת > 2 ס"מ - חיובי לחולשת גלוטאוס מדיוס.', sn: '73%', sp: '77%' },
            { name: 'Resisted ER Test', nameEn: 'Resisted External Derotation', performance: 'בשכיבה על הגב. הירך והברך בפלקסיה 90°. הבודק מסובב פסיבית לרוטציה חיצונית, ואז מבקש מהמטופל לחזור לאמצע כנגד התנגדות.', positive: 'כאב לטרלי בעת ההתנגדות - חיובי.', sn: '88%', sp: '97%' },
            { name: 'Single Leg Stance 30s', nameEn: '30-Sec Single Leg Stance', performance: 'עמידה על הרגל הסימפטומטית למשך 30 שניות.', positive: 'שחזור הכאב הלטרלי - חיובי.', sn: '100%', sp: '98%' },
            { name: 'FABER', nameEn: 'FABER (modified)', performance: 'בדיקה רגילה.', positive: 'כאב לטרלי (בטרוכנטר) - חיובי ל-GTPS, בשונה מכאב מפשעתי שזה ירך פנימי.', sn: '60%', sp: '70%' }
          ]
        },
        {
          name: 'אוסטאוארתריטיס ירך',
          nameEn: 'Hip Osteoarthritis',
          shortDesc: 'שחיקה דגנרטיבית של מפרק הירך',
          fullDescription: 'מחלה דגנרטיבית של הסחוס המפרקי בירך. שכיחות עולה משמעותית מעל גיל 50. גורמי סיכון: גיל, מין נשי, הרדמות מולדות (Hip dysplasia), FAI ממושך, השמנה.',
          clinicalSigns: 'כאב מפשעתי או במושב, קיפאון בוקר <30 דקות, "Capsular pattern" - הגבלה של פלקסיה > רוטציה פנימית > אבדוקציה > אקסטנציה.',
          tests: [
            { name: 'Sutlive 5-Item Cluster', nameEn: 'Sutlive Cluster', performance: 'שילוב 5 פרמטרים: 1) רוטציה פנימית פסיבית כואבת, 2) סקווט כואב, 3) Scour test כואב, 4) אקסטנציה אקטיבית כואבת, 5) רוטציה פנימית פסיבית <25°.', positive: '3 מתוך 5 חיוביים: LR+ של 5.2. 4 מתוך 5: LR+ של 24.', sn: '14%', sp: '98%' },
            { name: 'FABER', nameEn: 'FABER Test', performance: 'בדיקה רגילה.', positive: 'כאב מפשעתי - חיובי לפתולוגיה תוך-מפרקית.', sn: '60%', sp: '40%' },
            { name: 'Scour Test', nameEn: 'Quadrant Test', performance: 'בשכיבה. הירך בפלקסיה 90° + אדוקציה. הבודק מפעיל לחץ אקסיאלי לאורך הפמור תוך כדי תנועות סיבוב.', positive: 'כאב או "קליק" - חיובי לפתולוגיה תוך-מפרקית.', sn: '62%', sp: '75%' }
          ]
        },
        {
          name: 'קרע בלברום הירך',
          nameEn: 'Acetabular Labral Tear',
          shortDesc: 'קרע בלברום (סחוס סביב האצטבולום)',
          fullDescription: 'הלברום הוא טבעת סחוסית מסביב לאצטבולום שמגדילה את שטח המגע ומהווה איטום למפרק. קרעים נפוצים בעיקר באזור האנטריו-סופריורי. גורמים: FAI (הנפוץ ביותר), חבלה, היפרמוביליות, דיספלזיה.',
          clinicalSigns: '"C-sign", "קליק" בעת תנועה, כאב במפשעה, מחמיר בישיבה ממושכת.',
          tests: [
            { name: 'FADIR', nameEn: 'FADIR Test', performance: 'בדיקה רגילה.', positive: 'כאב מפשעתי או "קליק" - חיובי. רגיש מאוד אך לא ספציפי.', sn: '78%', sp: '10%' },
            { name: 'Anterior Apprehension', nameEn: 'Anterior Hip Apprehension', performance: 'בשכיבה. הרגל הסימפטומטית מעבר לקצה המיטה. הבודק מבצע אקסטנציה ורוטציה חיצונית של הירך.', positive: 'תחושת חשש או "Click" כואב - חיובי.', sn: '50%', sp: '90%' },
            { name: 'Scour Test', nameEn: 'Hip Quadrant', performance: 'בדיקה רגילה.', positive: '"קליק" - חיובי.', sn: '62%', sp: '75%' }
          ]
        },
        {
          name: 'בקע ספורטיבי',
          nameEn: 'Athletic Pubalgia / Sports Hernia',
          shortDesc: 'פגיעה בשרירי הבטן והאדוקטורים בכדורגלנים',
          fullDescription: 'תסמונת של כאב מפשעתי באתלטים, כתוצאה מחוסר איזון בין שרירי הבטן (rectus abdominis) לאדוקטורים (במיוחד adductor longus). נפוצה בכדורגלנים, האקיסטים. אבחנה אבחנתית מורכבת - דורשת לעיתים קרובות הדמיה ושלילה של פתולוגיות אחרות.',
          clinicalSigns: 'כאב מפשעתי בעת פעילות, מחמיר בבעיטה, ספרינטים, סיבובים. הקלה במנוחה.',
          tests: [
            { name: 'Resisted Sit-Up', nameEn: 'Resisted Sit-Up', performance: 'המטופל בשכיבה. מבצע סיט-אפ כנגד התנגדות הבודק.', positive: 'כאב בקצה הדיסטלי של ה-Rectus Abdominis (קרוב לסימפיזיס פוביס) - חיובי.', sn: '75%', sp: '70%' },
            { name: 'Adductor Squeeze', nameEn: 'Squeeze Test', performance: 'בשכיבה. בודקים ב-3 פוזיציות: 0° פלקסיה, 45°, ו-90°. הבודק מניח אגרוף בין הברכיים והמטופל לוחץ.', positive: 'כאב מפשעתי באחד מהמנחים - חיובי. ב-0° נפוץ יותר עבור פגיעה דיסטלית.', sn: '70%', sp: '60%' }
          ]
        },
        {
          name: 'תסמונת המוסקולוס פיריפורמיס',
          nameEn: 'Piriformis Syndrome',
          shortDesc: 'דחיסה של עצב הסיאטיק ע"י שריר הפיריפורמיס',
          fullDescription: 'דחיסה של עצב הסיאטיק כשהוא עובר ליד או דרך שריר הפיריפורמיס. גורם לכאב בעכוז שמקרין לרגל, יכול להידמות לסיאטיקה רדיקולרית. נפוצה ביושבים ממושכים, רצים.',
          clinicalSigns: 'כאב עכוז עמוק, מחמיר בישיבה, הקלה בעמידה/הליכה.',
          tests: [
            { name: 'FAIR Test', nameEn: 'Flexion-Adduction-Internal Rotation', performance: 'בשכיבה על הצד הא-סימפטומטי. הירך הסימפטומטית בפלקסיה 60°, אדוקציה ורוטציה פנימית.', positive: 'כאב עכוזי שמקרין לרגל - חיובי.', sn: '88%', sp: '83%' },
            { name: 'Pace Test', nameEn: 'Pace\'s Test', performance: 'בישיבה. המטופל מבצע אבדוקציה של הירכיים כנגד התנגדות הבודק.', positive: 'כאב עכוז + חולשה - חיובי.', sn: '70%', sp: '65%' }
          ]
        },
        {
          name: 'Snapping Hip',
          nameEn: 'Snapping Hip Syndrome (Coxa Saltans)',
          shortDesc: 'תחושת/קול "קליק" או "Snap" בירך',
          fullDescription: 'תופעה של "קליק" שמיע או מורגש בירך בעת תנועה. מסווגת ל-3 סוגים: 1) חיצוני (Lateral) - ITB מעל הטרוכנטר הגדול (הנפוץ ביותר), 2) פנימי (Medial) - גיד Iliopsoas על Iliopectineal eminence, 3) תוך-מפרקי - לרוב קרע לברום או גופים חופשיים. נפוץ במיוחד ברקדנים, מתעמלים, אצנים. רוב המקרים אסימפטומטיים.',
          clinicalSigns: '"קליק" או "Snap" שניתן לשמוע / להרגיש בעת תנועות מסוימות. אם כואב - מעיד על דלקת מקומית.',
          tests: [
            { name: 'Ober\'s Test', nameEn: "Ober's Test", performance: 'בשכיבה על הצד הא-סימפטומטי, אבדוקציה ואקסטנציה של הרגל הסימפטומטית, ואז משחררים.', positive: 'הרגל לא יורדת + "קליק" לטרלי - חיובי לסוג חיצוני.', sn: '70%', sp: '75%' },
            { name: 'Bicycle Test', nameEn: 'Bicycle Test', performance: 'בשכיבה על הצד הא-סימפטומטי. תנועה דמוית רכיבה על אופניים של הרגל הסימפטומטית.', positive: '"קליק" לטרלי שניתן להרגיש - חיובי לסוג חיצוני.', sn: '85%', sp: '80%' },
            { name: 'Iliopsoas Snap Test', nameEn: 'Active Iliopsoas Snap', performance: 'בשכיבה. המטופל מביא את הירך מ-FABER לאקסטנציה.', positive: '"קליק" עמוק בקדמת הירך - חיובי לסוג פנימי.', sn: '80%', sp: '85%' }
          ]
        },
        {
          name: 'מתיחת האמסטרינג',
          nameEn: 'Hamstring Strain',
          shortDesc: 'קרע / מתיחה בשרירי האמסטרינג',
          fullDescription: 'הפגיעה השרירית הנפוצה ביותר בספורטאים, במיוחד בספרינטרים, כדורגלנים, רקדנים. מערב אחד או יותר משלושת השרירים: Biceps Femoris (הנפוץ), Semitendinosus, Semimembranosus. מסווגת ל-3 דרגות. מנגנון: עומס אקסצנטרי בעת ספרינט. שיעור החזרה גבוה (~30%) במיוחד אם החזרה לפעילות מוקדמת.',
          clinicalSigns: 'כאב פתאומי באחורי הירך, "Pop" אפשרי, חבלה אקיכמוטית, חולשה בפלקסיה של הברך, רגישות במישוש לאורך השריר.',
          tests: [
            { name: 'מישוש לאורך האמסטרינג', nameEn: 'Hamstring Palpation', performance: 'מישוש מהאישיום עד הפוסה הפופליטאלית.', positive: 'רגישות חדה במקום מסוים, ייתכן Defect (קרע).', sn: '90%', sp: '85%' },
            { name: 'Active Knee Extension', nameEn: 'Resisted Knee Flexion', performance: 'בשכיבה על הבטן, פלקסיה של ברך כנגד התנגדות.', positive: 'כאב + חולשה - חיובי.', sn: '85%', sp: '70%' },
            { name: 'Bent Knee Stretch Test', nameEn: 'Puranen-Orava Test', performance: 'בעמידה. הרגל הסימפטומטית על משטח גבוה (כיסא), הברך מיושרת. כיפוף קדימה אקטיבי לכיוון הרגל.', positive: 'כאב חד באישיום או באמצע האמסטרינג - חיובי.', sn: '76%', sp: '82%' }
          ]
        },
        {
          name: 'מתיחת אדוקטור',
          nameEn: 'Adductor Strain (Groin Pull)',
          shortDesc: 'קרע / מתיחה בשרירי האדוקטורים',
          fullDescription: 'פגיעה בשרירי האדוקטורים, בעיקר Adductor Longus (90% מהמקרים). מנגנון: שינוי כיוון פתאומי, בעיטה לרוחב, או עומס אקסצנטרי. נפוצה בכדורגלנים, האקיסטים, ספורט שמערב כיווני תנועה רב-כיווניים. מסווגת ל-3 דרגות, ומיקום הפציעה (מקסום, אמצע, מקור) משפיע על זמן ההחלמה.',
          clinicalSigns: 'כאב במפשעה הפנימית, מחמיר באדוקציה כנגד התנגדות, חבלה אקיכמוטית, רגישות במישוש לאורך האדוקטור.',
          tests: [
            { name: 'Adductor Squeeze', nameEn: 'Squeeze Test', performance: 'בשכיבה. המטופל לוחץ אגרוף או כדור בין הברכיים בזוויות של 0°, 45°, 90° פלקסיה של ירך.', positive: 'כאב מפשעתי - חיובי. כאב ב-0° נפוץ בקרעים דיסטליים.', sn: '70%', sp: '60%' },
            { name: 'Resisted Adduction', nameEn: 'Resisted Adduction', performance: 'אדוקציה כנגד התנגדות בזוויות שונות.', positive: 'כאב + חולשה - חיובי.', sn: '85%', sp: '70%' },
            { name: 'Hip External Rotation Stretch', nameEn: 'Adductor Stretch', performance: 'מתיחה פסיבית של האדוקטורים - אבדוקציה ורוטציה חיצונית.', positive: 'כאב מפשעתי - חיובי.', sn: '80%', sp: '65%' }
          ]
        },
        {
          name: 'טנדינופתיה אילופסואס',
          nameEn: 'Iliopsoas Tendinopathy',
          shortDesc: 'דלקת/טנדינופתיה של גיד האילופסואס',
          fullDescription: 'טנדינופתיה של גיד האילופסואס במקום היאחזותו ב-Lesser Trochanter. נפוצה ברקדני בלט, אצנים, רוכבי אופניים. גורם נפוץ: שימוש יתר בפלקסיה של הירך. לעיתים גורם ל-Snapping Hip פנימי. אבחנה מבדלת: Athletic Pubalgia, FAI.',
          clinicalSigns: 'כאב בקדמת הירך / מפשעתי עמוק, מחמיר בעלייה במדרגות, יציאה מהמכונית, סיט-אפ. רגישות במישוש על משולש Femoral.',
          tests: [
            { name: 'Resisted Hip Flexion', nameEn: 'Resisted Iliopsoas', performance: 'בשכיבה. הירך בפלקסיה 90°, פלקסיה אקטיבית כנגד התנגדות.', positive: 'כאב מפשעתי עמוק - חיובי.', sn: '80%', sp: '70%' },
            { name: 'Thomas Test', nameEn: 'Thomas Test', performance: 'בשכיבה. המטופל מביא ברך אחת לחזה, השנייה תלויה מעל המיטה.', positive: 'הרגל המוארכת לא יורדת לאופק - מתח אילופסואס. אפשרי גם כאב.', sn: '89%', sp: '92%' },
            { name: 'Iliopsoas Stretch', nameEn: 'Hip Extension Test', performance: 'בשכיבה על הבטן. אקסטנציה פסיבית של הירך.', positive: 'כאב בקדמת הירך - חיובי.', sn: '70%', sp: '75%' }
          ]
        },
        {
          name: 'שבר עומס בצוואר הפמור',
          nameEn: 'Femoral Neck Stress Fracture',
          shortDesc: '🚨 חירום! שבר עומס בצוואר הפמור',
          fullDescription: '🚨 דגל אדום! שבר עומס בצוואר עצם הירך - מצב שדורש אבחון מהיר ולעיתים ניתוח דחוף. מסווג ל-2 סוגים: 1) Compression (Inferior - יציב יותר), 2) Tension (Superior - לא יציב, סיכון גבוה לשבר מלא ול-Avascular Necrosis של ראש הפמור). גורמי סיכון: רצים, אצנים, חיילים, נשים עם Female Athlete Triad, אוסטאופניה, התעמלות. אבחון ב-MRI (תקין בצילום בשלבים מוקדמים). עיכוב באבחון = שבר מלא + סיבוכים ארוכי טווח.',
          clinicalSigns: 'כאב מפשעתי או בקדמת הירך שמחמיר בעמידה / משא, מקל במנוחה. מקרין לברך לעיתים. בשלבים מתקדמים - כאב לילי וגם במנוחה.',
          tests: [
            { name: 'Hop Test', nameEn: 'One-Leg Hop Test', performance: 'המטופל מנסה לקפוץ על הרגל הסימפטומטית.', positive: 'כאב חד מפשעתי שמונע מהמטופל לקפוץ - חיובי. רגיש מאוד לשבר עומס.', sn: '70%', sp: '85%' },
            { name: 'Fulcrum Test', nameEn: 'Fulcrum Test', performance: 'בישיבה. הבודק מניח אמה מתחת לפמור באמצע ולוחץ קל על הברך.', positive: 'כאב חד במפשעה - חיובי.', sn: '93%', sp: '75%' },
            { name: 'Patellar-Pubic Percussion', nameEn: 'Patellar-Pubic Percussion Test', performance: 'הבודק מקיש קלות על הפיקה תוך האזנה עם סטטוסקופ על הסימפיסיס פוביס.', positive: 'הפחתת ההולכה הצלילית - חיובי לשבר.', sn: '95%', sp: '86%' },
            { name: 'Hip ROM כואב בקצוות', nameEn: 'End-Range Hip Pain', performance: 'בדיקת ROM פסיבי של הירך לכל הכיוונים.', positive: 'כאב בקצוות התנועה (במיוחד IR) - חיובי.', sn: '60%', sp: '50%' }
          ]
        },
        {
          name: 'בורסיטיס טרוכנטרית קלאסית',
          nameEn: 'Trochanteric Bursitis (True)',
          shortDesc: 'דלקת אמיתית של הבורסה הטרוכנטרית',
          fullDescription: 'דלקת של הבורסה הסבטרוכנטרית עצמה - בעוד ש-90% מהמקרים שמאובחנים כ-"בורסיטיס" הם למעשה GTPS (טנדינופתיה של הגלוטאוסים), בערך 10% הם בורסיטיס אמיתית. נדיר יותר, נפוץ במצבים: זיהום (חשוד אם חום + אדום), חבלה, מחלות דלקתיות (RA, גאוט). אבחנה מבדלת קריטית מ-GTPS.',
          clinicalSigns: 'נפיחות גלויה לטרלית (בורסה גדולה), כאב חד יותר מ-GTPS, סימני דלקת (חום, אדום) - דורש שלילת זיהום.',
          tests: [
            { name: 'מישוש טרוכנטר', nameEn: 'Trochanter Palpation', performance: 'מישוש על הטרוכנטר הגדול והאזור סביבו.', positive: 'נפיחות + רגישות חדה במיוחד מעל הבורסה - חיובי.', sn: '85%', sp: '60%' },
            { name: 'אולטרסאונד', nameEn: 'Ultrasound', performance: 'בדיקת US של הבורסה הסבטרוכנטרית.', positive: 'נוזל בבורסה - חיובי. ב-GTPS אין נוזל אלא רק עיבוי הגיד.', sn: '95%', sp: '95%' }
          ]
        },
        {
          name: 'מתיחת קוואדריצפס',
          nameEn: 'Quadriceps Strain',
          shortDesc: 'קרע / מתיחה בשרירי הקוואדריצפס',
          fullDescription: 'פגיעה בשרירי הקוואדריצפס, לרוב ב-Rectus Femoris (הנפוץ - 80%) - השריר היחיד שעובר על שני מפרקים (ירך וברך), מה שמגביר את הסיכון. מנגנון: כיווץ אקסצנטרי פתאומי - בעיטה, ספרינט, קפיצה. נפוצה בכדורגל, פוטבול אמריקאי. מסווגת ל-3 דרגות.',
          clinicalSigns: 'כאב פתאומי בקדמת הירך, "Pop" אפשרי, חבלה אקיכמוטית, חולשה באקסטנציה של הברך, כאב בעלייה במדרגות וריצה.',
          tests: [
            { name: 'Resisted Knee Extension', nameEn: 'Resisted Quad', performance: 'אקסטנציה של ברך כנגד התנגדות.', positive: 'כאב + חולשה - חיובי.', sn: '90%', sp: '70%' },
            { name: 'Quadriceps Stretch (Ely Test)', nameEn: "Ely's Test", performance: 'בשכיבה על הבטן. הבודק מבצע פלקסיה פסיבית של הברך עד שהעקב נוגע בעכוז.', positive: 'כאב חד בקדמת הירך - חיובי. גם מצביע על קונטרקטורה.', sn: '85%', sp: '75%' },
            { name: 'Active Knee Extension', nameEn: 'Active Knee Extension Lag', performance: 'בישיבה. אקסטנציה אקטיבית מלאה של הברך.', positive: 'הגבלה (Lag) באקסטנציה מלאה - חיובי, מצביע על קרע משמעותי.', sn: '80%', sp: '85%' }
          ]
        },
        {
          name: 'Hip Pointer',
          nameEn: 'Hip Pointer (Iliac Crest Contusion)',
          shortDesc: 'חבלה ישירה על קצה האילאום',
          fullDescription: 'חבלה ישירה (Contusion) על קצה האילאום - לרוב כתוצאה ממכה ישירה בספורט קונטקט (פוטבול אמריקאי, האקי, רוגבי). למרות שנשמע שטחי, זה הופך מאוד כואב ומגביל תפקוד. הזמן הממוצע לחזרה לספורט: 1-3 שבועות.',
          clinicalSigns: 'כאב מקומי על קצה האילאום, חבלה אקיכמוטית, רגישות חדה במישוש, כאב בעת הליכה / סיבוב הגב, נימולים בעצבוב Lateral Cutaneous Nerve (לעיתים).',
          tests: [
            { name: 'Iliac Crest Palpation', nameEn: 'Iliac Crest Palpation', performance: 'מישוש לאורך קצה האילאום.', positive: 'רגישות חדה מקומית - חיובי.', sn: '95%', sp: '85%' },
            { name: 'Resisted Hip Abduction', nameEn: 'Resisted Hip Abduction', performance: 'אבדוקציה של הירך כנגד התנגדות.', positive: 'כאב מקומי - חיובי בשל מקור היאחזות של Glut Med.', sn: '75%', sp: '70%' }
          ]
        },
        {
          name: 'Meralgia Paresthetica',
          nameEn: 'Meralgia Paresthetica',
          shortDesc: 'דחיסה של עצב Lateral Femoral Cutaneous',
          fullDescription: 'דחיסה של עצב ה-Lateral Femoral Cutaneous Nerve (LFCN) במעבר שלו תחת הליגמנט האינגוינלי. גורמים: השמנה, חגורות הדוקות, הריון, סוכרת, ניתוחים. מצב הסנסורי בלבד - אין חולשה!',
          clinicalSigns: 'כאב צריבה / נימולים בצד הקדמי-לטרלי של הירך, מחמיר בעמידה ממושכת והליכה, מוקל בישיבה / כיפוף הירך. ללא חולשה (חשוב!).',
          tests: [
            { name: 'Pelvic Compression Test', nameEn: 'Pelvic Compression', performance: 'בשכיבה על הצד הא-סימפטומטי. הבודק לוחץ על האגן כלפי מטה למשך 45 שניות.', positive: 'הקלה בסימפטומים - חיובי. (משחרר את הליגמנט האינגוינלי).', sn: '95%', sp: '93%' },
            { name: 'Tinel\'s Sign at ASIS', nameEn: "Tinel's Sign", performance: 'הקשה מתחת ומחיל לקצה ה-ASIS, באזור LFCN.', positive: 'נימולים מקרינים בצד הקדמי-לטרלי של הירך - חיובי.', sn: '82%', sp: '85%' },
            { name: 'Sensory Examination', nameEn: 'Sensory Test', performance: 'בדיקת תחושה בעצבוב של LFCN.', positive: 'ירידה בתחושה / היפראסטזיה באזור הקדמי-לטרלי - חיובי.', sn: '80%', sp: '75%' }
          ]
        }
      ]
    },

    knee: {
      name: 'ברך',
      nameEn: 'Knee',
      pathologies: [
        {
          name: 'קרע ACL',
          nameEn: 'Anterior Cruciate Ligament Tear',
          shortDesc: 'קרע ברצועה הצולבת הקדמית',
          fullDescription: 'הרצועה הצולבת הקדמית (ACL) מונעת תזוזה קדמית של הטיביה. קרע נפוץ בספורט (במיוחד ספורט עם פיתולים - כדורסל, כדורגל, סקי). מנגנון: ולגוס + רוטציה חיצונית, או היפראקסטנציה. שכיחות שיא בנשים צעירות (פי 4-6 מגברים בספורט דומה). 70% מהמקרים - non-contact.',
          clinicalSigns: '"Pop" בעת הפגיעה, נפיחות מיידית (תוך 6 שעות), חוסר יציבות / "תחושת נתינה", קושי לחזור לספורט.',
          tests: [
            { name: 'Lachman Test', nameEn: "Lachman's Test", performance: 'בשכיבה. הברך הסימפטומטית בפלקסיה של 20°-30°. הבודק מקבע את הפמור עם יד אחת (יד פרוקסימלית), ועם היד השנייה אוחז את הטיביה הפרוקסימלית מאחור ומושך אותה קדימה.', positive: 'תזוזה קדמית מוגברת ללא נקודת עצירה ברורה (Soft endpoint) בהשוואה לצד הנגדי - חיובי. הבדיקה הטובה ביותר ל-ACL.', sn: '85%', sp: '94%' },
            { name: 'Anterior Drawer', nameEn: 'Anterior Drawer Test', performance: 'בשכיבה. הברך בפלקסיה 90°, כף הרגל על המיטה (הבודק יכול לשבת עליה). הבודק אוחז בטיביה הפרוקסימלית בשתי ידיים ומושך אותה קדימה.', positive: 'תזוזה קדמית מוגברת בהשוואה לצד הנגדי - חיובי. פחות רגיש מ-Lachman באקוטי (עקב ספאזם של ההמסטרינג).', sn: '55%', sp: '92%' },
            { name: 'Pivot Shift', nameEn: 'Pivot Shift Test', performance: 'בשכיבה. מתחילים מאקסטנציה מלאה. הבודק מפעיל ולגוס + רוטציה פנימית של הטיביה תוך כדי כיפוף הברך.', positive: 'תחושת "קליק" או reduction של הטיביה ב-30°-40° פלקסיה - חיובי. ספציפי מאוד אך קשה לבצע באקוטי.', sn: '24%', sp: '98%' },
            { name: 'Lever Sign', nameEn: 'Lelli Test', performance: 'בשכיבה. הבודק מניח אגרוף מתחת לטיביה הפרוקסימלית (כ-1/3 דיסטלית מהברך). ביד השנייה מפעיל לחץ כלפי מטה על הירך הדיסטלית.', positive: 'אם העקב לא עולה מהמיטה - חיובי לקרע ACL מלא.', sn: '63%', sp: '90%' }
          ]
        },
        {
          name: 'קרע PCL',
          nameEn: 'Posterior Cruciate Ligament Tear',
          shortDesc: 'קרע ברצועה הצולבת האחורית',
          fullDescription: 'הרצועה הצולבת האחורית (PCL) מונעת תזוזה אחורית של הטיביה. נדירה יותר מ-ACL. מנגנון נפוץ: "Dashboard injury" (תאונת רכב), נפילה על ברך כפופה, היפראקסטנציה. רוב הקרעים מסוג Grade II מטופלים שמרני.',
          clinicalSigns: 'נפיחות, כאב אחורי בברך, "תחושת נתינה" בירידה במדרגות, "Posterior sag".',
          tests: [
            { name: 'Posterior Drawer', nameEn: 'Posterior Drawer Test', performance: 'בשכיבה. הברך בפלקסיה 90°. הבודק אוחז בטיביה ודוחף אותה אחורה.', positive: 'תזוזה אחורית מוגברת בהשוואה לצד הנגדי - חיובי. הבדיקה הטובה ביותר ל-PCL.', sn: '90%', sp: '99%' },
            { name: 'Posterior Sag Sign', nameEn: 'Godfrey Test', performance: 'בשכיבה. שתי הירכיים והברכיים בפלקסיה 90°. הבודק מחזיק את העקבים. תצפית מהצד.', positive: 'הטיביה הסימפטומטית "נופלת" אחורה ביחס לפמור - חיובי.', sn: '79%', sp: '100%' },
            { name: 'Quadriceps Active', nameEn: 'Quad Active Test', performance: 'בשכיבה. הברך בפלקסיה 90°. הבודק מקבע את כף הרגל ומבקש מהמטופל לבצע אקסטנציה אקטיבית.', positive: 'הטיביה זזה קדימה (חוזרת ממיקום שוקע אחורה) - חיובי.', sn: '54%', sp: '97%' }
          ]
        },
        {
          name: 'קרע MCL',
          nameEn: 'Medial Collateral Ligament Tear',
          shortDesc: 'קרע ברצועה הקולטרלית המדיאלית',
          fullDescription: 'הרצועה הקולטרלית המדיאלית מונעת ולגוס של הברך. הקרע הליגמנטרי הנפוץ ביותר בברך. מנגנון: כוח ולגוס (חבטה מהצד הלטרלי). מסווג ל-Grade I (מתיחה), II (קרע חלקי), III (קרע מלא). רוב המקרים מטופלים שמרנית.',
          clinicalSigns: 'כאב מדיאלי, נפיחות מקומית, חוסר יציבות בולגוס.',
          tests: [
            { name: 'Valgus Stress 30°', nameEn: 'Valgus Stress at 30°', performance: 'בשכיבה. הברך בפלקסיה 30° (לנטרל את ה-ACL/PCL). הבודק מקבע את הקרסול ומפעיל כוח ולגוס.', positive: 'תזוזה מדיאלית מוגברת או כאב - חיובי.', sn: '91%', sp: '49%' },
            { name: 'Valgus Stress 0°', nameEn: 'Valgus Stress at Full Extension', performance: 'אותה בדיקה במצב אקסטנציה מלאה.', positive: 'תזוזה מוגברת באקסטנציה מלאה - מצביע על קרע משולב (MCL + ACL/PCL).', sn: '78%', sp: '67%' }
          ]
        },
        {
          name: 'קרע LCL',
          nameEn: 'Lateral Collateral Ligament Tear',
          shortDesc: 'קרע ברצועה הקולטרלית הלטרלית',
          fullDescription: 'נדירה יותר מ-MCL. קרע ב-LCL לעיתים קרובות מלווה בפגיעות PLC (Posterolateral Corner). דורש בדיקה מקיפה למניעת אי-אבחון.',
          clinicalSigns: 'כאב לטרלי, חוסר יציבות בורוס.',
          tests: [
            { name: 'Varus Stress 30°', nameEn: 'Varus Stress at 30°', performance: 'הברך בפלקסיה 30°. הבודק מפעיל כוח ורוס.', positive: 'תזוזה לטרלית מוגברת או כאב - חיובי.', sn: '25%', sp: '99%' },
            { name: 'Dial Test', nameEn: 'Dial Test', performance: 'בשכיבה על הבטן. הברכיים בפלקסיה 30° ואחר כך 90°. הבודק מבצע רוטציה חיצונית של כפות הרגליים.', positive: 'הבדל >10° בין הצדדים ב-30° לבד - PLC injury. הבדל גם ב-90° - PCL + PLC.', sn: '94%', sp: '70%' }
          ]
        },
        {
          name: 'קרע מניסקוס',
          nameEn: 'Meniscus Tear',
          shortDesc: 'קרע בסחוס המניסקלי',
          fullDescription: 'המניסקים (מדיאלי ולטרלי) הם סחוסים בצורת C שממלאים תפקידים של הספגת זעזועים, יציבות, ופיזור עומסים. קרעים מסוג חבלתי - לרוב בצעירים בעקבות פיתול. דגנרטיביים - במבוגרים. סוגים: Bucket-handle, Radial, Horizontal, Complex.',
          clinicalSigns: 'כאב במישור המפרק (Joint line), נפיחות הדרגתית (24-48 שעות), נעילות (Locking) או "Catching", כאב בסקווט.',
          tests: [
            { name: 'McMurray Test', nameEn: "McMurray's Test", performance: 'בשכיבה. הברך בפלקסיה מלאה. למניסקוס מדיאלי: רוטציה חיצונית של הטיביה + ולגוס תוך כדי יישור הברך. למניסקוס לטרלי: רוטציה פנימית + ורוס.', positive: '"קליק" כואב במישור המפרק (מדיאלי או לטרלי בהתאמה) - חיובי.', sn: '70%', sp: '71%' },
            { name: 'Apley Compression', nameEn: "Apley's Grind Test", performance: 'בשכיבה על הבטן. הברך בפלקסיה 90°. הבודק מפעיל לחץ אקסיאלי כלפי מטה על העקב + רוטציה פנימית/חיצונית.', positive: 'כאב בלחיצה (לעומת הקלה במשיכה) - חיובי. אם הקלה במשיכה לעומת לחץ - חיובי.', sn: '60%', sp: '70%' },
            { name: 'Thessaly Test', nameEn: 'Thessaly Test at 20°', performance: 'בעמידה. המטופל עומד על הרגל הסימפטומטית בפלקסיה של 20°, אוחז בידי הבודק. מבצע 3 סיבובי גוף פנימיים וחיצוניים.', positive: 'כאב במישור המפרק או תחושת "Locking" - חיובי.', sn: '64%', sp: '53%' },
            { name: 'Joint Line Tenderness', nameEn: 'JLT', performance: 'מישוש של מישור המפרק (Joint line) המדיאלי והלטרלי כשהברך בפלקסיה של 90°.', positive: 'רגישות מקומית - חיובי. הבדיקה הקלינית הרגישה ביותר.', sn: '83%', sp: '83%' },
            { name: 'Ege\'s Test', nameEn: "Ege's Test", performance: 'בעמידה. המטופל מבצע סקווט עם רוטציה חיצונית מקסימלית של הקרסוליים (למניסקוס מדיאלי) או רוטציה פנימית (לטרלי).', positive: '"קליק" כואב במישור המפרק - חיובי.', sn: '67%', sp: '81%' },
            { name: 'Cluster of 5', nameEn: 'Knee Composite Cluster', performance: 'שילוב: היסטוריה של נעילה, JLT חיובי, McMurray חיובי, Thessaly חיובי, אקסטנציה פסיבית כואבת.', positive: '5 חיוביים: LR+ של 7. 4 חיוביים: LR+ של 4.', sn: '90%', sp: '85%' }
          ]
        },
        {
          name: 'PFPS - תסמונת פטלופמורלית',
          nameEn: 'Patellofemoral Pain Syndrome',
          shortDesc: 'כאב מאחורי או סביב הפיקה',
          fullDescription: 'התסמונת השכיחה ביותר של כאב ברך, בעיקר בנשים צעירות ובאתלטים. רב-פקטורית: חולשת קוואדריצפס (במיוחד VMO), חולשת היפ אבדוקטורים, מסלול פיקה לקוי, היפרפרונציה. נחשב כיום לתסמונת של "Mistracking" של הפיקה.',
          clinicalSigns: 'כאב מקדמת הברך, מחמיר בעלייה/ירידה במדרגות, ישיבה ממושכת ("Theater sign"), כריעה, סקווט. לעיתים "Pseudo-locking".',
          tests: [
            { name: "Clarke's Sign", nameEn: 'Patellar Grind Test', performance: 'בשכיבה. הברך באקסטנציה. הבודק מניח את ה-Web-space (בין אגודל לאצבע 2) על הקצה העליון של הפיקה ומפעיל לחץ כלפי מטה. מבקש מהמטופל לכווץ את הקוואדריצפס.', positive: 'כאב או חוסר יכולת לכווץ - חיובי.', sn: '49%', sp: '75%' },
            { name: 'Patellar Apprehension', nameEn: 'Patellar Apprehension Test', performance: 'בשכיבה. הברך בפלקסיה של 30°. הבודק דוחף את הפיקה לטרלית.', positive: 'תחושת חשש או הימנעות מהמטופל - חיובי לאי יציבות פטלרית.', sn: '32%', sp: '86%' },
            { name: 'Step Down Test', nameEn: 'Single Leg Step Down', performance: 'המטופל עומד על הרגל הסימפטומטית על מדרגה (15-20 ס"מ) ויורד לאט.', positive: 'שחזור הכאב, או דפוס לקוי (Knee valgus) - חיובי.', sn: '60%', sp: '55%' }
          ]
        },
        {
          name: 'תסמונת ITB',
          nameEn: 'Iliotibial Band Syndrome',
          shortDesc: 'דלקת/חיכוך של רצועת ה-ITB',
          fullDescription: 'הסיבה הנפוצה ביותר לכאב לטרלי בברך אצל רצים. חיכוך של ה-ITB על האפיקונדיל הלטרלי של הפמור, בעיקר ב-30° פלקסיה (זווית "Impingement"). גורמי סיכון: חולשת ירך אבדוקטורים, היפר-מילאז, ריצה במורד.',
          clinicalSigns: 'כאב לטרלי בברך שמתחיל בריצה ארוכה ומחמיר עם הזמן.',
          tests: [
            { name: 'Noble Compression', nameEn: "Noble's Test", performance: 'בשכיבה. הברך בפלקסיה 90°. הבודק מפעיל לחץ עם אגודל על האפיקונדיל הלטרלי של הפמור. מבקש מהמטופל ליישר את הברך באטיות.', positive: 'כאב חד מתחת לאצבע הבודק כשהברך מגיעה ל-30° פלקסיה - חיובי.', sn: '65%', sp: '70%' },
            { name: "Ober's Test", nameEn: "Ober's Test", performance: 'בשכיבה על הצד הא-סימפטומטי. הבודק מבצע אבדוקציה ואקסטנציה של הירך העליונה (סימפטומטית). אז משחרר ומאפשר לרגל לרדת.', positive: 'הרגל לא יורדת לאדוקציה (נשארת באבדוקציה) - מתח מוגבר ב-ITB.', sn: '60%', sp: '70%' },
            { name: 'Modified Ober', nameEn: 'Modified Ober Test', performance: 'אותה בדיקה אך עם הברך מיושרת.', positive: 'כנ"ל. נחשב למדויק יותר.', sn: '70%', sp: '75%' }
          ]
        },
        {
          name: 'מחלת אוסגוד-שלאטר',
          nameEn: 'Osgood-Schlatter Disease',
          shortDesc: 'אפיפיזיט של הטוברוסיטס הטיביאלי',
          fullDescription: 'אפופיזיטיס של הטוברוסיטס הטיביאלי, נגרם ממתח חוזר על אפופיזה לא בשלה. נפוץ בילדים פעילים ספורטיבית בגיל 10-15. יותר בבנים. דו-צדדי ב-25%-50%. מצב המוגבל בעצמו, חולף עם סגירת האפיפיזה.',
          clinicalSigns: 'כאב ובליטה בטוברוסיטס הטיביאלי, מחמיר בריצה, קפיצה, סקווט.',
          tests: [
            { name: 'מישוש Tibial Tubercle', nameEn: 'TT Palpation', performance: 'מישוש מקומי של הטוברוסיטס הטיביאלי.', positive: 'רגישות חדה ובליטה - חיובי.', sn: '95%', sp: '85%' },
            { name: 'Resisted Knee Extension', nameEn: 'Resisted Extension', performance: 'אקסטנציה של הברך כנגד התנגדות.', positive: 'כאב בטוברוסיטס - חיובי.', sn: '85%', sp: '75%' }
          ]
        },
        {
          name: 'טנדינופתיה של גיד הפיקה',
          nameEn: "Patellar Tendinopathy (Jumper's Knee)",
          shortDesc: 'טנדינופתיה של גיד הפיקה - "ברך הקופץ"',
          fullDescription: 'טנדינופתיה של גיד הפיקה, לרוב בקוטב הדיסטלי של הפיקה (הנפוץ ביותר). נפוצה במיוחד באתלטים המבצעים קפיצות חוזרות (כדורסל, כדורעף - "Jumper\'s Knee"). מסווגת ל-4 שלבים לפי Blazina. התפתחות הדרגתית ולא חבלתית. בניגוד ל-PFPS - הכאב מקומי לגיד עצמו ולא ל"מאחורי הפיקה".',
          clinicalSigns: 'כאב מקומי בקוטב הדיסטלי של הפיקה, מחמיר בקפיצות וסקווט עמוק, רגישות ייחודית במישוש.',
          tests: [
            { name: 'Single Leg Decline Squat', nameEn: 'Decline Squat Test', performance: 'המטופל עומד על משטח בשיפוע של 25° כלפי מטה. סקווט על רגל אחת.', positive: 'שחזור הכאב - חיובי. רגיש מאוד.', sn: '90%', sp: '50%' },
            { name: 'מישוש על קוטב פיקה תחתון', nameEn: 'Patellar Tendon Palpation', performance: 'מישוש על קצה תחתון של הפיקה ולאורך גיד הפיקה.', positive: 'רגישות מקומית בקוטב התחתון של הפיקה - חיובי.', sn: '85%', sp: '70%' },
            { name: 'Resisted Knee Extension', nameEn: 'Resisted Extension', performance: 'אקסטנציה של הברך כנגד התנגדות בישיבה.', positive: 'כאב בגיד הפיקה - חיובי.', sn: '70%', sp: '70%' }
          ]
        },
        {
          name: 'טנדינופתיה של גיד הקוואדריצפס',
          nameEn: 'Quadriceps Tendinopathy',
          shortDesc: 'טנדינופתיה של גיד הקוואדריצפס - מעל הפיקה',
          fullDescription: 'טנדינופתיה של גיד הקוואדריצפס במקום היאחזותו בקוטב העליון של הפיקה. פחות נפוצה מטנדינופתיה של גיד הפיקה. נפוצה באנשים פעילים בגיל 30+, וגם בקבוצות הסיכון: סוכרת, היפר-כולסטרולמיה, RA. במקרים חמורים יכול להוביל לקרע של הגיד.',
          clinicalSigns: 'כאב מקומי בקוטב העליון של הפיקה, מחמיר בעלייה במדרגות, סקווט, וירידה. רגישות במישוש מעל הפיקה.',
          tests: [
            { name: 'מישוש על קוטב פיקה עליון', nameEn: 'Quad Tendon Palpation', performance: 'מישוש על קצה עליון של הפיקה ולאורך גיד הקוואדריצפס.', positive: 'רגישות מקומית בקוטב העליון - חיובי.', sn: '85%', sp: '70%' },
            { name: 'Resisted Knee Extension', nameEn: 'Resisted Extension', performance: 'אקסטנציה של ברך כנגד התנגדות.', positive: 'כאב בגיד הקוואדריצפס - חיובי.', sn: '75%', sp: '70%' }
          ]
        },
        {
          name: 'בורסיטיס של Pes Anserine',
          nameEn: 'Pes Anserine Bursitis',
          shortDesc: 'דלקת בבורסה של ה-Pes Anserine',
          fullDescription: 'דלקת בבורסה הנמצאת מתחת ל-Pes Anserine - מקום היאחזות של 3 גידים בצד המדיאלי-קדמי של הברך התחתונה: Sartorius, Gracilis, Semitendinosus. נפוצה בנשים בגיל אמצע, סוכרתיים, אצנים. נחשבת לאבחנה מבדלת חשובה לקרע מניסקוס מדיאלי וגם ל-MCL.',
          clinicalSigns: 'כאב מדיאלי בברך, 3-5 ס"מ מתחת לקו המפרק, רגישות מקומית במישוש על Pes Anserine. בניגוד למניסקוס - הכאב לא בקו המפרק.',
          tests: [
            { name: 'מישוש Pes Anserine', nameEn: 'Pes Anserine Palpation', performance: 'מישוש בצד המדיאלי-קדמי של הטיביה הפרוקסימלית, 3-5 ס"מ מתחת לקו המפרק.', positive: 'רגישות מקומית בולטת - חיובי. אם הרגישות בדיוק בקו המפרק - חשד לקרע מניסקוס.', sn: '85%', sp: '80%' },
            { name: 'Resisted Knee Flexion + IR', nameEn: 'Resisted Pes Anserine', performance: 'פלקסיה של ברך עם רוטציה פנימית של טיביה כנגד התנגדות.', positive: 'כאב מדיאלי - חיובי.', sn: '70%', sp: '75%' }
          ]
        },
        {
          name: 'ציסטת בייקר',
          nameEn: "Baker's Cyst (Popliteal Cyst)",
          shortDesc: 'ציסטה בפוסה הפופליטאלית',
          fullDescription: 'ציסטה סינוביאלית בצד המדיאלי-אחורי של הברך, בין השרירים Semimembranosus ו-Medial Gastrocnemius. במבוגרים - לרוב משנית לפתולוגיה תוך-מפרקית (קרע מניסקוס, OA, RA). נוזל מהמפרק זורם דרך פתח שסתומי לבורסה. גודלה משתנה - לעיתים גורם לתחושת מתיחה. סיבוך נדיר אך חשוב: קרע של הציסטה - מתבטא ככאב חד בשוק שמדמה DVT.',
          clinicalSigns: 'גוש רך באחורי הברך (פוסה פופליטאלית), תחושת מתיחה באקסטנציה מלאה, גוש קשיח יותר באקסטנציה, רך יותר בפלקסיה (Foucher\'s sign).',
          tests: [
            { name: "Foucher's Sign", nameEn: "Foucher's Sign", performance: 'מישוש הציסטה במנח אקסטנציה ופלקסיה של הברך.', positive: 'הציסטה קשה באקסטנציה ורכה בפלקסיה - חיובי.', sn: '90%', sp: '95%' },
            { name: 'אולטרסאונד', nameEn: 'Ultrasound', performance: 'בדיקת US באזור הפוסה הפופליטאלית.', positive: 'נוזל בורסה - חיובי. גם שולל DVT.', sn: '99%', sp: '99%' }
          ]
        }
      ]
    },

    ankle: {
      name: 'קרסול וכף רגל',
      nameEn: 'Ankle & Foot',
      pathologies: [
        {
          name: 'נקע קרסול לטרלי',
          nameEn: 'Lateral Ankle Sprain',
          shortDesc: 'הפגיעה האורתופדית הנפוצה ביותר',
          fullDescription: 'הנקע הנפוץ ביותר בגוף האדם. מערב את ה-ATFL (הראשון להיפגע, ב-85% מהמקרים), CFL, ולעיתים PTFL. מנגנון: היפוך + פלנטרפלקסיה. מסווג ל-Grade I (מתיחה), II (קרע חלקי), III (קרע מלא).',
          clinicalSigns: 'כאב לטרלי, נפיחות, אקיכמוזיס, קושי בדריכה.',
          tests: [
            { name: 'Anterior Drawer of Ankle', nameEn: 'ADT', performance: 'המטופל בישיבה, ברך 90°, קרסול בפלנטרפלקסיה של 10°-15°. הבודק מקבע את הטיביה הדיסטלית ואוחז בעקב, מושך אותו קדימה.', positive: 'תזוזה קדמית מוגברת ((>5 מ"מ או >3 מ"מ הבדל בין צדדים) - חיובי לקרע ATFL.', sn: '74%', sp: '38%' },
            { name: 'Talar Tilt', nameEn: 'Inversion Stress Test', performance: 'הקרסול בעמדה ניטרלית. הבודק מקבע את הטיביה ומבצע היפוך פסיבי של הטלוס.', positive: 'תזוזה ניכרת בהשוואה לצד הנגדי (>10°) - חיובי לקרע CFL.', sn: '52%', sp: '88%' },
            { name: 'Ottawa Ankle Rules', nameEn: 'Ottawa Rules', performance: 'כללי החלטה לצורך צילום: 1) רגישות לאורך 6 ס"מ הפוסטריו-אינפריור של מאלאולוס המדיאלי או הלטרלי, 2) רגישות בבסיס מטטרסל 5 או נוויקולר, 3) חוסר יכולת לדרוך 4 צעדים מיד לאחר הפגיעה ובחדר המיון.', positive: 'אחד מהקריטריונים חיובי - הצורך בצילום. רגיש מאוד אך לא ספציפי.', sn: '99%', sp: '32%' },
            { name: 'Squeeze of Calf', nameEn: 'Calf Squeeze Test', performance: 'בשכיבה על הבטן. הבודק לוחץ באמצע השוק.', positive: 'כאב בקרסול - חיובי לפגיעה סינדסמוטית, לא לטרלית.', sn: '30%', sp: '94%' }
          ]
        },
        {
          name: 'High Ankle Sprain',
          nameEn: 'Syndesmotic / High Ankle Sprain',
          shortDesc: 'פגיעה ברצועות הסינדסמוטיות (טיביה-פיבולה)',
          fullDescription: 'פגיעה ברצועות שמחברות בין הטיביה לפיבולה הדיסטלית - AITFL, PITFL, IO Ligament, IO Membrane. מנגנון: רוטציה חיצונית של כף הרגל + דורסיפלקסיה. חמורה משמעותית יותר מנקע לטרלי - זמן החלמה ארוך יותר. נפוצה באתלטים.',
          clinicalSigns: 'כאב מעל הקרסול (לא לטרלית), מחמיר בדורסיפלקסיה ורוטציה חיצונית.',
          tests: [
            { name: 'Squeeze Test', nameEn: "Hopkin's Squeeze", performance: 'בשכיבה. הבודק לוחץ עם שתי ידיים את הטיביה והפיבולה זו לזו באמצע השוק.', positive: 'כאב מעל הקרסול (סינדסמוזיס) - חיובי.', sn: '30%', sp: '94%' },
            { name: 'External Rotation Stress', nameEn: 'Kleiger Test', performance: 'בישיבה. הברך 90°. הבודק מקבע את השוק ומסובב את כף הרגל לרוטציה חיצונית פסיבית.', positive: 'כאב בסינדסמוזיס - חיובי.', sn: '20%', sp: '85%' },
            { name: 'Cotton Test', nameEn: 'Cotton Test', performance: 'בשכיבה. הבודק מקבע את השוק ומפעיל כוח לטרלי-מדיאלי על הטלוס.', positive: 'תזוזה מוגברת או כאב - חיובי.', sn: '80%', sp: '85%' }
          ]
        },
        {
          name: 'קרע גיד אכילס',
          nameEn: 'Achilles Tendon Rupture',
          shortDesc: 'קרע בגיד הגדול ביותר בגוף',
          fullDescription: 'קרע בגיד אכילס, לרוב בגברים בני 30-50 בעת פעילות ספורטיבית פתאומית. ב-80%-90% מהמקרים מתחיל ב-Tendinopathy אסימפטומטית. מקום הקרע הנפוץ: 2-6 ס"מ פרוקסימלית להיאחזות בקלקנאוס (אזור עם זרימת דם פחותה).',
          clinicalSigns: 'תחושה של "בעיטה" או "פיצוץ" באחורי הקרסול, כאב חד, חולשה משמעותית בפלנטרפלקסיה. "Palpable gap" בגיד.',
          tests: [
            { name: 'Thompson Test', nameEn: 'Simmonds-Thompson Test', performance: 'בשכיבה על הבטן. הרגליים תלויות מעבר למיטה. הבודק לוחץ על שריר השוק (Calf squeeze).', positive: 'היעדר פלנטרפלקסיה של הקרסול - חיובי לקרע מלא של גיד אכילס. הבדיקה הטובה ביותר.', sn: '96%', sp: '93%' },
            { name: 'Matles Test', nameEn: 'Knee Flexion Test', performance: 'בשכיבה על הבטן. המטופל מבצע פלקסיה אקטיבית של שתי הברכיים ל-90°.', positive: 'הקרסול הסימפטומטי נופל לדורסיפלקסיה (לעומת פלנטרפלקסיה תקינה בצד הא-סימפטומטי) - חיובי.', sn: '88%', sp: '85%' },
            { name: "O'Brien Needle Test", nameEn: 'Needle Test', performance: 'בדיקה פולשנית - הכנסת מחט לגיד.', positive: 'בדיקה פולשנית - לא בשימוש קליני שגרתי.', sn: '90%', sp: '95%' },
            { name: 'Palpable Gap', nameEn: 'Palpable Gap', performance: 'מישוש הגיד באורך כולו.', positive: 'תחושת "מדרגה" או חסך בגיד - חיובי.', sn: '73%', sp: '89%' }
          ]
        },
        {
          name: 'דורבן / Plantar Fasciitis',
          nameEn: 'Plantar Fasciitis',
          shortDesc: 'דלקת של הפסציה הפלנטרית',
          fullDescription: 'הסיבה הנפוצה ביותר לכאב עקב במבוגרים. דלקת/דגנרציה של הפסציה הפלנטרית במקום היאחזותה במדיאל-פלנטר טוברוסיטס של הקלקנאוס. גורמי סיכון: השמנה, עמידה ממושכת, רגל שטוחה או חזקה, קיצור גסטרוקנמיוס.',
          clinicalSigns: 'כאב חד בעקב בצעדים הראשונים בבוקר, מקל לאחר הליכה קצרה, חוזר לאחר ישיבה ממושכת.',
          tests: [
            { name: 'Windlass Test', nameEn: 'Windlass Mechanism Test', performance: 'המטופל בעמידה (יותר רגיש) או ישיבה. הבודק מבצע דורסיפלקסיה פסיבית של הבוהן הגדולה (MTP).', positive: 'כאב לאורך הפסציה הפלנטרית - חיובי. ספציפי מאוד.', sn: '32%', sp: '100%' },
            { name: 'מישוש מדיאלי קלקנאלי', nameEn: 'Medial Calcaneal Tubercle Palpation', performance: 'מישוש על המדיאל-פלנטר טוברוסיטס של הקלקנאוס.', positive: 'רגישות חדה - חיובי.', sn: '85%', sp: '60%' }
          ]
        },
        {
          name: 'תסמונת התעלה הטרסלית',
          nameEn: 'Tarsal Tunnel Syndrome',
          shortDesc: 'דחיסה של עצב הטיביאליס פוסטריור',
          fullDescription: 'דחיסה של עצב הטיביאליס פוסטריור (או אחד מהענפים שלו - Medial/Lateral plantar nerve) בתעלה הטרסלית, מאחורי המאלאולוס המדיאלי. גורמת לנימולים בכף הרגל. הרבה פחות נפוץ מ-Carpal tunnel.',
          clinicalSigns: 'נימולים, "צריבה" בכף הרגל, מחמיר בלילה, חולשה של אגודל בפלקסיה.',
          tests: [
            { name: 'Tinel ב-Tarsal', nameEn: "Tinel's at Tarsal Tunnel", performance: 'הבודק מקיש על אזור התעלה הטרסלית - מאחורי המאלאולוס המדיאלי.', positive: 'נימולים מקרינים לכף הרגל - חיובי.', sn: '58%', sp: '76%' },
            { name: 'Dorsiflexion-Eversion Test', nameEn: 'DF-Ev Test', performance: 'הבודק מבצע דורסיפלקסיה ואברסיה מקסימלית של הקרסול תוך אקסטנציה של האצבעות, למשך 5-10 שניות.', positive: 'הופעת/החמרת סימפטומים - חיובי.', sn: '82%', sp: '80%' }
          ]
        },
        {
          name: "Morton's Neuroma",
          nameEn: "Morton's Neuroma",
          shortDesc: 'התעבות של עצב אינטרדיגיטלי',
          fullDescription: 'התעבות פיברוטית של עצב אינטרדיגיטלי בכף הרגל, לרוב בין מטטרסלים 3-4 (75% מהמקרים) או 2-3. נפוץ בנשים שנועלות נעליים צרות ועקבים גבוהים. מתבטא בכאב חריף "כאילו דורכים על אבן".',
          clinicalSigns: 'כאב חריף, "צריבה" בין המטטרסלים, נימולים באצבעות 3-4, מקל יחפים.',
          tests: [
            { name: "Mulder's Click", nameEn: "Mulder's Sign", performance: 'הבודק לוחץ עם אגודל מקדמי ואצבע מאחור על המקום החשוד (בין המטטרסלים), ובו זמנית סוחט את כף הרגל מהצדדים.', positive: '"קליק" שניתן להרגיש + כאב מתאים - חיובי. הבדיקה הספציפית ביותר.', sn: '61%', sp: '100%' },
            { name: 'Web Space Tenderness', nameEn: 'Interspace Tenderness', performance: 'מישוש של ה-Web space בין האצבעות.', positive: 'רגישות מקומית - חיובי.', sn: '90%', sp: '50%' }
          ]
        },
        {
          name: 'Hallux Valgus',
          nameEn: 'Hallux Valgus / Bunion',
          shortDesc: 'דפורמציה של הבוהן הגדולה',
          fullDescription: 'דפורמציה של הבוהן הגדולה - אבדוקציה של הבוהן ואדוקציה של מטטרסל 1 (Metatarsus primus varus). גורמת לבליטה מדיאלית של ראש המטטרסל ("Bunion"). שכיחות גבוהה בנשים.',
          clinicalSigns: 'בליטה מדיאלית, כאב בעת נעילת נעליים, בשלבים מתקדמים - דפורמציה של אצבע 2.',
          tests: [
            { name: 'מדידת זווית HVA', nameEn: 'Hallux Valgus Angle', performance: 'מדידת הזווית בין מטטרסל 1 לפלנגה הפרוקסימלית של הבוהן.', positive: '>15° = חיובי. >40° = חמור.', sn: '95%', sp: '95%' }
          ]
        },
        {
          name: 'אי-תפקוד גיד הטיביאליס פוסטריור',
          nameEn: 'Posterior Tibial Tendon Dysfunction (PTTD)',
          shortDesc: 'אי-תפקוד של גיד ה-Tibialis Posterior',
          fullDescription: 'אי-תפקוד של גיד ה-Tibialis Posterior, הסיבה הנפוצה ביותר ל"Adult Acquired Flat Foot". ב-90% מהמקרים בנשים מעל גיל 45. סווגה ע"י Johnson ו-Strom ל-4 שלבים: I (תפקוד תקין, כאב בלבד), II (השטחה גמישה), III (השטחה קשיחה), IV (פגיעה בקרסול). אם לא מטופל - מוביל לעיוות מתקדם של כף הרגל.',
          clinicalSigns: 'כאב מדיאלי בקרסול, השטחה הדרגתית של קשת רגל, תחושת חולשה בעמידה, "Too many toes" sign בתצפית מאחור.',
          tests: [
            { name: 'Single Heel Rise Test', nameEn: 'Single Heel Rise', performance: 'המטופל עומד על רגל אחת ומנסה להרים את העקב.', positive: 'חוסר יכולת להרים את העקב או הסטה לורוס - חיובי. הבדיקה הטובה ביותר.', sn: '90%', sp: '95%' },
            { name: '"Too Many Toes" Sign', nameEn: 'Too Many Toes Sign', performance: 'תצפית מאחור על המטופל בעמידה.', positive: 'יותר מ-2 בהונות נראים בצד הלטרלי - חיובי לאבדוקציה של החזית.', sn: '85%', sp: '85%' },
            { name: 'מישוש לאורך הגיד', nameEn: 'Posterior Tibial Palpation', performance: 'מישוש לאורך הגיד, מאחורי המאלאולוס המדיאלי עד הנוויקולר.', positive: 'רגישות לאורך הגיד, ייתכן Defect או נפיחות.', sn: '80%', sp: '75%' }
          ]
        },
        {
          name: 'שבר עומס',
          nameEn: 'Stress Fracture',
          shortDesc: 'שבר מיקרו-טראומטי משימוש יתר',
          fullDescription: 'שבר עקב עומס חוזר ולא חבלה אקוטית. מיקומים נפוצים: מטטרסל 2-3 (Marching fracture), טיביה (אצנים), פיבולה, נוויקולר, קלקנאוס. גורמי סיכון: עליה פתאומית בעצימות, נשים (במיוחד עם Female Athlete Triad), אוסטאופניה. אבחון מוקדם חיוני - שבר לא מטופל יכול להפוך לשבר מלא.',
          clinicalSigns: 'כאב מקומי שמחמיר בפעילות ומשתפר במנוחה, רגישות נקודתית במישוש, ייתכן נפיחות מקומית.',
          tests: [
            { name: 'Hop Test', nameEn: 'One-Leg Hop', performance: 'המטופל קופץ על רגל אחת.', positive: 'כאב חד במקום החשוד - חיובי.', sn: '70%', sp: '85%' },
            { name: 'Tuning Fork', nameEn: 'Tuning Fork Test', performance: 'הצמדת מזלג קולי (128Hz) על העצם החשודה.', positive: 'כאב חד מקומי - חיובי. רגישות גבוהה לטיביה.', sn: '75%', sp: '75%' },
            { name: 'Fulcrum Test', nameEn: 'Fulcrum Test', performance: 'בישיבה. הבודק מניח אמה מתחת לעצם החשודה ולוחץ על שני הצדדים.', positive: 'כאב חד - חיובי. שימושי לטיביה ולפמור.', sn: '93%', sp: '75%' }
          ]
        },
        {
          name: 'Sesamoiditis',
          nameEn: 'Sesamoiditis',
          shortDesc: 'דלקת בעצמות הסזמואידיות מתחת לבוהן',
          fullDescription: 'דלקת או סטרס פרקצ\'ר של עצמות הסזמואיד מתחת לראש מטטרסל 1. שתי עצמות סזמואיד (מדיאלי ולטרלי) ממוקמות מתחת לבוהן הגדולה ופועלות כמערכת גלגל-שינייה. נפוצה ברקדנים, אצנים, נשים שנועלות עקבים. כאב מתחת לראש מטטרסל 1.',
          clinicalSigns: 'כאב מתחת לבוהן הגדולה, מחמיר בדריכה ובצעדים האחוריים של הליכה, רגישות מקומית.',
          tests: [
            { name: 'מישוש Sesamoid', nameEn: 'Sesamoid Palpation', performance: 'מישוש מתחת לראש מטטרסל 1 - תוך כיפוף וישור הבוהן.', positive: 'רגישות חדה - חיובי.', sn: '90%', sp: '85%' },
            { name: 'Sesamoid Compression Test', nameEn: 'Passive Dorsiflexion of Hallux', performance: 'דורסיפלקסיה פסיבית של הבוהן הגדולה.', positive: 'כאב מתחת ל-MTP1 - חיובי.', sn: '85%', sp: '70%' }
          ]
        },
        {
          name: 'Turf Toe',
          nameEn: 'Turf Toe',
          shortDesc: 'נקע של MTP1 - כאב בבוהן הגדולה אחרי דריכה אקסטרים',
          fullDescription: 'נקע של מפרק ה-MTP של הבוהן הגדולה - לרוב היפראקסטנציה (פלקסיה גבית מקסימלית). שמו נובע מהפציעה הנפוצה של שחקני פוטבול אמריקאי על דשא סינתטי. מסווג ל-3 דרגות. אם לא מטופל - יכול להוביל ל-Hallux Rigidus.',
          clinicalSigns: 'כאב, נפיחות, חבלה אקיכמוטית סביב MTP1, הגבלה בדורסיפלקסיה ופלנטרפלקסיה של הבוהן, כאב בעת דריכה.',
          tests: [
            { name: 'Active and Passive ROM of Hallux', nameEn: 'Hallux ROM Test', performance: 'מדידת ROM פעיל ופסיבי של MTP1.', positive: 'הגבלה משמעותית + כאב - חיובי.', sn: '90%', sp: '85%' },
            { name: 'Passive Hyperextension', nameEn: 'Passive Dorsiflexion', performance: 'דורסיפלקסיה פסיבית של הבוהן הגדולה.', positive: 'כאב חד + הגבלה - חיובי.', sn: '85%', sp: '80%' }
          ]
        },
        {
          name: 'טנדינופתיה אינסרציוני של אכילס',
          nameEn: 'Insertional Achilles Tendinopathy',
          shortDesc: 'טנדינופתיה במקום היאחזות אכילס בקלקנאוס',
          fullDescription: 'טנדינופתיה במקום היאחזות גיד האכילס בקלקנאוס - שונה מ-Mid-portion Achilles Tendinopathy (2-6 ס"מ פרוקסימלית). 20%-25% ממקרי הטנדינופתיה של האכילס. גורם לעיתים קרובות לסיבוכים: Haglund\'s deformity (בליטה אחורית של הקלקנאוס), בורסיטיס רטרוקלקנאלית, הסתיידויות בגיד. תגובה פחות טובה לטיפולים אקסצנטריים סטנדרטיים.',
          clinicalSigns: 'כאב מקומי בקצה האחורי-תחתון של הקלקנאוס, כאב בעלייה במדרגות, נעליים לוחצות באזור האחורי. הסתיידות קלינית - בליטה קשה.',
          tests: [
            { name: 'מישוש על מקום היאחזות', nameEn: 'Insertion Palpation', performance: 'מישוש בדיוק על מקום היאחזות הגיד בקלקנאוס.', positive: 'רגישות חדה במישוש בנקודה הספציפית - חיובי.', sn: '85%', sp: '75%' },
            { name: 'Heel Raise Test', nameEn: 'Heel Raise', performance: 'המטופל מבצע 10 הרמות עקב על רגל אחת.', positive: 'כאב בנקודת ההיאחזות + חולשה - חיובי.', sn: '80%', sp: '70%' },
            { name: 'Royal London Hospital Test', nameEn: 'Royal London Hospital Test', performance: 'מישוש הגיד בפלנטרפלקסיה של הקרסול ואז בדורסיפלקסיה.', positive: 'אין רגישות בדורסיפלקסיה (כי הגיד מורחק מהבליטה) - חיובי לטנדינופתיה אינסרציונית.', sn: '54%', sp: '91%' }
          ]
        },
        {
          name: 'תסמונת השוק (שיין ספלינטס)',
          nameEn: 'Medial Tibial Stress Syndrome (Shin Splints)',
          shortDesc: 'כאב מדיאלי בשוק - דלקת בפריוסט הטיביה',
          fullDescription: 'הסיבה הנפוצה ביותר לכאב כרוני בשוק אצל אצנים ואתלטים. דלקת בפריוסט המדיאלי של הטיביה (Posteromedial border) - בערך באמצע הטיביה הדיסטלית. נפוצה ב-13%-20% מהאצנים. אבחנה מבדלת חשובה: 1) Tibial Stress Fracture (כאב מאוד מקומי, חמור בלילה), 2) Chronic Exertional Compartment Syndrome (כאב מתחיל בזמן ספציפי של הריצה ופוסק במנוחה).',
          clinicalSigns: 'כאב לאורך הקצה המדיאלי של הטיביה (5+ ס"מ של רגישות), מחמיר בריצה, מוקל במנוחה. בשלבים מוקדמים - רק בתחילת הריצה. בשלבים מתקדמים - גם במנוחה.',
          tests: [
            { name: 'מישוש לאורך הטיביה', nameEn: 'Tibial Palpation', performance: 'מישוש לאורך 5-10 ס"מ של הקצה המדיאלי-אחורי של הטיביה הדיסטלית.', positive: 'רגישות מפוזרת לאורך אזור גדול (5+ ס"מ) - חיובי. רגישות נקודתית = חשד לשבר עומס.', sn: '85%', sp: '75%' },
            { name: 'Tuning Fork', nameEn: 'Tuning Fork Test', performance: 'הצמדת מזלג קולי 128Hz על הטיביה.', positive: 'כאב חד מקומי - חיובי לשבר עומס (ולא MTSS). אם MTSS - הכאב מפוזר.', sn: '75%', sp: '67%' },
            { name: 'Hop Test', nameEn: 'One-Leg Hop', performance: 'קפיצה על רגל אחת.', positive: 'כאב חד שמונע קפיצה - חיובי לשבר עומס. ב-MTSS - לרוב יכול לקפוץ עם אי נוחות.', sn: '70%', sp: '85%' }
          ]
        },
        {
          name: 'תסמונת קומפרטמנט מאמץ כרונית',
          nameEn: 'Chronic Exertional Compartment Syndrome (CECS)',
          shortDesc: 'עליה בלחץ קומפרטמנט בעת מאמץ',
          fullDescription: 'עליה לא תקינה בלחץ בתוך אחד מהקומפרטמנטים של השוק במהלך פעילות גופנית, גורמת לכאב והפרעה תפקודית. שונה מ-Acute Compartment Syndrome (חירום!). הקומפרטמנט הקדמי הוא הנפוץ ביותר (45%), פוסטריור עמוק (25%), לטרלי (15%), פוסטריור שטחי (15%). אבחון - מדידת לחץ תוך-קומפרטמנטלי לפני ואחרי פעילות. נפוץ באצנים ובחיילי קרבי.',
          clinicalSigns: 'כאב חמור (לרוב צריבה / מתיחה) שמתחיל בזמן ספציפי של ריצה, מחמיר עד שמכריח להפסיק. נימולים ופרסטזיות. הכאב פוסק תוך 15-30 דקות במנוחה. ייתכן "Foot drop" זמני.',
          tests: [
            { name: 'Pre/Post Exercise Symptoms', nameEn: 'Symptom Pattern', performance: 'תיעוד הסימפטומים: זמן התחלה (X דקות מתחילת ריצה), עוצמה, ההמשך והשפעת המנוחה.', positive: 'דפוס קלאסי: התחלה תוך 10-30 דקות מתחילת פעילות, חזרה למנוחה תוך 15-30 דקות.', sn: '90%', sp: '70%' },
            { name: 'Compartment Pressure Test', nameEn: 'Pedowitz Criteria', performance: 'מדידת לחץ תוך-קומפרטמנטלי לפני, מיד אחרי, ו-5 דקות לאחר פעילות מעוררת.', positive: 'לחץ במנוחה >15 mmHg, או 1 דקה אחרי >30 mmHg, או 5 דקות >20 mmHg - חיובי.', sn: '95%', sp: '90%' },
            { name: 'Resisted Dorsiflexion', nameEn: 'Resisted DF', performance: 'דורסיפלקסיה כנגד התנגדות אחרי פעילות מעוררת.', positive: 'חולשה / כאב משמעותי - חיובי לקומפרטמנט קדמי.', sn: '60%', sp: '65%' }
          ]
        },
        {
          name: 'תסמונת קומפרטמנט אקוטית',
          nameEn: 'Acute Compartment Syndrome',
          shortDesc: '🚨 חירום! עליה קיצונית בלחץ קומפרטמנט',
          fullDescription: '🚨 דגל אדום! חירום אורתופדי! עליה משמעותית בלחץ קומפרטמנט שגורמת לאיסכמיה של רקמות. נגרמת לרוב מ: שבר (השכיחה ביותר - 75%), חבלה כבדה, גבס הדוק מדי. דורש פסציוטומיה תוך 6 שעות - אחרת נזק קבוע! מוות שריר תוך 4-12 שעות, נזק עצב תוך 12-24 שעות. הקומפרטמנט הקדמי של השוק הוא הנפוץ ביותר.',
          clinicalSigns: 'ה-6 P\'s: Pain (לא פרופורציונלי לפציעה), Pallor, Paresthesias, Paralysis, Pulselessness (מאוחר), Poikilothermia. הסימן הרגיש ביותר: כאב במתיחה פסיבית.',
          tests: [
            { name: 'Passive Stretch Test', nameEn: 'Passive Stretch', performance: 'מתיחה פסיבית של השרירים בקומפרטמנט החשוד.', positive: 'כאב לא פרופורציונלי לחבלה - חיובי. הסימן הרגיש ביותר.', sn: '95%', sp: '40%' },
            { name: 'Compartment Pressure', nameEn: 'Intracompartmental Pressure', performance: 'מדידה ישירה של לחץ תוך-קומפרטמנטלי עם מד לחץ.', positive: 'לחץ >30 mmHg, או Δ <30 mmHg = חירום ניתוחי!', sn: '95%', sp: '90%' },
            { name: 'Neurological Assessment', nameEn: 'Neuro Exam', performance: 'בדיקת תחושה ומוטוריקה של העצבים העוברים בקומפרטמנט.', positive: 'נימולים / חולשה - מצביע על נזק עצבי - חירום!', sn: '70%', sp: '85%' }
          ]
        },
        {
          name: 'תסמונת הקובואיד',
          nameEn: 'Cuboid Syndrome',
          shortDesc: 'תת-נקיעה של עצם הקובואיד - כאב לטרלי בכף רגל',
          fullDescription: 'תת-נקיעה (subluxation) קלה של עצם הקובואיד - לרוב כתוצאה מנקע קרסול אינברסיוני, או עומס חוזר ברקדנים. נחשבת לסיבה הלא מאובחנת הנפוצה ביותר לכאב לטרלי בכף הרגל אחרי נקע. אבחנה קלינית - הדמיה לרוב תקינה.',
          clinicalSigns: 'כאב לטרלי בכף הרגל באמצע, רגישות מקומית על הקובואיד (מתחת ומאחורי בסיס מטטרסל 4), הליכה צולעת, החמרה בעמידה על קצות אצבעות.',
          tests: [
            { name: 'Cuboid Palpation', nameEn: 'Cuboid Palpation', performance: 'מישוש פלמרי של הקובואיד (מתחת לכף הרגל, ליד בסיס מטטרסל 4) ודורסלי.', positive: 'רגישות חדה ומקומית - חיובי. לעיתים יש בליטה גלויה.', sn: '85%', sp: '75%' },
            { name: 'Midtarsal Adduction Test', nameEn: 'Midtarsal Adduction Test', performance: 'הבודק מקבע את הקלקנאוס ומבצע אדוקציה פסיבית של החזית של כף הרגל.', positive: 'שחזור הכאב - חיובי.', sn: '80%', sp: '70%' },
            { name: 'Cuboid Whip Test', nameEn: 'Cuboid Squeeze', performance: 'מישוש הקובואיד עם תמרון תזוזה דורסלי-פלנטרי.', positive: 'תחושת "click" / שחזור כאב + הקלה אחרי המניפולציה - חיובי ואבחנתי.', sn: '90%', sp: '85%' }
          ]
        },
        {
          name: 'פציעת ליספרנק',
          nameEn: 'Lisfranc Injury',
          shortDesc: 'פציעה במפרק Tarsometatarsal - שבר/נקע',
          fullDescription: 'פציעה במפרק הליספרנק (TMT - Tarsometatarsal). מנגנון: נפילה כשכף הרגל בפלנטרפלקסיה ופיתול. שכיח באבחנה לקויה (20% מתפספסים בצילום ראשוני!). אם לא מאובחן ולא מטופל - מוביל ל-OA קשה ולהשטחת קשת.',
          clinicalSigns: 'כאב במידפוט (המרכזי), נפיחות, חבלה אקיכמוטית בצד הפלמרי של הרגל ("Plantar bruising sign" - פתוגנומוני!), אי יכולת לעמוד על קצות אצבעות.',
          tests: [
            { name: 'Plantar Bruising Sign', nameEn: 'Plantar Ecchymosis', performance: 'תצפית על אספקט הפלמרי של החזית של כף הרגל.', positive: 'חבלה אקיכמוטית מקומית - פתוגנומוני! חיובי כמעט תמיד לפציעת ליספרנק.', sn: '24%', sp: '99%' },
            { name: 'Piano Key Test', nameEn: 'Piano Key Test', performance: 'בדיקת תזוזה דורסל-פלנטרי של כל מטטרסל בנפרד תוך קיבוע הקיוניפורם.', positive: 'תזוזה לא תקינה / כאב - חיובי לאי יציבות.', sn: '85%', sp: '90%' },
            { name: 'Single Leg Heel Rise', nameEn: 'Single Leg Heel Rise', performance: 'המטופל מנסה לעמוד על קצות אצבעות על הרגל הפגועה.', positive: 'כאב חד / אי יכולת - חיובי. מצוין לסקרינינג.', sn: '90%', sp: '85%' }
          ]
        },
        {
          name: 'תסמונת הסינוס טרסי',
          nameEn: 'Sinus Tarsi Syndrome',
          shortDesc: 'כאב לטרלי כרוני בקרסול אחרי נקע',
          fullDescription: 'כאב לטרלי כרוני באזור הסינוס טרסי. לרוב משני לנקע קרסול אינברסיוני - 70% מהמטופלים מדווחים על נקע קודם. גורם נפוץ: דלקת ברקמה הסינוויאלית או הליגמנטים בתוך הסינוס טרסי, אי יציבות סוב-טלרית.',
          clinicalSigns: 'כאב לטרלי בקרסול ממש לפני המאלאולוס הלטרלי, רגישות מקומית, החמרה בעמידה על משטח לא יציב, ולפעמים תחושה של "אי יציבות".',
          tests: [
            { name: 'Sinus Tarsi Palpation', nameEn: 'Sinus Tarsi Palpation', performance: 'מישוש מקומי באזור הסינוס טרסי - לפני ומתחת למאלאולוס הלטרלי.', positive: 'רגישות חדה מקומית - חיובי.', sn: '90%', sp: '70%' },
            { name: 'Subtalar Inversion', nameEn: 'Subtalar Inversion Test', performance: 'אינברסיה פסיבית מקסימלית של הקלקנאוס.', positive: 'שחזור הכאב הלטרלי - חיובי.', sn: '75%', sp: '70%' }
          ]
        },
        {
          name: 'מתיחת שריר השוק (Tennis Leg)',
          nameEn: 'Calf Strain (Tennis Leg)',
          shortDesc: 'קרע של ראש מדיאלי של גסטרוקנמיוס',
          fullDescription: 'קרע פתאומי של הראש המדיאלי של שריר הגסטרוקנמיוס - לרוב באזור ה-MTJ (Musculotendinous Junction). שמה "Tennis Leg" כי שכיח בטניס. נפוץ בגיל 30-50. אבחנה מבדלת קריטית: DVT! חשוב לשלול.',
          clinicalSigns: '"Pop" פתאומי + כאב חד באמצע השוק המדיאלית, נפיחות, חבלה אקיכמוטית, חולסה בפלנטרפלקסיה (לא מלאה).',
          tests: [
            { name: 'מישוש על MTJ', nameEn: 'Calf Palpation', performance: 'מישוש לאורך גסטרוקנמיוס מדיאלי, בעיקר ב-MTJ.', positive: 'רגישות חדה מקומית, ייתכן Defect מורגש - חיובי.', sn: '90%', sp: '85%' },
            { name: 'Thompson Test (שלילי)', nameEn: 'Thompson Test', performance: 'בשכיבה על הבטן, ברך כפופה. הבודק לוחץ את שריר השוק.', positive: 'אם פלנטרפלקסיה תקינה (שלילי) - שולל קרע אכילס מלא, ומשאיר Tennis Leg כאופציה.', sn: '96%', sp: '93%' }
          ]
        }
      ]
    },
    tmj: {
      name: 'מפרק הלסת (TMJ)',
      nameEn: 'Temporomandibular Joint',
      pathologies: [
        {
          name: 'הפרעה של מפרק הלסת',
          nameEn: 'TMJ Dysfunction (TMD)',
          shortDesc: 'הפרעה תפקודית של מפרק הלסת',
          fullDescription: 'הפרעה תפקודית של מפרק הלסת - השכיחות עומדת על 5%-12% מהאוכלוסייה. סווגה ל-3 קטגוריות: 1) הפרעות שריר-פאסציאליות (Myofascial - הנפוצה), 2) הפרעות תוך-מפרקיות (Internal Derangement - תזוזת הדיסק), 3) הפרעות דלקתיות / דגנרטיביות. גורמי סיכון: ברוקסיזם, סטרס, חבלה.',
          clinicalSigns: 'כאב פני / לסת / רקה, "קליק" בעת פתיחת פה, הגבלת פתיחת פה (תקין: 40-55 מ"מ), סטיית הסנטר בעת פתיחה, רגישות בשרירי הלעיסה.',
          tests: [
            { name: 'מדידת פתיחת פה', nameEn: 'Maximal Mouth Opening', performance: 'מדידת המרחק בין שיני החזית בעת פתיחת פה מקסימלית.', positive: 'פתיחה <40 מ"מ - הגבלה. <30 מ"מ - הגבלה משמעותית. הערך ה"בריא": 40-55 מ"מ.', sn: '85%', sp: '80%' },
            { name: 'TMJ Joint Sounds', nameEn: 'TMJ Auscultation', performance: 'מישוש או האזנה על המפרק בעת פתיחה וסגירה.', positive: '"קליק" באמצע פתיחה = תזוזת דיסק עם רדוקציה. "Crepitus" = OA.', sn: '90%', sp: '85%' },
            { name: 'מישוש שרירי לעיסה', nameEn: 'Masticatory Muscle Palpation', performance: 'מישוש של מסטר, טמפורליס, פטריגואיד מדיאלי ולטרלי.', positive: 'רגישות חדה ב-2+ שרירים - חיובי לטיפוס המיופאסציאלי.', sn: '85%', sp: '70%' },
            { name: 'Lateral Excursion', nameEn: 'Lateral Movement', performance: 'מדידת תנועות לטרליות של הסנטר. תקין: 8-12 מ"מ לכל צד.', positive: 'הגבלה אסימטרית >2 מ"מ - חיובי.', sn: '75%', sp: '70%' },
            { name: 'Joint Loading Test', nameEn: 'Joint Loading', performance: 'הבודק לוחץ את הסנטר כלפי מעלה ואחורה תוך פתיחת פה.', positive: 'שחזור הכאב במפרק (לא בשריר) - חיובי לטיפוס תוך-מפרקי.', sn: '78%', sp: '85%' }
          ]
        }
      ]
    }
  };

  // ========== חיפוש ==========
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    const results = [];
    Object.entries(regionsData).forEach(([regionKey, region]) => {
      region.pathologies.forEach((path, pathIdx) => {
        const matchPath = path.name.toLowerCase().includes(q) || path.nameEn.toLowerCase().includes(q);
        const matchTest = path.tests.some(t => t.name.toLowerCase().includes(q) || t.nameEn.toLowerCase().includes(q));
        if (matchPath || matchTest) {
          results.push({ regionKey, region: region.name, pathIdx, pathology: path });
        }
      });
    });
    return results;
  }, [searchQuery]);

  // ========== נקודות לפי תצוגה ==========
  const regionsByView = {
    anterior: [
      { id: 'cervical', cx: 200, cy: 95, r: 16, label: 'צוואר' },
      { id: 'shoulder', cx: 152, cy: 145, r: 18 }, { id: 'shoulder', cx: 248, cy: 145, r: 18 },
      { id: 'elbow', cx: 122, cy: 230, r: 16 }, { id: 'elbow', cx: 278, cy: 230, r: 16 },
      { id: 'wrist', cx: 102, cy: 315, r: 15 }, { id: 'wrist', cx: 298, cy: 315, r: 15 },
      { id: 'hip', cx: 175, cy: 320, r: 16 }, { id: 'hip', cx: 225, cy: 320, r: 16 },
      { id: 'knee', cx: 178, cy: 430, r: 16 }, { id: 'knee', cx: 222, cy: 430, r: 16 },
      { id: 'ankle', cx: 173, cy: 545, r: 14 }, { id: 'ankle', cx: 227, cy: 545, r: 14 }
    ],
    posterior: [
      { id: 'cervical', cx: 200, cy: 95, r: 16 },
      { id: 'thoracic', cx: 200, cy: 195, r: 18 },
      { id: 'lumbar', cx: 200, cy: 280, r: 18 },
      { id: 'shoulder', cx: 152, cy: 145, r: 18 }, { id: 'shoulder', cx: 248, cy: 145, r: 18 },
      { id: 'elbow', cx: 122, cy: 230, r: 16 }, { id: 'elbow', cx: 278, cy: 230, r: 16 },
      { id: 'wrist', cx: 102, cy: 315, r: 15 }, { id: 'wrist', cx: 298, cy: 315, r: 15 },
      { id: 'hip', cx: 175, cy: 325, r: 16 }, { id: 'hip', cx: 225, cy: 325, r: 16 },
      { id: 'knee', cx: 178, cy: 435, r: 16 }, { id: 'knee', cx: 222, cy: 435, r: 16 },
      { id: 'ankle', cx: 173, cy: 548, r: 14 }, { id: 'ankle', cx: 227, cy: 548, r: 14 }
    ]
  };

  const handleRegionClick = (regionId) => {
    setSelectedRegion(regionId);
    setSelectedPathology(null);
    setSelectedTest(null);
    setSelectedSubLocation(null);
  };

  const goHome = () => {
    setSelectedRegion(null);
    setSelectedPathology(null);
    setSelectedTest(null);
    setSearchQuery('');
    setShowSymptomSearch(false);
    setSelectedSymptoms([]);
    setSymptomTextQuery('');
    setShowInfo(false);
    setShowRedFlags(false);
    setShowTreatment(false);
    setTreatmentStage('acute');
    setShowFavorites(false);
    setShowAnamnesis(false);
    setAnamnesisAnswers({});
    setShowDifferential(false);
    setSelectedDifferential(null);
    setShowClusters(false);
    setSelectedCluster(null);
    setClusterResults({});
    setPretestProb(50);
    setSelectedSubLocation(null);
    setShowOutcomeMeasures(false);
    setSelectedOutcomeMeasure(null);
    setOutcomeAnswers({});
    setShowNeuroExam(false);
    setSelectedNeuroSection(null);
    setNeuroFindings({});
    setSelectedDermatome(null);
    setDermatomeView('anterior');
    setShowPatients(false);
    setSelectedPatient(null);
    setEditingPatient(false);
    setShowNewVisit(false);
    setShowNewPatientForm(false);
    setShowAnatomy(false);
    setSelectedAnatomyRegion(null);
    setAnatomyTab('structures');
  };

  const goBack = () => {
    if (selectedTest !== null) setSelectedTest(null);
    else if (selectedPathology !== null) setSelectedPathology(null);
    else if (selectedSubLocation !== null) setSelectedSubLocation(null);
    else if (selectedRegion !== null) setSelectedRegion(null);
  };

  // ========== מאגר תתי-מיקומים אנטומיים ==========
  const subLocationsByRegion = {
    shoulder: [
      { id: 'anterior', label: 'קדמי', labelEn: 'Anterior', icon: '⬆️', description: 'כאב בקדמת הכתף' },
      { id: 'lateral', label: 'לטרלי', labelEn: 'Lateral', icon: '➡️', description: 'כאב בצד הכתף / דלתואיד' },
      { id: 'posterior', label: 'אחורי', labelEn: 'Posterior', icon: '⬇️', description: 'כאב באחורי הכתף / שכמה' },
      { id: 'superior', label: 'עליון / AC', labelEn: 'Superior / AC', icon: '🔝', description: 'כאב מעל הכתף ובמפרק AC' }
    ],
    elbow: [
      { id: 'lateral', label: 'לטרלי', labelEn: 'Lateral', icon: '➡️', description: 'כאב בצד החיצוני של המרפק' },
      { id: 'medial', label: 'מדיאלי', labelEn: 'Medial', icon: '⬅️', description: 'כאב בצד הפנימי של המרפק' },
      { id: 'anterior', label: 'קדמי', labelEn: 'Anterior', icon: '⬆️', description: 'כאב בקדמת המרפק (אנטקוביטל)' },
      { id: 'posterior', label: 'אחורי', labelEn: 'Posterior', icon: '⬇️', description: 'כאב באחורי המרפק (אולקרנון)' }
    ],
    wrist: [
      { id: 'radial', label: 'רדיאלי', labelEn: 'Radial', icon: '⬅️', description: 'צד האגודל - הצד הרדיאלי' },
      { id: 'ulnar', label: 'אולנרי', labelEn: 'Ulnar', icon: '➡️', description: 'צד הזרת - הצד האולנרי' },
      { id: 'dorsal', label: 'גבי', labelEn: 'Dorsal', icon: '⬆️', description: 'צד הגב של כף היד' },
      { id: 'palmar', label: 'פלמרי', labelEn: 'Palmar / Volar', icon: '⬇️', description: 'צד הפנים של כף היד' }
    ],
    cervical: [
      { id: 'central', label: 'מרכזי', labelEn: 'Central', icon: '⬆️', description: 'כאב מרכזי בעמוד שדרה צווארי' },
      { id: 'lateral', label: 'לטרלי', labelEn: 'Lateral / Paraspinal', icon: '↔️', description: 'כאב לצדדים / שרירי הצוואר' },
      { id: 'radiating', label: 'מקרין', labelEn: 'Radiating', icon: '⚡', description: 'כאב המקרין לזרוע / יד' },
      { id: 'upper', label: 'צווארי עליון', labelEn: 'Upper Cervical', icon: '🔝', description: 'C1-C2, כאבי ראש, סחרחורת' }
    ],
    thoracic: [
      { id: 'central', label: 'מרכזי', labelEn: 'Central', icon: '⬆️', description: 'בין השכמות' },
      { id: 'lateral', label: 'לטרלי / צלעות', labelEn: 'Lateral / Ribs', icon: '↔️', description: 'כאב בצלעות / קוסטוורטברלי' }
    ],
    lumbar: [
      { id: 'central', label: 'מרכזי', labelEn: 'Central', icon: '⬆️', description: 'כאב מרכזי בעמוד שדרה' },
      { id: 'paraspinal', label: 'לטרלי / שרירי', labelEn: 'Paraspinal', icon: '↔️', description: 'שרירי הגב' },
      { id: 'radiating', label: 'מקרין לרגל', labelEn: 'Radiating', icon: '⚡', description: 'כאב המקרין לישבן / רגל' },
      { id: 'si', label: 'SI / סקראלי', labelEn: 'SI / Sacral', icon: '⬇️', description: 'מפרק הסקרואיליאק' }
    ],
    hip: [
      { id: 'anterior', label: 'מפשעתי', labelEn: 'Anterior / Groin', icon: '⬆️', description: 'כאב מפשעתי קדמי' },
      { id: 'lateral', label: 'לטרלי / טרוכנטר', labelEn: 'Lateral', icon: '➡️', description: 'כאב בצד הירך / טרוכנטר גדול' },
      { id: 'posterior', label: 'אחורי / עכוז', labelEn: 'Posterior / Buttock', icon: '⬇️', description: 'כאב בעכוז' },
      { id: 'deep', label: 'עמוק / תוך-מפרקי', labelEn: 'Deep / Intra-articular', icon: '🎯', description: '"C-sign", כאב עמוק במפרק' }
    ],
    knee: [
      { id: 'anterior', label: 'קדמי / פיקה', labelEn: 'Anterior / Patellar', icon: '⬆️', description: 'כאב מאחורי או סביב הפיקה' },
      { id: 'medial', label: 'מדיאלי', labelEn: 'Medial', icon: '⬅️', description: 'כאב בצד הפנימי של הברך' },
      { id: 'lateral', label: 'לטרלי', labelEn: 'Lateral', icon: '➡️', description: 'כאב בצד החיצוני של הברך' },
      { id: 'posterior', label: 'אחורי', labelEn: 'Posterior / Popliteal', icon: '⬇️', description: 'כאב באחורי הברך (פוסה פופליטאלית)' }
    ],
    ankle: [
      { id: 'lateral', label: 'לטרלי', labelEn: 'Lateral', icon: '➡️', description: 'כאב בצד החיצוני של הקרסול' },
      { id: 'medial', label: 'מדיאלי', labelEn: 'Medial', icon: '⬅️', description: 'כאב בצד הפנימי של הקרסול' },
      { id: 'posterior', label: 'אחורי / אכילס', labelEn: 'Posterior / Achilles', icon: '⬇️', description: 'כאב באחורי הקרסול / גיד אכילס' },
      { id: 'plantar', label: 'פלנטרי / סולית', labelEn: 'Plantar', icon: '👣', description: 'כאב בכף הרגל / עקב' },
      { id: 'forefoot', label: 'קדמת כף הרגל', labelEn: 'Forefoot', icon: '⬆️', description: 'כאב בבהונות / מטטרסלים' },
      { id: 'midfoot', label: 'אמצע כף הרגל', labelEn: 'Midfoot', icon: '🦶', description: 'כאב באמצע כף הרגל' }
    ],
    tmj: [
      { id: 'joint', label: 'מפרק', labelEn: 'Joint', icon: '🔵', description: 'כאב במפרק הלסת עצמו' },
      { id: 'muscle', label: 'שריר', labelEn: 'Myofascial', icon: '💪', description: 'כאב שרירי לעיסה' }
    ]
  };

  // ========== מיפוי פתולוגיות לתתי-מיקומים ==========
  const pathologySubLocationMap = {
    // כתף
    'Subacromial Impingement Syndrome': ['anterior', 'lateral', 'superior'],
    'Rotator Cuff Tear': ['lateral', 'anterior', 'superior'],
    'Anterior Shoulder Instability': ['anterior'],
    'SLAP Lesion': ['anterior', 'superior', 'posterior'],
    'Adhesive Capsulitis': ['anterior', 'lateral', 'posterior', 'superior'],
    'Bicipital Tendinopathy': ['anterior'],
    'AC Joint Sprain / Separation': ['superior'],
    // מרפק
    'Lateral Epicondylitis (Tennis Elbow)': ['lateral'],
    'Medial Epicondylitis (Golfer\'s Elbow)': ['medial'],
    'Cubital Tunnel Syndrome': ['medial', 'posterior'],
    'UCL Instability': ['medial'],
    'Olecranon Bursitis': ['posterior'],
    // שורש כף יד
    'Carpal Tunnel Syndrome': ['palmar', 'radial'],
    'De Quervain\'s Tenosynovitis': ['radial'],
    'Scapholunate Instability': ['dorsal', 'radial'],
    'Triangular Fibrocartilage Complex Tear': ['ulnar'],
    'Stenosing Tenosynovitis': ['palmar'],
    'Dupuytren\'s Contracture': ['palmar'],
    // צוואר
    'Cervical Radiculopathy': ['lateral', 'radiating'],
    'Upper Cervical Instability': ['upper'],
    'Whiplash Associated Disorder': ['central', 'lateral', 'upper'],
    'Cervical Spondylotic Myelopathy': ['central', 'radiating'],
    // גב גבי
    'T4 Syndrome': ['central'],
    'Costovertebral Joint Dysfunction': ['lateral'],
    // גב מותני
    'Lumbar Disc Herniation': ['central', 'radiating', 'paraspinal'],
    'Sacroiliac Joint Dysfunction': ['si'],
    'Lumbar Spinal Stenosis': ['central', 'radiating'],
    'Spondylolisthesis': ['central'],
    'Cauda Equina Syndrome': ['central', 'radiating'],
    'Lumbar Facet Joint Syndrome': ['paraspinal', 'central'],
    // ירך
    'Femoroacetabular Impingement': ['anterior', 'deep'],
    'Greater Trochanteric Pain Syndrome': ['lateral'],
    'Hip Osteoarthritis': ['anterior', 'deep', 'lateral'],
    'Acetabular Labral Tear': ['anterior', 'deep'],
    'Athletic Pubalgia / Sports Hernia': ['anterior'],
    'Piriformis Syndrome': ['posterior'],
    // ברך
    'Anterior Cruciate Ligament Tear': ['anterior', 'medial', 'lateral'],
    'Posterior Cruciate Ligament Tear': ['posterior'],
    'Medial Collateral Ligament Tear': ['medial'],
    'Lateral Collateral Ligament Tear': ['lateral'],
    'Meniscus Tear': ['medial', 'lateral'],
    'Patellofemoral Pain Syndrome': ['anterior'],
    'Iliotibial Band Syndrome': ['lateral'],
    'Osgood-Schlatter Disease': ['anterior'],
    // קרסול וכף רגל
    'Lateral Ankle Sprain': ['lateral'],
    'Syndesmotic / High Ankle Sprain': ['anterior', 'lateral'],
    'Achilles Tendon Rupture': ['posterior'],
    'Plantar Fasciitis': ['plantar'],
    'Tarsal Tunnel Syndrome': ['medial', 'plantar'],
    "Morton's Neuroma": ['forefoot', 'plantar'],
    'Hallux Valgus / Bunion': ['forefoot', 'medial'],
    // פתולוגיות חדשות - כתף
    'Posterior Shoulder Instability': ['posterior'],
    'Calcific Tendinitis': ['lateral', 'anterior', 'superior'],
    'Long Head Biceps Rupture': ['anterior'],
    // פתולוגיות חדשות - מרפק
    'Distal Biceps Tendon Rupture': ['anterior'],
    'Pronator Syndrome': ['anterior', 'medial'],
    'Radial Tunnel Syndrome': ['lateral'],
    // פתולוגיות חדשות - יד
    'Mallet Finger': ['dorsal'],
    'Boutonnière Deformity': ['dorsal', 'palmar'],
    'Swan Neck Deformity': ['dorsal', 'palmar'],
    'Ganglion Cyst': ['dorsal', 'palmar'],
    "Kienböck's Disease": ['dorsal'],
    // פתולוגיות חדשות - ירך
    'Snapping Hip Syndrome (Coxa Saltans)': ['lateral', 'anterior'],
    'Hamstring Strain': ['posterior'],
    'Adductor Strain (Groin Pull)': ['anterior'],
    'Iliopsoas Tendinopathy': ['anterior', 'deep'],
    // פתולוגיות חדשות - ברך
    "Patellar Tendinopathy (Jumper's Knee)": ['anterior'],
    'Quadriceps Tendinopathy': ['anterior'],
    'Pes Anserine Bursitis': ['medial'],
    "Baker's Cyst (Popliteal Cyst)": ['posterior'],
    // פתולוגיות חדשות - קרסול וכף רגל
    'Posterior Tibial Tendon Dysfunction (PTTD)': ['medial', 'plantar'],
    'Stress Fracture': ['anterior', 'medial', 'plantar', 'forefoot'],
    'Sesamoiditis': ['plantar', 'forefoot'],
    'Turf Toe': ['forefoot', 'plantar'],
    // V16 - פתולוגיות חיוניות חדשות
    'Thoracic Outlet Syndrome': ['anterior', 'superior'],
    'Spondylolysis': ['central', 'paraspinal'],
    'Femoral Neck Stress Fracture': ['anterior', 'deep'],
    'Trochanteric Bursitis (True)': ['lateral'],
    'Insertional Achilles Tendinopathy': ['posterior'],
    'Medial Tibial Stress Syndrome (Shin Splints)': ['medial', 'anterior'],
    'Chronic Exertional Compartment Syndrome (CECS)': ['anterior', 'lateral'],
    // V19 - פתולוגיות חיוניות חדשות
    'Acute Compartment Syndrome': ['anterior', 'lateral', 'medial', 'posterior'],
    'Cuboid Syndrome': ['lateral', 'midfoot'],
    'Lisfranc Injury': ['midfoot', 'plantar'],
    'Sinus Tarsi Syndrome': ['lateral'],
    'Calf Strain (Tennis Leg)': ['posterior'],
    'Scaphoid Fracture': ['radial', 'dorsal'],
    'TMJ Dysfunction (TMD)': ['joint', 'muscle'],
    'Quadriceps Strain': ['anterior'],
    'Hip Pointer (Iliac Crest Contusion)': ['lateral'],
    'Meralgia Paresthetica': ['anterior', 'lateral']
  };

  // פונקציה: בדיקה האם פתולוגיה מתאימה לתת-מיקום
  const isPathologyInSubLocation = (pathology, subLocationId) => {
    const locations = pathologySubLocationMap[pathology.nameEn];
    if (!locations) return true; // אם אין מיפוי, מציג בכל מיקום
    return locations.includes(subLocationId);
  };

  // ========== חיפוש לפי סימפטומים ==========
  const symptomKeywords = {
    'כאב לילי': ['rotator cuff', 'frozen', 'GTPS', 'subacromial', 'אכילס'],
    'נימולים ביד': ['carpal', 'cubital', 'cervical radiculopathy', 'TFCC'],
    'נימולים ברגל': ['lumbar disc', 'piriformis', 'tarsal', 'spinal stenosis'],
    'כאב מקרין לזרוע': ['cervical radiculopathy', 'whiplash', 'thoracic'],
    'כאב מקרין לרגל': ['lumbar disc', 'piriformis', 'sciatica', 'spinal stenosis'],
    'נפיחות': ['ACL', 'meniscus', 'olecranon', 'PCL', 'effusion'],
    'הגבלת תנועה': ['frozen shoulder', 'adhesive', 'OA', 'capsulitis'],
    'קליק במפרק': ['SLAP', 'meniscus', 'labral', 'scapholunate'],
    'תחושת אי יציבות': ['ACL', 'shoulder instability', 'spondylolisthesis'],
    'חולשה': ['rotator cuff', 'cervical radiculopathy', 'cubital tunnel'],
    'כאב בבוקר': ['plantar fasciitis', 'OA', 'frozen shoulder'],
    'כאב בעלייה במדרגות': ['PFPS', 'meniscus', 'hip OA'],
    'כאב בישיבה ממושכת': ['piriformis', 'PFPS', 'spinal stenosis', 'FAI'],
    'כאב בהליכה': ['spinal stenosis', 'hip OA', 'plantar fasciitis', 'GTPS'],
    'כאב בריצה': ['ITB', 'plantar fasciitis', 'shin splints', 'PFPS'],
    'כאב בהרמת יד': ['impingement', 'rotator cuff', 'frozen', 'biceps'],
    'כאב לאחר חבלה': ['ACL', 'MCL', 'ankle sprain', 'AC joint', 'fracture'],
    'תפיסה של אצבע': ['trigger finger', "dupuytren"],
    'נפילת אגן': ['GTPS', 'gluteus medius', 'trendelenburg'],
    'אי שליטה על סוגרים': ['cauda equina'],
    'כאב במפשעה': ['FAI', 'labral tear', 'athletic pubalgia', 'hip OA'],
    'כאב בעקב': ['plantar fasciitis', 'achilles', 'tarsal tunnel'],
    'כאב בכף רגל קדמית': ['morton', 'metatarsalgia', 'hallux valgus'],
    'כאב בעמוד שדרה': ['disc herniation', 'facet', 'SI', 'spondylolisthesis'],
    'כאבי ראש': ['cervical', 'whiplash', 'T4 syndrome', 'upper cervical'],
    'סחרחורת': ['upper cervical', 'whiplash', 'VBI']
  };

  const symptomBasedResults = useMemo(() => {
    const results = [];
    const queryText = symptomTextQuery.toLowerCase().trim();

    if (selectedSymptoms.length === 0 && !queryText) return results;

    // איסוף מילות מפתח מהסימפטומים שנבחרו
    const keywords = new Set();
    selectedSymptoms.forEach(s => {
      (symptomKeywords[s] || []).forEach(k => keywords.add(k.toLowerCase()));
    });

    // הוספת מילות מפתח מהטקסט החופשי
    if (queryText) {
      // חיפוש האם הטקסט מכיל אחד מהסימפטומים המוכרים
      Object.entries(symptomKeywords).forEach(([sym, kws]) => {
        if (queryText.includes(sym.toLowerCase()) || sym.toLowerCase().includes(queryText)) {
          kws.forEach(k => keywords.add(k.toLowerCase()));
        }
      });
      // הוספת המילים מהטקסט עצמן
      queryText.split(/\s+/).forEach(w => { if (w.length > 2) keywords.add(w); });
    }

    // חיפוש פתולוגיות מתאימות
    Object.entries(regionsData).forEach(([regionKey, region]) => {
      region.pathologies.forEach((path, pathIdx) => {
        let score = 0;
        const searchText = (path.name + ' ' + path.nameEn + ' ' + path.shortDesc + ' ' + path.fullDescription + ' ' + path.clinicalSigns).toLowerCase();
        keywords.forEach(kw => {
          if (searchText.includes(kw)) score += 1;
        });
        if (score > 0) {
          results.push({ regionKey, region: region.name, pathIdx, pathology: path, score });
        }
      });
    });

    return results.sort((a, b) => b.score - a.score).slice(0, 15);
  }, [selectedSymptoms, symptomTextQuery]);

  const toggleSymptom = (sym) => {
    setSelectedSymptoms(prev =>
      prev.includes(sym) ? prev.filter(s => s !== sym) : [...prev, sym]
    );
  };

  const closeSymptomSearch = () => {
    setShowSymptomSearch(false);
    setSelectedSymptoms([]);
    setSymptomTextQuery('');
  };

  const pathologyImageSearch = (pathName) => {
    return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(pathName + ' anatomy pathology')}`;
  };

  // ========== מאגר פרוטוקולי טיפול לפי פתולוגיה ושלב ==========
  const treatmentProtocols = {
    'Subacromial Impingement Syndrome': {
      acute: {
        title: 'שלב חריף (0-2 שבועות)',
        goals: ['הפחתת כאב ודלקת', 'מנוחה יחסית', 'הגנה על הגיד'],
        interventions: [
          'מנוחה יחסית - הימנעות מתנועות מעל הראש',
          'קרח 15-20 דקות, 3-4 פעמים ביום',
          'NSAIDs לפי המלצת רופא (איבופרופן 400 מ"ג x 3)',
          'תנועה פסיבית עדינה בטווחים ללא כאב',
          'קינסיו טייפ לתמיכה'
        ],
        avoid: ['פעילויות מעל הראש', 'הרמת משקלים', 'תנוחות שמחמירות']
      },
      subacute: {
        title: 'שלב סאב-אקוטי (2-6 שבועות)',
        goals: ['החזרת ROM', 'התחלת חיזוק', 'תיקון תנוחות'],
        interventions: [
          'תרגילי מטוטלת (Codman)',
          'תרגילי ROM אקטיבי-אסיסטיבי',
          'חיזוק מייצבי שכמה: serratus anterior, lower trapezius',
          'תרגילי Scapular setting',
          'פיזיותרפיה ידנית - mobilization של GH ו-AC',
          'תרגילי isometric של שרוול המסובבים'
        ],
        avoid: ['תרגילים בכאב', 'דחיפת חיזוק מהר מדי']
      },
      chronic: {
        title: 'שלב כרוני / חזרה לפעילות (6-12 שבועות)',
        goals: ['חיזוק מלא', 'חזרה לפעילות תפקודית', 'מניעת חזרה'],
        interventions: [
          'חיזוק מתקדם של שרוול המסובבים עם משקולות/גומיות',
          'תרגילי PNF',
          'תרגילי פליומטריה (אם רלוונטי לספורט)',
          'עבודה על תנוחה ומנגנוני תנועה',
          'תרגילים פונקציונליים לפי הספורט/מקצוע',
          'הדרכה למניעת חזרה'
        ],
        avoid: ['חזרה מהירה מדי לפעילות מלאה']
      },
      surgical: 'התערבות ניתוחית (אקרומיופלסטיקה) רק אם אין שיפור לאחר 3-6 חודשי טיפול שמרני, או בקרעי שרוול גדולים. שיעור הצלחה של טיפול שמרני: 70%-90%.'
    },
    'Rotator Cuff Tear': {
      acute: {
        title: 'שלב חריף (0-3 שבועות)',
        goals: ['הגנה', 'הפחתת כאב', 'מניעת קיפאון'],
        interventions: [
          'מנוחה בסד לקרעים מלאים (1-2 שבועות)',
          'קרח, NSAIDs',
          'תנועה פסיבית עדינה למניעת capsulitis',
          'תרגילי Codman (מטוטלת)'
        ],
        avoid: ['הרמת היד אקטיבית', 'נשיאת משקל']
      },
      subacute: {
        title: 'שלב סאב-אקוטי (3-12 שבועות)',
        goals: ['ROM מלא פסיבי', 'התחלת אקטיבי', 'חיזוק עדין'],
        interventions: [
          'ROM פסיבי → אקטיבי-אסיסטיבי → אקטיבי',
          'חיזוק isometric של שרוול המסובבים',
          'חיזוק מייצבי שכמה',
          'פיזיותרפיה ידנית'
        ],
        avoid: ['חיזוק כנגד התנגדות מוקדם מדי']
      },
      chronic: {
        title: 'שלב כרוני (3-6 חודשים)',
        goals: ['חיזוק מלא', 'חזרה לתפקוד'],
        interventions: [
          'חיזוק פרוגרסיבי עם גומיות ומשקולות',
          'עבודה במישורים פונקציונליים',
          'תרגילי endurance',
          'חזרה הדרגתית לפעילות'
        ],
        avoid: ['חזרה לפעילות לפני שיש 80%-90% מכוח הצד הנגדי']
      },
      surgical: 'אינדיקציה לניתוח: קרע מלא בצעירים פעילים, אי-תגובה לטיפול שמרני 3-6 חודשים, חולשה משמעותית. שחזור: 4-6 חודשים. בקרעים מסיביים בקשישים - לעיתים reverse total shoulder.'
    },
    'Lateral Epicondylitis (Tennis Elbow)': {
      acute: {
        title: 'שלב חריף (0-2 שבועות)',
        goals: ['הפחתת כאב ודלקת'],
        interventions: [
          'מנוחה יחסית - הפחתת פעילויות מעוררות',
          'קרח לאחר פעילות',
          'NSAIDs מקומיים (Voltaren gel)',
          'תמיכה (counterforce brace - Epicondyle band)',
          'הימנעות מאחיזות חזקות'
        ],
        avoid: ['חיזוק מוקדם', 'עבודה כואבת']
      },
      subacute: {
        title: 'שלב סאב-אקוטי (2-6 שבועות)',
        goals: ['התחלת חיזוק אקסצנטרי', 'תיקון מנגנון'],
        interventions: [
          'תרגילי Tyler twist (FlexBar)',
          'חיזוק אקסצנטרי של אקסטנסורים',
          'מתיחות עדינות',
          'פיזיותרפיה ידנית - massage רוחבי, MWM',
          'בדיקת ארגונומיה'
        ],
        avoid: ['חיזוק קונצנטרי כבד']
      },
      chronic: {
        title: 'שלב כרוני (>6 שבועות)',
        goals: ['חיזוק מלא וחזרה לפעילות'],
        interventions: [
          'תרגילי אקסצנטרי מתקדמים',
          'חיזוק כל שרשרת קינטית של היד',
          'תרגילי עמידות ופונקציה',
          'בחינת טכניקה בספורט/עבודה',
          'הזרקת קורטיקוסטרואידים - שנויה במחלוקת, יעילות לטווח קצר',
          'PRP / Shockwave therapy - באי-תגובה'
        ],
        avoid: ['חזרה מלאה ללא חיזוק מספק']
      },
      surgical: 'ניתוח (Hohmann/אנדוסקופי) רק אחרי 6-12 חודשי טיפול שמרני שלא עזר. שיעור הצלחה ניתוחי: 80%-90%.'
    },
    'Carpal Tunnel Syndrome': {
      acute: {
        title: 'שלב מוקדם / קל',
        goals: ['הפחתת לחץ על העצב'],
        interventions: [
          'סד לילי בעמדת ניטרלית (חיוני!)',
          'הימנעות מפלקסיה ממושכת',
          'הפסקות בעבודה חוזרת',
          'תיקון ארגונומיה',
          'NSAIDs במידת הצורך'
        ],
        avoid: ['פלקסיה מקסימלית של שורש כף יד', 'אחיזות חזקות']
      },
      subacute: {
        title: 'שלב בינוני',
        goals: ['שיפור הסימפטומים', 'גלישה עצבית'],
        interventions: [
          'Nerve gliding exercises (median nerve)',
          'Tendon gliding exercises',
          'הזרקת קורטיקוסטרואידים מקומית',
          'אולטרסאונד',
          'פיזיותרפיה ידנית - mobilization של עצמות הקרפוס',
          'יוגה / Pilates - הוכחו יעילים'
        ],
        avoid: ['פעילויות שמחמירות']
      },
      chronic: {
        title: 'שלב מתקדם / חמור',
        goals: ['שחרור הלחץ על העצב'],
        interventions: [
          'אינדיקציה לניתוח אם: אטרופיה של thenar, חולשה משמעותית, אובדן תחושה קבוע, EMG מראה דנברציה',
          'שמרני יעיל פחות בשלב זה',
          'שיקום לאחר ניתוח: 6-12 שבועות'
        ],
        avoid: []
      },
      surgical: 'ניתוח Carpal Tunnel Release - פתוח או אנדוסקופי. שיעור הצלחה: >90%. אינדיקציות: כשל טיפול שמרני 6 שבועות, סימני ניוון מוטורי, EMG חמור, תסמינים לילים קשים.'
    },
    'Lumbar Disc Herniation': {
      acute: {
        title: 'שלב חריף (0-2 שבועות)',
        goals: ['הפחתת כאב', 'מניעת התקדמות'],
        interventions: [
          'הימנעות ממנוחה מוחלטת (לא יותר מ-2-3 ימים)',
          'NSAIDs, משככי כאבים',
          'גבאפנטין/פרגאבלין לכאב נוירופתי',
          'קרח/חום לפי תחושה',
          'תנועה עדינה בטווחים נסבלים',
          'הליכה קצרה ותכופה'
        ],
        avoid: ['מנוחה מוחלטת ממושכת', 'פלקסיה כבדה', 'הרמת משקל']
      },
      subacute: {
        title: 'שלב סאב-אקוטי (2-6 שבועות)',
        goals: ['החזרת תפקוד', 'מאקנציזציה'],
        interventions: [
          'McKenzie exercises (extension biased)',
          'Lumbar stabilization (transversus abdominis, multifidus)',
          'פיזיותרפיה ידנית - mobilization, לא manipulation בנוירולוגיה',
          'Neural mobilization',
          'הליכה הדרגתית',
          'הדרכה לתנוחות נכונות'
        ],
        avoid: ['פלקסיה+סיבוב', 'sit-ups']
      },
      chronic: {
        title: 'שלב כרוני (>6 שבועות)',
        goals: ['חזרה לפעילות', 'מניעת חזרה'],
        interventions: [
          'תוכנית חיזוק core מקיפה',
          'יוגה / Pilates ספציפיים',
          'אימון אירובי (הליכה, שחיה)',
          'הזרקה אפידורלית של סטרואידים - אפשרות',
          'חזרה הדרגתית לפעילות',
          'CBT אם יש כאב כרוני'
        ],
        avoid: ['חזרה לעבודה כבדה ללא חיזוק']
      },
      surgical: 'אינדיקציות לניתוח: סימני קאודה אקווינה (חירום!), חולשה מוטורית מתקדמת, אי-תגובה לטיפול שמרני 6-12 שבועות עם כאב משמעותי. ניתוח: Microdiscectomy. שיעור הצלחה: 80%-90% אך 5%-15% חזרה.'
    },
    'Anterior Cruciate Ligament Tear': {
      acute: {
        title: 'שלב חריף (0-2 שבועות)',
        goals: ['הפחתת נפיחות', 'החזרת ROM'],
        interventions: [
          'PRICE (Protect, Rest, Ice, Compression, Elevation)',
          'NSAIDs',
          'דריכה חלקית עם קביים לפי כאב',
          'תרגילי ROM פסיבי-אקטיבי - חשוב להגיע לאקסטנציה מלאה!',
          'Quad sets, Heel slides',
          'אלקטרוסטימולציה של quadriceps'
        ],
        avoid: ['פעילויות פיתול', 'דריכה מלאה ללא תמיכה']
      },
      subacute: {
        title: 'שלב סאב-אקוטי (2-6 שבועות)',
        goals: ['חיזוק מקיף', 'יציבות פרופריוצפטיבית'],
        interventions: [
          'חיזוק quadriceps, hamstrings, glutes',
          'Closed chain exercises (Squats, Lunges)',
          'אימון פרופריוצפציה - BOSU, רגל אחת',
          'אופניים נייחים, שחיה',
          'תוכנית prehab לקראת ניתוח אם מתוכנן'
        ],
        avoid: ['קפיצות', 'pivoting sports']
      },
      chronic: {
        title: 'שלב חזרה לפעילות (3-9 חודשים, אחרי ניתוח)',
        goals: ['חזרה מלאה לספורט'],
        interventions: [
          'פליומטריה',
          'אימון agility',
          'בדיקות תפקודיות (Hop tests)',
          'תרגילי חיזוק מתקדמים',
          'בדיקת LSI >90% (Limb Symmetry Index) לפני חזרה',
          'בדיקה פסיכולוגית למוכנות (TSK, ACL-RSI)'
        ],
        avoid: ['חזרה לפני 9 חודשים מניתוח']
      },
      surgical: 'אינדיקציות לניתוח: צעירים פעילים, ספורט עם פיתולים, אי יציבות תפקודית, פגיעות נלוות (מניסקוס). שיטות: BTB, Hamstring autograft, Allograft. שיקום פוסט-ניתוחי: 9-12 חודשים. גישה שמרנית אפשרית בעיקר באוכלוסייה לא ספורטיבית.'
    },
    'Plantar Fasciitis': {
      acute: {
        title: 'שלב חריף (0-4 שבועות)',
        goals: ['הפחתת כאב'],
        interventions: [
          'מתיחות בוקר של הפסציה והסובל',
          'קרח (גלגול בקבוק קפוא 10 דק x 3)',
          'נעליים תומכות, מדרסים',
          'NSAIDs',
          'הימנעות מהליכה יחפה',
          'ירידה במשקל אם רלוונטי'
        ],
        avoid: ['ריצה', 'הליכה יחפה', 'נעליים שטוחות']
      },
      subacute: {
        title: 'שלב סאב-אקוטי (4-12 שבועות)',
        goals: ['חיזוק וגמישות'],
        interventions: [
          'חיזוק intrinsic foot muscles',
          'תרגילי Towel curls, Marble pickups',
          'תרגילי High-load strength (Rathleff)',
          'מתיחות סובל-גסטרוקנמיוס',
          'Night splint',
          'פיזיותרפיה ידנית - mobilization של talocrural ו-MTP1'
        ],
        avoid: []
      },
      chronic: {
        title: 'שלב כרוני (>3 חודשים)',
        goals: ['פתרון ארוך טווח'],
        interventions: [
          'Shockwave therapy (ESWT)',
          'PRP injections',
          'הזרקת סטרואידים - שנויה במחלוקת (סיכון לקרע פסציה)',
          'מדרסים מותאמים אישית',
          'הערכה ביומכאנית מלאה'
        ],
        avoid: ['הזרקות חוזרות של סטרואידים']
      },
      surgical: 'נדיר - רק אחרי 6-12 חודשי טיפול שמרני שלא עזר. אופציות: Plantar fascia release, Gastrocnemius recession.'
    },
    'Adhesive Capsulitis': {
      acute: {
        title: 'שלב 1 - קפיאה (Freezing, 6 שבועות - 9 חודשים)',
        goals: ['ניהול כאב', 'מניעת אובדן ROM נוסף'],
        interventions: [
          'NSAIDs',
          'הזרקת קורטיקוסטרואידים תוך-מפרקית (יעילה במיוחד בשלב זה)',
          'קרח/חום לפי הקלה',
          'תנועה פסיבית עדינה ללא כאב',
          'תרגילי מטוטלת',
          'הדרכה - לא לאמץ!'
        ],
        avoid: ['מתיחות אגרסיביות (מחמירות!)', 'פיזיותרפיה כואבת']
      },
      subacute: {
        title: 'שלב 2 - קפוא (Frozen, 4-12 חודשים)',
        goals: ['החזרת ROM הדרגתית'],
        interventions: [
          'מתיחות אקטיביות במנעדים נסבלים',
          'פיזיותרפיה ידנית - GH joint mobilization',
          'חום לפני תרגילים',
          'הידרותרפיה',
          'Hydrodilatation - הזרקה עם נוזל פיזיולוגי להרחבת קופסית'
        ],
        avoid: ['פעילות חזקה מדי - גורמת רגרסיה']
      },
      chronic: {
        title: 'שלב 3 - הפשרה (Thawing, 5-26 חודשים)',
        goals: ['החזרת תפקוד מלא'],
        interventions: [
          'מתיחות מתקדמות',
          'חיזוק שרוול המסובבים ושכמה',
          'תרגילים פונקציונליים',
          'חזרה לפעילות יומיומית מלאה'
        ],
        avoid: []
      },
      surgical: 'נדיר - רק במקרים עיקשים: Manipulation under anesthesia (MUA), Arthroscopic capsular release. סוכרתיים נוטים פחות להגיב לטיפול שמרני.'
    },
    'Cervical Radiculopathy': {
      acute: {
        title: 'שלב חריף (0-2 שבועות)',
        goals: ['הפחתת כאב'],
        interventions: [
          'NSAIDs, גבאפנטין לכאב נוירופתי',
          'הימנעות מתנוחות מעוררות',
          'צוואר עדינה - לא לאמץ',
          'תרגילי "Bakody" (יד על ראש להקלה)',
          'פיזיותרפיה ידנית עדינה'
        ],
        avoid: ['מניפולציה צווארית בנוכחות סימנים נוירולוגיים', 'תנוחות גרועות']
      },
      subacute: {
        title: 'שלב סאב-אקוטי (2-6 שבועות)',
        goals: ['החזרת ROM, נירומובילציה'],
        interventions: [
          'Cervical traction (mechanical or manual)',
          'Neural mobilization (slider/tensioner)',
          'חיזוק deep neck flexors',
          'McKenzie צווארי',
          'תיקון תנוחה',
          'תרגילי Scapular retraction'
        ],
        avoid: ['תרגילים מגרים של השורש הפגוע']
      },
      chronic: {
        title: 'שלב כרוני (>6 שבועות)',
        goals: ['חזרה מלאה לתפקוד'],
        interventions: [
          'חיזוק מקיף של צוואר וגבע',
          'הזרקה אפידורלית סלקטיבית - אפשרות',
          'אימון תנוחתי',
          'הדרכה ארגונומית'
        ],
        avoid: []
      },
      surgical: 'אינדיקציות: חולשה מוטורית מתקדמת, אי-תגובה לשמרני 6-12 שבועות, מיאלופתיה. ניתוח: ACDF (Anterior Cervical Discectomy and Fusion) או Disc replacement.'
    }
  };

  // פרוטוקול גנרי לפתולוגיות שאין להן פרוטוקול ספציפי
  const getGenericProtocol = (pathology) => ({
    acute: {
      title: 'שלב חריף (0-2 שבועות)',
      goals: ['הפחתת כאב ודלקת', 'הגנה על האזור', 'מניעת ניוון'],
      interventions: [
        'מנוחה יחסית - הימנעות מתנועות מעוררות',
        'קרח 15-20 דקות, מספר פעמים ביום',
        'NSAIDs לפי המלצת רופא',
        'תנועה עדינה בטווחים ללא כאב',
        'הגנה על האזור (סד/תמיכה במידת הצורך)'
      ],
      avoid: ['פעילויות מעוררות כאב', 'מנוחה מוחלטת ממושכת']
    },
    subacute: {
      title: 'שלב סאב-אקוטי (2-6 שבועות)',
      goals: ['החזרת ROM', 'התחלת חיזוק', 'נורמליזציה של תנועה'],
      interventions: [
        'תרגילי ROM אקטיבי-אסיסטיבי',
        'פיזיותרפיה ידנית',
        'חיזוק isometric בהתחלה',
        'תרגילי גמישות',
        'תרגילי בקרה מוטורית'
      ],
      avoid: ['חיזוק כבד מהר מדי', 'תרגילים בכאב']
    },
    chronic: {
      title: 'שלב כרוני / חזרה לפעילות (>6 שבועות)',
      goals: ['חיזוק מלא', 'חזרה לתפקוד', 'מניעת חזרה'],
      interventions: [
        'חיזוק פרוגרסיבי',
        'תרגילי endurance',
        'תרגילים פונקציונליים',
        'חזרה הדרגתית לפעילות מלאה',
        'הדרכה למניעת חזרה'
      ],
      avoid: ['חזרה מהירה מדי לעצימות מלאה']
    },
    surgical: 'התערבות ניתוחית נשקלת רק לאחר כשל של טיפול שמרני (לרוב 3-6 חודשים) או במצבים ספציפיים. יש להתייעץ עם אורתופד.'
  });

  const getProtocol = (pathology) => {
    return treatmentProtocols[pathology.nameEn] || getGenericProtocol(pathology);
  };

  // ========== ניהול מועדפים ==========
  // מזהים יחידים: pathologies = "regionKey:pathIdx", tests = "regionKey:pathIdx:testIdx"

  const getPathologyId = (regionKey, pathIdx) => `${regionKey}:${pathIdx}`;
  const getTestId = (regionKey, pathIdx, testIdx) => `${regionKey}:${pathIdx}:${testIdx}`;

  const isPathologyFavorite = (regionKey, pathIdx) => {
    return favoritePathologies.includes(getPathologyId(regionKey, pathIdx));
  };

  const isTestFavorite = (regionKey, pathIdx, testIdx) => {
    return favoriteTests.includes(getTestId(regionKey, pathIdx, testIdx));
  };

  const togglePathologyFavorite = (regionKey, pathIdx) => {
    const id = getPathologyId(regionKey, pathIdx);
    setFavoritePathologies(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleTestFavorite = (regionKey, pathIdx, testIdx) => {
    const id = getTestId(regionKey, pathIdx, testIdx);
    setFavoriteTests(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // קבלת הפתולוגיות והבדיקות המועדפות עם הנתונים שלהם
  const favoritePathologyData = useMemo(() => {
    return favoritePathologies.map(id => {
      const [regionKey, pathIdx] = id.split(':');
      const pathology = regionsData[regionKey]?.pathologies[parseInt(pathIdx)];
      if (!pathology) return null;
      return {
        id,
        regionKey,
        pathIdx: parseInt(pathIdx),
        regionName: regionsData[regionKey].name,
        pathology
      };
    }).filter(Boolean);
  }, [favoritePathologies]);

  const favoriteTestData = useMemo(() => {
    return favoriteTests.map(id => {
      const [regionKey, pathIdx, testIdx] = id.split(':');
      const pathology = regionsData[regionKey]?.pathologies[parseInt(pathIdx)];
      const test = pathology?.tests[parseInt(testIdx)];
      if (!test) return null;
      return {
        id,
        regionKey,
        pathIdx: parseInt(pathIdx),
        testIdx: parseInt(testIdx),
        regionName: regionsData[regionKey].name,
        pathologyName: pathology.name,
        test
      };
    }).filter(Boolean);
  }, [favoriteTests]);

  // ========== אנמנזה מובנית ==========
  const anamnesisQuestions = [
    {
      id: 'mechanism',
      question: 'מנגנון הפגיעה',
      icon: '🎯',
      options: [
        { value: 'trauma', label: 'חבלה ישירה / נפילה / תאונה', keywords: ['ACL', 'MCL', 'fracture', 'AC joint', 'ankle sprain'] },
        { value: 'overuse', label: 'שימוש יתר / תנועה חוזרת', keywords: ['tendinopathy', 'epicondylitis', 'plantar fasciitis', 'ITB', 'PFPS', 'carpal tunnel', 'cubital'] },
        { value: 'gradual', label: 'הופעה הדרגתית ללא סיבה ברורה', keywords: ['frozen', 'OA', 'adhesive', 'tendinopathy', 'spinal stenosis', 'spondylosis'] },
        { value: 'sudden', label: 'התחלה פתאומית במנוחה / שינה', keywords: ['frozen', 'disc herniation', 'capsulitis'] },
        { value: 'insidious', label: 'מתפתח לאחר פעילות חריגה', keywords: ['tendinopathy', 'overuse', 'stress fracture'] }
      ]
    },
    {
      id: 'painLocation',
      question: 'מיקום הכאב',
      icon: '📍',
      options: [
        { value: 'local', label: 'מקומי בלבד - באזור ספציפי', keywords: ['tendinopathy', 'bursitis', 'joint', 'fracture'] },
        { value: 'radiating', label: 'מקרין למקום אחר', keywords: ['radiculopathy', 'disc herniation', 'piriformis', 'cervical', 'sciatica'] },
        { value: 'diffuse', label: 'מפוזר באזור גדול', keywords: ['frozen', 'capsulitis', 'OA', 'fibromyalgia'] },
        { value: 'multiple', label: 'במספר אזורים שונים', keywords: ['systemic', 'inflammatory', 'fibromyalgia', 'RA'] }
      ]
    },
    {
      id: 'painCharacter',
      question: 'אופי הכאב',
      icon: '⚡',
      options: [
        { value: 'sharp', label: 'חד / דוקר', keywords: ['nerve', 'fracture', 'meniscus', 'labral'] },
        { value: 'dull', label: 'עמום / כבד', keywords: ['OA', 'tendinopathy', 'capsulitis', 'muscle'] },
        { value: 'burning', label: 'שורף / נימולים', keywords: ['nerve', 'radiculopathy', 'carpal tunnel', 'cubital', 'tarsal', 'neuroma'] },
        { value: 'throbbing', label: 'הולם / פועם', keywords: ['inflammation', 'infection', 'vascular'] },
        { value: 'aching', label: 'כאב מציק קבוע', keywords: ['OA', 'overuse', 'tendinopathy'] }
      ]
    },
    {
      id: 'aggravating',
      question: 'מה מחמיר את הכאב?',
      icon: '⬆️',
      options: [
        { value: 'movement', label: 'תנועה', keywords: ['tendinopathy', 'impingement', 'OA', 'meniscus', 'labral'] },
        { value: 'rest', label: 'מנוחה / שינה', keywords: ['inflammatory', 'frozen', 'tumor', 'infection'] },
        { value: 'night', label: 'בלילה - מעיר משינה', keywords: ['rotator cuff', 'frozen', 'GTPS', 'tumor', 'infection'] },
        { value: 'sitting', label: 'ישיבה ממושכת', keywords: ['piriformis', 'PFPS', 'spinal stenosis', 'FAI', 'disc'] },
        { value: 'walking', label: 'הליכה / עמידה', keywords: ['spinal stenosis', 'plantar fasciitis', 'hip OA', 'GTPS', 'PFPS'] },
        { value: 'lifting', label: 'הרמה / נשיאת משקל', keywords: ['rotator cuff', 'disc', 'biceps', 'supraspinatus'] },
        { value: 'morning', label: 'בעיקר בבוקר', keywords: ['plantar fasciitis', 'inflammatory', 'OA', 'frozen'] }
      ]
    },
    {
      id: 'relieving',
      question: 'מה מקל על הכאב?',
      icon: '⬇️',
      options: [
        { value: 'rest', label: 'מנוחה', keywords: ['mechanical', 'tendinopathy', 'overuse'] },
        { value: 'movement', label: 'תנועה / חימום', keywords: ['inflammatory', 'OA', 'frozen', 'morning stiffness'] },
        { value: 'flexion', label: 'כיפוף קדימה / ישיבה', keywords: ['spinal stenosis', 'lumbar disc'] },
        { value: 'extension', label: 'יישור הגב / שכיבה על הבטן', keywords: ['lumbar disc', 'McKenzie pattern'] },
        { value: 'cold', label: 'קור', keywords: ['acute inflammation'] },
        { value: 'heat', label: 'חום', keywords: ['muscle spasm', 'chronic', 'arthritis'] },
        { value: 'nothing', label: 'שום דבר לא עוזר באמת', keywords: ['serious', 'tumor', 'infection', 'severe'] }
      ]
    },
    {
      id: 'redFlags',
      question: 'דגלים אדומים',
      icon: '🚨',
      multiSelect: true,
      options: [
        { value: 'fever', label: 'חום / זיהום', critical: true, keywords: ['infection'] },
        { value: 'weightLoss', label: 'ירידה לא מוסברת במשקל', critical: true, keywords: ['malignancy', 'systemic'] },
        { value: 'incontinence', label: 'אי שליטה על שתן/צואה', critical: true, keywords: ['cauda equina'] },
        { value: 'numbness', label: 'אנסטזיה אוכף', critical: true, keywords: ['cauda equina'] },
        { value: 'bilateral', label: 'חולשה דו-צדדית', critical: true, keywords: ['cauda equina', 'myelopathy'] },
        { value: 'cancer', label: 'היסטוריה של סרטן', critical: true, keywords: ['malignancy', 'metastasis'] },
        { value: 'steroid', label: 'שימוש כרוני בסטרואידים', critical: true, keywords: ['fracture', 'osteoporotic'] },
        { value: 'trauma', label: 'חבלה משמעותית לאחרונה', critical: true, keywords: ['fracture', 'instability'] }
      ]
    },
    {
      id: 'rom',
      question: 'מה לגבי טווח התנועה?',
      icon: '🔄',
      options: [
        { value: 'normal', label: 'נורמלי - אין הגבלה', keywords: ['mild', 'early stage'] },
        { value: 'limited_active', label: 'הגבלה פעילה בלבד (פסיבי תקין)', keywords: ['rotator cuff tear', 'tendinopathy', 'muscle weakness'] },
        { value: 'limited_both', label: 'הגבלה פעילה ופסיבית', keywords: ['frozen', 'OA', 'capsulitis', 'effusion'] },
        { value: 'painful_arc', label: 'כאב בטווח אמצעי בלבד', keywords: ['impingement', 'painful arc'] },
        { value: 'end_range', label: 'כאב רק בקצוות הטווח', keywords: ['capsular', 'mild OA', 'tendinopathy'] }
      ]
    }
  ];

  const computeAnamnesisResults = () => {
    const allKeywords = [];
    let hasCritical = false;
    Object.entries(anamnesisAnswers).forEach(([qId, value]) => {
      const question = anamnesisQuestions.find(q => q.id === qId);
      if (!question) return;
      if (question.multiSelect && Array.isArray(value)) {
        value.forEach(v => {
          const opt = question.options.find(o => o.value === v);
          if (opt) {
            allKeywords.push(...opt.keywords);
            if (opt.critical) hasCritical = true;
          }
        });
      } else {
        const opt = question.options.find(o => o.value === value);
        if (opt) allKeywords.push(...opt.keywords);
      }
    });

    if (allKeywords.length === 0) return { hasCritical, results: [] };

    // ספירת התאמות לכל פתולוגיה
    const results = [];
    Object.entries(regionsData).forEach(([regionKey, region]) => {
      region.pathologies.forEach((path, pathIdx) => {
        let score = 0;
        const searchText = (path.name + ' ' + path.nameEn + ' ' + path.shortDesc + ' ' + path.fullDescription + ' ' + path.clinicalSigns).toLowerCase();
        allKeywords.forEach(kw => {
          if (searchText.includes(kw.toLowerCase())) score += 1;
        });
        if (score > 0) {
          results.push({ regionKey, region: region.name, pathIdx, pathology: path, score });
        }
      });
    });

    return {
      hasCritical,
      results: results.sort((a, b) => b.score - a.score).slice(0, 10)
    };
  };

  // ========== אבחנה מבדלת - פתולוגיות מתחזות ==========
  const differentialGroups = [
    {
      id: 'lateral-shoulder',
      title: 'כאב לטרלי בכתף',
      icon: '💪',
      description: 'מי האשם בכאב הלטרלי? תסמונת הצביטה, קרע בשרוול, או כתף קפואה?',
      pathologies: [
        { regionKey: 'shoulder', pathIdx: 0, label: 'תסמונת היצרות תת-אקרומיאלית' },
        { regionKey: 'shoulder', pathIdx: 1, label: 'קרע בשרוול המסובבים' },
        { regionKey: 'shoulder', pathIdx: 4, label: 'כתף קפואה' }
      ],
      comparisonRows: [
        {
          feature: 'גיל אופייני',
          values: ['25-50', '40+', '40-60']
        },
        {
          feature: 'הופעה',
          values: ['הדרגתית עם פעילות', 'חבלתית או הדרגתית', 'הדרגתית ספונטנית']
        },
        {
          feature: 'כאב לילי',
          values: ['קל', 'בולט', 'בולט מאוד']
        },
        {
          feature: 'ROM פסיבי',
          values: ['תקין', 'תקין', 'מוגבל!']
        },
        {
          feature: 'ROM אקטיבי',
          values: ['Painful arc 60-120°', 'מוגבל בחולשה', 'מוגבל']
        },
        {
          feature: 'חולשה',
          values: ['קלה', 'משמעותית', 'אין - רק כאב']
        },
        {
          feature: 'בדיקה מובילה',
          values: ['Hawkins-Kennedy', 'Drop arm / Lift-off', 'הגבלת ER פסיבית >50%']
        },
        {
          feature: 'דגל מבדיל',
          values: ['הקלה בהזרקה', 'אטרופיה של supraspinatus', 'כל ROM מוגבל פסיבית']
        }
      ]
    },
    {
      id: 'groin-pain',
      title: 'כאב מפשעתי',
      icon: '🦵',
      description: 'מקור הכאב במפרק הירך, ברצועות, או בשרירים?',
      pathologies: [
        { regionKey: 'hip', pathIdx: 0, label: 'FAI' },
        { regionKey: 'hip', pathIdx: 2, label: 'אוסטאוארתריטיס ירך' },
        { regionKey: 'hip', pathIdx: 3, label: 'קרע בלברום' },
        { regionKey: 'hip', pathIdx: 4, label: 'בקע ספורטיבי' }
      ],
      comparisonRows: [
        {
          feature: 'גיל אופייני',
          values: ['20-40', '50+', '20-45', '20-35 (אתלטים)']
        },
        {
          feature: 'אוכלוסיה',
          values: ['אתלטים', 'מבוגרים', 'אתלטים', 'כדורגלנים, האקיסטים']
        },
        {
          feature: 'הופעה',
          values: ['הדרגתית עם פעילות', 'הדרגתית כרונית', 'לפעמים חבלתית', 'בעיטה / ספרינט']
        },
        {
          feature: 'מאפיין מרכזי',
          values: ['הגבלת IR', '"C-sign", קיפאון בוקר', '"קליק" + כאב', 'כאב במפשעה תחתונה']
        },
        {
          feature: 'בדיקה מובילה',
          values: ['FADIR', 'Sutlive cluster', 'FADIR + Anterior Apprehension', 'Resisted sit-up + Squeeze test']
        },
        {
          feature: 'הדמיה',
          values: ['CAM/Pincer ב-CT', 'שחיקת סחוס ב-X-ray', 'MRI עם ניגוד', 'לרוב תקין']
        },
        {
          feature: 'דגל מבדיל',
          values: ['IR < 20° בפלקסיה', 'הגבלה קפסולרית', 'תחושת תפיסה', 'כאב ב-Rectus + Adductors']
        }
      ]
    },
    {
      id: 'lateral-knee',
      title: 'כאב לטרלי בברך',
      icon: '🦴',
      description: 'ITB, מניסקוס לטרלי או רצועה לטרלית?',
      pathologies: [
        { regionKey: 'knee', pathIdx: 4, label: 'קרע מניסקוס' },
        { regionKey: 'knee', pathIdx: 7, label: 'תסמונת ITB' },
        { regionKey: 'knee', pathIdx: 3, label: 'קרע LCL' }
      ],
      comparisonRows: [
        {
          feature: 'מנגנון',
          values: ['פיתול / כפיפה עמוקה', 'ריצה ארוכה', 'כוח ורוס']
        },
        {
          feature: 'הופעה',
          values: ['פתאומית או הדרגתית', 'הדרגתית - אחרי X ק"מ', 'חבלתית']
        },
        {
          feature: 'מיקום הכאב',
          values: ['קו המפרק הלטרלי', 'אפיקונדיל לטרלי', 'לטרלית מעל הברך']
        },
        {
          feature: 'נפיחות',
          values: ['לפעמים', 'אין', 'אפשרית']
        },
        {
          feature: 'תסמינים מכניים',
          values: ['"קליק", נעילה', 'אין', 'חוסר יציבות']
        },
        {
          feature: 'בדיקה מובילה',
          values: ['McMurray + JLT', "Noble's compression", 'Varus stress 30°']
        },
        {
          feature: 'דגל מבדיל',
          values: ['רגישות בקו המפרק', 'כאב ב-30° פלקסיה בלבד', 'תזוזה לטרלית מוגברת']
        }
      ]
    },
    {
      id: 'low-back-leg',
      title: 'כאב גב תחתון מקרין לרגל',
      icon: '🔥',
      description: 'מקור הכאב בדיסק, ב-SI, בסטנוזיס או בפיריפורמיס?',
      pathologies: [
        { regionKey: 'lumbar', pathIdx: 0, label: 'פריצת דיסק' },
        { regionKey: 'lumbar', pathIdx: 1, label: 'דיספונקציה SI' },
        { regionKey: 'lumbar', pathIdx: 2, label: 'היצרות תעלת השדרה' },
        { regionKey: 'hip', pathIdx: 5, label: 'תסמונת פיריפורמיס' }
      ],
      comparisonRows: [
        {
          feature: 'גיל אופייני',
          values: ['30-50', 'כל גיל', '60+', 'כל גיל']
        },
        {
          feature: 'אופי הקרנה',
          values: ['דרמטומלי', 'לישבן + ירך, לא מתחת לברך', 'דו-צדדי לעיתים', 'לעכוז + רגל']
        },
        {
          feature: 'מה מקל',
          values: ['שכיבה', 'לפעמים שכיבה', 'ישיבה / כיפוף קדימה!', 'עמידה / הליכה']
        },
        {
          feature: 'מה מחמיר',
          values: ['ישיבה ממושכת, שיעול', 'עמידה על רגל אחת, מדרגות', 'עמידה / הליכה ארוכה', 'ישיבה ממושכת']
        },
        {
          feature: 'סימן עצבי',
          values: ['SLR חיובי, חולשה דרמטומלית', 'אין', 'קלאודיקציה נוירוגנית', 'לפעמים נימולים']
        },
        {
          feature: 'בדיקה מובילה',
          values: ['SLR + Slump', 'Laslett cluster', 'הליכון 2 שלבים', 'FAIR test']
        },
        {
          feature: 'דגל מבדיל',
          values: ['מתחת לברך, דרמטום', 'ישיבה לא מקלה', 'הקלה בכפיפה קדימה', 'ישיבה מחמירה ביותר']
        }
      ]
    },
    {
      id: 'lateral-elbow',
      title: 'כאב לטרלי במרפק',
      icon: '🎾',
      description: 'מרפק טניס אמיתי או תסמונת אחרת?',
      pathologies: [
        { regionKey: 'elbow', pathIdx: 0, label: 'אפיקונדיליטיס לטרלית' },
        { regionKey: 'cervical', pathIdx: 0, label: 'רדיקולופתיה צווארית C6/C7' }
      ],
      comparisonRows: [
        {
          feature: 'גיל אופייני',
          values: ['35-50', '40-60']
        },
        {
          feature: 'מיקום מירבי',
          values: ['1-2 ס"מ דיסטלית לאפיקונדיל', 'מקרין מהצוואר']
        },
        {
          feature: 'מה מחמיר',
          values: ['אחיזה, סחיטה, הרמת קפה', 'תנועות צוואר']
        },
        {
          feature: 'תסמינים נוירולוגיים',
          values: ['אין', 'נימולים, חולשה דרמטומלית']
        },
        {
          feature: 'בדיקה מובילה',
          values: ['Cozen, Mill', 'Spurling, ULTT']
        },
        {
          feature: 'דגל מבדיל',
          values: ['רגישות מקומית באפיקונדיל', 'הקלה בהנחת יד על ראש (Bakody)']
        }
      ]
    },
    {
      id: 'medial-knee',
      title: 'כאב מדיאלי בברך',
      icon: '🩹',
      description: 'MCL, מניסקוס מדיאלי או דלקת בכף ה-Pes Anserine?',
      pathologies: [
        { regionKey: 'knee', pathIdx: 2, label: 'קרע MCL' },
        { regionKey: 'knee', pathIdx: 4, label: 'קרע מניסקוס מדיאלי' }
      ],
      comparisonRows: [
        {
          feature: 'מנגנון',
          values: ['כוח ולגוס', 'פיתול / כפיפה עמוקה']
        },
        {
          feature: 'הופעה',
          values: ['חבלתית פתאומית', 'פתאומית או הדרגתית']
        },
        {
          feature: 'מיקום מדויק',
          values: ['לאורך הרצועה', 'קו המפרק המדיאלי']
        },
        {
          feature: 'תסמינים מכניים',
          values: ['חוסר יציבות', '"קליק", נעילה']
        },
        {
          feature: 'בדיקה מובילה',
          values: ['Valgus stress 30°', 'McMurray + JLT']
        },
        {
          feature: 'דגל מבדיל',
          values: ['תזוזה מדיאלית מוגברת', 'רגישות בדיוק בקו המפרק']
        }
      ]
    }
  ];

  // ========== קלאסטרים אבחנתיים - שילובי בדיקות מבוססי-ספרות ==========
  const clinicalClusters = [
    {
      id: 'wainner-cervical',
      name: 'Wainner Cluster',
      pathology: 'רדיקולופתיה צווארית',
      pathologyEn: 'Cervical Radiculopathy',
      icon: '🦴',
      color: 'blue',
      reference: 'Wainner et al. 2003',
      description: 'קלאסטר של 4 בדיקות לאבחון רדיקולופתיה צווארית. כשכל 4 הבדיקות חיוביות - אבחנה כמעט ודאית.',
      tests: [
        { name: 'Spurling Test', nameEn: 'Spurling A Test', description: 'אקסטנציה + הטיה + רוטציה לכיוון הסימפטומטי + לחץ אקסיאלי' },
        { name: 'Cervical Distraction', nameEn: 'Distraction Test', description: 'הקלה בסימפטומים בעת טרקציה צווארית' },
        { name: 'ULTT - Median Bias', nameEn: 'Upper Limb Tension Test 1', description: 'מתח על העצב המדיאני - שחזור סימפטומים' },
        { name: 'Cervical Rotation < 60°', nameEn: 'Cervical ROM Limitation', description: 'הגבלת רוטציה צווארית פעילה לכיוון הצד הסימפטומטי' }
      ],
      interpretation: [
        { positives: 1, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'לא מספיק לאבחנה' },
        { positives: 2, sensitivity: '39%', specificity: '56%', lrPos: '0.88', notes: 'התאמה חלשה' },
        { positives: 3, sensitivity: '39%', specificity: '94%', lrPos: '6.1', notes: 'התאמה טובה - סבירות עולה משמעותית' },
        { positives: 4, sensitivity: '24%', specificity: '99%', lrPos: '30.3', notes: 'אבחנה כמעט ודאית!' }
      ]
    },
    {
      id: 'laslett-si',
      name: 'Laslett 5-Test Cluster',
      pathology: 'דיספונקציית מפרק SI',
      pathologyEn: 'Sacroiliac Joint Dysfunction',
      icon: '🦴',
      color: 'amber',
      reference: 'Laslett et al. 2005',
      description: 'קלאסטר של 5 בדיקות פרובוקטיביות לאבחון מפרק SI. הסטנדרט הזהב לאבחנה קלינית של בעיית SI.',
      tests: [
        { name: 'Distraction Test', nameEn: 'SI Distraction', description: 'לחץ הוריזונטלי החוצה על שני ה-ASIS' },
        { name: 'Compression Test', nameEn: 'SI Compression', description: 'לחץ אנכי על האגן בשכיבה על הצד' },
        { name: 'Thigh Thrust', nameEn: 'Posterior Shear', description: 'לחץ לאורך ציר הפמור עם ירך 90°' },
        { name: 'Sacral Thrust', nameEn: 'Sacral Thrust Test', description: 'לחץ ישיר על העצה בשכיבה על הבטן' },
        { name: 'Gaenslen Test', nameEn: "Gaenslen's Test", description: 'רגל אחת באקסטנציה מעבר למיטה, השנייה בפלקסיה' }
      ],
      interpretation: [
        { positives: 1, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'לא מספיק' },
        { positives: 2, sensitivity: '93%', specificity: '66%', lrPos: '2.7', notes: 'חשד גבוה' },
        { positives: 3, sensitivity: '85%', specificity: '79%', lrPos: '4.0', notes: 'אבחנה סבירה - הקריטריון הסטנדרטי' },
        { positives: 4, sensitivity: '60%', specificity: '88%', lrPos: '5.0', notes: 'אבחנה ברורה' },
        { positives: 5, sensitivity: '46%', specificity: '95%', lrPos: '9.2', notes: 'אבחנה ודאית!' }
      ],
      criticalNote: 'Distraction + Thigh Thrust חיוביים = LR+ של 6.97 (גם אם רק 2 חיוביות, אם אלו השתיים האלה!)'
    },
    {
      id: 'cook-csm',
      name: "Cook's CSM 5-Item Cluster",
      pathology: 'מיאלופתיה צווארית',
      pathologyEn: 'Cervical Spondylotic Myelopathy',
      icon: '🚨',
      color: 'red',
      reference: 'Cook et al. 2010',
      description: 'קלאסטר חיוני לזיהוי מיאלופתיה צווארית - מצב המסכן את חוט השדרה. דורש הפניה דחופה!',
      tests: [
        { name: 'גיל מעל 45', nameEn: 'Age > 45', description: 'גיל המטופל מעל 45 שנים' },
        { name: 'הליכה רחבת בסיס', nameEn: 'Wide-based Gait', description: 'הליכה ספסטית או רחבת בסיס בתצפית' },
        { name: "Hoffmann Sign", nameEn: "Hoffmann's Sign", description: 'הקשה על ציפורן אצבע 3 → פלקסיה של אגודל ואצבע 2' },
        { name: 'Inverted Supinator', nameEn: 'Inverted Supinator Sign', description: 'הקשה על Brachioradialis → פלקסיה של אצבעות במקום סופינציה' },
        { name: 'Babinski Sign', nameEn: 'Babinski Sign', description: 'גירוי כף הרגל → אקסטנציה של בוהן (UMN)' }
      ],
      interpretation: [
        { positives: 1, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'לא משמעותי' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '5.0', notes: 'חשד' },
        { positives: 3, sensitivity: '94%', specificity: '99%', lrPos: '30.9', notes: '🚨 חשד גבוה מאוד - הפנה לבירור!' },
        { positives: 4, sensitivity: '—', specificity: '—', lrPos: '~91', notes: '🚨 חשד כמעט ודאי!' },
        { positives: 5, sensitivity: '—', specificity: '—', lrPos: 'אינסוף', notes: '🚨 ודאי - חירום!' }
      ],
      criticalNote: '⚠️ דגל אדום! 3+ סימנים חיוביים = הפניה לבירור נוירוכירורגי דחוף + MRI'
    },
    {
      id: 'sutlive-hip-oa',
      name: 'Sutlive Hip OA Cluster',
      pathology: 'אוסטאוארתריטיס ירך',
      pathologyEn: 'Hip Osteoarthritis',
      icon: '🦵',
      color: 'orange',
      reference: 'Sutlive et al. 2008',
      description: 'קלאסטר של 5 פרמטרים קליניים לאבחון OA של הירך - מאוד שימושי בקליניקה.',
      tests: [
        { name: 'IR פסיבי <25°', nameEn: 'Passive IR < 25°', description: 'הגבלת רוטציה פנימית פסיבית בפלקסיה 90°' },
        { name: 'IR פסיבי כואב', nameEn: 'Painful Passive IR', description: 'כאב בעת רוטציה פנימית פסיבית' },
        { name: 'אקסטנציה אקטיבית כואבת', nameEn: 'Painful Active Extension', description: 'כאב בעת אקסטנציה אקטיבית של הירך' },
        { name: 'Squat כואב', nameEn: 'Painful Squat', description: 'כאב מפשעתי בעת ביצוע סקווט' },
        { name: 'Scour Test כואב', nameEn: 'Painful Scour Test', description: 'כאב במהלך הסקור (פלקסיה+אדוקציה+לחץ אקסיאלי)' }
      ],
      interpretation: [
        { positives: 1, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'לא מספיק' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '2.4', notes: 'חשד קל' },
        { positives: 3, sensitivity: '14%', specificity: '98%', lrPos: '5.2', notes: 'אבחנה סבירה' },
        { positives: 4, sensitivity: '—', specificity: '—', lrPos: '24.3', notes: 'אבחנה ודאית!' },
        { positives: 5, sensitivity: '—', specificity: '99%', lrPos: 'אינסוף', notes: 'אבחנה ודאית!' }
      ]
    },
    {
      id: 'acl-cluster',
      name: 'ACL Composite',
      pathology: 'קרע ברצועה הצולבת הקדמית',
      pathologyEn: 'Anterior Cruciate Ligament Tear',
      icon: '🦵',
      color: 'rose',
      reference: 'Multiple studies',
      description: 'שילוב של בדיקות מכניות לאבחון קרע ב-ACL. המבחנים יחד נותנים אבחנה מעולה.',
      tests: [
        { name: 'Lachman Test', nameEn: "Lachman's Test", description: 'תזוזה קדמית של טיביה ב-20°-30° פלקסיה' },
        { name: 'Anterior Drawer', nameEn: 'Anterior Drawer Test', description: 'תזוזה קדמית של טיביה ב-90° פלקסיה' },
        { name: 'Pivot Shift', nameEn: 'Pivot Shift Test', description: 'הקליק של reduction ב-30° פלקסיה' },
        { name: 'Lever Sign', nameEn: 'Lelli Test', description: 'אגרוף מתחת לטיביה - העקב לא עולה אם יש קרע' }
      ],
      interpretation: [
        { positives: 1, sensitivity: '85%', specificity: '94%', lrPos: '14.2', notes: 'Lachman לבד מעולה' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '~25', notes: 'אבחנה ודאית' },
        { positives: 3, sensitivity: '—', specificity: '~99%', lrPos: '~75', notes: 'אבחנה ודאית!' },
        { positives: 4, sensitivity: '—', specificity: '~100%', lrPos: 'אינסוף', notes: 'אבחנה ודאית!' }
      ],
      criticalNote: 'Pivot Shift חיובי לבדו = LR+ של 12 (אבל קשה לבצע באקוטי בגלל ספאזם)'
    },
    {
      id: 'meniscus-cluster',
      name: 'Knee Meniscus Composite',
      pathology: 'קרע במניסקוס',
      pathologyEn: 'Meniscus Tear',
      icon: '🦵',
      color: 'emerald',
      reference: 'Lowery et al. 2006',
      description: 'שילוב של 5 פריטים לאבחון קרע מניסקוס. בעוד שבדיקה יחידה לא ספציפית מספיק, השילוב מעולה.',
      tests: [
        { name: 'אנמנזה של נעילה', nameEn: 'History of Locking', description: 'דיווח על "נעילה" של הברך בעבר' },
        { name: 'Joint Line Tenderness', nameEn: 'JLT', description: 'רגישות בקו המפרק במישוש' },
        { name: 'McMurray Test', nameEn: 'McMurray Test', description: 'קליק כואב בקו המפרק עם הסיבוב' },
        { name: 'Thessaly Test', nameEn: 'Thessaly Test', description: 'כאב או נעילה בעת סיבוב על רגל אחת ב-20°' },
        { name: 'אקסטנציה פסיבית כואבת', nameEn: 'Painful Passive Extension', description: 'כאב בקצה האקסטנציה של הברך' }
      ],
      interpretation: [
        { positives: 1, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'לא משמעותי' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '2.0', notes: 'חשד קל' },
        { positives: 3, sensitivity: '—', specificity: '—', lrPos: '3.0', notes: 'התאמה בינונית' },
        { positives: 4, sensitivity: '~75%', specificity: '~90%', lrPos: '4.0', notes: 'התאמה טובה' },
        { positives: 5, sensitivity: '~90%', specificity: '~85%', lrPos: '7.0', notes: 'אבחנה סבירה ביותר' }
      ]
    },
    {
      id: 'cts-cluster',
      name: 'Carpal Tunnel Cluster',
      pathology: 'תסמונת התעלה הקרפלית',
      pathologyEn: 'Carpal Tunnel Syndrome',
      icon: '✋',
      color: 'cyan',
      reference: 'Wainner et al. 2005',
      description: 'קלאסטר של 5 פרמטרים לאבחון CTS - חלופה ראויה ל-EMG בקליניקה.',
      tests: [
        { name: 'Hand Diagram - דפוס קלאסי/סביר', nameEn: 'Katz Hand Diagram', description: 'המטופל מסמן סימפטומים בעצבוב המדיאני' },
        { name: 'גיל > 45', nameEn: 'Age > 45', description: 'גיל המטופל מעל 45 שנים' },
        { name: 'נימולים בלילה', nameEn: 'Nocturnal Paresthesias', description: 'נימולים שמעירים משינה' },
        { name: 'Carpal Compression חיובי', nameEn: "Durkan's Test", description: 'נימולים תוך 30 שניות של לחץ על התעלה' },
        { name: 'תחושה לא תקינה באצבע מדיאנית', nameEn: 'Diminished Sensation', description: 'ירידה בתחושה ב-2-Point Discrimination' }
      ],
      interpretation: [
        { positives: 1, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'לא מספיק' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '1.5', notes: 'חשד קל' },
        { positives: 3, sensitivity: '—', specificity: '~85%', lrPos: '4.6', notes: 'התאמה טובה' },
        { positives: 4, sensitivity: '~80%', specificity: '~90%', lrPos: '7.0', notes: 'אבחנה סבירה' },
        { positives: 5, sensitivity: '—', specificity: '~95%', lrPos: '18.3', notes: 'אבחנה ודאית!' }
      ]
    },
    {
      id: 'rotator-cuff-cluster',
      name: 'Rotator Cuff Cluster',
      pathology: 'קרע בשרוול המסובבים',
      pathologyEn: 'Rotator Cuff Tear',
      icon: '💪',
      color: 'indigo',
      reference: 'Murrell & Walton 2001',
      description: 'שילוב 3 בדיקות פשוטות לזיהוי קרע ב-RC. מאוד שימושי בקליניקה ראשונית.',
      tests: [
        { name: 'גיל > 60', nameEn: 'Age > 60', description: 'גיל המטופל מעל 60' },
        { name: 'חולשה ב-ER', nameEn: 'External Rotation Weakness', description: 'חולשה ברוטציה חיצונית כנגד התנגדות' },
        { name: 'Painful Arc / Drop Arm', nameEn: 'Painful Arc or Drop Arm', description: 'כאב בטווח 60-120° או נפילת הזרוע' }
      ],
      interpretation: [
        { positives: 1, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'לא מספיק' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '4.2', notes: 'חשד טוב' },
        { positives: 3, sensitivity: '—', specificity: '98%', lrPos: '48', notes: 'אבחנה ודאית!' }
      ]
    },
    {
      id: 'fai-cluster',
      name: 'Hip FAI Cluster',
      pathology: 'אימפינג\'מנט פמורואצטבולרי',
      pathologyEn: 'Femoroacetabular Impingement',
      icon: '🦵',
      color: 'amber',
      reference: 'Reiman et al. 2015',
      description: 'קלאסטר של 3 בדיקות לזיהוי FAI - הסיבה המובילה לכאב ירך באתלטים צעירים. לעיתים קרובות לא מאובחן עד שלב מתקדם.',
      tests: [
        { name: 'FADIR Test', nameEn: 'Anterior Impingement Test', description: 'פלקסיה 90° + אדוקציה + רוטציה פנימית פסיבית' },
        { name: 'FABER Test', nameEn: 'Patrick Test', description: 'פלקסיה + אבדוקציה + רוטציה חיצונית - "מנח 4"' },
        { name: 'Internal Rotation < 25°', nameEn: 'Limited IR', description: 'הגבלת רוטציה פנימית פסיבית בפלקסיה 90°' }
      ],
      interpretation: [
        { positives: 0, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'לא משמעותי' },
        { positives: 1, sensitivity: '—', specificity: '—', lrPos: '1.5', notes: 'חשד קל' },
        { positives: 2, sensitivity: '88%', specificity: '64%', lrPos: '2.4', notes: 'חשד טוב' },
        { positives: 3, sensitivity: '67%', specificity: '93%', lrPos: '9.6', notes: 'אבחנה ברורה - הפנייה ל-MR Arthrogram' }
      ],
      criticalNote: 'FADIR לבד = LR+ 1.5 (לא חזק). השילוב של 3 בדיקות = LR+ 9.6. דורש הדמייה לאישור.'
    },
    {
      id: 'lss-cluster',
      name: 'Lumbar Spinal Stenosis Cluster',
      pathology: 'סטנוזיס ספינלי לומברי',
      pathologyEn: 'Lumbar Spinal Stenosis',
      icon: '🔥',
      color: 'orange',
      reference: 'Cook et al. 2011',
      description: 'קלאסטר קליני לאבחון סטנוזיס לומברי - מצב נפוץ באוכלוסייה המבוגרת שמתבטא בקלאודיקציה נוירוגנית.',
      tests: [
        { name: 'גיל >48', nameEn: 'Age > 48', description: 'גיל המטופל מעל 48 שנים' },
        { name: 'דו-צדדיות', nameEn: 'Bilateral Symptoms', description: 'תסמינים בשתי הרגליים' },
        { name: 'הקלה בישיבה', nameEn: 'Relief with Sitting', description: 'הקלה בכאב בעת ישיבה (פלקסיה)' },
        { name: 'החמרה בעמידה / הליכה', nameEn: 'Worsening with Standing/Walking', description: 'החמרת כאב בעת עמידה ממושכת או הליכה' },
        { name: 'תסמינים מעל גובה הברך', nameEn: 'Symptoms Above Knee', description: 'כאב/נימולים שמתפשטים מעל לברך' }
      ],
      interpretation: [
        { positives: 0, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'סבירות נמוכה' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '2.5', notes: 'חשד קל' },
        { positives: 3, sensitivity: '—', specificity: '—', lrPos: '4.6', notes: 'התאמה בינונית' },
        { positives: 4, sensitivity: '83%', specificity: '78%', lrPos: '4.6', notes: 'אבחנה סבירה' },
        { positives: 5, sensitivity: '—', specificity: '95%', lrPos: '20.7', notes: 'אבחנה ודאית!' }
      ],
      criticalNote: 'אבחנה מבדלת חיונית: PAD (Peripheral Arterial Disease) - קלאודיקציה וסקולרית. ההבדל: ב-LSS פלקסיה מקלה, בעוד שב-PAD רק הפסקה מקלה.'
    },
    {
      id: 'gerber-rotator',
      name: 'Gerber\'s Subscapularis Tests',
      pathology: 'קרע סובסקפולריס',
      pathologyEn: 'Subscapularis Tear',
      icon: '💪',
      color: 'indigo',
      reference: 'Gerber et al. 1991',
      description: 'קלאסטר של 3 בדיקות לאבחון ספציפי של קרע ב-Subscapularis - הקטע הקדמי של שרוול המסובבים שלעיתים מתפספס.',
      tests: [
        { name: 'Lift-Off Test', nameEn: 'Lift-Off Test', description: 'יד מאחורי הגב התחתון. ניסיון להרחיק את היד מהגב כנגד התנגדות' },
        { name: 'Belly Press Test', nameEn: 'Napoleon Test', description: 'יד על הבטן, מרפק קדמי. דחיפה של היד לבטן עם שמירה על מרפק קדמי' },
        { name: 'Bear Hug Test', nameEn: 'Bear Hug Test', description: 'יד על הכתף הנגדית, מרפק מורם 90°. ניסיון להרים את היד נגד התנגדות' }
      ],
      interpretation: [
        { positives: 0, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'לא נראה קרע' },
        { positives: 1, sensitivity: '—', specificity: '—', lrPos: '4.0', notes: 'חשד' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '7.5', notes: 'אבחנה סבירה' },
        { positives: 3, sensitivity: '—', specificity: '98%', lrPos: '20+', notes: 'אבחנה ודאית!' }
      ],
      criticalNote: 'Bear Hug הוא הרגיש ביותר (Sn 60%-79%), Belly Press ספציפי ביותר (Sp 98%). שילוב = אבחנה מצוינת.'
    },
    {
      id: 'ottawa-ankle',
      name: 'Ottawa Ankle Rules',
      pathology: 'שבר קרסול / כף רגל',
      pathologyEn: 'Ankle/Foot Fracture',
      icon: '🚨',
      color: 'red',
      reference: 'Stiell et al. 1992',
      description: 'הקלאסטר הקליני המוצלח ביותר בעולם! מסייע לקבוע מתי דרושה הדמיה אחרי חבלת קרסול. מפחית הדמיות מיותרות ב-30%-40%. נחקר במיליוני מקרים. רגישות ~99% - אם כל הקריטריונים שליליים, סבירות לשבר נמוכה מאוד.',
      tests: [
        { name: 'רגישות בקצה האחורי של מאלאולוס לטרלי (6 ס"מ)', nameEn: 'Lateral Malleolus Tenderness', description: 'מישוש לאורך 6 ס"מ של הקצה האחורי-תחתון של מאלאולוס לטרלי, כולל הקצה' },
        { name: 'רגישות בקצה האחורי של מאלאולוס מדיאלי (6 ס"מ)', nameEn: 'Medial Malleolus Tenderness', description: 'מישוש לאורך 6 ס"מ של הקצה האחורי-תחתון של מאלאולוס מדיאלי, כולל הקצה' },
        { name: 'רגישות בנוויקולר', nameEn: 'Navicular Tenderness', description: 'מישוש על הנוויקולר (אמצע-דורסלי-מדיאלי של כף הרגל)' },
        { name: 'רגישות בבסיס מטטרסל 5', nameEn: '5th Metatarsal Base Tenderness', description: 'מישוש על בסיס מטטרסל 5 (לטרלי בכף הרגל)' },
        { name: 'אי-יכולת עמידה / 4 צעדים', nameEn: 'Inability to Bear Weight x4 Steps', description: 'חוסר יכולת לדרוך / לעשות 4 צעדים מיד אחרי הפציעה ובחדר ההלם' }
      ],
      interpretation: [
        { positives: 0, sensitivity: '—', specificity: '—', lrPos: '—', notes: '✅ אין צורך ב-X-ray (סבירות נמוכה לשבר)' },
        { positives: 1, sensitivity: '99%', specificity: '40%', lrPos: '1.65', notes: '⚠️ נדרש X-ray' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '—', notes: '⚠️ נדרש X-ray! חשד מוגבר' },
        { positives: 3, sensitivity: '—', specificity: '—', lrPos: '—', notes: '⚠️ נדרש X-ray! חשד גבוה' },
        { positives: 4, sensitivity: '—', specificity: '—', lrPos: '—', notes: '⚠️ סבירות גבוהה לשבר' },
        { positives: 5, sensitivity: '—', specificity: '—', lrPos: '—', notes: '⚠️ סבירות גבוהה מאוד לשבר!' }
      ],
      criticalNote: '⚠️ NPV של ~99% - אם כל הקריטריונים שליליים, אפשר להימנע מ-X-ray. חשוב: רגישות במטטרסל 5 או נוויקולר → X-ray של כף הרגל. מאלאולוסים → X-ray של הקרסול.'
    },
    {
      id: 'ottawa-knee',
      name: 'Ottawa Knee Rules',
      pathology: 'שבר ברך',
      pathologyEn: 'Knee Fracture',
      icon: '🚨',
      color: 'orange',
      reference: 'Stiell et al. 1995',
      description: 'קלאסטר מבוסס-ראיות לקביעת הצורך ב-X-ray אחרי חבלת ברך. מפחית הדמיות מיותרות ב-30%. רגישות 98%-100% - מצוין לשלילת שבר.',
      tests: [
        { name: 'גיל >55', nameEn: 'Age > 55 years', description: 'גיל המטופל מעל 55 שנים' },
        { name: 'רגישות מבודדת בפיקה', nameEn: 'Isolated Patellar Tenderness', description: 'רגישות בפיקה בלבד (ללא מקום אחר עם רגישות)' },
        { name: 'רגישות בראש פיבולה', nameEn: 'Fibular Head Tenderness', description: 'רגישות במישוש על ראש הפיבולה' },
        { name: 'אי-יכולת לכופף ל-90°', nameEn: 'Inability to Flex to 90°', description: 'חוסר יכולת לכפוף את הברך ל-90° פלקסיה' },
        { name: 'אי-יכולת עמידה / 4 צעדים', nameEn: 'Inability to Bear Weight x4 Steps', description: 'חוסר יכולת לדרוך / לעשות 4 צעדים מיד אחרי הפציעה ובחדר ההלם' }
      ],
      interpretation: [
        { positives: 0, sensitivity: '—', specificity: '—', lrPos: '—', notes: '✅ אין צורך ב-X-ray (סבירות נמוכה לשבר)' },
        { positives: 1, sensitivity: '98%', specificity: '49%', lrPos: '1.92', notes: '⚠️ נדרש X-ray של הברך' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '—', notes: '⚠️ נדרש X-ray! חשד מוגבר' },
        { positives: 3, sensitivity: '—', specificity: '—', lrPos: '—', notes: '⚠️ נדרש X-ray! חשד גבוה' },
        { positives: 4, sensitivity: '—', specificity: '—', lrPos: '—', notes: '⚠️ סבירות גבוהה לשבר' },
        { positives: 5, sensitivity: '—', specificity: '—', lrPos: '—', notes: '⚠️ סבירות גבוהה מאוד לשבר!' }
      ],
      criticalNote: 'הרגישות של הקלאסטר היא 98%-100% - מצוין לשלילת שבר. אם כל הקריטריונים שליליים - אפשר להימנע מ-X-ray.'
    },
    {
      id: 'pittsburgh-knee',
      name: 'Pittsburgh Knee Rules',
      pathology: 'שבר ברך - אלטרנטיבה',
      pathologyEn: 'Knee Fracture (Alternative)',
      icon: '🦴',
      color: 'rose',
      reference: 'Bauer et al. 1995',
      description: 'אלטרנטיבה ל-Ottawa Knee Rules - יותר ספציפי (Sp 60% לעומת 49%) ולכן מוביל לפחות צילומים מיותרים. דורש 3 קריטריונים בלבד.',
      tests: [
        { name: 'מנגנון: נפילה / חבלה כהה', nameEn: 'Blunt Trauma or Fall', description: 'מנגנון הפציעה היה נפילה או חבלה כהה' },
        { name: 'גיל <12 או >50', nameEn: 'Age <12 or >50', description: 'גיל המטופל מתחת ל-12 שנים או מעל 50 שנים' },
        { name: 'אי-יכולת עמידה / 4 צעדים', nameEn: 'Inability to Bear Weight x4 Steps', description: 'חוסר יכולת לדרוך / לעשות 4 צעדים מיד אחרי הפציעה ובחדר ההלם' }
      ],
      interpretation: [
        { positives: 0, sensitivity: '—', specificity: '—', lrPos: '—', notes: '✅ אין צורך ב-X-ray' },
        { positives: 1, sensitivity: '—', specificity: '—', lrPos: '—', notes: '⚠️ אם המנגנון חיובי - יש לבדוק קריטריונים נוספים' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '—', notes: '⚠️ נדרש X-ray של הברך' },
        { positives: 3, sensitivity: '99%', specificity: '60%', lrPos: '2.5', notes: '⚠️ נדרש X-ray! חשד גבוה לשבר' }
      ],
      criticalNote: 'יתרון על Ottawa: ספציפיות גבוהה יותר (60% לעומת 49%). דרישה: מנגנון חבלתי + 1 מהשניים האחרים.'
    },
    {
      id: 'canadian-cspine',
      name: 'Canadian C-Spine Rules',
      pathology: 'פציעה צווארית טראומטית',
      pathologyEn: 'Cervical Spine Injury',
      icon: '🚨',
      color: 'red',
      reference: 'Stiell et al. 2001',
      description: '🚨 קריטי! קלאסטר לקביעת הצורך בהדמיה אחרי טראומה צווארית. רגישות 100% לפציעות חמורות! מפחית הדמיות מיותרות ב-40%-50%. הסטנדרט הזהב העולמי.',
      tests: [
        { name: 'גורם סיכון גבוה (אחד או יותר)', nameEn: 'High-risk Factor', description: 'גיל ≥65, מנגנון מסוכן (נפילה >1מ\', התהפכות רכב, אופניים), פרסטזיות בגפיים' },
        { name: 'אין גורם סיכון נמוך', nameEn: 'No Low-risk Factor', description: 'אין: התנגשות אחורית פשוטה, ישיבה במחלקה, הליכה בכל זמן, התחלה מאוחרת של כאב, ללא רגישות מרכזית' },
        { name: 'אי-יכולת לסובב את הצוואר 45° לכל צד', nameEn: 'Unable to Rotate 45°', description: 'חוסר יכולת לסובב פעיל את הצוואר 45° לימין ולשמאל' }
      ],
      interpretation: [
        { positives: 0, sensitivity: '—', specificity: '—', lrPos: '—', notes: '✅ ללא צורך בהדמיה (סבירות נמוכה לפציעה)' },
        { positives: 1, sensitivity: '100%', specificity: '42%', lrPos: '1.72', notes: '🚨 נדרשת הדמיה!' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '—', notes: '🚨 נדרשת הדמיה דחופה!' },
        { positives: 3, sensitivity: '—', specificity: '—', lrPos: '—', notes: '🚨 חשד גבוה - הדמיה מיידית!' }
      ],
      criticalNote: '⚠️ קריטי! רגישות של 100% לפציעות צוואריות חמורות - אם הקלאסטר חיובי, חובה הדמיה. אם שלילי לחלוטין - אפשר להימנע מהדמיה. הקלאסטר נחקר ב-9000+ מקרים.'
    },
    {
      id: 'cpr-manipulation',
      name: 'CPR for Lumbar Manipulation (Flynn)',
      pathology: 'תגובה לטיפול במניפולציה לומברית',
      pathologyEn: 'Response to Lumbar Manipulation',
      icon: '🎯',
      color: 'emerald',
      reference: 'Flynn et al. 2002',
      description: 'Clinical Prediction Rule - חיזוי מי יגיב טוב למניפולציה של עמוד שדרה לומברי. שינוי משחק בטיפול בכאב גב תחתון! מטופלים עם 4+ מ-5 קריטריונים: 95% סיכוי לשיפור משמעותי ב-50% תוך שבוע.',
      tests: [
        { name: 'משך תסמינים <16 ימים', nameEn: 'Duration of Symptoms <16 days', description: 'הופעת התסמינים פחות מ-16 ימים' },
        { name: 'אין תסמינים מתחת לברך', nameEn: 'No Symptoms Below Knee', description: 'הסימפטומים אינם מתפשטים מתחת לברך' },
        { name: 'FABQ-W <19', nameEn: 'FABQ-W < 19', description: 'ציון Fear-Avoidance Beliefs Questionnaire (Work) פחות מ-19 - אמונות פחד-הימנעות נמוכות' },
        { name: 'היפומוביליות לומברית', nameEn: 'Lumbar Hypomobility', description: 'הגבלה בתנועה של מקטע אחד או יותר בעמוד השדרה הלומברי (PA testing)' },
        { name: 'IR ירך >35° (לפחות אחת)', nameEn: 'Hip IR > 35°', description: 'רוטציה פנימית פסיבית של אחת הירכיים גדולה מ-35°' }
      ],
      interpretation: [
        { positives: 0, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'תגובה נמוכה למניפולציה' },
        { positives: 1, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'תגובה לא סבירה' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'תגובה אפשרית - 31% הצלחה' },
        { positives: 3, sensitivity: '—', specificity: '—', lrPos: '2.6', notes: '✅ מועמד טוב למניפולציה - 68% הצלחה' },
        { positives: 4, sensitivity: '63%', specificity: '97%', lrPos: '24.4', notes: '✅✅ מועמד מצוין! 95% הצלחה' },
        { positives: 5, sensitivity: '—', specificity: '—', lrPos: '—', notes: '✅✅✅ מועמד אידיאלי - 100% הצלחה' }
      ],
      criticalNote: '🎯 Game Changer! 4+ קריטריונים = LR+ של 24.4 = 95% סיכוי לשיפור משמעותי תוך שבוע. שיפור משמעותי = ירידה של 50% ב-ODI תוך 2 ביקורים. מאוד פרקטי - מי לטפל ומי לא.'
    },
    {
      id: 'cervical-cpr',
      name: 'Cervical Manipulation CPR (Cleland)',
      pathology: 'תגובה למניפולציה צווארית',
      pathologyEn: 'Response to Cervical Manipulation',
      icon: '🎯',
      color: 'cyan',
      reference: 'Cleland et al. 2007',
      description: 'Clinical Prediction Rule לחיזוי תגובה למניפולציה צווארית-תורסית בכאב צוואר מכני. מטופלים עם 4+ מ-6 קריטריונים: 90%+ סיכוי לשיפור.',
      tests: [
        { name: 'משך תסמינים <38 ימים', nameEn: 'Duration < 38 days', description: 'הופעת התסמינים פחות מ-38 ימים' },
        { name: 'NDI < 11.5', nameEn: 'NDI < 11.5', description: 'ציון Neck Disability Index פחות מ-11.5 (כלומר נכות נמוכה-בינונית)' },
        { name: 'אקסטנציה צוואר אינה מחמירה תסמינים', nameEn: 'Extension Not Aggravating', description: 'אקסטנציה של הצוואר אינה מחמירה את הסימפטומים' },
        { name: 'ROM סיבוב לסימפטומטי <30°', nameEn: 'Decreased Rotation', description: 'הפחתה ברוטציה צווארית לכיוון הצד הסימפטומטי <30°' },
        { name: 'כיוון נוקד בילטרלי בכאב', nameEn: 'Bilateral Pain', description: 'כאב דו-צדדי או לא ברור איזה צד' },
        { name: 'תסמינים אינם מקרינים מעבר לכתף', nameEn: 'No Symptoms Below Shoulder', description: 'הסימפטומים אינם מקרינים מעבר לכתף' }
      ],
      interpretation: [
        { positives: 0, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'תגובה לא סבירה' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'תגובה לא סבירה במיוחד' },
        { positives: 3, sensitivity: '—', specificity: '—', lrPos: '5.3', notes: 'תגובה אפשרית' },
        { positives: 4, sensitivity: '90%', specificity: '88%', lrPos: '8.0', notes: '✅ מועמד טוב למניפולציה' },
        { positives: 5, sensitivity: '—', specificity: '—', lrPos: '12.0', notes: '✅✅ מועמד מצוין!' },
        { positives: 6, sensitivity: '—', specificity: '—', lrPos: '—', notes: '✅✅✅ מועמד אידיאלי - >90% הצלחה' }
      ],
      criticalNote: 'מתוקף לכאב צוואר מכני בלבד - לא לרדיקולופתיה. שיפור משמעותי = 50% ירידה ב-NDI תוך 2-4 ביקורים.'
    },
    {
      id: 'cad-screening',
      name: '🚨 Cervical Artery Dysfunction Screen',
      pathology: 'הפרעה של עורקי הצוואר',
      pathologyEn: 'Vertebrobasilar Insufficiency / Carotid Dissection',
      icon: '🚨',
      color: 'red',
      reference: 'IFOMPT 2020 Framework',
      description: '🚨 קריטי! חובה לבצע לפני כל מניפולציה צווארית. סיכון לשבץ! 5 D\'s + 3 N\'s - אם 1+ חיובי, אסור למנפל.',
      tests: [
        { name: 'Dizziness', nameEn: 'Dizziness with positions', description: 'סחרחורת בעת אקסטנציה / רוטציה צווארית' },
        { name: 'Diplopia', nameEn: 'Visual disturbances', description: 'ראייה כפולה או מטושטשת' },
        { name: 'Drop attacks', nameEn: 'Sudden falls', description: 'נפילות פתאומיות ללא איבוד הכרה' },
        { name: 'Dysarthria/Dysphagia', nameEn: 'Speech/swallowing', description: 'קשיים בדיבור או בליעה' },
        { name: 'Numbness (perioral)', nameEn: 'Facial numbness', description: 'נימולים סביב הפה / פנים' },
        { name: 'Nystagmus', nameEn: 'Eye movements', description: 'תנועות עיניים לא רצוניות' },
        { name: 'Nausea', nameEn: 'Nausea/vomiting', description: 'בחילות בהקשר תנוחתי' },
        { name: 'Headache - "Worst of life"', nameEn: 'Thunderclap headache', description: 'כאב ראש חדש, חמור, "הגרוע ביותר"' }
      ],
      interpretation: [
        { positives: 0, sensitivity: '—', specificity: '—', lrPos: '—', notes: '✅ ניתן להמשיך בטיפול שמרני' },
        { positives: 1, sensitivity: '—', specificity: '—', lrPos: '—', notes: '🚨 אסור למנפל! בירור נוסף נדרש' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '—', notes: '🚨 חשד גבוה - הפניה דחופה!' },
        { positives: 3, sensitivity: '—', specificity: '—', lrPos: '—', notes: '🚨🚨 חירום - מיון מיידי!' }
      ],
      criticalNote: '⚠️ אם סימן אחד או יותר חיובי - אסור לבצע מניפולציה! הפניה לרופא לבירור CAD. בכל מקרה של חשד - להפסיק טיפול ולשלוח למיון.'
    },
    {
      id: 'ac-joint-cluster',
      name: 'AC Joint Pathology Cluster',
      pathology: 'פתולוגיית מפרק AC',
      pathologyEn: 'Acromioclavicular Joint Pathology',
      icon: '💪',
      color: 'blue',
      reference: 'Chronopoulos et al. 2004',
      description: 'קלאסטר של 3 בדיקות לאבחון פתולוגיה של מפרק AC. כולן צריכות להיות חיוביות לאבחנה אמינה.',
      tests: [
        { name: 'AC Joint Tenderness', nameEn: 'Direct Palpation', description: 'רגישות במישוש ישיר על מפרק AC' },
        { name: 'Cross-Body Adduction', nameEn: 'Scarf Test', description: 'אדוקציה אופקית של הזרוע מעל החזה - 90° פלקסיה' },
        { name: 'O\'Brien Active Compression', nameEn: 'Active Compression Test', description: 'פלקסיה 90° + IR + אדוקציה - לחיצה מאקטיבית. כאב ב-AC = חיובי' }
      ],
      interpretation: [
        { positives: 0, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'לא נראית פתולוגיה של AC' },
        { positives: 1, sensitivity: '—', specificity: '—', lrPos: '1.5', notes: 'חשד נמוך' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '4.0', notes: 'חשד טוב' },
        { positives: 3, sensitivity: '81%', specificity: '89%', lrPos: '7.4', notes: '✅ אבחנה ברורה - הפנה לקלינאי לאישור' }
      ],
      criticalNote: '3 חיוביים = LR+ של 7.4. שילוב מצוין כי כל בדיקה לבדה לא ספציפית מספיק.'
    },
    {
      id: 'star-cluster',
      name: 'STaR Cluster - SI Joint',
      pathology: 'תפקוד לקוי של מפרק הסקרואיליאק',
      pathologyEn: 'Sacroiliac Joint Dysfunction',
      icon: '🦴',
      color: 'orange',
      reference: 'Stanford et al. 2010',
      description: 'STaR = Squish, Thigh thrust, Resisted hip abduction. גרסה מקוצרת של Laslett ל-SI joint - 3 בדיקות בלבד.',
      tests: [
        { name: 'Squish Test (Compression)', nameEn: 'Sacral Compression', description: 'בשכיבה על הצד. הבודק לוחץ על הסקרום עם משקל גופו' },
        { name: 'Thigh Thrust', nameEn: 'Posterior Shear', description: 'בשכיבה. ירך 90° פלקסיה, ברך 90°. דחיפה אקסיאלית דרך הירך לאחור' },
        { name: 'Resisted Hip Abduction', nameEn: 'Resisted Hip Abduction', description: 'בעמידה. אבדוקציה של הירך כנגד התנגדות' }
      ],
      interpretation: [
        { positives: 0, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'לא נראית פגיעת SI' },
        { positives: 1, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'חשד נמוך - לא מספיק' },
        { positives: 2, sensitivity: '93%', specificity: '66%', lrPos: '2.7', notes: '✅ חשד טוב ל-SI Joint' },
        { positives: 3, sensitivity: '—', specificity: '87%', lrPos: '7.0', notes: '✅✅ אבחנה ברורה ל-SI Joint' }
      ],
      criticalNote: 'גרסה מקוצרת של Laslett (5 בדיקות). מתאימה לקליניקה עמוסה. 2/3 חיוביים = LR+ 2.7.'
    },
    {
      id: 'subacromial-pain-cluster',
      name: 'Subacromial Pain Cluster (Park\'s)',
      pathology: 'תסמונת כאב סאב-אקרומיאלי',
      pathologyEn: 'Subacromial Pain Syndrome (SAPS)',
      icon: '💪',
      color: 'cyan',
      reference: 'Park et al. 2005',
      description: 'קלאסטר 3 הבדיקות הקלאסי לאבחון Subacromial Impingement / SAPS. הסטנדרט הזהב להערכה הקלינית.',
      tests: [
        { name: 'Hawkins-Kennedy Test', nameEn: 'Hawkins-Kennedy', description: 'פלקסיה 90° + פלקסיה של מרפק 90° + IR פסיבי של הכתף' },
        { name: 'Painful Arc', nameEn: 'Painful Arc Sign', description: 'אבדוקציה אקטיבית - כאב ב-60°-120°, נעלם מעל 120°' },
        { name: 'Resisted External Rotation', nameEn: 'Infraspinatus Test', description: 'מרפק 90° לצד הגוף. רוטציה חיצונית כנגד התנגדות - חולשה / כאב' }
      ],
      interpretation: [
        { positives: 0, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'לא נראה SAPS' },
        { positives: 1, sensitivity: '—', specificity: '—', lrPos: '0.9', notes: 'לא משמעותי' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '3.6', notes: '✅ חשד טוב ל-SAPS' },
        { positives: 3, sensitivity: '75%', specificity: '74%', lrPos: '10.6', notes: '✅✅ אבחנה ברורה!' }
      ],
      criticalNote: '3/3 חיוביים = LR+ של 10.6. שימושי מאוד בקליניקה - כל הבדיקות פשוטות לביצוע.'
    },
    {
      id: 'shoulder-instability-cluster',
      name: 'Anterior Shoulder Instability Cluster',
      pathology: 'אי-יציבות קדמית של הכתף',
      pathologyEn: 'Anterior Shoulder Instability',
      icon: '💪',
      color: 'violet',
      reference: 'Lo et al. 2004',
      description: 'קלאסטר של 3 בדיקות לאבחון אי-יציבות קדמית של הכתף. רגיש במיוחד אחרי פריקה.',
      tests: [
        { name: 'Apprehension Test', nameEn: 'Apprehension', description: 'בשכיבה. כתף 90° אבדוקציה + 90° ER. הבודק דוחף את ראש ההומרוס קדימה' },
        { name: 'Relocation Test', nameEn: 'Jobe Relocation', description: 'בעת תחושת חרדה - הבודק דוחף את ראש ההומרוס אחורה. הקלה = חיובי' },
        { name: 'Surprise Test', nameEn: 'Anterior Release', description: 'משחרר את הלחץ פתאום - חזרה של תחושת חרדה = חיובי' }
      ],
      interpretation: [
        { positives: 0, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'לא נראית אי-יציבות' },
        { positives: 1, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'חשד קל' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '21', notes: '✅ אבחנה סבירה' },
        { positives: 3, sensitivity: '94%', specificity: '78%', lrPos: '39', notes: '✅✅✅ אבחנה ודאית!' }
      ],
      criticalNote: '3/3 חיוביים = LR+ של 39! אחד הקלאסטרים החזקים ביותר. אבחנה מאוד ספציפית.'
    },
    {
      id: 'meniscus-additional-cluster',
      name: 'Meniscal Tear - Composite Examination',
      pathology: 'קרע מניסקוס - בדיקה מורחבת',
      pathologyEn: 'Comprehensive Meniscal Examination',
      icon: '🦴',
      color: 'amber',
      reference: 'Lowery et al. 2006',
      description: 'קלאסטר של 5 בדיקות לאבחון קרע מניסקוס. רגיש יותר משימוש בבדיקה אחת בלבד.',
      tests: [
        { name: 'Joint Line Tenderness', nameEn: 'JLT', description: 'רגישות במישוש לאורך קו המפרק' },
        { name: 'McMurray Test', nameEn: 'McMurray', description: 'פלקסיה מלאה + ER + אקסטנציה - "click" + כאב = חיובי' },
        { name: 'Apley Compression', nameEn: 'Apley\'s', description: 'בשכיבה על הבטן. ברך 90°. לחיצה אקסיאלית + רוטציה - כאב = חיובי' },
        { name: 'Thessaly Test (5°)', nameEn: 'Thessaly Test', description: 'עמידה על רגל סימפטומטית בפלקסיה 5° - סיבוב פנימי וחיצוני 3 פעמים' },
        { name: 'History of Catching/Locking', nameEn: 'Mechanical Symptoms', description: 'תלונות על "נעילה" / "תקיעה" / "נעילה ופתיחה" של הברך' }
      ],
      interpretation: [
        { positives: 0, sensitivity: '—', specificity: '—', lrPos: '—', notes: 'לא נראה קרע מניסקוס' },
        { positives: 2, sensitivity: '—', specificity: '—', lrPos: '2.0', notes: 'חשד נמוך' },
        { positives: 3, sensitivity: '—', specificity: '—', lrPos: '4.5', notes: '✅ חשד בינוני' },
        { positives: 4, sensitivity: '—', specificity: '—', lrPos: '7.5', notes: '✅✅ חשד גבוה' },
        { positives: 5, sensitivity: '78%', specificity: '90%', lrPos: '8.0', notes: '✅✅✅ אבחנה כמעט ודאית - MRI לאישור' }
      ],
      criticalNote: 'Thessaly היא הבדיקה הספציפית ביותר (Sp 96%). שילוב 5 בדיקות = LR+ של 8. עם מקרים של חשד גבוה - שלח ל-MRI.'
    }
  ];

  // ========== חישוב תוצאות הקלאסטר הנוכחי ==========
  const computeClusterPosCount = (clusterId) => {
    const results = clusterResults[clusterId] || {};
    return Object.values(results).filter(v => v === 'positive').length;
  };

  const getCurrentInterpretation = (cluster) => {
    const posCount = computeClusterPosCount(cluster.id);
    return cluster.interpretation.find(i => i.positives === posCount);
  };

  // ========== חישובון בייסיאני - Pre-test → Post-test ==========
  const calculatePostTestProb = (preTest, lr) => {
    if (!lr || lr === '—' || lr === 'אינסוף') return preTest >= 50 ? 99 : preTest;
    const lrNum = parseFloat(lr);
    if (isNaN(lrNum)) return preTest;
    const preTestOdds = preTest / (100 - preTest);
    const postTestOdds = preTestOdds * lrNum;
    const postTestProb = (postTestOdds / (1 + postTestOdds)) * 100;
    return Math.min(99, Math.round(postTestProb));
  };

  // ========== מאגר אנטומיה תפקודית ו-ROM ==========
  const anatomyAtlas = {
    shoulder: {
      name: 'כתף',
      nameEn: 'Shoulder',
      icon: '💪',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-600',
      overview: 'מפרק הכתף הוא המורכב והגמיש ביותר בגוף - מורכב מ-4 מפרקים: GH (גלנוהומרלי), AC (אקרומיוקלביקולרי), SC (סטרנוקלביקולרי), ST (סקפולותורציאלי). היציבות מגיעה מהשרירים (יציבות דינמית), במיוחד שרוול המסובבים.',
      structures: [
        { name: 'מפרק גלנוהומרלי (GH)', nameEn: 'Glenohumeral Joint', function: 'המפרק העיקרי של הכתף - ball-and-socket. מאפשר טווח תנועה ענק', clinical: 'הכי נפרק בגוף (אחורי הכתף 95%)', pathologies: 'Anterior Instability, Frozen Shoulder, OA' },
        { name: 'שרוול המסובבים (Rotator Cuff)', nameEn: 'Rotator Cuff', function: '4 שרירים: Supraspinatus, Infraspinatus, Teres Minor, Subscapularis - יציבות דינמית', clinical: 'הפתולוגיה הנפוצה ביותר בכתף', pathologies: 'RC Tear, Tendinopathy, SAPS' },
        { name: 'מפרק AC', nameEn: 'AC Joint', function: 'מחבר בין הקלביקולה לאקרומיון - מאפשר תנועות שכמה', clinical: 'נפגע בנפילות על הכתף', pathologies: 'AC Separation, OA' },
        { name: 'בורסה סאב-אקרומיאלית', nameEn: 'Subacromial Bursa', function: 'מקטינה חיכוך בין השרוול לאקרומיון', clinical: 'מתדלקת באימפינג\'מנט', pathologies: 'Bursitis, SAPS' },
        { name: 'גיד הביצפס - ראש ארוך', nameEn: 'LHB Tendon', function: 'עובר דרך הסולקוס הביצפיטלי, חלק מהיציבות הקדמית', clinical: 'נקרע נפוץ במבוגרים', pathologies: 'LHB Tendinopathy, SLAP, Rupture' },
        { name: 'לבראם', nameEn: 'Glenoid Labrum', function: 'מעמיק את הסוקט של הגלנואיד - מגדיל יציבות', clinical: 'נקרע בפריקות / בספורט מעל הראש', pathologies: 'SLAP, Bankart Lesion' },
        { name: 'שכמה (Scapula)', nameEn: 'Scapula', function: 'בסיס לכתף - 17 שרירים מתחברים אליה. יציבות + תנועה', clinical: 'דיסקינזיס שכמתי - גורם נפוץ לכאב', pathologies: 'Scapular Dyskinesis, Winging' }
      ],
      rom: [
        { motion: 'פלקסיה', motionEn: 'Flexion', normal: '160°-180°', notes: 'הרמת היד קדימה' },
        { motion: 'אקסטנציה', motionEn: 'Extension', normal: '40°-60°', notes: 'הרחקת היד אחורה' },
        { motion: 'אבדוקציה', motionEn: 'Abduction', normal: '180°', notes: 'הרמת היד לצד' },
        { motion: 'אדוקציה', motionEn: 'Adduction', normal: '30°-50°', notes: 'מעבר על קו האמצע' },
        { motion: 'רוטציה חיצונית', motionEn: 'External Rotation', normal: '80°-90°', notes: 'מרפק 90° לצד הגוף' },
        { motion: 'רוטציה פנימית', motionEn: 'Internal Rotation', normal: '70°-90°', notes: 'מאחורי הגב - עד T7-T10' },
        { motion: 'אדוקציה אופקית', motionEn: 'Horizontal Adduction', normal: '130°', notes: 'תנועת חיבוק' }
      ]
    },
    elbow: {
      name: 'מרפק',
      nameEn: 'Elbow',
      icon: '💪',
      color: 'cyan',
      gradient: 'from-cyan-500 to-teal-600',
      overview: 'מפרק הינג\' (Hinge) - מורכב מ-3 מפרקים בקפסולה אחת: הומרו-אולנרי (פלקסיה/אקסטנציה), הומרו-רדיאלי, רדיו-אולנרי פרוקסימלי (פרונציה/סופינציה).',
      structures: [
        { name: 'מפרק הומרו-אולנרי', nameEn: 'Humeroulnar Joint', function: 'המפרק הראשי - פלקסיה ואקסטנציה', clinical: 'הופך לבעייתי באי-יציבות וכרוניות', pathologies: 'OA, Loose Bodies' },
        { name: 'גיד אקסטנסור משותף (CET)', nameEn: 'Common Extensor Tendon', function: 'מקור היאחזות של ECRB, ECRL, EDC, ECU באפיקונדיל הלטרלי', clinical: '"מרפק טניס" - הפתולוגיה הנפוצה ביותר', pathologies: 'Lateral Epicondylitis' },
        { name: 'גיד פלקסור משותף (CFT)', nameEn: 'Common Flexor Tendon', function: 'מקור היאחזות של פלקסורי האמה באפיקונדיל המדיאלי', clinical: '"מרפק גולפר"', pathologies: 'Medial Epicondylitis' },
        { name: 'ליגמנט UCL', nameEn: 'Ulnar Collateral Ligament', function: 'יציבות הצד המדיאלי של המרפק - חזק במיוחד הסיבים הקדמיים', clinical: 'נקרע בזורקי כדור', pathologies: 'UCL Sprain/Tear' },
        { name: 'עצב אולנרי', nameEn: 'Ulnar Nerve', function: 'עובר דרך מנהרת קוביטל מאחורי האפיקונדיל המדיאלי', clinical: 'נדחס ב-Cubital Tunnel Syndrome', pathologies: 'Cubital Tunnel Syndrome' },
        { name: 'בורסה אולקרנון', nameEn: 'Olecranon Bursa', function: 'מקטינה חיכוך מאחור', clinical: 'מתדלקת מטראומה / זיהום', pathologies: 'Olecranon Bursitis' }
      ],
      rom: [
        { motion: 'פלקסיה', motionEn: 'Flexion', normal: '140°-150°', notes: 'מהאקסטנציה המלאה לפלקסיה' },
        { motion: 'אקסטנציה', motionEn: 'Extension', normal: '0° (5° hyperextension נורמלי)', notes: 'יישור מלא' },
        { motion: 'סופינציה', motionEn: 'Supination', normal: '80°-90°', notes: 'מרפק 90°, כף יד כלפי מעלה' },
        { motion: 'פרונציה', motionEn: 'Pronation', normal: '80°-90°', notes: 'מרפק 90°, כף יד כלפי מטה' }
      ]
    },
    wrist: {
      name: 'שורש כף יד',
      nameEn: 'Wrist & Hand',
      icon: '✋',
      color: 'teal',
      gradient: 'from-teal-500 to-emerald-600',
      overview: 'אזור מורכב - 8 עצמות קרפליות, 5 מטטרסליות, 14 פלנגות. תנועות מורכבות בין השורות הקרפליות. עצב המדיאני עובר במנהרת ה-Carpal.',
      structures: [
        { name: 'מנהרת ה-Carpal', nameEn: 'Carpal Tunnel', function: 'מעבר 9 גידי פלקסור + עצב המדיאני', clinical: 'הסיבה הנפוצה לנימולים בידיים', pathologies: 'Carpal Tunnel Syndrome' },
        { name: 'TFCC', nameEn: 'Triangular Fibrocartilage Complex', function: 'יציבות הצד האולנרי של שורש כף יד', clinical: 'נקרע בעומס אולנרי / נפילות', pathologies: 'TFCC Tear' },
        { name: 'ליגמנט סקפולונאט (SL)', nameEn: 'Scapholunate Ligament', function: 'יציבות בין סקפואיד ולונאט', clinical: 'נקרע בנפילות - גורם ל-DISI', pathologies: 'SL Dissociation' },
        { name: 'גידי FCR/FCU/PL', nameEn: 'Wrist Flexors', function: 'פלקסיה של שורש כף יד', clinical: 'PL נעדר ב-15% מהאוכלוסיה', pathologies: 'Tendinitis' },
        { name: 'גידים האקסטנסורים (6 קומפרטמנטים)', nameEn: 'Wrist Extensors', function: 'אקסטנציה ותנועות אצבעות', clinical: 'קומפרטמנט 1 (APL/EPB) = de Quervain', pathologies: 'de Quervain\'s, Intersection Syndrome' }
      ],
      rom: [
        { motion: 'פלקסיה', motionEn: 'Flexion', normal: '80°-90°', notes: 'תנועה כלפי כף היד' },
        { motion: 'אקסטנציה', motionEn: 'Extension', normal: '70°-90°', notes: 'תנועה כלפי גב היד' },
        { motion: 'סטיה רדיאלית', motionEn: 'Radial Deviation', normal: '20°-25°', notes: 'תנועה לכיוון האגודל' },
        { motion: 'סטיה אולנרית', motionEn: 'Ulnar Deviation', normal: '30°-40°', notes: 'תנועה לכיוון הזרת' },
        { motion: 'אגודל - אופוזיציה', motionEn: 'Thumb Opposition', normal: 'מגיע לזרת', notes: 'מגע אגודל-זרת' }
      ]
    },
    cervical: {
      name: 'צוואר',
      nameEn: 'Cervical Spine',
      icon: '🦴',
      color: 'violet',
      gradient: 'from-violet-500 to-purple-600',
      overview: '7 חוליות צוואר. C1-C2 ייחודיים (Atlas + Axis) - 50% מהרוטציה הצווארית. C3-C7 בתבנית רגילה. עצבי הצוואר יוצרים את ה-Brachial Plexus.',
      structures: [
        { name: 'Atlas (C1)', nameEn: 'Atlas', function: 'נושא את הראש, אין גוף - מאפשר "Yes" (פלקסיה/אקסטנציה)', clinical: 'מפרק עם הגולגולת', pathologies: 'Atlanto-occipital instability' },
        { name: 'Axis (C2)', nameEn: 'Axis', function: 'יש בולטת (Dens) - מאפשר "No" (רוטציה)', clinical: '50% מרוטציית הצוואר', pathologies: 'Hangman\'s fracture' },
        { name: 'Facet Joints', nameEn: 'Facet Joints', function: 'מנחים את התנועה הצווארית', clinical: 'גורמים לכאב צווארי מקומי', pathologies: 'Facet Joint Pain, OA' },
        { name: 'דיסקים בין-חולייתיים', nameEn: 'Intervertebral Discs', function: 'בולמי זעזועים', clinical: 'הסיבה הנפוצה לרדיקולופתיה צווארית', pathologies: 'Disc Herniation, Cervical Radiculopathy' },
        { name: 'Brachial Plexus', nameEn: 'Brachial Plexus', function: 'C5-T1 - מעצבב את הגף העליון', clinical: 'יכול להידחס ב-TOS', pathologies: 'Cervical Radiculopathy, TOS' },
        { name: 'Vertebral Arteries', nameEn: 'Vertebral Arteries', function: 'עורקים שעולים דרך פורמינות בחוליות', clinical: 'יכולים להידחס באקסטנציה/רוטציה - VBI', pathologies: 'VBI, Cervical Artery Dysfunction' }
      ],
      rom: [
        { motion: 'פלקסיה', motionEn: 'Flexion', normal: '45°-50°', notes: 'סנטר נוגע בחזה (כמעט)' },
        { motion: 'אקסטנציה', motionEn: 'Extension', normal: '45°-75°', notes: 'הסתכלות לתקרה' },
        { motion: 'הטיה לטרלית', motionEn: 'Lateral Flexion', normal: '45° לכל צד', notes: 'אוזן לכתף' },
        { motion: 'רוטציה', motionEn: 'Rotation', normal: '60°-80° לכל צד', notes: 'הסתכלות הצידה - 50% מ-C1-C2' }
      ]
    },
    lumbar: {
      name: 'גב מותני',
      nameEn: 'Lumbar Spine',
      icon: '🔥',
      color: 'orange',
      gradient: 'from-orange-500 to-red-600',
      overview: '5 חוליות גדולות שנושאות את עיקר משקל הגוף. L4-L5 ו-L5-S1 הם הסגמנטים הנפוצים ביותר לפתולוגיה. דרכם יוצא ה-Cauda Equina.',
      structures: [
        { name: 'דיסקים L4-L5 / L5-S1', nameEn: 'Lumbar Discs', function: 'בולמי זעזועים - נושאים עומס גדול', clinical: '90% מפריצות הדיסק כאן', pathologies: 'Disc Herniation, Degeneration' },
        { name: 'Cauda Equina', nameEn: 'Cauda Equina', function: 'אגד עצבי בתעלת השדרה - L1 ומטה', clinical: 'דחיסה = חירום ניתוחי!', pathologies: 'Cauda Equina Syndrome' },
        { name: 'מפרקי SI', nameEn: 'Sacroiliac Joints', function: 'מחברים את הסקרום לאגן - מעט תנועה', clinical: 'גורם לכאב לא-ספציפי', pathologies: 'SI Joint Dysfunction' },
        { name: 'Multifidus', nameEn: 'Multifidus', function: 'יציבות מקטעית - שריר מפתח לכאב גב', clinical: 'מאבד מסה אחרי כאב גב', pathologies: 'Atrophy after LBP' },
        { name: 'Pars Interarticularis', nameEn: 'Pars Interarticularis', function: 'חלק עצמי בין הפצטים - חלש מבחינה מבנית', clinical: 'נשבר באתלטים צעירים', pathologies: 'Spondylolysis' },
        { name: 'Erector Spinae', nameEn: 'Erector Spinae', function: 'אקסטנציה של עמוד שדרה', clinical: 'מתעייף ראשון בגב חלש', pathologies: 'Strain, Spasm' }
      ],
      rom: [
        { motion: 'פלקסיה', motionEn: 'Flexion', normal: '40°-60°', notes: 'התכופפות קדימה' },
        { motion: 'אקסטנציה', motionEn: 'Extension', normal: '20°-35°', notes: 'הטיה אחורה' },
        { motion: 'הטיה לטרלית', motionEn: 'Lateral Flexion', normal: '15°-20° לכל צד', notes: 'אצבעות במורד הירך' },
        { motion: 'רוטציה', motionEn: 'Rotation', normal: '3°-18° לכל צד', notes: 'מוגבל מאוד מבנית' }
      ]
    },
    hip: {
      name: 'ירך',
      nameEn: 'Hip',
      icon: '🦵',
      color: 'amber',
      gradient: 'from-amber-500 to-orange-600',
      overview: 'מפרק ball-and-socket עמוק - היציב ביותר בגוף עם טווח תנועה גדול. נושא משקל. שונה מהכתף בכך שמועדף יציבות על תנועה.',
      structures: [
        { name: 'אצטבולום ולבראם', nameEn: 'Acetabulum & Labrum', function: 'הסוקט - מעמיק על ידי הלבראם', clinical: 'הלבראם נקרע ב-FAI', pathologies: 'Labral Tear, FAI' },
        { name: 'ראש הפמור', nameEn: 'Femoral Head', function: 'הכדור - מקבל אספקת דם דרך עורקים מסביב', clinical: 'AVN בנקיעות / טראומה', pathologies: 'AVN, Femoral Neck Fracture' },
        { name: 'גלוטאוס מדיוס', nameEn: 'Gluteus Medius', function: 'יציבות אגן בזמן עמידה על רגל אחת', clinical: 'חולשה = Trendelenburg', pathologies: 'GTPS, Tendinopathy' },
        { name: 'ITB - Iliotibial Band', nameEn: 'Iliotibial Band', function: 'מהאגן לפיבולה - יציבות צידית של הירך והברך', clinical: 'גורם לכאב לטרלי בירך וברך', pathologies: 'ITB Friction Syndrome' },
        { name: 'Iliopsoas', nameEn: 'Iliopsoas', function: 'הפלקסור העיקרי של הירך', clinical: 'מתקשה במישבים יושבים', pathologies: 'Iliopsoas Tendinopathy' },
        { name: 'בורסה טרוכנטרית', nameEn: 'Trochanteric Bursa', function: 'מקטינה חיכוך מעל הטרוכנטר הגדול', clinical: 'GTPS = הכאב הצידי הנפוץ ביותר', pathologies: 'GTPS' }
      ],
      rom: [
        { motion: 'פלקסיה', motionEn: 'Flexion', normal: '120°-130°', notes: 'הברך לחזה (ברך כפופה)' },
        { motion: 'אקסטנציה', motionEn: 'Extension', normal: '20°-30°', notes: 'הרגל אחורה' },
        { motion: 'אבדוקציה', motionEn: 'Abduction', normal: '40°-45°', notes: 'הרגל לצד' },
        { motion: 'אדוקציה', motionEn: 'Adduction', normal: '20°-30°', notes: 'מעבר לקו האמצע' },
        { motion: 'רוטציה חיצונית', motionEn: 'External Rotation', normal: '40°-60°', notes: 'בפלקסיה 90°' },
        { motion: 'רוטציה פנימית', motionEn: 'Internal Rotation', normal: '30°-45°', notes: 'מוגבלת ב-FAI / OA!' }
      ]
    },
    knee: {
      name: 'ברך',
      nameEn: 'Knee',
      icon: '🦴',
      color: 'emerald',
      gradient: 'from-emerald-500 to-green-600',
      overview: 'מפרק הינג\' מורכב - 3 מפרקים: טיביו-פמורלי מדיאלי + לטרלי + פטלו-פמורלי. תלוי בשרירים וליגמנטים ליציבות (אין מבנה עצמי יציב כמו הירך).',
      structures: [
        { name: 'ACL', nameEn: 'Anterior Cruciate Ligament', function: 'מונע תזוזה קדמית של הטיביה + רוטציה', clinical: 'הליגמנט הנקרע הנפוץ ביותר בספורט', pathologies: 'ACL Tear' },
        { name: 'PCL', nameEn: 'Posterior Cruciate Ligament', function: 'מונע תזוזה אחורית של הטיביה', clinical: 'נקרע בחבלות חזקות (Dashboard)', pathologies: 'PCL Tear' },
        { name: 'מניסקוס מדיאלי', nameEn: 'Medial Meniscus', function: 'בולם זעזועים + יציבות', clinical: 'הנקרע הנפוץ ביותר (פחות נייד)', pathologies: 'Meniscal Tear' },
        { name: 'מניסקוס לטרלי', nameEn: 'Lateral Meniscus', function: 'בולם זעזועים + יציבות', clinical: 'יותר נייד - פחות נקרע', pathologies: 'Meniscal Tear' },
        { name: 'MCL', nameEn: 'Medial Collateral Ligament', function: 'יציבות מדיאלית', clinical: 'נקרע בחבלות מהצד הלטרלי (Valgus)', pathologies: 'MCL Sprain' },
        { name: 'פיקה ו-Patellar Tendon', nameEn: 'Patella & Patellar Tendon', function: 'מעבירה כוח מקוואדריצפס - מנוף', clinical: 'PFPS = הכאב הנפוץ ביותר בברך', pathologies: 'PFPS, Patellar Tendinopathy' },
        { name: 'Pes Anserinus', nameEn: 'Pes Anserinus', function: 'היאחזות של 3 שרירים מדיאליים (Sartorius, Gracilis, Semitendinosus)', clinical: 'בורסיטיס נפוץ במבוגרים', pathologies: 'Pes Anserine Bursitis' }
      ],
      rom: [
        { motion: 'פלקסיה', motionEn: 'Flexion', normal: '130°-140°', notes: 'עקב נוגע בעכוז (אקטיבי)' },
        { motion: 'אקסטנציה', motionEn: 'Extension', normal: '0° (5° hyperextension נורמלי)', notes: 'יישור מלא' },
        { motion: 'רוטציה פנימית (כפופה)', motionEn: 'Internal Rotation (flexed)', normal: '10°', notes: 'בברך 90°' },
        { motion: 'רוטציה חיצונית (כפופה)', motionEn: 'External Rotation (flexed)', normal: '30°-40°', notes: 'בברך 90°' }
      ]
    },
    ankle: {
      name: 'קרסול וכף רגל',
      nameEn: 'Ankle & Foot',
      icon: '🦶',
      color: 'rose',
      gradient: 'from-rose-500 to-pink-600',
      overview: '26 עצמות, 33 מפרקים. מתחלק ל-3 חלקים: Hindfoot (טאלוס + קלקנאוס), Midfoot (Navicular, Cuboid, Cuneiforms), Forefoot (Metatarsals + Phalanges).',
      structures: [
        { name: 'מפרק טאלוקרורלי', nameEn: 'Talocrural Joint', function: 'הקרסול עצמו - דורסיפלקסיה ופלנטרפלקסיה', clinical: 'נפצע בנקעי קרסול', pathologies: 'Ankle Sprain, OA' },
        { name: 'מפרק סוב-טלרי', nameEn: 'Subtalar Joint', function: 'אינברסיה ואברסיה - קריטי להליכה על משטחים לא ישרים', clinical: 'גורם ל-Sinus Tarsi Syndrome', pathologies: 'Sinus Tarsi Syndrome, OA' },
        { name: 'ATFL', nameEn: 'Anterior Talofibular Ligament', function: 'הליגמנט הלטרלי החזק - נמתח באינברסיה', clinical: 'הליגמנט הנקרע הנפוץ ביותר (85%)', pathologies: 'Lateral Ankle Sprain' },
        { name: 'גיד אכילס', nameEn: 'Achilles Tendon', function: 'הגיד החזק בגוף - עיקרי בפלנטרפלקסיה', clinical: 'נפוץ בטנדינופתיה אצל אצנים', pathologies: 'Achilles Tendinopathy, Rupture' },
        { name: 'פאסיה פלנטרית', nameEn: 'Plantar Fascia', function: 'תומכת בקשת האורך של כף הרגל', clinical: 'גורם הכאב הנפוץ ביותר בעקב', pathologies: 'Plantar Fasciitis' },
        { name: 'גיד טיביאליס פוסטריור', nameEn: 'Tibialis Posterior Tendon', function: 'תומך בקשת האורך - אינברסיה ופלנטרפלקסיה', clinical: 'אי-תפקוד = Adult-Acquired Flat Foot', pathologies: 'PTTD' },
        { name: 'פרוניאלים', nameEn: 'Peroneals (Longus & Brevis)', function: 'אברסיה - יציבות לטרלית', clinical: 'יכולים להיקרע / להתמקם בנקעים', pathologies: 'Peroneal Tendinopathy' }
      ],
      rom: [
        { motion: 'דורסיפלקסיה', motionEn: 'Dorsiflexion', normal: '20°', notes: 'משיכת הבוהן למעלה' },
        { motion: 'פלנטרפלקסיה', motionEn: 'Plantarflexion', normal: '40°-50°', notes: 'דחיפת הבוהן למטה' },
        { motion: 'אינברסיה', motionEn: 'Inversion', normal: '20°-35°', notes: 'הסולית פונה פנימה' },
        { motion: 'אברסיה', motionEn: 'Eversion', normal: '15°-20°', notes: 'הסולית פונה החוצה' },
        { motion: 'בוהן גדולה - אקסטנציה', motionEn: 'Hallux Extension', normal: '70°-90°', notes: 'דורש להליכה תקינה' }
      ]
    },
    tmj: {
      name: 'מפרק הלסת (TMJ)',
      nameEn: 'Temporomandibular Joint',
      icon: '🦷',
      color: 'fuchsia',
      gradient: 'from-fuchsia-500 to-purple-600',
      overview: 'המפרק היחיד בגוף עם דיסק ביו-קונקבי. שני מפרקים סינכרוניים. תנועות ייחודיות - rotation + translation. מעצבב על ידי CN V (טריגמינל).',
      structures: [
        { name: 'דיסק ארטיקולרי', nameEn: 'Articular Disc', function: 'מפריד את המפרק לשני תאים, מאפשר תנועה חלקה', clinical: 'תזוזה = "click" בעת פתיחה', pathologies: 'Disc Displacement (with/without reduction)' },
        { name: 'שריר Masseter', nameEn: 'Masseter', function: 'הסגירה הראשית של הלסת', clinical: 'מתח / ברוקסיזם', pathologies: 'Myofascial TMD' },
        { name: 'שריר Temporalis', nameEn: 'Temporalis', function: 'סגירה ורטרקציה', clinical: 'גורם לכאבי ראש טמפורליים', pathologies: 'Myofascial TMD' },
        { name: 'Lateral Pterygoid', nameEn: 'Lateral Pterygoid', function: 'פתיחת פה + פרוטרוזיה', clinical: 'מתאימן עם הדיסק - חיוני בתפקוד תקין', pathologies: 'Spasm, Pain' },
        { name: 'CN V - Trigeminal', nameEn: 'Trigeminal Nerve', function: 'תחושה ומוטוריקה ללסת', clinical: 'נברלגיה טריגמינלית - אבחנה מבדלת', pathologies: 'Trigeminal Neuralgia' }
      ],
      rom: [
        { motion: 'פתיחת פה', motionEn: 'Mouth Opening', normal: '40-55 מ"מ', notes: 'בין שיני החזית' },
        { motion: 'פרוטרוזיה', motionEn: 'Protrusion', normal: '6-9 מ"מ', notes: 'הסנטר קדימה' },
        { motion: 'רטרוזיה', motionEn: 'Retrusion', normal: '3 מ"מ', notes: 'הסנטר אחורה' },
        { motion: 'תנועה לטרלית', motionEn: 'Lateral Excursion', normal: '8-12 מ"מ לכל צד', notes: 'הסנטר לצד' }
      ]
    }
  };

  // ========== Outcome Measures - שאלוני הערכה תפקודית ==========
  const outcomeMeasures = [
    {
      id: 'ndi',
      name: 'NDI - Neck Disability Index',
      nameHe: 'מדד הנכות הצווארית',
      icon: '🦴',
      color: 'blue',
      region: 'צוואר',
      maxScore: 50,
      scoreType: 'percent', // ציון מומר ל-%
      description: 'שאלון סטנדרטי להערכת מוגבלות תפקודית בעקבות כאב צווארי. כולל 10 פריטים, כל אחד 0-5 נקודות.',
      reference: 'Vernon & Mior, 1991',
      interpretation: [
        { range: '0-4 (0-8%)', label: 'אין נכות', color: 'emerald' },
        { range: '5-14 (10-28%)', label: 'נכות קלה', color: 'green' },
        { range: '15-24 (30-48%)', label: 'נכות בינונית', color: 'amber' },
        { range: '25-34 (50-68%)', label: 'נכות חמורה', color: 'orange' },
        { range: '35+ (70%+)', label: 'נכות מלאה / מוגזמת', color: 'red' }
      ],
      mcid: '7 נקודות / 14% (Minimal Clinically Important Difference)',
      questions: [
        {
          q: 'עוצמת כאב',
          options: [
            { text: 'אין כאב כרגע', value: 0 },
            { text: 'כאב קל מאוד', value: 1 },
            { text: 'כאב בינוני', value: 2 },
            { text: 'כאב חזק למדי', value: 3 },
            { text: 'כאב חזק מאוד', value: 4 },
            { text: 'הכאב הגרוע ביותר שאפשר לדמיין', value: 5 }
          ]
        },
        {
          q: 'טיפול עצמי (רחצה, התלבשות)',
          options: [
            { text: 'מסוגל לטפל בעצמי בלי כאב', value: 0 },
            { text: 'מסוגל אך גורם לכאב נוסף', value: 1 },
            { text: 'כואב להתלבש - איטי וזהיר', value: 2 },
            { text: 'זקוק לעזרה אך מסתדר', value: 3 },
            { text: 'זקוק לעזרה ברוב הפעולות היומיומיות', value: 4 },
            { text: 'לא מתלבש, רחצה בקושי, נשאר במיטה', value: 5 }
          ]
        },
        {
          q: 'הרמת חפצים',
          options: [
            { text: 'יכול להרים חפצים כבדים בלי כאב', value: 0 },
            { text: 'מרים חפצים כבדים אך גורם לכאב', value: 1 },
            { text: 'הכאב מונע ממני להרים מהרצפה אך מסתדר עם משטח גבוה', value: 2 },
            { text: 'הכאב מאפשר רק חפצים קלים-בינוניים', value: 3 },
            { text: 'יכול להרים רק חפצים קלים מאוד', value: 4 },
            { text: 'לא מסוגל להרים שום דבר', value: 5 }
          ]
        },
        {
          q: 'קריאה',
          options: [
            { text: 'יכול לקרוא ככל שארצה בלי כאב', value: 0 },
            { text: 'יכול לקרוא ככל שארצה עם כאב קל', value: 1 },
            { text: 'יכול לקרוא ככל שארצה עם כאב בינוני', value: 2 },
            { text: 'לא יכול לקרוא ככל שארצה - כאב בינוני', value: 3 },
            { text: 'בקושי יכול לקרוא - כאב חזק', value: 4 },
            { text: 'לא יכול לקרוא בכלל', value: 5 }
          ]
        },
        {
          q: 'כאבי ראש',
          options: [
            { text: 'אין כאבי ראש', value: 0 },
            { text: 'כאבי ראש קלים, לעיתים רחוקות', value: 1 },
            { text: 'כאבי ראש בינוניים, לעיתים רחוקות', value: 2 },
            { text: 'כאבי ראש בינוניים, לעיתים תכופות', value: 3 },
            { text: 'כאבי ראש חזקים, לעיתים תכופות', value: 4 },
            { text: 'כאבי ראש כל הזמן', value: 5 }
          ]
        },
        {
          q: 'ריכוז',
          options: [
            { text: 'יכול להתרכז בלי קושי', value: 0 },
            { text: 'יכול להתרכז עם קושי קל', value: 1 },
            { text: 'יש קושי בינוני בריכוז', value: 2 },
            { text: 'קושי רב בריכוז', value: 3 },
            { text: 'קושי גדול מאוד בריכוז', value: 4 },
            { text: 'לא יכול להתרכז בכלל', value: 5 }
          ]
        },
        {
          q: 'עבודה',
          options: [
            { text: 'יכול לעבוד ככל שארצה', value: 0 },
            { text: 'יכול לעבוד את העבודה הרגילה אך לא יותר', value: 1 },
            { text: 'יכול לעבוד את רוב העבודה הרגילה', value: 2 },
            { text: 'לא יכול לעבוד את העבודה הרגילה', value: 3 },
            { text: 'בקושי יכול לעבוד', value: 4 },
            { text: 'לא יכול לעבוד בכלל', value: 5 }
          ]
        },
        {
          q: 'נהיגה',
          options: [
            { text: 'יכול לנהוג בלי כאב', value: 0 },
            { text: 'יכול לנהוג ככל שארצה עם כאב קל', value: 1 },
            { text: 'יכול לנהוג עם כאב בינוני', value: 2 },
            { text: 'לא יכול לנהוג ככל שארצה - כאב בינוני', value: 3 },
            { text: 'בקושי יכול לנהוג - כאב חזק', value: 4 },
            { text: 'לא יכול לנהוג בכלל', value: 5 }
          ]
        },
        {
          q: 'שינה',
          options: [
            { text: 'אין הפרעות שינה', value: 0 },
            { text: 'שינה מופרעת קצת (פחות משעה)', value: 1 },
            { text: 'שינה מופרעת קלות (1-2 שעות)', value: 2 },
            { text: 'שינה מופרעת בינוני (2-3 שעות)', value: 3 },
            { text: 'שינה מופרעת חמורה (3-5 שעות)', value: 4 },
            { text: 'שינה מופרעת לחלוטין (5-7 שעות)', value: 5 }
          ]
        },
        {
          q: 'פעילויות פנאי',
          options: [
            { text: 'יכול לעסוק בכל פעילויות הפנאי בלי כאב', value: 0 },
            { text: 'יכול בכל פעילויות הפנאי עם כאב כלשהו', value: 1 },
            { text: 'יכול ברוב פעילויות הפנאי בגלל כאב', value: 2 },
            { text: 'יכול במעט פעילויות פנאי', value: 3 },
            { text: 'בקושי יכול בפעילויות פנאי', value: 4 },
            { text: 'לא יכול לעסוק בפעילויות פנאי בכלל', value: 5 }
          ]
        }
      ]
    },
    {
      id: 'odi',
      name: 'ODI - Oswestry Disability Index',
      nameHe: 'מדד אוסווסטרי לנכות גב',
      icon: '🔥',
      color: 'red',
      region: 'גב מותני',
      maxScore: 50,
      scoreType: 'percent',
      description: 'הסטנדרט הזהב להערכת מוגבלות תפקודית בכאב גב תחתון. כולל 10 פריטים, כל אחד 0-5 נקודות.',
      reference: 'Fairbank et al., 1980',
      interpretation: [
        { range: '0-4 (0-20%)', label: 'נכות מינימלית', color: 'emerald' },
        { range: '5-14 (20-40%)', label: 'נכות בינונית', color: 'amber' },
        { range: '15-24 (40-60%)', label: 'נכות חמורה', color: 'orange' },
        { range: '25-34 (60-80%)', label: 'נכות משבשת', color: 'red' },
        { range: '35+ (80%+)', label: 'נכות מלאה', color: 'rose' }
      ],
      mcid: '10 נקודות / 20% (MCID)',
      questions: [
        {
          q: 'עוצמת כאב',
          options: [
            { text: 'אין כאב כרגע', value: 0 },
            { text: 'כאב קל מאוד', value: 1 },
            { text: 'כאב בינוני', value: 2 },
            { text: 'כאב חזק למדי', value: 3 },
            { text: 'כאב חזק מאוד', value: 4 },
            { text: 'הכאב הגרוע ביותר שאפשר לדמיין', value: 5 }
          ]
        },
        {
          q: 'טיפול עצמי',
          options: [
            { text: 'מסוגל לטפל בעצמי בלי לגרום לכאב', value: 0 },
            { text: 'מסוגל אך גורם לכאב נוסף', value: 1 },
            { text: 'כאב מקשה - איטי וזהיר', value: 2 },
            { text: 'זקוק לעזרה אך מסתדר', value: 3 },
            { text: 'זקוק לעזרה ברוב הפעולות', value: 4 },
            { text: 'לא מתלבש, רחצה בקושי, נשאר במיטה', value: 5 }
          ]
        },
        {
          q: 'הרמת חפצים',
          options: [
            { text: 'יכול להרים חפצים כבדים בלי כאב', value: 0 },
            { text: 'מרים חפצים כבדים אך גורם לכאב', value: 1 },
            { text: 'לא יכול מהרצפה - מסתדר ממשטח גבוה', value: 2 },
            { text: 'לא יכול מהרצפה - רק חפצים קלים-בינוניים', value: 3 },
            { text: 'יכול להרים רק חפצים קלים מאוד', value: 4 },
            { text: 'לא מסוגל להרים שום דבר', value: 5 }
          ]
        },
        {
          q: 'הליכה',
          options: [
            { text: 'הכאב לא מונע הליכה כלל', value: 0 },
            { text: 'מונע הליכה של יותר מ-1.5 ק"מ', value: 1 },
            { text: 'מונע הליכה של יותר מ-500 מ\'', value: 2 },
            { text: 'מונע הליכה של יותר מ-100 מ\'', value: 3 },
            { text: 'יכול להלך רק עם מקל או קביים', value: 4 },
            { text: 'במיטה רוב הזמן', value: 5 }
          ]
        },
        {
          q: 'ישיבה',
          options: [
            { text: 'יכול לשבת על כל כיסא ככל שארצה', value: 0 },
            { text: 'יכול לשבת רק על כיסא מסוים ככל שארצה', value: 1 },
            { text: 'הכאב מונע ישיבה של יותר משעה', value: 2 },
            { text: 'הכאב מונע ישיבה של יותר מחצי שעה', value: 3 },
            { text: 'הכאב מונע ישיבה של יותר מ-10 דקות', value: 4 },
            { text: 'הכאב מונע ממני לשבת בכלל', value: 5 }
          ]
        },
        {
          q: 'עמידה',
          options: [
            { text: 'יכול לעמוד ככל שארצה בלי כאב', value: 0 },
            { text: 'יכול לעמוד אך עם כאב', value: 1 },
            { text: 'הכאב מונע עמידה של יותר משעה', value: 2 },
            { text: 'הכאב מונע עמידה של יותר מחצי שעה', value: 3 },
            { text: 'הכאב מונע עמידה של יותר מ-10 דקות', value: 4 },
            { text: 'הכאב מונע ממני לעמוד בכלל', value: 5 }
          ]
        },
        {
          q: 'שינה',
          options: [
            { text: 'אין הפרעות שינה', value: 0 },
            { text: 'שינה מופרעת קצת מהכאב', value: 1 },
            { text: 'בגלל הכאב ישן רק 6 שעות', value: 2 },
            { text: 'בגלל הכאב ישן רק 4 שעות', value: 3 },
            { text: 'בגלל הכאב ישן רק 2 שעות', value: 4 },
            { text: 'הכאב מונע שינה לחלוטין', value: 5 }
          ]
        },
        {
          q: 'חיי מין (אם רלוונטי)',
          options: [
            { text: 'תקינים, ללא כאב', value: 0 },
            { text: 'תקינים אך גורמים לכאב', value: 1 },
            { text: 'כמעט תקינים, מאוד כואבים', value: 2 },
            { text: 'מוגבלים מאוד בגלל הכאב', value: 3 },
            { text: 'כמעט נעדרים בגלל הכאב', value: 4 },
            { text: 'הכאב מונע לחלוטין', value: 5 }
          ]
        },
        {
          q: 'חיים חברתיים',
          options: [
            { text: 'תקינים, ללא כאב', value: 0 },
            { text: 'תקינים אך עם כאב מוגבר', value: 1 },
            { text: 'הכאב מגביל פעילויות חזקות (ספורט)', value: 2 },
            { text: 'הכאב מגביל יציאות תכופות', value: 3 },
            { text: 'הכאב מגביל לבית בלבד', value: 4 },
            { text: 'אין חיים חברתיים בגלל הכאב', value: 5 }
          ]
        },
        {
          q: 'נסיעות',
          options: [
            { text: 'יכול לנסוע לכל מקום בלי כאב', value: 0 },
            { text: 'יכול לנסוע אך עם כאב', value: 1 },
            { text: 'הכאב מקשה אך נסיעות מעל 2 שעות אפשריות', value: 2 },
            { text: 'הכאב מגביל לנסיעות עד שעה', value: 3 },
            { text: 'הכאב מגביל לנסיעות קצרות הכרחיות', value: 4 },
            { text: 'הכאב מונע ממני לנסוע בכלל', value: 5 }
          ]
        }
      ]
    },
    {
      id: 'quickdash',
      name: 'QuickDASH',
      nameHe: 'דאש מקוצר - גף עליון',
      icon: '💪',
      color: 'cyan',
      region: 'גף עליון (כתף/מרפק/יד)',
      maxScore: 110, // 11 שאלות × 10 ((sum/11) - 1) × 25 = ציון 0-100
      scoreType: 'dash',
      description: 'גרסה מקוצרת של DASH (Disabilities of Arm, Shoulder and Hand). 11 שאלות שמעריכות תפקוד הגף העליון.',
      reference: 'Beaton et al., 2005',
      interpretation: [
        { range: '0-10', label: 'תפקוד תקין כמעט', color: 'emerald' },
        { range: '11-25', label: 'מוגבלות קלה', color: 'green' },
        { range: '26-50', label: 'מוגבלות בינונית', color: 'amber' },
        { range: '51-75', label: 'מוגבלות חמורה', color: 'orange' },
        { range: '76-100', label: 'מוגבלות קיצונית', color: 'red' }
      ],
      mcid: '8-15 נקודות (MCID)',
      questions: [
        {
          q: 'לפתוח צנצנת חדשה הדוקה',
          options: [
            { text: 'ללא קושי', value: 1 },
            { text: 'קושי קל', value: 2 },
            { text: 'קושי בינוני', value: 3 },
            { text: 'קושי חזק', value: 4 },
            { text: 'לא מסוגל', value: 5 }
          ]
        },
        {
          q: 'לעשות עבודות בית כבדות (שטיפת רצפות, ניקוי קירות)',
          options: [
            { text: 'ללא קושי', value: 1 },
            { text: 'קושי קל', value: 2 },
            { text: 'קושי בינוני', value: 3 },
            { text: 'קושי חזק', value: 4 },
            { text: 'לא מסוגל', value: 5 }
          ]
        },
        {
          q: 'לסחוב סל קניות / תיק כבד',
          options: [
            { text: 'ללא קושי', value: 1 },
            { text: 'קושי קל', value: 2 },
            { text: 'קושי בינוני', value: 3 },
            { text: 'קושי חזק', value: 4 },
            { text: 'לא מסוגל', value: 5 }
          ]
        },
        {
          q: 'לשטוף את הגב',
          options: [
            { text: 'ללא קושי', value: 1 },
            { text: 'קושי קל', value: 2 },
            { text: 'קושי בינוני', value: 3 },
            { text: 'קושי חזק', value: 4 },
            { text: 'לא מסוגל', value: 5 }
          ]
        },
        {
          q: 'להשתמש בסכין לחתוך אוכל',
          options: [
            { text: 'ללא קושי', value: 1 },
            { text: 'קושי קל', value: 2 },
            { text: 'קושי בינוני', value: 3 },
            { text: 'קושי חזק', value: 4 },
            { text: 'לא מסוגל', value: 5 }
          ]
        },
        {
          q: 'פעילויות פנאי שמערבות מאמץ של היד (ספורט, נגינה, גינון)',
          options: [
            { text: 'ללא קושי', value: 1 },
            { text: 'קושי קל', value: 2 },
            { text: 'קושי בינוני', value: 3 },
            { text: 'קושי חזק', value: 4 },
            { text: 'לא מסוגל', value: 5 }
          ]
        },
        {
          q: 'הבעיה ביד פגעה בפעילויות חברתיות עם משפחה/חברים',
          options: [
            { text: 'בכלל לא', value: 1 },
            { text: 'מעט', value: 2 },
            { text: 'בינוני', value: 3 },
            { text: 'הרבה', value: 4 },
            { text: 'מאוד הרבה', value: 5 }
          ]
        },
        {
          q: 'הבעיה ביד הגבילה את העבודה / הפעילויות היומיומיות',
          options: [
            { text: 'בכלל לא', value: 1 },
            { text: 'מעט', value: 2 },
            { text: 'בינוני', value: 3 },
            { text: 'הרבה', value: 4 },
            { text: 'באופן מלא', value: 5 }
          ]
        },
        {
          q: 'עוצמת הכאב',
          options: [
            { text: 'אין כאב', value: 1 },
            { text: 'קל', value: 2 },
            { text: 'בינוני', value: 3 },
            { text: 'חזק', value: 4 },
            { text: 'חזק מאוד', value: 5 }
          ]
        },
        {
          q: 'נימול / חולשה ביד',
          options: [
            { text: 'אין', value: 1 },
            { text: 'קל', value: 2 },
            { text: 'בינוני', value: 3 },
            { text: 'חזק', value: 4 },
            { text: 'חזק מאוד', value: 5 }
          ]
        },
        {
          q: 'קושי לישון בגלל הכאב ביד',
          options: [
            { text: 'בכלל לא', value: 1 },
            { text: 'מעט', value: 2 },
            { text: 'בינוני', value: 3 },
            { text: 'הרבה', value: 4 },
            { text: 'מונע שינה לחלוטין', value: 5 }
          ]
        }
      ]
    },
    {
      id: 'koos-ps',
      name: 'KOOS-PS (Knee)',
      nameHe: 'KOOS תפקודי - ברך',
      icon: '🦴',
      color: 'emerald',
      region: 'ברך',
      maxScore: 28, // 7 שאלות × 4
      scoreType: 'koos-ps',
      description: 'גרסה מקוצרת של KOOS - 7 שאלות לתפקוד פיזי. הציון 0 = אין מוגבלות, 100 = מוגבלות קיצונית.',
      reference: 'Perruccio et al., 2008',
      interpretation: [
        { range: '0-20', label: 'תפקוד מצוין', color: 'emerald' },
        { range: '21-40', label: 'מוגבלות קלה', color: 'green' },
        { range: '41-60', label: 'מוגבלות בינונית', color: 'amber' },
        { range: '61-80', label: 'מוגבלות חמורה', color: 'orange' },
        { range: '81-100', label: 'מוגבלות קיצונית', color: 'red' }
      ],
      mcid: '20 נקודות (MCID לאחר ניתוח)',
      questions: [
        {
          q: 'עליה במדרגות',
          options: [
            { text: 'ללא קושי', value: 0 },
            { text: 'קושי קל', value: 1 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 3 },
            { text: 'קושי קיצוני / לא מסוגל', value: 4 }
          ]
        },
        {
          q: 'ירידה במדרגות',
          options: [
            { text: 'ללא קושי', value: 0 },
            { text: 'קושי קל', value: 1 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 3 },
            { text: 'קושי קיצוני / לא מסוגל', value: 4 }
          ]
        },
        {
          q: 'קימה מישיבה',
          options: [
            { text: 'ללא קושי', value: 0 },
            { text: 'קושי קל', value: 1 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 3 },
            { text: 'קושי קיצוני / לא מסוגל', value: 4 }
          ]
        },
        {
          q: 'התכופפות',
          options: [
            { text: 'ללא קושי', value: 0 },
            { text: 'קושי קל', value: 1 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 3 },
            { text: 'קושי קיצוני / לא מסוגל', value: 4 }
          ]
        },
        {
          q: 'סיבוב/פיתול תוך עומס על הברך',
          options: [
            { text: 'ללא קושי', value: 0 },
            { text: 'קושי קל', value: 1 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 3 },
            { text: 'קושי קיצוני / לא מסוגל', value: 4 }
          ]
        },
        {
          q: 'כריעה',
          options: [
            { text: 'ללא קושי', value: 0 },
            { text: 'קושי קל', value: 1 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 3 },
            { text: 'קושי קיצוני / לא מסוגל', value: 4 }
          ]
        },
        {
          q: 'ריצה',
          options: [
            { text: 'ללא קושי', value: 0 },
            { text: 'קושי קל', value: 1 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 3 },
            { text: 'קושי קיצוני / לא מסוגל', value: 4 }
          ]
        }
      ]
    },
    {
      id: 'hoos-ps',
      name: 'HOOS-PS (Hip)',
      nameHe: 'HOOS תפקודי - ירך',
      icon: '🦵',
      color: 'orange',
      region: 'ירך',
      maxScore: 20, // 5 שאלות × 4
      scoreType: 'hoos-ps',
      description: 'גרסה מקוצרת של HOOS - 5 שאלות לתפקוד פיזי של הירך. הציון 0 = אין מוגבלות, 100 = מוגבלות קיצונית.',
      reference: 'Davis et al., 2008',
      interpretation: [
        { range: '0-20', label: 'תפקוד מצוין', color: 'emerald' },
        { range: '21-40', label: 'מוגבלות קלה', color: 'green' },
        { range: '41-60', label: 'מוגבלות בינונית', color: 'amber' },
        { range: '61-80', label: 'מוגבלות חמורה', color: 'orange' },
        { range: '81-100', label: 'מוגבלות קיצונית', color: 'red' }
      ],
      mcid: '14-23 נקודות',
      questions: [
        {
          q: 'ירידה במדרגות',
          options: [
            { text: 'ללא קושי', value: 0 },
            { text: 'קושי קל', value: 1 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 3 },
            { text: 'קושי קיצוני / לא מסוגל', value: 4 }
          ]
        },
        {
          q: 'קימה מישיבה',
          options: [
            { text: 'ללא קושי', value: 0 },
            { text: 'קושי קל', value: 1 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 3 },
            { text: 'קושי קיצוני / לא מסוגל', value: 4 }
          ]
        },
        {
          q: 'התכופפות לרצפה',
          options: [
            { text: 'ללא קושי', value: 0 },
            { text: 'קושי קל', value: 1 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 3 },
            { text: 'קושי קיצוני / לא מסוגל', value: 4 }
          ]
        },
        {
          q: 'הליכה על משטח לא ישר',
          options: [
            { text: 'ללא קושי', value: 0 },
            { text: 'קושי קל', value: 1 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 3 },
            { text: 'קושי קיצוני / לא מסוגל', value: 4 }
          ]
        },
        {
          q: 'ביצוע עבודות בית כבדות',
          options: [
            { text: 'ללא קושי', value: 0 },
            { text: 'קושי קל', value: 1 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 3 },
            { text: 'קושי קיצוני / לא מסוגל', value: 4 }
          ]
        }
      ]
    },
    {
      id: 'faam-adl',
      name: 'FAAM (Foot & Ankle - ADL)',
      nameHe: 'FAAM קרסול וכף רגל',
      icon: '🦶',
      color: 'purple',
      region: 'קרסול וכף רגל',
      maxScore: 84, // 21 שאלות × 4
      scoreType: 'faam',
      description: 'Foot and Ankle Ability Measure - תת-סולם פעילויות יומיות (21 פריטים). 100% = ללא מוגבלות, 0% = מוגבלות מלאה.',
      reference: 'Martin et al., 2005',
      interpretation: [
        { range: '90-100%', label: 'תפקוד מצוין', color: 'emerald' },
        { range: '75-89%', label: 'תפקוד טוב', color: 'green' },
        { range: '50-74%', label: 'מוגבלות בינונית', color: 'amber' },
        { range: '25-49%', label: 'מוגבלות חמורה', color: 'orange' },
        { range: '0-24%', label: 'מוגבלות קיצונית', color: 'red' }
      ],
      mcid: '8 נקודות (MCID)',
      questions: [
        {
          q: 'עמידה',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'הליכה על משטח ישר',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'הליכה על משטח ישר ללא נעליים',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'עליה בעקבים',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'הליכה במעלה גבעה',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'הליכה במורד גבעה',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'עליה במדרגות',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'ירידה במדרגות',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'הליכה על משטח לא ישר',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'צעידה לאחור',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'התכופפות',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'כריעה',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'הליכה על קצות אצבעות',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'התחלת הליכה',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'הליכה של 5 דקות או פחות',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'הליכה של 10-15 דקות',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'הליכה של 15+ דקות',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'אחריות בית (אבק, רחיצה, וכו\')',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'פעילות יומיומית',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'טיפול עצמי',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        },
        {
          q: 'עבודה קלה-בינונית (עמידה, הליכה)',
          options: [
            { text: 'ללא קושי', value: 4 },
            { text: 'קושי קל', value: 3 },
            { text: 'קושי בינוני', value: 2 },
            { text: 'קושי חזק', value: 1 },
            { text: 'לא מסוגל', value: 0 }
          ]
        }
      ]
    },
    {
      id: 'vas',
      name: 'VAS / NRS - מד כאב',
      nameHe: 'מד כאב נומרי',
      icon: '🌡️',
      color: 'red',
      region: 'כללי - כל אזור',
      maxScore: 10,
      scoreType: 'vas',
      description: 'Visual Analog Scale / Numeric Rating Scale - הכלי הבסיסי והנפוץ ביותר למדידת כאב. 0 = ללא כאב, 10 = כאב הגרוע ביותר שניתן לדמיין.',
      reference: 'Hawker et al. 2011',
      interpretation: [
        { range: '0', label: 'ללא כאב', color: 'emerald' },
        { range: '1-3', label: 'כאב קל', color: 'green' },
        { range: '4-6', label: 'כאב בינוני', color: 'amber' },
        { range: '7-9', label: 'כאב חזק', color: 'orange' },
        { range: '10', label: 'הכאב הגרוע ביותר', color: 'red' }
      ],
      mcid: '2 נקודות (MCID)',
      questions: [
        {
          q: 'דרג את הכאב הנוכחי שלך',
          options: [
            { text: '0 - ללא כאב', value: 0 },
            { text: '1 - כאב קל מאוד', value: 1 },
            { text: '2 - כאב קל', value: 2 },
            { text: '3 - כאב קל-בינוני', value: 3 },
            { text: '4 - כאב בינוני', value: 4 },
            { text: '5 - כאב בינוני', value: 5 },
            { text: '6 - כאב בינוני-חזק', value: 6 },
            { text: '7 - כאב חזק', value: 7 },
            { text: '8 - כאב חזק מאוד', value: 8 },
            { text: '9 - כאב חמור מאוד', value: 9 },
            { text: '10 - הכאב הגרוע ביותר שאפשר לדמיין', value: 10 }
          ]
        }
      ]
    },
    {
      id: 'psfs',
      name: 'PSFS - Patient-Specific Functional Scale',
      nameHe: 'סולם תפקודי ספציפי למטופל',
      icon: '🎯',
      color: 'cyan',
      region: 'כללי - כל אזור',
      maxScore: 30,
      scoreType: 'psfs',
      description: 'שאלון ייחודי - המטופל בוחר 3-5 פעילויות שקשה לו לבצע, ומדרג כל אחת 0-10. מצוין למעקב אישי.',
      reference: 'Stratford et al. 1995',
      interpretation: [
        { range: '0-3', label: 'תפקוד נמוך מאוד', color: 'red' },
        { range: '4-5', label: 'תפקוד נמוך', color: 'orange' },
        { range: '6-7', label: 'תפקוד בינוני', color: 'amber' },
        { range: '8-9', label: 'תפקוד טוב', color: 'green' },
        { range: '10', label: 'תפקוד מלא', color: 'emerald' }
      ],
      mcid: '2 נקודות (MCID)',
      questions: [
        {
          q: 'פעילות 1 - דרג את היכולת שלך לבצע אותה',
          options: [
            { text: '0 - לא יכול בכלל', value: 0 },
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5 - חלקית', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
            { text: '8', value: 8 },
            { text: '9', value: 9 },
            { text: '10 - יכול לבצע ללא בעיה', value: 10 }
          ]
        },
        {
          q: 'פעילות 2 - דרג את היכולת שלך לבצע אותה',
          options: [
            { text: '0 - לא יכול בכלל', value: 0 },
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5 - חלקית', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
            { text: '8', value: 8 },
            { text: '9', value: 9 },
            { text: '10 - יכול לבצע ללא בעיה', value: 10 }
          ]
        },
        {
          q: 'פעילות 3 - דרג את היכולת שלך לבצע אותה',
          options: [
            { text: '0 - לא יכול בכלל', value: 0 },
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5 - חלקית', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
            { text: '8', value: 8 },
            { text: '9', value: 9 },
            { text: '10 - יכול לבצע ללא בעיה', value: 10 }
          ]
        }
      ]
    },
    {
      id: 'groc',
      name: 'GROC - Global Rating of Change',
      nameHe: 'דירוג כולל של שינוי',
      icon: '📈',
      color: 'green',
      region: 'מעקב לאחר טיפול',
      maxScore: 7,
      scoreType: 'groc',
      description: 'שאלון פשוט אחד - "כמה השתנת מאז תחילת הטיפול?". 15 רמות מ-(-7) "הרבה יותר גרוע" עד (+7) "הרבה יותר טוב".',
      reference: 'Jaeschke et al. 1989',
      interpretation: [
        { range: '-7 to -4', label: 'החמרה משמעותית', color: 'red' },
        { range: '-3 to -1', label: 'החמרה קלה', color: 'orange' },
        { range: '0', label: 'ללא שינוי', color: 'amber' },
        { range: '1-3', label: 'שיפור קל', color: 'green' },
        { range: '4-7', label: 'שיפור משמעותי', color: 'emerald' }
      ],
      mcid: '+3 או יותר = שיפור משמעותי קלינית',
      questions: [
        {
          q: 'מאז תחילת הטיפול, איך אתה מרגיש?',
          options: [
            { text: '+7 - הרבה הרבה יותר טוב', value: 7 },
            { text: '+6 - הרבה יותר טוב', value: 6 },
            { text: '+5 - יותר טוב', value: 5 },
            { text: '+4 - קצת יותר טוב', value: 4 },
            { text: '+3 - מעט יותר טוב', value: 3 },
            { text: '+2 - מעט-מעט יותר טוב', value: 2 },
            { text: '+1 - כמעט אותו דבר, אולי קצת יותר טוב', value: 1 },
            { text: '0 - אותו דבר בדיוק', value: 0 },
            { text: '-1 - כמעט אותו דבר, אולי קצת יותר גרוע', value: -1 },
            { text: '-2 - מעט-מעט יותר גרוע', value: -2 },
            { text: '-3 - מעט יותר גרוע', value: -3 },
            { text: '-4 - קצת יותר גרוע', value: -4 },
            { text: '-5 - יותר גרוע', value: -5 },
            { text: '-6 - הרבה יותר גרוע', value: -6 },
            { text: '-7 - הרבה הרבה יותר גרוע', value: -7 }
          ]
        }
      ]
    },
    {
      id: 'fabq',
      name: 'FABQ - Fear-Avoidance Beliefs (Work)',
      nameHe: 'אמונות פחד-הימנעות (עבודה)',
      icon: '🧠',
      color: 'purple',
      region: 'גב מותני / כרוני',
      maxScore: 42,
      scoreType: 'fabq',
      description: 'תת-סולם העבודה של FABQ - מודד אמונות שכאב גורם לעבודה. ציון >19 = ניבוי גרוע יותר, חיוני לזיהוי הימנעות.',
      reference: 'Waddell et al. 1993',
      interpretation: [
        { range: '0-9', label: 'אמונות פחד נמוכות', color: 'emerald' },
        { range: '10-19', label: 'אמונות פחד בינוניות', color: 'amber' },
        { range: '20-29', label: 'אמונות פחד גבוהות', color: 'orange' },
        { range: '30-42', label: 'אמונות פחד גבוהות מאוד', color: 'red' }
      ],
      mcid: 'ציון >19 = פרוגנוזה גרועה - שילוב CBT',
      questions: [
        {
          q: 'הכאב שלי נגרם מהעבודה',
          options: [
            { text: '0 - בכלל לא מסכים', value: 0 },
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3 - לא בטוח', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6 - מסכים לחלוטין', value: 6 }
          ]
        },
        {
          q: 'העבודה החמירה את הכאב שלי',
          options: [
            { text: '0 - בכלל לא מסכים', value: 0 },
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3 - לא בטוח', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6 - מסכים לחלוטין', value: 6 }
          ]
        },
        {
          q: 'אסור לי לעשות עבודה רגילה עם הכאב הזה',
          options: [
            { text: '0 - בכלל לא מסכים', value: 0 },
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3 - לא בטוח', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6 - מסכים לחלוטין', value: 6 }
          ]
        },
        {
          q: 'איני יכול לעשות את העבודה הרגילה עד שכאבי יחלוף',
          options: [
            { text: '0 - בכלל לא מסכים', value: 0 },
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3 - לא בטוח', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6 - מסכים לחלוטין', value: 6 }
          ]
        },
        {
          q: 'אינני חושב שאחזור לעבודה הרגילה תוך 3 חודשים',
          options: [
            { text: '0 - בכלל לא מסכים', value: 0 },
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3 - לא בטוח', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6 - מסכים לחלוטין', value: 6 }
          ]
        },
        {
          q: 'אינני חושב שאני יכול לחזור לעבודה הרגילה אי פעם',
          options: [
            { text: '0 - בכלל לא מסכים', value: 0 },
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3 - לא בטוח', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6 - מסכים לחלוטין', value: 6 }
          ]
        },
        {
          q: 'אם אעבוד שוב, אני אפגע בעצמי',
          options: [
            { text: '0 - בכלל לא מסכים', value: 0 },
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3 - לא בטוח', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6 - מסכים לחלוטין', value: 6 }
          ]
        }
      ]
    },
    {
      id: 'tsk',
      name: 'TSK-11 - Tampa Scale of Kinesiophobia',
      nameHe: 'סולם פחד מתנועה',
      icon: '😰',
      color: 'orange',
      region: 'כרוני / כל אזור',
      maxScore: 44,
      scoreType: 'tsk',
      description: 'שאלון לזיהוי פחד מתנועה (Kinesiophobia) - גורם פסיכוסוציאלי משמעותי לכאב כרוני. ציון >37 מצביע על פחד גבוה.',
      reference: 'Woby et al. 2005 (TSK-11)',
      interpretation: [
        { range: '11-22', label: 'ללא פחד מתנועה', color: 'emerald' },
        { range: '23-30', label: 'פחד נמוך', color: 'green' },
        { range: '31-36', label: 'פחד בינוני', color: 'amber' },
        { range: '37-44', label: 'פחד גבוה - דורש התערבות', color: 'red' }
      ],
      mcid: 'ציון >37 = פחד מתנועה משמעותי',
      questions: [
        {
          q: 'אני חושש שאוכל לפצוע את עצמי אם אעשה פעילות גופנית',
          options: [
            { text: '1 - לא מסכים בכלל', value: 1 },
            { text: '2 - לא מסכים', value: 2 },
            { text: '3 - מסכים', value: 3 },
            { text: '4 - מסכים מאוד', value: 4 }
          ]
        },
        {
          q: 'אם הייתי מנסה להתגבר על הכאב, היה לי יותר כאב',
          options: [
            { text: '1 - לא מסכים בכלל', value: 1 },
            { text: '2 - לא מסכים', value: 2 },
            { text: '3 - מסכים', value: 3 },
            { text: '4 - מסכים מאוד', value: 4 }
          ]
        },
        {
          q: 'גופי מאותת לי שיש משהו שגוי באופן רציני',
          options: [
            { text: '1 - לא מסכים בכלל', value: 1 },
            { text: '2 - לא מסכים', value: 2 },
            { text: '3 - מסכים', value: 3 },
            { text: '4 - מסכים מאוד', value: 4 }
          ]
        },
        {
          q: 'אנשים לא משלימים מספיק עם חומרת מצב הכאב שלי',
          options: [
            { text: '1 - לא מסכים בכלל', value: 1 },
            { text: '2 - לא מסכים', value: 2 },
            { text: '3 - מסכים', value: 3 },
            { text: '4 - מסכים מאוד', value: 4 }
          ]
        },
        {
          q: 'הפציעה שלי הכניסה את גופי בסכנה לכל החיים',
          options: [
            { text: '1 - לא מסכים בכלל', value: 1 },
            { text: '2 - לא מסכים', value: 2 },
            { text: '3 - מסכים', value: 3 },
            { text: '4 - מסכים מאוד', value: 4 }
          ]
        },
        {
          q: 'כאב פירושו שפצעתי את עצמי',
          options: [
            { text: '1 - לא מסכים בכלל', value: 1 },
            { text: '2 - לא מסכים', value: 2 },
            { text: '3 - מסכים', value: 3 },
            { text: '4 - מסכים מאוד', value: 4 }
          ]
        },
        {
          q: 'אסור לי שכאב יחמיר על ידי פעילות גופנית',
          options: [
            { text: '1 - לא מסכים בכלל', value: 1 },
            { text: '2 - לא מסכים', value: 2 },
            { text: '3 - מסכים', value: 3 },
            { text: '4 - מסכים מאוד', value: 4 }
          ]
        },
        {
          q: 'אסור לי לעשות פעילויות שכואבות',
          options: [
            { text: '1 - לא מסכים בכלל', value: 1 },
            { text: '2 - לא מסכים', value: 2 },
            { text: '3 - מסכים', value: 3 },
            { text: '4 - מסכים מאוד', value: 4 }
          ]
        },
        {
          q: 'אני לא יכול לעשות את כל הדברים שאנשים נורמליים עושים, כי קל מאוד שאפצע את עצמי',
          options: [
            { text: '1 - לא מסכים בכלל', value: 1 },
            { text: '2 - לא מסכים', value: 2 },
            { text: '3 - מסכים', value: 3 },
            { text: '4 - מסכים מאוד', value: 4 }
          ]
        },
        {
          q: 'אף אחד לא צריך לעשות פעילות גופנית כשהוא בכאב',
          options: [
            { text: '1 - לא מסכים בכלל', value: 1 },
            { text: '2 - לא מסכים', value: 2 },
            { text: '3 - מסכים', value: 3 },
            { text: '4 - מסכים מאוד', value: 4 }
          ]
        },
        {
          q: 'אני לא יכול להגיד אם הפעילות שאני עושה תזיק לי',
          options: [
            { text: '1 - לא מסכים בכלל', value: 1 },
            { text: '2 - לא מסכים', value: 2 },
            { text: '3 - מסכים', value: 3 },
            { text: '4 - מסכים מאוד', value: 4 }
          ]
        }
      ]
    }
  ];

  // ========== חישוב ציון של Outcome Measure ==========
  const calculateOutcomeScore = (measure) => {
    const answers = outcomeAnswers[measure.id] || {};
    const answeredQuestions = Object.keys(answers).length;
    const totalQuestions = measure.questions.length;

    if (answeredQuestions === 0) return null;

    const sum = Object.values(answers).reduce((a, b) => a + b, 0);

    let displayScore, percentScore, displayUnit;

    if (measure.scoreType === 'percent') {
      // NDI / ODI: סכום × 2 = אחוז
      displayScore = sum;
      percentScore = (sum / measure.maxScore) * 100;
      displayUnit = `${sum}/${measure.maxScore}`;
    } else if (measure.scoreType === 'dash') {
      // QuickDASH: ((sum/n) - 1) × 25
      const avg = sum / answeredQuestions;
      displayScore = Math.round((avg - 1) * 25);
      percentScore = displayScore;
      displayUnit = `${displayScore}/100`;
    } else if (measure.scoreType === 'koos-ps' || measure.scoreType === 'hoos-ps') {
      // KOOS-PS / HOOS-PS: ציון מוערך 0-100
      // נשתמש בהערכה ליניארית פשוטה
      displayScore = Math.round((sum / measure.maxScore) * 100);
      percentScore = displayScore;
      displayUnit = `${displayScore}/100`;
    } else if (measure.scoreType === 'faam') {
      // FAAM: ((sum / (n*4)) × 100). high = good
      const maxPossible = answeredQuestions * 4;
      const percentFunction = (sum / maxPossible) * 100;
      displayScore = Math.round(percentFunction);
      percentScore = 100 - displayScore; // הופכים לתפיסת "מוגבלות"
      displayUnit = `${displayScore}%`;
    } else if (measure.scoreType === 'vas') {
      // VAS / NRS: ציון 0-10 ישיר
      displayScore = sum;
      percentScore = (sum / 10) * 100;
      displayUnit = `${sum}/10`;
    } else if (measure.scoreType === 'psfs') {
      // PSFS: ממוצע של 3 פעילויות, 0-10. גבוה = טוב
      const avg = sum / answeredQuestions;
      displayScore = avg.toFixed(1);
      percentScore = 100 - (avg / 10) * 100; // הופכים לתפיסת "מוגבלות"
      displayUnit = `${avg.toFixed(1)}/10`;
    } else if (measure.scoreType === 'groc') {
      // GROC: ציון יחיד -7 עד +7
      displayScore = sum;
      // נורמליזציה: -7 = 100% גרוע, +7 = 100% טוב, 0 = ללא שינוי
      percentScore = sum >= 0 ? 0 : Math.abs(sum) * (100/7);
      displayUnit = sum > 0 ? `+${sum}` : `${sum}`;
    } else if (measure.scoreType === 'fabq') {
      // FABQ-W: סכום ישיר 0-42
      displayScore = sum;
      percentScore = (sum / measure.maxScore) * 100;
      displayUnit = `${sum}/${measure.maxScore}`;
    } else if (measure.scoreType === 'tsk') {
      // TSK-11: סכום ישיר 11-44
      displayScore = sum;
      percentScore = ((sum - 11) / (measure.maxScore - 11)) * 100;
      displayUnit = `${sum}/${measure.maxScore}`;
    }

    return {
      score: displayScore,
      percent: percentScore,
      unit: displayUnit,
      answered: answeredQuestions,
      total: totalQuestions,
      isComplete: answeredQuestions === totalQuestions
    };
  };

  const getOutcomeInterpretation = (measure, scoreResult) => {
    if (!scoreResult || !scoreResult.isComplete) return null;
    const percent = scoreResult.percent;

    // FAAM הוא הפוך - אחוז נמוך יותר = טוב יותר
    if (measure.scoreType === 'faam') {
      const functionPercent = scoreResult.score; // אחוז תפקוד
      if (functionPercent >= 90) return measure.interpretation[0];
      if (functionPercent >= 75) return measure.interpretation[1];
      if (functionPercent >= 50) return measure.interpretation[2];
      if (functionPercent >= 25) return measure.interpretation[3];
      return measure.interpretation[4];
    }

    // VAS / NRS - לפי ציון ישיר
    if (measure.scoreType === 'vas') {
      const s = scoreResult.score;
      if (s === 0) return measure.interpretation[0];
      if (s <= 3) return measure.interpretation[1];
      if (s <= 6) return measure.interpretation[2];
      if (s <= 9) return measure.interpretation[3];
      return measure.interpretation[4];
    }

    // PSFS - לפי ממוצע
    if (measure.scoreType === 'psfs') {
      const avg = parseFloat(scoreResult.score);
      if (avg <= 3) return measure.interpretation[0];
      if (avg <= 5) return measure.interpretation[1];
      if (avg <= 7) return measure.interpretation[2];
      if (avg <= 9) return measure.interpretation[3];
      return measure.interpretation[4];
    }

    // GROC - לפי ציון
    if (measure.scoreType === 'groc') {
      const s = scoreResult.score;
      if (s <= -4) return measure.interpretation[0];
      if (s <= -1) return measure.interpretation[1];
      if (s === 0) return measure.interpretation[2];
      if (s <= 3) return measure.interpretation[3];
      return measure.interpretation[4];
    }

    // FABQ - 4 רמות
    if (measure.scoreType === 'fabq') {
      const s = scoreResult.score;
      if (s <= 9) return measure.interpretation[0];
      if (s <= 19) return measure.interpretation[1];
      if (s <= 29) return measure.interpretation[2];
      return measure.interpretation[3];
    }

    // TSK-11 - 4 רמות
    if (measure.scoreType === 'tsk') {
      const s = scoreResult.score;
      if (s <= 22) return measure.interpretation[0];
      if (s <= 30) return measure.interpretation[1];
      if (s <= 36) return measure.interpretation[2];
      return measure.interpretation[3];
    }

    // שאר השאלונים
    if (percent <= 20) return measure.interpretation[0];
    if (percent <= 40) return measure.interpretation[1];
    if (percent <= 60) return measure.interpretation[2];
    if (percent <= 80) return measure.interpretation[3];
    return measure.interpretation[4];
  };

  // ========== בדיקה נוירולוגית מובנית ==========
  const neuroExamSections = [
    {
      id: 'myotomes',
      name: 'Myotomes - בדיקת כוח',
      nameEn: 'Myotomes',
      icon: '💪',
      color: 'blue',
      description: 'בדיקת כוח שרירים לפי שורשי עצב. דרגות 0-5 (Medical Research Council Scale).',
      reference: 'MRC Scale',
      grading: [
        { grade: '5', label: 'תקין', description: 'כוח מלא כנגד התנגדות מקסימלית', color: 'emerald' },
        { grade: '4+', label: 'כמעט תקין', description: 'כוח כמעט מלא, ירידה מינורית', color: 'green' },
        { grade: '4', label: 'טוב', description: 'תנועה מלאה כנגד התנגדות בינונית', color: 'lime' },
        { grade: '4-', label: 'בינוני-טוב', description: 'תנועה מלאה כנגד התנגדות חלשה-בינונית', color: 'yellow' },
        { grade: '3', label: 'בינוני', description: 'תנועה מלאה כנגד גרביטציה בלבד', color: 'amber' },
        { grade: '2', label: 'חלש', description: 'תנועה מלאה ללא גרביטציה', color: 'orange' },
        { grade: '1', label: 'התכווצות', description: 'התכווצות נראית/מורגשת ללא תנועה', color: 'red' },
        { grade: '0', label: 'משותק', description: 'אין התכווצות', color: 'rose' }
      ],
      items: [
        // צוואר וגף עליון
        { root: 'C5', motion: 'אבדוקציה של הכתף', motionEn: 'Shoulder Abduction', muscle: 'Deltoid + Supraspinatus', test: 'הזרוע באבדוקציה 90°. הבודק לוחץ כלפי מטה.', region: 'upper' },
        { root: 'C5-C6', motion: 'פלקסיה של המרפק', motionEn: 'Elbow Flexion', muscle: 'Biceps Brachii', test: 'מרפק 90°, אמה בסופינציה. הבודק מנסה ליישר את המרפק.', region: 'upper' },
        { root: 'C6', motion: 'אקסטנציה של שורש כף יד', motionEn: 'Wrist Extension', muscle: 'ECRL/ECRB', test: 'אקסטנציה של שורש כף היד. הבודק לוחץ כלפי מטה.', region: 'upper' },
        { root: 'C7', motion: 'אקסטנציה של המרפק', motionEn: 'Elbow Extension', muscle: 'Triceps', test: 'מרפק 90°. הבודק מנסה לכופף את המרפק.', region: 'upper' },
        { root: 'C7', motion: 'פלקסיה של שורש כף יד', motionEn: 'Wrist Flexion', muscle: 'FCR/FCU', test: 'פלקסיה של שורש כף היד. הבודק לוחץ כלפי מעלה.', region: 'upper' },
        { root: 'C8', motion: 'פלקסיה של אצבעות', motionEn: 'Finger Flexion', muscle: 'FDP/FDS', test: 'אגרוף קמוץ. הבודק מנסה ליישר את האצבעות.', region: 'upper' },
        { root: 'T1', motion: 'אבדוקציה של אצבעות', motionEn: 'Finger Abduction', muscle: 'Interossei', test: 'אצבעות פרושות. הבודק מנסה לחבר אותן.', region: 'upper' },
        // גף תחתון
        { root: 'L2', motion: 'פלקסיה של הירך', motionEn: 'Hip Flexion', muscle: 'Iliopsoas', test: 'בישיבה - הרמת הברך. הבודק לוחץ כלפי מטה.', region: 'lower' },
        { root: 'L3', motion: 'אקסטנציה של הברך', motionEn: 'Knee Extension', muscle: 'Quadriceps', test: 'בישיבה - יישור הרגל. הבודק מנסה לכופף.', region: 'lower' },
        { root: 'L4', motion: 'דורסיפלקסיה של הקרסול', motionEn: 'Ankle Dorsiflexion', muscle: 'Tibialis Anterior', test: 'משיכת הבוהן והרגל למעלה. הבודק לוחץ כלפי מטה.', region: 'lower' },
        { root: 'L5', motion: 'אקסטנציה של הבוהן הגדולה', motionEn: 'Great Toe Extension', muscle: 'EHL', test: 'משיכת הבוהן הגדולה כלפי מעלה כנגד התנגדות.', region: 'lower' },
        { root: 'S1', motion: 'פלנטרפלקסיה של הקרסול', motionEn: 'Ankle Plantarflexion', muscle: 'Gastrocnemius/Soleus', test: 'דחיפת הרגל כלפי מטה / עמידה על קצות אצבעות.', region: 'lower' },
        { root: 'S2', motion: 'פלקסיה של הברך', motionEn: 'Knee Flexion', muscle: 'Hamstrings', test: 'בשכיבה על הבטן - כיפוף הברך. הבודק מנסה ליישר.', region: 'lower' }
      ]
    },
    {
      id: 'dermatomes',
      name: 'Dermatomes - תחושה',
      nameEn: 'Dermatomes',
      icon: '🌐',
      color: 'purple',
      description: 'בדיקת תחושה לפי אזורי עצבוב סנסוריים של שורשי עצב. כולל Light Touch ו-Pinprick.',
      reference: 'Keegan & Garrett 1948',
      grading: [
        { grade: 'תקינה', label: 'תקינה', description: 'תחושה זהה לצד הנגדי', color: 'emerald' },
        { grade: 'מופחתת', label: 'היפוסטזיה', description: 'תחושה מופחתת', color: 'amber' },
        { grade: 'נעדרת', label: 'אנסטזיה', description: 'אין תחושה', color: 'red' },
        { grade: 'מוגברת', label: 'היפראסטזיה', description: 'תחושה מוגזמת / מטרידה', color: 'orange' }
      ],
      items: [
        // גף עליון
        { root: 'C2', area: 'עורף תחתון', areaEn: 'Posterior occipital', testSite: 'בסיס הגולגולת מאחור', region: 'upper' },
        { root: 'C3', area: 'צוואר עליון - לטרלי', areaEn: 'Lateral upper neck', testSite: 'צוואר לטרלי בגובה Hyoid', region: 'upper' },
        { root: 'C4', area: 'גב עליון של הכתף', areaEn: 'Top of shoulder', testSite: 'מעל ה-AC joint', region: 'upper' },
        { root: 'C5', area: 'דלתואיד לטרלי', areaEn: 'Lateral deltoid', testSite: 'אזור Regimental Badge', region: 'upper' },
        { root: 'C6', area: 'אגודל ואצבע 2', areaEn: 'Thumb & index finger', testSite: 'קצה האגודל / אצבע 2', region: 'upper' },
        { root: 'C7', area: 'אצבע 3', areaEn: 'Middle finger', testSite: 'קצה אצבע 3 (אמצע)', region: 'upper' },
        { root: 'C8', area: 'אצבע 4-5', areaEn: 'Ring & little finger', testSite: 'קצה אצבע הזרת', region: 'upper' },
        { root: 'T1', area: 'אמה מדיאלית', areaEn: 'Medial forearm', testSite: 'אזור Medial epicondyle', region: 'upper' },
        // עמוד שדרה ובטן
        { root: 'T4', area: 'פטמות', areaEn: 'Nipple line', testSite: 'גובה הפטמות', region: 'trunk' },
        { root: 'T10', area: 'טבור', areaEn: 'Umbilicus', testSite: 'גובה הטבור', region: 'trunk' },
        // גף תחתון
        { root: 'L1', area: 'מפשעה', areaEn: 'Inguinal area', testSite: 'מתחת לליגמנט אינגוינלי', region: 'lower' },
        { root: 'L2', area: 'ירך עליונה קדמית', areaEn: 'Upper anterior thigh', testSite: 'אמצע הירך הקדמית', region: 'lower' },
        { root: 'L3', area: 'ירך תחתונה קדמית / ברך', areaEn: 'Medial knee', testSite: 'מעל הקונדיל המדיאלי של הברך', region: 'lower' },
        { root: 'L4', area: 'מאלאולוס מדיאלי', areaEn: 'Medial malleolus', testSite: 'מעל המאלאולוס המדיאלי', region: 'lower' },
        { root: 'L5', area: 'גב כף הרגל / בוהן 1-3', areaEn: 'Dorsum of foot', testSite: 'בין בוהן 1 ל-2 בגב כף הרגל', region: 'lower' },
        { root: 'S1', area: 'מאלאולוס לטרלי / סולית', areaEn: 'Lateral foot', testSite: 'מאלאולוס לטרלי / קצה לטרלי של כף הרגל', region: 'lower' },
        { root: 'S2', area: 'אחורי שוק / ירך', areaEn: 'Posterior calf/thigh', testSite: 'מרכז הפוסה הפופליטאלית', region: 'lower' }
      ]
    },
    {
      id: 'reflexes',
      name: 'Deep Tendon Reflexes',
      nameEn: 'DTRs',
      icon: '🔨',
      color: 'amber',
      description: 'בדיקת רפלקסים עמוקים. דרגות 0-4+ (NINDS Scale). אסימטריה היא הסימן החשוב ביותר.',
      reference: 'NINDS Reflex Scale',
      grading: [
        { grade: '0', label: 'נעדר', description: 'אין רפלקס - אפילו עם הקלת חיזוק (Jendrassik maneuver)', color: 'red' },
        { grade: '1+', label: 'מופחת', description: 'תגובה דלה / חייב חיזוק להעיר', color: 'amber' },
        { grade: '2+', label: 'תקין', description: 'תגובה רגילה - הסטנדרט', color: 'emerald' },
        { grade: '3+', label: 'מוגבר', description: 'תגובה חזקה יותר מהרגיל - חשד ל-UMN', color: 'orange' },
        { grade: '4+', label: 'מוגבר מאוד + Clonus', description: 'תגובה חזקה מאוד + חזרה לא רצונית - UMN ודאי', color: 'rose' }
      ],
      items: [
        { name: 'Biceps Reflex', nameEn: 'Biceps Jerk', root: 'C5-C6', technique: 'אגודל הבודק על גיד הביצפס במרפק. הקשה על האגודל.', expectedResponse: 'פלקסיה של המרפק', region: 'upper' },
        { name: 'Brachioradialis Reflex', nameEn: 'Brachioradialis Jerk', root: 'C5-C6', technique: 'הקשה על קצה הרדיוס הדיסטלי, אמה בסופינציה חצי-פרונציה.', expectedResponse: 'פלקסיה של המרפק', region: 'upper' },
        { name: 'Triceps Reflex', nameEn: 'Triceps Jerk', root: 'C7-C8', technique: 'מרפק 90°. הקשה על גיד הטריצפס מעל האולקרנון.', expectedResponse: 'אקסטנציה של המרפק', region: 'upper' },
        { name: 'Patellar Reflex', nameEn: 'Knee Jerk', root: 'L2-L4', technique: 'בישיבה, רגליים תלויות. הקשה על גיד הפיקה.', expectedResponse: 'אקסטנציה של הברך', region: 'lower' },
        { name: 'Achilles Reflex', nameEn: 'Ankle Jerk', root: 'S1-S2', technique: 'כריעה / שכיבה. דורסיפלקסיה קלה. הקשה על גיד אכילס.', expectedResponse: 'פלנטרפלקסיה של הקרסול', region: 'lower' }
      ]
    },
    {
      id: 'umn',
      name: 'UMN Signs - סימני פגיעה ב-Upper Motor Neuron',
      nameEn: 'Upper Motor Neuron Signs',
      icon: '🚨',
      color: 'red',
      description: '🚨 דגל אדום! סימנים אלו מצביעים על פגיעה בנוירון המוטורי העליון - מיאלופתיה, שבץ, MS, גידול. דורש הפניה דחופה!',
      reference: 'Cook et al. 2010',
      grading: [
        { grade: 'תקין', label: 'תקין', description: 'תגובה תקינה / סימן שלילי', color: 'emerald' },
        { grade: 'חיובי', label: 'חיובי', description: '🚨 חשד לפגיעה ב-UMN', color: 'red' }
      ],
      items: [
        { name: 'Babinski Sign', nameEn: "Babinski's Sign", technique: 'גירוי מהקצה הלטרלי של הסולית מהעקב לכיוון הבוהן הגדולה.', positiveResponse: '🚨 דורסיפלקסיה של הבוהן הגדולה + פיזור של שאר האצבעות. תקין: פלקסיה של כל האצבעות.', clinicalSig: 'הבדיקה הקלאסית ביותר ל-UMN. רגישות גבוהה במיאלופתיה צווארית ובשבץ.', region: 'lower' },
        { name: 'Hoffmann Sign', nameEn: "Hoffmann's Sign", technique: 'הבודק אוחז באצבע 3 ועושה Flick לציפורן.', positiveResponse: '🚨 פלקסיה של אגודל ואצבע 2.', clinicalSig: 'מקבילו של Babinski בגף עליון - חשוב לאבחון מיאלופתיה צווארית. ב-Cook\'s CSM Cluster.', region: 'upper' },
        { name: 'Inverted Supinator Sign', nameEn: 'Inverted Supinator', technique: 'הקשה על גיד ה-Brachioradialis (אזור רדיאלי-דיסטלי של אמה).', positiveResponse: '🚨 פלקסיה של אצבעות במקום סופינציה רגילה.', clinicalSig: 'מצביע על פגיעה במקטע C5-C6 של חוט השדרה.', region: 'upper' },
        { name: 'Clonus', nameEn: 'Ankle Clonus', technique: 'דורסיפלקסיה פסיבית מהירה ומחזיקים את הקרסול.', positiveResponse: '🚨 תנועות חזרתיות של פלנטרפלקסיה / דורסיפלקסיה. >3 פעימות = חיובי.', clinicalSig: '5+ פעימות = פתולוגי בוודאות. סימן UMN חזק.', region: 'lower' },
        { name: 'Cervical Distraction (Lhermitte)', nameEn: "Lhermitte's Sign", technique: 'בישיבה. פלקסיה אקטיבית של הצוואר.', positiveResponse: '🚨 תחושת "זרם חשמלי" שמתפשט במורד עמוד השדרה / לרגליים.', clinicalSig: 'חשד ל-MS, מיאלופתיה צווארית, גידול תוך-תעלתי. הפנייה דחופה!', region: 'spine' },
        { name: 'Hyperreflexia', nameEn: 'Hyperreflexia 3+/4+', technique: 'בדיקת רפלקסים סטנדרטית.', positiveResponse: '🚨 דרגה 3+/4+ באחד או יותר מהרפלקסים, או אסימטריה.', clinicalSig: 'מעיד על UMN. בדוק עם הסימנים האחרים.', region: 'general' },
        { name: 'Wide-based Gait', nameEn: 'Wide-based / Spastic Gait', technique: 'תצפית על דפוס ההליכה.', positiveResponse: '🚨 הליכה רחבת בסיס, ספסטית, "מספריים" בגפיים תחתונות.', clinicalSig: 'מצביע על פגיעה ב-Corticospinal Tracts. ב-Cook\'s CSM Cluster.', region: 'general' }
      ]
    },
    {
      id: 'neural-tension',
      name: 'מבחני מתח עצבי - Neural Tension Tests',
      nameEn: 'Neural Tension Tests',
      icon: '⚡',
      color: 'cyan',
      description: 'בדיקות שמתחות עצבים פריפריים - חיוניות לאבחון רדיקולופתיה ופגיעה עצבית.',
      reference: 'Butler 1989, Shacklock 2005',
      grading: [
        { grade: 'שלילי', label: 'שלילי', description: 'אין שחזור סימפטומים', color: 'emerald' },
        { grade: 'חיובי חלקי', label: 'חיובי חלקי', description: 'תחושת מתח אך לא שחזור סימפטומים', color: 'amber' },
        { grade: 'חיובי', label: 'חיובי', description: 'שחזור הסימפטומים של המטופל', color: 'red' }
      ],
      items: [
        { name: 'SLR - Straight Leg Raise', nameEn: 'Straight Leg Raise', target: 'L4-S2 nerve roots / Sciatic', technique: 'בשכיבה. הבודק מרים את הרגל הישרה (ברך מיושרת).', positiveResponse: 'שחזור כאב מקרין מתחת לברך בזווית 30°-70°. <30° = פסבדו-חיובי, >70° = פסבדו-שלילי.', sn: '92%', sp: '28%', region: 'lower' },
        { name: 'Crossed SLR', nameEn: 'Crossed SLR (Well-Leg)', target: 'L4-S2 - גרסה ספציפית', technique: 'אותה בדיקה אבל ברגל הא-סימפטומטית (הצד הבריא).', positiveResponse: 'שחזור הסימפטומים בצד הסימפטומטי בעת הרמת הצד הבריא.', sn: '28%', sp: '90%', region: 'lower' },
        { name: 'Slump Test', nameEn: 'Slump Test', target: 'Spinal cord + nerve roots', technique: 'בישיבה - גב מעוגל, ראש בפלקסיה, אקסטנציה של ברך, דורסיפלקסיה. שחרור פלקסיה צווארית.', positiveResponse: 'שחזור סימפטומים שמשתפר עם שחרור הפלקסיה הצווארית.', sn: '84%', sp: '83%', region: 'lower' },
        { name: 'ULTT 1 - Median', nameEn: 'Upper Limb Tension Test 1', target: 'Median nerve / C5-T1', technique: 'אבדוקציה 110°, אקסטנציה של מרפק, סופינציה, אקסטנציה של שורש כף יד ואצבעות, הטיה לטרלית של הראש לצד הנגדי.', positiveResponse: 'שחזור סימפטומים שמשתפר עם הטיה לטרלית לכיוון הסימפטומטי.', sn: '97%', sp: '22%', region: 'upper' },
        { name: 'ULTT 2 - Radial', nameEn: 'Upper Limb Tension Test 2 (Radial)', target: 'Radial nerve', technique: 'אבדוקציה של הכתף + רוטציה פנימית, אקסטנציה של מרפק, פלקסיה של שורש כף יד ואגודל.', positiveResponse: 'שחזור סימפטומים בעצבוב הרדיאלי.', sn: '70%', sp: '83%', region: 'upper' },
        { name: 'ULTT 3 - Ulnar', nameEn: 'Upper Limb Tension Test 3 (Ulnar)', target: 'Ulnar nerve / C8-T1', technique: 'אבדוקציה של הכתף + רוטציה חיצונית, פלקסיה של מרפק, סופינציה, אקסטנציה של שורש כף יד.', positiveResponse: 'שחזור סימפטומים בעצבוב האולנרי.', sn: '95%', sp: '22%', region: 'upper' },
        { name: 'Femoral Nerve Tension (Reverse SLR)', nameEn: 'Prone Knee Bend', target: 'L2-L4 / Femoral nerve', technique: 'בשכיבה על הבטן. הבודק מבצע פלקסיה פסיבית של הברך.', positiveResponse: 'כאב בקדמת הירך / מפשעה.', sn: '50%', sp: '85%', region: 'lower' }
      ]
    },
    {
      id: 'dermatome-map',
      name: 'מפת Dermatomes ויזואלית',
      nameEn: 'Visual Dermatome Map',
      icon: '🗺️',
      color: 'rose',
      description: 'מפה אינטראקטיבית של אזורי תחושה לפי שורשי עצב. לחץ על כל אזור לקבלת מידע מפורט.',
      reference: 'Keegan & Garrett 1948',
      isVisualMap: true
    },
    {
      id: 'muscle-innervation',
      name: 'מאגר עצבוב שרירים',
      nameEn: 'Muscle Innervation Atlas',
      icon: '📚',
      color: 'indigo',
      description: 'מאגר מקיף של 80+ שרירים בגוף - כל אחד עם העצב המעצבב ושורשי עמוד השדרה. כלי לימודי לעיון מהיר.',
      reference: 'Gray\'s Anatomy / Netter',
      isReference: true,
      items: [
        // ============ כתף ושכמה ============
        { region: 'shoulder', muscle: 'Deltoid - Anterior', muscleHe: 'דלתואיד קדמי', nerve: 'Axillary', roots: 'C5-C6', action: 'פלקסיה והרמת כתף קדמית' },
        { region: 'shoulder', muscle: 'Deltoid - Middle', muscleHe: 'דלתואיד אמצעי', nerve: 'Axillary', roots: 'C5-C6', action: 'אבדוקציה של הכתף' },
        { region: 'shoulder', muscle: 'Deltoid - Posterior', muscleHe: 'דלתואיד אחורי', nerve: 'Axillary', roots: 'C5-C6', action: 'אקסטנציה ואבדוקציה אופקית' },
        { region: 'shoulder', muscle: 'Supraspinatus', muscleHe: 'סופרהספינטוס', nerve: 'Suprascapular', roots: 'C5-C6', action: 'אבדוקציה של הכתף (15° ראשונים)' },
        { region: 'shoulder', muscle: 'Infraspinatus', muscleHe: 'אינפרהספינטוס', nerve: 'Suprascapular', roots: 'C5-C6', action: 'רוטציה חיצונית של הכתף' },
        { region: 'shoulder', muscle: 'Teres Minor', muscleHe: 'טרס מינור', nerve: 'Axillary', roots: 'C5-C6', action: 'רוטציה חיצונית של הכתף' },
        { region: 'shoulder', muscle: 'Subscapularis', muscleHe: 'סובסקפולריס', nerve: 'Upper & Lower Subscapular', roots: 'C5-C6', action: 'רוטציה פנימית של הכתף' },
        { region: 'shoulder', muscle: 'Teres Major', muscleHe: 'טרס מייג\'ור', nerve: 'Lower Subscapular', roots: 'C5-C6', action: 'אקסטנציה ואדוקציה' },
        { region: 'shoulder', muscle: 'Latissimus Dorsi', muscleHe: 'לטיסימוס דורסי', nerve: 'Thoracodorsal', roots: 'C6-C8', action: 'אקסטנציה, אדוקציה, רוטציה פנימית' },
        { region: 'shoulder', muscle: 'Pectoralis Major - Clavicular', muscleHe: 'פקטורליס מייג\'ור - קלביקולרי', nerve: 'Lateral Pectoral', roots: 'C5-C7', action: 'פלקסיה ואדוקציה אופקית' },
        { region: 'shoulder', muscle: 'Pectoralis Major - Sternal', muscleHe: 'פקטורליס מייג\'ור - סטרנלי', nerve: 'Medial & Lateral Pectoral', roots: 'C6-T1', action: 'אדוקציה ורוטציה פנימית' },
        { region: 'shoulder', muscle: 'Pectoralis Minor', muscleHe: 'פקטורליס מינור', nerve: 'Medial Pectoral', roots: 'C8-T1', action: 'הורדה של השכמה' },
        // שרירי שכמה
        { region: 'shoulder', muscle: 'Trapezius - Upper', muscleHe: 'טרפז עליון', nerve: 'Spinal Accessory (CN XI) + C3-C4', roots: 'CN XI / C3-C4', action: 'הרמת השכמה' },
        { region: 'shoulder', muscle: 'Trapezius - Middle', muscleHe: 'טרפז אמצעי', nerve: 'Spinal Accessory (CN XI) + C3-C4', roots: 'CN XI / C3-C4', action: 'רטרקציה של השכמה' },
        { region: 'shoulder', muscle: 'Trapezius - Lower', muscleHe: 'טרפז תחתון', nerve: 'Spinal Accessory (CN XI) + C3-C4', roots: 'CN XI / C3-C4', action: 'הורדה ורוטציה כלפי מעלה של שכמה' },
        { region: 'shoulder', muscle: 'Rhomboid Major', muscleHe: 'רומבואיד מייג\'ור', nerve: 'Dorsal Scapular', roots: 'C4-C5', action: 'רטרקציה ורוטציה כלפי מטה של שכמה' },
        { region: 'shoulder', muscle: 'Rhomboid Minor', muscleHe: 'רומבואיד מינור', nerve: 'Dorsal Scapular', roots: 'C4-C5', action: 'רטרקציה של שכמה' },
        { region: 'shoulder', muscle: 'Levator Scapulae', muscleHe: 'לבטור סקפולה', nerve: 'Dorsal Scapular + C3-C4', roots: 'C3-C5', action: 'הרמה ורוטציה כלפי מטה של שכמה' },
        { region: 'shoulder', muscle: 'Serratus Anterior', muscleHe: 'סראטוס אנטריור', nerve: 'Long Thoracic', roots: 'C5-C7', action: 'פרוטרקציה ורוטציה כלפי מעלה של שכמה' },

        // ============ זרוע ומרפק ============
        { region: 'arm', muscle: 'Biceps Brachii', muscleHe: 'ביצפס ברכי', nerve: 'Musculocutaneous', roots: 'C5-C6', action: 'פלקסיה של מרפק + סופינציה' },
        { region: 'arm', muscle: 'Brachialis', muscleHe: 'ברכיאליס', nerve: 'Musculocutaneous', roots: 'C5-C6', action: 'פלקסיה של מרפק (השריר העיקרי)' },
        { region: 'arm', muscle: 'Coracobrachialis', muscleHe: 'קוראקוברכיאליס', nerve: 'Musculocutaneous', roots: 'C5-C7', action: 'פלקסיה ואדוקציה של כתף' },
        { region: 'arm', muscle: 'Triceps Brachii - Long Head', muscleHe: 'טריצפס - ראש ארוך', nerve: 'Radial', roots: 'C6-C8', action: 'אקסטנציה של מרפק + אקסטנציה של כתף' },
        { region: 'arm', muscle: 'Triceps Brachii - Lateral Head', muscleHe: 'טריצפס - ראש לטרלי', nerve: 'Radial', roots: 'C6-C8', action: 'אקסטנציה של מרפק' },
        { region: 'arm', muscle: 'Triceps Brachii - Medial Head', muscleHe: 'טריצפס - ראש מדיאלי', nerve: 'Radial', roots: 'C6-C8', action: 'אקסטנציה של מרפק' },
        { region: 'arm', muscle: 'Anconeus', muscleHe: 'אנקוניוס', nerve: 'Radial', roots: 'C7-T1', action: 'אקסטנציה של מרפק (עזר)' },

        // ============ אמה - פלקסורים ============
        { region: 'forearm', muscle: 'Brachioradialis', muscleHe: 'ברכיורדיאליס', nerve: 'Radial', roots: 'C5-C6', action: 'פלקסיה של מרפק (אמה בנייטרל)' },
        { region: 'forearm', muscle: 'Pronator Teres', muscleHe: 'פרונטור טרס', nerve: 'Median', roots: 'C6-C7', action: 'פרונציה של אמה' },
        { region: 'forearm', muscle: 'Pronator Quadratus', muscleHe: 'פרונטור קוודרטוס', nerve: 'Anterior Interosseous (Median)', roots: 'C8-T1', action: 'פרונציה של אמה (העיקרי)' },
        { region: 'forearm', muscle: 'Supinator', muscleHe: 'סופינטור', nerve: 'Posterior Interosseous (Radial)', roots: 'C5-C6', action: 'סופינציה של אמה' },
        { region: 'forearm', muscle: 'Flexor Carpi Radialis (FCR)', muscleHe: 'פלקסור קרפי רדיאליס', nerve: 'Median', roots: 'C6-C7', action: 'פלקסיה ואבדוקציה רדיאלית של שורש כף יד' },
        { region: 'forearm', muscle: 'Flexor Carpi Ulnaris (FCU)', muscleHe: 'פלקסור קרפי אולנריס', nerve: 'Ulnar', roots: 'C7-T1', action: 'פלקסיה ואדוקציה אולנרית של שורש כף יד' },
        { region: 'forearm', muscle: 'Palmaris Longus', muscleHe: 'פלמריס לונגוס', nerve: 'Median', roots: 'C7-T1', action: 'פלקסיה של שורש כף יד (חסר ב-15%)' },
        { region: 'forearm', muscle: 'Flexor Digitorum Superficialis (FDS)', muscleHe: 'פלקסור דיגיטורום סופרפיציאליס', nerve: 'Median', roots: 'C7-T1', action: 'פלקסיה של PIP' },
        { region: 'forearm', muscle: 'Flexor Digitorum Profundus - Lateral', muscleHe: 'FDP - לטרלי (אצבעות 2-3)', nerve: 'Anterior Interosseous (Median)', roots: 'C8-T1', action: 'פלקסיה של DIP אצבעות 2-3' },
        { region: 'forearm', muscle: 'Flexor Digitorum Profundus - Medial', muscleHe: 'FDP - מדיאלי (אצבעות 4-5)', nerve: 'Ulnar', roots: 'C8-T1', action: 'פלקסיה של DIP אצבעות 4-5' },
        { region: 'forearm', muscle: 'Flexor Pollicis Longus (FPL)', muscleHe: 'פלקסור פוליציס לונגוס', nerve: 'Anterior Interosseous (Median)', roots: 'C8-T1', action: 'פלקסיה של IP של אגודל' },

        // אקסטנסורים של אמה
        { region: 'forearm', muscle: 'Extensor Carpi Radialis Longus (ECRL)', muscleHe: 'אקסטנסור קרפי רדיאליס לונגוס', nerve: 'Radial', roots: 'C6-C7', action: 'אקסטנציה ואבדוקציה רדיאלית של שורש כף יד' },
        { region: 'forearm', muscle: 'Extensor Carpi Radialis Brevis (ECRB)', muscleHe: 'אקסטנסור קרפי רדיאליס ברביס', nerve: 'Posterior Interosseous (Radial)', roots: 'C7-C8', action: 'אקסטנציה של שורש כף יד' },
        { region: 'forearm', muscle: 'Extensor Carpi Ulnaris (ECU)', muscleHe: 'אקסטנסור קרפי אולנריס', nerve: 'Posterior Interosseous (Radial)', roots: 'C7-C8', action: 'אקסטנציה ואדוקציה אולנרית של שורש כף יד' },
        { region: 'forearm', muscle: 'Extensor Digitorum (EDC)', muscleHe: 'אקסטנסור דיגיטורום קומוניס', nerve: 'Posterior Interosseous (Radial)', roots: 'C7-C8', action: 'אקסטנציה של MCP אצבעות 2-5' },
        { region: 'forearm', muscle: 'Extensor Indicis', muscleHe: 'אקסטנסור אינדיציס', nerve: 'Posterior Interosseous (Radial)', roots: 'C7-C8', action: 'אקסטנציה של MCP אצבע 2' },
        { region: 'forearm', muscle: 'Extensor Digiti Minimi', muscleHe: 'אקסטנסור דיגיטי מינימי', nerve: 'Posterior Interosseous (Radial)', roots: 'C7-C8', action: 'אקסטנציה של MCP זרת' },
        { region: 'forearm', muscle: 'Extensor Pollicis Longus (EPL)', muscleHe: 'אקסטנסור פוליציס לונגוס', nerve: 'Posterior Interosseous (Radial)', roots: 'C7-C8', action: 'אקסטנציה של IP של אגודל' },
        { region: 'forearm', muscle: 'Extensor Pollicis Brevis (EPB)', muscleHe: 'אקסטנסור פוליציס ברביס', nerve: 'Posterior Interosseous (Radial)', roots: 'C7-C8', action: 'אקסטנציה של MCP של אגודל' },
        { region: 'forearm', muscle: 'Abductor Pollicis Longus (APL)', muscleHe: 'אבדוקטור פוליציס לונגוס', nerve: 'Posterior Interosseous (Radial)', roots: 'C7-C8', action: 'אבדוקציה של אגודל' },

        // ============ כף יד - שרירים פנימיים ============
        { region: 'hand', muscle: 'Abductor Pollicis Brevis', muscleHe: 'אבדוקטור פוליציס ברביס', nerve: 'Median (Recurrent)', roots: 'C8-T1', action: 'אבדוקציה של אגודל' },
        { region: 'hand', muscle: 'Opponens Pollicis', muscleHe: 'אופוננס פוליציס', nerve: 'Median (Recurrent)', roots: 'C8-T1', action: 'אופוזיציה של אגודל' },
        { region: 'hand', muscle: 'Flexor Pollicis Brevis - Superficial', muscleHe: 'FPB - שטחי', nerve: 'Median (Recurrent)', roots: 'C8-T1', action: 'פלקסיה של אגודל' },
        { region: 'hand', muscle: 'Lumbricals 1-2', muscleHe: 'לומבריקלס 1-2', nerve: 'Median', roots: 'C8-T1', action: 'פלקסיה של MCP + אקסטנציה של PIP/DIP' },
        { region: 'hand', muscle: 'Lumbricals 3-4', muscleHe: 'לומבריקלס 3-4', nerve: 'Ulnar (Deep)', roots: 'C8-T1', action: 'פלקסיה של MCP + אקסטנציה של PIP/DIP' },
        { region: 'hand', muscle: 'Dorsal Interossei (1-4)', muscleHe: 'אינטרוסיי דורסליים', nerve: 'Ulnar (Deep)', roots: 'C8-T1', action: 'אבדוקציה של אצבעות' },
        { region: 'hand', muscle: 'Palmar Interossei (1-3)', muscleHe: 'אינטרוסיי פלמריים', nerve: 'Ulnar (Deep)', roots: 'C8-T1', action: 'אדוקציה של אצבעות' },
        { region: 'hand', muscle: 'Adductor Pollicis', muscleHe: 'אדוקטור פוליציס', nerve: 'Ulnar (Deep)', roots: 'C8-T1', action: 'אדוקציה של אגודל' },
        { region: 'hand', muscle: 'Hypothenar - ADM', muscleHe: 'אבדוקטור דיגיטי מינימי', nerve: 'Ulnar', roots: 'C8-T1', action: 'אבדוקציה של זרת' },

        // ============ צוואר ============
        { region: 'neck', muscle: 'Sternocleidomastoid (SCM)', muscleHe: 'סטרנוקלידומסטואיד', nerve: 'Spinal Accessory (CN XI) + C2-C3', roots: 'CN XI / C2-C3', action: 'הטיה ורוטציה של הצוואר' },
        { region: 'neck', muscle: 'Scalenus Anterior', muscleHe: 'סקלנוס אנטריור', nerve: 'Cervical Plexus', roots: 'C4-C6', action: 'הטיה ופלקסיה של הצוואר' },
        { region: 'neck', muscle: 'Scalenus Medius', muscleHe: 'סקלנוס מדיוס', nerve: 'Cervical Plexus', roots: 'C3-C8', action: 'הטיה לטרלית של הצוואר' },
        { region: 'neck', muscle: 'Longus Colli', muscleHe: 'לונגוס קולי', nerve: 'Cervical Plexus', roots: 'C2-C6', action: 'פלקסיה צווארית עמוקה (Deep Neck Flexor)' },
        { region: 'neck', muscle: 'Longus Capitis', muscleHe: 'לונגוס קפיטיס', nerve: 'Cervical Plexus', roots: 'C1-C3', action: 'פלקסיה של הראש (Deep Neck Flexor)' },
        { region: 'neck', muscle: 'Splenius Capitis', muscleHe: 'ספלניוס קפיטיס', nerve: 'Cervical Spinal Nerves', roots: 'C3-C5', action: 'אקסטנציה ורוטציה של הראש' },
        { region: 'neck', muscle: 'Semispinalis Capitis', muscleHe: 'סמיספינליס קפיטיס', nerve: 'Cervical Spinal Nerves', roots: 'C1-C8', action: 'אקסטנציה של הראש' },
        { region: 'neck', muscle: 'Suboccipital Group', muscleHe: 'שרירי תת-עורף', nerve: 'Suboccipital (C1)', roots: 'C1', action: 'תנועות עדינות של הראש' },

        // ============ עמוד שדרה / טורסו ============
        { region: 'spine', muscle: 'Erector Spinae - Iliocostalis', muscleHe: 'אירקטור ספיני - איליוקוסטליס', nerve: 'Spinal Nerves Posterior Rami', roots: 'C1-L5', action: 'אקסטנציה של עמוד השדרה' },
        { region: 'spine', muscle: 'Erector Spinae - Longissimus', muscleHe: 'אירקטור ספיני - לונגיסימוס', nerve: 'Spinal Nerves Posterior Rami', roots: 'C1-L5', action: 'אקסטנציה והטיה לטרלית' },
        { region: 'spine', muscle: 'Multifidus', muscleHe: 'מולטיפידוס', nerve: 'Spinal Nerves Posterior Rami', roots: 'C2-S1', action: 'יציבות מקטעית של עמוד שדרה' },
        { region: 'spine', muscle: 'Quadratus Lumborum (QL)', muscleHe: 'קוודרטוס לומבורום', nerve: 'Subcostal + Lumbar Plexus', roots: 'T12-L4', action: 'הטיה לטרלית של עמוד שדרה' },
        { region: 'spine', muscle: 'Rectus Abdominis', muscleHe: 'רקטוס אבדומיניס', nerve: 'Intercostal Nerves', roots: 'T7-T12', action: 'פלקסיה של הגזע' },
        { region: 'spine', muscle: 'External Oblique', muscleHe: 'אובליק חיצוני', nerve: 'Intercostal + Subcostal', roots: 'T7-T12', action: 'הטיה לטרלית + רוטציה הפוכה' },
        { region: 'spine', muscle: 'Internal Oblique', muscleHe: 'אובליק פנימי', nerve: 'Intercostal + Iliohypogastric', roots: 'T7-L1', action: 'הטיה לטרלית + רוטציה לאותו צד' },
        { region: 'spine', muscle: 'Transversus Abdominis (TrA)', muscleHe: 'טרנסברסוס אבדומיניס', nerve: 'Intercostal + Iliohypogastric', roots: 'T7-L1', action: 'יצוב ליבה (Core Stability)' },
        { region: 'spine', muscle: 'Diaphragm', muscleHe: 'סרעפת', nerve: 'Phrenic', roots: 'C3-C5', action: 'נשימה (השריר הנשימתי העיקרי)' },

        // ============ ירך ואגן ============
        { region: 'hip', muscle: 'Iliacus', muscleHe: 'איליאקוס', nerve: 'Femoral', roots: 'L2-L3', action: 'פלקסיה של הירך' },
        { region: 'hip', muscle: 'Psoas Major', muscleHe: 'פסואס מייג\'ור', nerve: 'Lumbar Plexus (Direct branches)', roots: 'L1-L3', action: 'פלקסיה של הירך + פלקסיה לטרלית של עמוד שדרה' },
        { region: 'hip', muscle: 'Sartorius', muscleHe: 'סרטוריוס', nerve: 'Femoral', roots: 'L2-L3', action: 'פלקסיה, אבדוקציה, ER של ירך + פלקסיה של ברך' },
        { region: 'hip', muscle: 'Gluteus Maximus', muscleHe: 'גלוטאוס מקסימוס', nerve: 'Inferior Gluteal', roots: 'L5-S2', action: 'אקסטנציה של ירך + ER + יצוב' },
        { region: 'hip', muscle: 'Gluteus Medius', muscleHe: 'גלוטאוס מדיוס', nerve: 'Superior Gluteal', roots: 'L4-S1', action: 'אבדוקציה של ירך + יצוב אגן' },
        { region: 'hip', muscle: 'Gluteus Minimus', muscleHe: 'גלוטאוס מינימוס', nerve: 'Superior Gluteal', roots: 'L4-S1', action: 'אבדוקציה ורוטציה פנימית של ירך' },
        { region: 'hip', muscle: 'Tensor Fasciae Latae (TFL)', muscleHe: 'טנסור פסיה לאטה', nerve: 'Superior Gluteal', roots: 'L4-S1', action: 'פלקסיה ואבדוקציה של ירך' },
        { region: 'hip', muscle: 'Piriformis', muscleHe: 'פיריפורמיס', nerve: 'Direct branches', roots: 'L5-S2', action: 'רוטציה חיצונית של ירך' },
        { region: 'hip', muscle: 'Obturator Internus/Externus', muscleHe: 'אובטורטור פנימי/חיצוני', nerve: 'Obturator + Direct', roots: 'L5-S1', action: 'רוטציה חיצונית של ירך' },
        { region: 'hip', muscle: 'Quadratus Femoris', muscleHe: 'קוודרטוס פמוריס', nerve: 'Direct branches', roots: 'L4-S1', action: 'רוטציה חיצונית של ירך' },
        // אדוקטורים
        { region: 'hip', muscle: 'Adductor Longus', muscleHe: 'אדוקטור לונגוס', nerve: 'Obturator', roots: 'L2-L4', action: 'אדוקציה של ירך' },
        { region: 'hip', muscle: 'Adductor Brevis', muscleHe: 'אדוקטור ברביס', nerve: 'Obturator', roots: 'L2-L4', action: 'אדוקציה של ירך' },
        { region: 'hip', muscle: 'Adductor Magnus - Adductor portion', muscleHe: 'אדוקטור מגנוס - חלק אדוקטורי', nerve: 'Obturator', roots: 'L2-L4', action: 'אדוקציה של ירך' },
        { region: 'hip', muscle: 'Adductor Magnus - Hamstring portion', muscleHe: 'אדוקטור מגנוס - חלק האמסטרינג', nerve: 'Sciatic (Tibial)', roots: 'L4-S3', action: 'אקסטנציה של ירך' },
        { region: 'hip', muscle: 'Gracilis', muscleHe: 'גרסיליס', nerve: 'Obturator', roots: 'L2-L4', action: 'אדוקציה של ירך + פלקסיה של ברך' },
        { region: 'hip', muscle: 'Pectineus', muscleHe: 'פקטיניוס', nerve: 'Femoral (+Obturator)', roots: 'L2-L3', action: 'פלקסיה ואדוקציה של ירך' },

        // ============ ברך - קוואדריצפס + האמסטרינגים ============
        { region: 'knee', muscle: 'Rectus Femoris', muscleHe: 'רקטוס פמוריס', nerve: 'Femoral', roots: 'L2-L4', action: 'פלקסיה של ירך + אקסטנציה של ברך' },
        { region: 'knee', muscle: 'Vastus Lateralis', muscleHe: 'וסטוס לטרליס', nerve: 'Femoral', roots: 'L2-L4', action: 'אקסטנציה של ברך' },
        { region: 'knee', muscle: 'Vastus Medialis (VMO)', muscleHe: 'וסטוס מדיאליס', nerve: 'Femoral', roots: 'L2-L4', action: 'אקסטנציה של ברך + יצוב פיקה' },
        { region: 'knee', muscle: 'Vastus Intermedius', muscleHe: 'וסטוס אינטרמדיוס', nerve: 'Femoral', roots: 'L2-L4', action: 'אקסטנציה של ברך' },
        { region: 'knee', muscle: 'Biceps Femoris - Long Head', muscleHe: 'ביצפס פמוריס - ראש ארוך', nerve: 'Sciatic (Tibial)', roots: 'L5-S2', action: 'פלקסיה של ברך + אקסטנציה של ירך' },
        { region: 'knee', muscle: 'Biceps Femoris - Short Head', muscleHe: 'ביצפס פמוריס - ראש קצר', nerve: 'Sciatic (Common Peroneal)', roots: 'L5-S2', action: 'פלקסיה של ברך' },
        { region: 'knee', muscle: 'Semitendinosus', muscleHe: 'סמיטנדינוסוס', nerve: 'Sciatic (Tibial)', roots: 'L5-S2', action: 'פלקסיה של ברך + אקסטנציה של ירך' },
        { region: 'knee', muscle: 'Semimembranosus', muscleHe: 'סמימברנוסוס', nerve: 'Sciatic (Tibial)', roots: 'L5-S2', action: 'פלקסיה של ברך + אקסטנציה של ירך' },
        { region: 'knee', muscle: 'Popliteus', muscleHe: 'פופליטאוס', nerve: 'Tibial', roots: 'L4-S1', action: 'רוטציה פנימית של טיביה (פותח את "Screw Home Mechanism")' },

        // ============ שוק וכף רגל ============
        // קומפרטמנט קדמי
        { region: 'leg', muscle: 'Tibialis Anterior', muscleHe: 'טיביאליס אנטריור', nerve: 'Deep Peroneal', roots: 'L4-L5', action: 'דורסיפלקסיה ואינברסיה' },
        { region: 'leg', muscle: 'Extensor Hallucis Longus (EHL)', muscleHe: 'אקסטנסור הלוציס לונגוס', nerve: 'Deep Peroneal', roots: 'L5-S1', action: 'אקסטנציה של בוהן גדולה' },
        { region: 'leg', muscle: 'Extensor Digitorum Longus (EDL)', muscleHe: 'אקסטנסור דיגיטורום לונגוס', nerve: 'Deep Peroneal', roots: 'L5-S1', action: 'אקסטנציה של אצבעות 2-5' },
        { region: 'leg', muscle: 'Peroneus Tertius', muscleHe: 'פרוניאוס טרציוס', nerve: 'Deep Peroneal', roots: 'L5-S1', action: 'דורסיפלקסיה ואברסיה' },
        // קומפרטמנט לטרלי
        { region: 'leg', muscle: 'Peroneus Longus', muscleHe: 'פרוניאוס לונגוס', nerve: 'Superficial Peroneal', roots: 'L5-S1', action: 'אברסיה ופלנטרפלקסיה' },
        { region: 'leg', muscle: 'Peroneus Brevis', muscleHe: 'פרוניאוס ברביס', nerve: 'Superficial Peroneal', roots: 'L5-S1', action: 'אברסיה ופלנטרפלקסיה' },
        // קומפרטמנט אחורי - שטחי
        { region: 'leg', muscle: 'Gastrocnemius - Medial Head', muscleHe: 'גסטרוקנמיוס - ראש מדיאלי', nerve: 'Tibial', roots: 'S1-S2', action: 'פלנטרפלקסיה + פלקסיה של ברך' },
        { region: 'leg', muscle: 'Gastrocnemius - Lateral Head', muscleHe: 'גסטרוקנמיוס - ראש לטרלי', nerve: 'Tibial', roots: 'S1-S2', action: 'פלנטרפלקסיה + פלקסיה של ברך' },
        { region: 'leg', muscle: 'Soleus', muscleHe: 'סוליאוס', nerve: 'Tibial', roots: 'S1-S2', action: 'פלנטרפלקסיה' },
        { region: 'leg', muscle: 'Plantaris', muscleHe: 'פלנטריס', nerve: 'Tibial', roots: 'S1-S2', action: 'פלנטרפלקסיה (עזר)' },
        // קומפרטמנט אחורי - עמוק
        { region: 'leg', muscle: 'Tibialis Posterior', muscleHe: 'טיביאליס פוסטריור', nerve: 'Tibial', roots: 'L4-L5', action: 'אינברסיה ופלנטרפלקסיה - מייצב קשת' },
        { region: 'leg', muscle: 'Flexor Digitorum Longus (FDL)', muscleHe: 'פלקסור דיגיטורום לונגוס', nerve: 'Tibial', roots: 'L5-S2', action: 'פלקסיה של אצבעות 2-5 + אינברסיה' },
        { region: 'leg', muscle: 'Flexor Hallucis Longus (FHL)', muscleHe: 'פלקסור הלוציס לונגוס', nerve: 'Tibial', roots: 'L5-S2', action: 'פלקסיה של בוהן גדולה' },
        // שרירי כף רגל
        { region: 'leg', muscle: 'Extensor Digitorum Brevis', muscleHe: 'אקסטנסור דיגיטורום ברביס', nerve: 'Deep Peroneal', roots: 'L5-S1', action: 'אקסטנציה של אצבעות 1-4' },
        { region: 'leg', muscle: 'Abductor Hallucis', muscleHe: 'אבדוקטור הלוציס', nerve: 'Medial Plantar', roots: 'S1-S2', action: 'אבדוקציה של בוהן גדולה' },
        { region: 'leg', muscle: 'Flexor Digitorum Brevis', muscleHe: 'פלקסור דיגיטורום ברביס', nerve: 'Medial Plantar', roots: 'S1-S2', action: 'פלקסיה של PIP אצבעות 2-5' },
        { region: 'leg', muscle: 'Quadratus Plantae', muscleHe: 'קוודרטוס פלנטה', nerve: 'Lateral Plantar', roots: 'S1-S3', action: 'עזר ל-FDL' }
      ]
    }
  ];

  // ========== מערכת ניקוד ופירוש לבדיקה נוירולוגית ==========
  const updateNeuroFinding = (sectionId, itemKey, value) => {
    setNeuroFindings(prev => ({
      ...prev,
      [sectionId]: {
        ...(prev[sectionId] || {}),
        [itemKey]: value
      }
    }));
  };

  const getNeuroSummary = (sectionId) => {
    // מקטעי reference / visual map אינם אינטראקטיביים לסימון
    if (sectionId === 'muscle-innervation' || sectionId === 'dermatome-map') return null;
    const findings = neuroFindings[sectionId] || {};
    const total = Object.keys(findings).length;
    if (total === 0) return null;

    let abnormal = 0;
    Object.values(findings).forEach(v => {
      if (sectionId === 'myotomes') {
        if (v && v !== '5') abnormal++;
      } else if (sectionId === 'dermatomes') {
        if (v && v !== 'תקינה') abnormal++;
      } else if (sectionId === 'reflexes') {
        if (v && v !== '2+') abnormal++;
      } else if (sectionId === 'umn') {
        if (v === 'חיובי') abnormal++;
      } else if (sectionId === 'neural-tension') {
        if (v === 'חיובי' || v === 'חיובי חלקי') abnormal++;
      }
    });

    return { total, abnormal, normal: total - abnormal };
  };

  // ========== דגלים אדומים - מצבים הדורשים הפניה דחופה ==========
  const redFlagsData = [
    {
      category: 'חירום מיידי - מיון',
      severity: 'critical',
      conditions: [
        {
          name: 'תסמונת קאודה אקווינה',
          nameEn: 'Cauda Equina Syndrome',
          urgency: 'תוך 24-48 שעות - ניתוח דחוף',
          warningSigns: [
            'אי שליטה חדשה על שתן או צואה',
            'אנסטזיה אוכף (אזור פרינאום, פנים-ירכיים)',
            'חולשה מתקדמת דו-צדדית בגפיים תחתונות',
            'אובדן רפלקס בולבוקברנוזוס',
            'אצירת שתן (PVR > 100 מ"ל)'
          ],
          action: 'הפניה מיידית למיון - MRI דחוף וניתוח לחץ',
          context: 'דחיסה של שורשי הסוס בתעלת השדרה. סיבה נפוצה: פריצת דיסק מסיבית. עיכוב בטיפול = נזק קבוע.'
        },
        {
          name: 'מיאלופתיה צווארית חריפה',
          nameEn: 'Acute Cervical Myelopathy',
          urgency: 'מיידי - בדיקה נוירולוגית דחופה',
          warningSigns: [
            'הליכה ספסטית או רחבת בסיס שמתפתחת',
            'אובדן קואורדינציה ביד ("Clumsiness")',
            'סימני UMN: Hoffmann חיובי, Babinski, רפלקסים מוגברים',
            'הפרעות שלפוחיתיות חדשות',
            "Lhermitte's sign חיובי"
          ],
          action: 'הפניה מיידית להערכה נוירוכירורגית + MRI דחוף',
          context: 'דחיסת חוט השדרה. ההתקדמות יכולה להיות מהירה ובלתי הפיכה. דורש לרוב התערבות ניתוחית.'
        },
        {
          name: 'אי יציבות צווארית עליונה',
          nameEn: 'Upper Cervical Instability',
          urgency: 'מיידי - אסור לתפעל את הצוואר!',
          warningSigns: [
            'סימני VBI (אי-ספיקה ורטברו-בזילרית): סחרחורת, ראיה כפולה, בלבול',
            'פרסטזיות בפנים או בגרון',
            'Sharp-Purser חיובי',
            'אנמנזה של RA, Down syndrome, חבלת צוואר',
            "Drop attacks (נפילות פתאומיות)"
          ],
          action: 'הפניה מיידית להערכה - אסורה כל מניפולציה צווארית',
          context: 'אי יציבות C1-C2 עלולה לפגוע בחוט השדרה הצווארי העליון או בעצב הוורטברלי.'
        }
      ]
    },
    {
      category: 'דגלי גידול / זיהום / פגיעה במערכת',
      severity: 'high',
      conditions: [
        {
          name: 'חשד לגידול ממאיר בעמוד שדרה',
          nameEn: 'Spinal Malignancy',
          urgency: 'תוך ימים - בירור מהיר',
          warningSigns: [
            'גיל >50 עם כאב גב חדש',
            'היסטוריה של סרטן (בעיקר שד, פרוסטטה, ריאה, כליה, תירואיד)',
            'ירידה בלתי מוסברת במשקל (>5 ק"ג ב-3 חודשים)',
            'כאב לילי שמעיר משינה ולא מוקל בשינוי תנוחה',
            'כאב מתמשך במנוחה',
            'סימנים מערכתיים (חום, חולשה כללית)'
          ],
          action: 'הפניה דחופה לבירור: MRI, בדיקות דם, אונקולוג',
          context: '~70% ממקרי הסרטן הגרורתי בעמוד שדרה מקורם בסרטן ראשוני ידוע.'
        },
        {
          name: 'זיהום בעמוד שדרה',
          nameEn: 'Spinal Infection / Discitis / Osteomyelitis',
          urgency: 'מיידי - אנטיביוטיקה IV',
          warningSigns: [
            'חום + כאב גב משמעותי',
            'דיכוי חיסוני (סוכרת לא מאוזנת, HIV, טיפול אימונוסופרסיבי)',
            'שימוש בסמים IV',
            'זיהום עורי או UTI לאחרונה',
            'CRP/ESR מוגברים',
            'כאב לילי קבוע'
          ],
          action: 'מיון - דם לתרבית, MRI עם ניגוד, אנטיביוטיקה',
          context: 'יכול להוביל ל-CES, אבצס אפידורלי, ופגיעה נוירולוגית קבועה.'
        },
        {
          name: 'שבר בעמוד שדרה',
          nameEn: 'Vertebral Fracture',
          urgency: 'מיידי - הימנעות מעומס',
          warningSigns: [
            'חבלה משמעותית (תאונת דרכים, נפילה מגובה)',
            'גיל >65 + נפילה ממקום נמוך (אוסטאופורוטי)',
            'שימוש כרוני בקורטיקוסטרואידים',
            'כאב מקומי חד עם מישוש',
            'דפורמציה גלויה / אובדן גובה'
          ],
          action: 'מיון - צילום, CT, ייצוב',
          context: 'שברים אוסטאופורוטיים שכיחים אחרי גיל 65, גם ללא חבלה משמעותית.'
        }
      ]
    },
    {
      category: 'חירום וסקולרי וכירורגי',
      severity: 'critical',
      conditions: [
        {
          name: 'תסמונת קומפרטמנט',
          nameEn: 'Compartment Syndrome',
          urgency: '⏰ תוך שעות - פסיוטומיה דחופה!',
          warningSigns: [
            'כאב לא פרופורציונלי לפציעה',
            'כאב בעת מתיחה פסיבית של השרירים',
            'נימולים ופרסטזיות',
            'מתח קשה במישוש (Compartment כמו "אבן")',
            'חיוורון או קור (מאוחר)',
            'אובדן דופק (מאוחר מאוד)'
          ],
          action: 'מיון אורתופדי מיידי - מדידת לחץ קומפרטמנט',
          context: 'נפוץ אחרי שבר טיביה, חבלות מעיכה. עיכוב = נמק שריר ופגיעה עצבית קבועה.'
        },
        {
          name: 'קרע אכילס מלא',
          nameEn: 'Acute Achilles Rupture',
          urgency: 'תוך ימים - הערכה אורתופדית',
          warningSigns: [
            'תחושת "בעיטה" באחורי הקרסול',
            'Thompson test חיובי',
            'Palpable gap בגיד',
            'חולסה משמעותית בפלנטרפלקסיה',
            'חוסר יכולת להרים את העקב'
          ],
          action: 'הפניה דחופה לאורתופד - החלטה ניתוחית/שמרנית',
          context: 'זמן ההפניה משפיע על תוצאת הטיפול. שמרני אפשרי בקרעים טריים ב-Lateral Stress.'
        },
        {
          name: 'אבחנה מבדלת לבבית/וסקולרית',
          nameEn: 'Cardiac/Vascular Mimics',
          urgency: 'מיידי - שלילת מצב מסכן חיים',
          warningSigns: [
            'כאב כתף שמאל + תעוקה / קוצר נשימה',
            'כאב גבי + אאנוריזמה (טאכיקרדיה, חיוורון, שוק)',
            'כאב בכף רגל + DVT (נפיחות חד-צדדית, חום מקומי)',
            'כאב חד בעמוד שדרה גבי + דיססקציית אאורטה'
          ],
          action: 'מיון מיידי - ECG, אקו, CT אנגיו לפי צורך',
          context: 'כאב מוסקלוסקלטלי לכאורה יכול להסתיר מצב מסכן חיים.'
        }
      ]
    },
    {
      category: 'דגלים נוירולוגיים',
      severity: 'high',
      conditions: [
        {
          name: 'חולשה מתקדמת/חמורה',
          nameEn: 'Progressive/Severe Weakness',
          urgency: 'תוך ימים',
          warningSigns: [
            'חולשה ברמת MRC <3/5',
            'התקדמות מהירה תוך ימים',
            'מעורבות של מספר שורשים',
            'שינוי ברפלקסים',
            'מעורבות סוגרים'
          ],
          action: 'הפניה דחופה - MRI, EMG/NCS',
          context: 'דורש שלילת CES, מיאלופתיה, או שורש גדול דחוס.'
        },
        {
          name: 'אובדן תחושה משמעותי',
          nameEn: 'Significant Sensory Loss',
          urgency: 'תוך ימים',
          warningSigns: [
            'אנסטזיה דרמטומלית מלאה',
            'אנסטזיה אוכף (אדום!)',
            'אובדן תחושה דו-צדדי',
            'התקדמות מהירה'
          ],
          action: 'הפניה דחופה לבירור נוירולוגי',
          context: 'דורש שלילת CES, מיאלופתיה.'
        }
      ]
    },
    {
      category: 'דגלים וסקולריים מסכני חיים',
      severity: 'critical',
      conditions: [
        {
          name: 'Deep Vein Thrombosis (DVT)',
          nameEn: 'DVT - פקקת ורידים עמוקה',
          urgency: 'תוך 24 שעות - מיון',
          warningSigns: [
            'נפיחות חד-צדדית של השוק (>3 ס"מ הבדל בהיקף)',
            'כאב בשוק - מחמיר בעמידה / הליכה',
            'חום מקומי + אדמומיות',
            'Homans Sign חיובי (כאב בדורסיפלקסיה פסיבית)',
            'גורמי סיכון: ניתוח/אישפוז לאחרונה, גבס, טיסה ארוכה, סרטן, גלולות'
          ],
          action: '🚨 הפניה דחופה למיון! דורש Doppler US של הוורידים. סיכון לתסחיף ריאתי!',
          context: 'אבחנה מבדלת קריטית מ-Tennis Leg / Calf Strain. אם יש חשד - אסור למסז את האזור!'
        },
        {
          name: 'Pulmonary Embolism (PE)',
          nameEn: 'PE - תסחיף ריאתי',
          urgency: 'מיידי! - 911 / מיון',
          warningSigns: [
            'קוצר נשימה פתאומי (Dyspnea)',
            'כאב חזה פלאוריטי (מחמיר בנשימה)',
            'דופק מהיר (Tachycardia >100)',
            'שיעול דמי / כיח דמי (Hemoptysis)',
            'סינקופה / סחרחורת',
            'גורמי סיכון כמו DVT'
          ],
          action: '🚨🚨 חירום! 911 / מיון מיידי. שיעור תמותה גבוה ללא טיפול!',
          context: 'PE לרוב מתחיל כ-DVT שעלה לריאות. כל מטופל עם DVT חשוד - בדוק PE.'
        },
        {
          name: 'Aortic Aneurysm (AAA)',
          nameEn: 'מפרצת אבי העורקים הבטני',
          urgency: 'מיידי - מיון',
          warningSigns: [
            'כאב גב תחתון או בטן עמוק - "קורע", "פועם"',
            'הקרנה לאשכים / מפשעה',
            'מסה פועמת בבטן (במישוש)',
            'גיל >50, מעשן, יל"ד, היסטוריה משפחתית',
            'אם נקרעה: שוק היפו-וולמי, חיוורון, הכרה ירודה'
          ],
          action: '🚨🚨 חירום מסכן חיים! 911 מיידי. ניתוח דחוף!',
          context: 'AAA הוא חיקוי הקלאסי של "כאב גב". אם מטופל מבוגר עם כאב חדש לא טיפוסי - חשוד.'
        },
        {
          name: 'Cervical Artery Dysfunction (CAD)',
          nameEn: 'CAD - הפרעה של עורקי הצוואר',
          urgency: 'מיידי - מיון',
          warningSigns: [
            '5 D\'s and 3 N\'s',
            'Dizziness (סחרחורת)',
            'Diplopia (ראייה כפולה)',
            'Drop attacks (נפילות פתאומיות)',
            'Dysarthria / Dysphagia (קושי בדיבור / בליעה)',
            'Numbness (נימולים פני)',
            'Nystagmus / Nausea',
            'כאב ראש "הגרוע ביותר בחיי"'
          ],
          action: '🚨 אסור לבצע מניפולציה צווארית! הפניה למיון מיידית - שלילת VBI / Carotid dissection!',
          context: 'בדיקת CAD חובה לפני כל מניפולציה צווארית. סיכון לשבץ.'
        }
      ]
    },
    {
      category: 'דגלים מערכתיים-דלקתיים',
      severity: 'urgent',
      conditions: [
        {
          name: 'Septic Arthritis',
          nameEn: 'דלקת מפרק זיהומית',
          urgency: 'תוך 24 שעות - חירום',
          warningSigns: [
            'מפרק יחיד אדום, חם, נפוח',
            'כאב חמור גם במנוחה',
            'קושי משמעותי בתנועה',
            'חום מערכתי',
            'גורמי סיכון: סוכרת, דיכוי חיסוני, החלפת מפרק, IVDU'
          ],
          action: '🚨 חירום אורתופדי! מיון מיידי - דורש אספירציה דחופה + AB IV',
          context: 'מפרק לא מטופל יכול להיהרס בתוך ימים. הסיבה הנפוצה: Staph aureus.'
        },
        {
          name: 'Spinal Infection',
          nameEn: 'זיהום עמוד שדרה (Discitis / Osteomyelitis)',
          urgency: 'תוך ימים',
          warningSigns: [
            'כאב גב חמור, קבוע, מחמיר בלילה',
            'חום מערכתי',
            'סימני זיהום מערכתיים',
            'גורמי סיכון: IVDU, סוכרת, דיכוי חיסוני, ניתוח גב לאחרונה',
            'CRP/ESR מוגברים'
          ],
          action: '🚨 הפניה דחופה לבירור! MRI עם גדוליניום, תרבית דם.',
          context: 'אבחנה מבדלת חשובה לכאב גב חדש במבוגרים בסיכון.'
        },
        {
          name: 'Polymyalgia Rheumatica (PMR)',
          nameEn: 'פולימיאלגיה רוימטיקה',
          urgency: 'תוך שבוע',
          warningSigns: [
            'גיל >50',
            'כאב + נוקשות בשתי כתפיים ו/או אגן',
            'נוקשות בוקר >45 דקות',
            'התחלה תת-חריפה (שבועות)',
            'ESR / CRP מוגברים',
            'אסוציאציה עם Giant Cell Arteritis (GCA) - דחוף!'
          ],
          action: 'הפניה לרופא משפחה / רוימטולוג. אם יש חשד ל-GCA (כאב ראש, אובדן ראייה) - חירום!',
          context: 'GCA יכול לגרום לעיוורון אם לא מטופל - דורש סטרואידים מיידיים!'
        },
        {
          name: 'Inflammatory Spondyloarthropathy',
          nameEn: 'ספונדיליטיס דלקתית (Ankylosing Spondylitis)',
          urgency: 'תוך שבועות',
          warningSigns: [
            'גיל <40 בהופעה',
            'נוקשות בוקר >30 דקות',
            'הקלה בכאב עם פעילות (לא במנוחה!)',
            'התחלה הדרגתית (>3 חודשים)',
            'תגובה טובה ל-NSAIDs',
            'דלקת SI joint (כאב ישבן לסירוגין)',
            'HLA-B27 חיובי, היסטוריה משפחתית'
          ],
          action: 'הפניה לרוימטולוג. אבחנה מוקדמת + DMARDs/Biologics מונעים נכות.',
          context: 'שונה מ-OA: בוקר נוקשה, צעיר יותר, מחמיר במנוחה, מוקל בתנועה.'
        }
      ]
    }
  ];

  const closeRedFlags = () => {
    setShowRedFlags(false);
  };

  // ========== רינדור הגוף ==========
  const renderBody = () => {
    return (
      <svg viewBox="0 0 400 620" className="w-full max-w-md">
        <defs>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef3e7" />
            <stop offset="50%" stopColor="#fde4cf" />
            <stop offset="100%" stopColor="#f5d0b0" />
          </linearGradient>
          <linearGradient id="muscleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fde4cf" />
            <stop offset="100%" stopColor="#e8b896" />
          </linearGradient>
          <radialGradient id="dotGrad">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e40af" />
          </radialGradient>
          <filter id="bodyShadow">
            <feGaussianBlur stdDeviation="2" />
            <feOffset dx="0" dy="2" />
            <feComponentTransfer><feFuncA type="linear" slope="0.15" /></feComponentTransfer>
            <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* תצוגה קדמית - עם פרטים אנטומיים */}
        {view === 'anterior' && (
          <g filter="url(#bodyShadow)">
            {/* ראש */}
            <ellipse cx="200" cy="55" rx="32" ry="38" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            {/* שיער */}
            <path d="M 168 35 Q 200 18 232 35 Q 234 48 230 60 L 170 60 Q 166 48 168 35" fill="#5d4037" opacity="0.9" />
            {/* עיניים */}
            <ellipse cx="188" cy="52" rx="3" ry="2.2" fill="#3e2723" />
            <ellipse cx="212" cy="52" rx="3" ry="2.2" fill="#3e2723" />
            <ellipse cx="188" cy="51.5" rx="0.8" ry="0.6" fill="white" />
            <ellipse cx="212" cy="51.5" rx="0.8" ry="0.6" fill="white" />
            {/* גבות */}
            <path d="M 184 47 Q 188 45 192 46" stroke="#5d4037" strokeWidth="1.2" fill="none" />
            <path d="M 208 46 Q 212 45 216 47" stroke="#5d4037" strokeWidth="1.2" fill="none" />
            {/* אף */}
            <path d="M 200 56 L 197 68 Q 200 72 203 68 Z" fill="none" stroke="#c8a888" strokeWidth="0.8" />
            {/* פה */}
            <path d="M 192 78 Q 200 82 208 78" stroke="#a0604a" strokeWidth="1.5" fill="none" />
            {/* אוזניים */}
            <path d="M 168 60 Q 164 65 168 75" stroke="#c8a888" strokeWidth="1" fill="url(#skinGrad)" />
            <path d="M 232 60 Q 236 65 232 75" stroke="#c8a888" strokeWidth="1" fill="url(#skinGrad)" />
            
            {/* צוואר */}
            <path d="M 184 88 Q 184 105 188 112 L 212 112 Q 216 105 216 88" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            {/* בליטת הסטרנום */}
            <path d="M 195 105 L 200 110 L 205 105" stroke="#a07050" strokeWidth="0.5" fill="none" />
            
            {/* כתפיים וטראפז */}
            <path d="M 188 112 Q 165 115 145 130 Q 130 140 130 148 Q 138 145 152 145" fill="url(#muscleGrad)" stroke="#c8a888" strokeWidth="1.2" />
            <path d="M 212 112 Q 235 115 255 130 Q 270 140 270 148 Q 262 145 248 145" fill="url(#muscleGrad)" stroke="#c8a888" strokeWidth="1.2" />
            
            {/* גוף עליון - חזה */}
            <path d="M 145 130 Q 138 145 138 175 L 145 220 L 200 232 L 255 220 L 262 175 Q 262 145 255 130 Q 230 145 200 145 Q 170 145 145 130 Z" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            
            {/* קווי שריר חזה - פקטורליס */}
            <path d="M 200 145 L 200 220" stroke="#a07050" strokeWidth="0.7" fill="none" opacity="0.6" />
            <path d="M 160 158 Q 180 175 198 178" stroke="#c89070" strokeWidth="0.8" fill="none" opacity="0.7" />
            <path d="M 240 158 Q 220 175 202 178" stroke="#c89070" strokeWidth="0.8" fill="none" opacity="0.7" />
            <path d="M 165 175 Q 182 188 198 188" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.5" />
            <path d="M 235 175 Q 218 188 202 188" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.5" />
            
            {/* פטמות */}
            <circle cx="172" cy="180" r="2.5" fill="#a07050" opacity="0.5" />
            <circle cx="228" cy="180" r="2.5" fill="#a07050" opacity="0.5" />
            
            {/* בטן */}
            <path d="M 145 220 L 150 290 L 250 290 L 255 220 Z" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            
            {/* קוביות בטן */}
            <line x1="200" y1="220" x2="200" y2="285" stroke="#a07050" strokeWidth="0.6" opacity="0.5" />
            <line x1="170" y1="240" x2="230" y2="240" stroke="#c89070" strokeWidth="0.5" opacity="0.5" />
            <line x1="172" y1="258" x2="228" y2="258" stroke="#c89070" strokeWidth="0.5" opacity="0.5" />
            <line x1="174" y1="275" x2="226" y2="275" stroke="#c89070" strokeWidth="0.5" opacity="0.5" />
            
            {/* טבור */}
            <ellipse cx="200" cy="265" rx="2" ry="3" fill="#a07050" opacity="0.5" />
            
            {/* זרוע ימין */}
            <path d="M 130 148 Q 115 158 113 195 Q 112 220 117 240 Q 116 280 110 320" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            <path d="M 152 145 Q 138 158 138 195 Q 138 220 143 240 Q 140 280 130 320" fill="none" stroke="#c8a888" strokeWidth="0.6" />
            
            {/* ביצפס/טריצפס - קווים */}
            <path d="M 122 165 Q 130 185 128 215" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.6" />
            <path d="M 145 165 Q 138 185 140 215" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.5" />
            
            {/* זרוע שמאל */}
            <path d="M 270 148 Q 285 158 287 195 Q 288 220 283 240 Q 284 280 290 320" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            <path d="M 248 145 Q 262 158 262 195 Q 262 220 257 240 Q 260 280 270 320" fill="none" stroke="#c8a888" strokeWidth="0.6" />
            <path d="M 278 165 Q 270 185 272 215" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.6" />
            <path d="M 255 165 Q 262 185 260 215" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.5" />
            
            {/* כפות יד */}
            <ellipse cx="113" cy="340" rx="14" ry="20" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            <ellipse cx="287" cy="340" rx="14" ry="20" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            {/* אצבעות */}
            <line x1="105" y1="355" x2="100" y2="365" stroke="#c8a888" strokeWidth="1.5" />
            <line x1="113" y1="358" x2="113" y2="370" stroke="#c8a888" strokeWidth="1.5" />
            <line x1="120" y1="357" x2="123" y2="368" stroke="#c8a888" strokeWidth="1.5" />
            <line x1="295" y1="355" x2="300" y2="365" stroke="#c8a888" strokeWidth="1.5" />
            <line x1="287" y1="358" x2="287" y2="370" stroke="#c8a888" strokeWidth="1.5" />
            <line x1="280" y1="357" x2="277" y2="368" stroke="#c8a888" strokeWidth="1.5" />
            
            {/* אגן */}
            <path d="M 150 290 Q 145 310 152 340 L 200 355 L 248 340 Q 255 310 250 290 Z" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            
            {/* קו הבריאות */}
            <path d="M 170 305 Q 200 312 230 305" stroke="#a07050" strokeWidth="0.5" fill="none" opacity="0.4" />
            
            {/* רגל ימין - קוואדריצפס */}
            <path d="M 152 340 Q 158 380 162 430 Q 165 480 168 530 L 175 550" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            <path d="M 200 355 Q 195 380 192 430 Q 188 480 185 530 L 180 550" fill="none" stroke="#c8a888" strokeWidth="0.6" />
            
            {/* רגל שמאל */}
            <path d="M 248 340 Q 242 380 238 430 Q 235 480 232 530 L 225 550" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            <path d="M 200 355 Q 205 380 208 430 Q 212 480 215 530 L 220 550" fill="none" stroke="#c8a888" strokeWidth="0.6" />
            
            {/* גבולות פנימיים של הרגליים */}
            <path d="M 152 340 Q 158 380 162 430 Q 165 480 168 530 L 175 550 L 185 550 Q 200 360 200 355" fill="url(#skinGrad)" stroke="none" />
            <path d="M 248 340 Q 242 380 238 430 Q 235 480 232 530 L 225 550 L 215 550 Q 200 360 200 355" fill="url(#skinGrad)" stroke="none" />
            
            {/* קווי קוואדריצפס */}
            <path d="M 175 365 Q 178 395 175 425" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.5" />
            <path d="M 195 365 Q 192 395 195 425" stroke="#c89070" strokeWidth="0.5" fill="none" opacity="0.4" />
            <path d="M 225 365 Q 222 395 225 425" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.5" />
            <path d="M 205 365 Q 208 395 205 425" stroke="#c89070" strokeWidth="0.5" fill="none" opacity="0.4" />
            
            {/* פיקת ברכיים */}
            <ellipse cx="178" cy="430" rx="6" ry="8" fill="none" stroke="#a07050" strokeWidth="0.7" opacity="0.6" />
            <ellipse cx="222" cy="430" rx="6" ry="8" fill="none" stroke="#a07050" strokeWidth="0.7" opacity="0.6" />
            
            {/* שוקיים - שריר טיביאליס */}
            <path d="M 170 460 Q 168 495 170 525" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.5" />
            <path d="M 230 460 Q 232 495 230 525" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.5" />
            
            {/* קרסוליים */}
            <ellipse cx="173" cy="548" rx="4" ry="3" fill="none" stroke="#a07050" strokeWidth="0.5" opacity="0.5" />
            <ellipse cx="227" cy="548" rx="4" ry="3" fill="none" stroke="#a07050" strokeWidth="0.5" opacity="0.5" />
            
            {/* כפות רגל */}
            <ellipse cx="172" cy="568" rx="15" ry="10" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            <ellipse cx="228" cy="568" rx="15" ry="10" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            {/* אצבעות רגליים */}
            <circle cx="160" cy="572" r="2" fill="#c8a888" />
            <circle cx="165" cy="574" r="1.8" fill="#c8a888" />
            <circle cx="170" cy="575" r="1.6" fill="#c8a888" />
            <circle cx="175" cy="575" r="1.4" fill="#c8a888" />
            <circle cx="180" cy="574" r="1.2" fill="#c8a888" />
            <circle cx="240" cy="572" r="2" fill="#c8a888" />
            <circle cx="235" cy="574" r="1.8" fill="#c8a888" />
            <circle cx="230" cy="575" r="1.6" fill="#c8a888" />
            <circle cx="225" cy="575" r="1.4" fill="#c8a888" />
            <circle cx="220" cy="574" r="1.2" fill="#c8a888" />
          </g>
        )}

        {/* תצוגה אחורית - עם פרטים אנטומיים */}
        {view === 'posterior' && (
          <g filter="url(#bodyShadow)">
            {/* ראש - אחורי */}
            <ellipse cx="200" cy="55" rx="32" ry="38" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            {/* שיער מלא */}
            <path d="M 168 30 Q 200 12 232 30 Q 240 60 233 85 L 167 85 Q 160 60 168 30" fill="#5d4037" opacity="0.95" />
            {/* קווי שיער */}
            <path d="M 175 50 Q 200 47 225 50" stroke="#3e2723" strokeWidth="0.5" fill="none" opacity="0.5" />
            <path d="M 175 65 Q 200 62 225 65" stroke="#3e2723" strokeWidth="0.5" fill="none" opacity="0.5" />
            
            {/* צוואר */}
            <path d="M 184 88 Q 184 105 188 112 L 212 112 Q 216 105 216 88" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            
            {/* גוף עליון - גב עם שכמות */}
            <path d="M 145 130 Q 138 145 138 175 L 145 225 L 200 235 L 255 225 L 262 175 Q 262 145 255 130 Q 230 145 200 142 Q 170 145 145 130 Z" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            
            {/* טראפז */}
            <path d="M 188 115 Q 175 130 200 145 Q 225 130 212 115" fill="url(#muscleGrad)" stroke="#c8a888" strokeWidth="0.8" opacity="0.6" />
            <path d="M 188 115 Q 200 140 212 115" fill="none" stroke="#a07050" strokeWidth="0.7" />
            
            {/* עמוד שדרה */}
            <line x1="200" y1="115" x2="200" y2="290" stroke="#a07050" strokeWidth="1.2" />
            {/* פרוצסוסי ספינוסוס */}
            {[125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275].map((y, i) => (
              <line key={i} x1="197" y1={y} x2="203" y2={y} stroke="#a07050" strokeWidth="0.5" />
            ))}
            
            {/* שכמות ימין ושמאל */}
            <path d="M 158 145 L 165 175 L 180 200 L 198 178 L 198 148 Z" fill="url(#muscleGrad)" stroke="#c8a888" strokeWidth="0.8" opacity="0.7" />
            <path d="M 242 145 L 235 175 L 220 200 L 202 178 L 202 148 Z" fill="url(#muscleGrad)" stroke="#c8a888" strokeWidth="0.8" opacity="0.7" />
            
            {/* לטיסימוס דורסי */}
            <path d="M 145 200 Q 165 225 180 245" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.5" />
            <path d="M 255 200 Q 235 225 220 245" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.5" />
            
            {/* גב תחתון */}
            <path d="M 145 225 L 150 290 L 250 290 L 255 225 Z" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            
            {/* גומות ונוס */}
            <circle cx="180" cy="285" r="2" fill="#a07050" opacity="0.5" />
            <circle cx="220" cy="285" r="2" fill="#a07050" opacity="0.5" />
            
            {/* זרוע ימין */}
            <path d="M 130 148 Q 115 158 113 195 Q 112 220 117 240 Q 116 280 110 320" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            <path d="M 152 145 Q 138 158 138 195 Q 138 220 143 240 Q 140 280 130 320" fill="none" stroke="#c8a888" strokeWidth="0.6" />
            <path d="M 122 165 Q 128 185 130 215" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.5" />
            
            {/* זרוע שמאל */}
            <path d="M 270 148 Q 285 158 287 195 Q 288 220 283 240 Q 284 280 290 320" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            <path d="M 248 145 Q 262 158 262 195 Q 262 220 257 240 Q 260 280 270 320" fill="none" stroke="#c8a888" strokeWidth="0.6" />
            <path d="M 278 165 Q 272 185 270 215" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.5" />
            
            {/* כפות יד */}
            <ellipse cx="113" cy="340" rx="14" ry="20" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            <ellipse cx="287" cy="340" rx="14" ry="20" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            
            {/* גלוטאוסים */}
            <path d="M 150 290 Q 142 310 152 350 L 200 365 L 248 350 Q 258 310 250 290 Z" fill="url(#muscleGrad)" stroke="#c8a888" strokeWidth="1.2" />
            <path d="M 200 295 L 200 360" stroke="#a07050" strokeWidth="0.7" opacity="0.6" />
            <path d="M 175 320 Q 188 335 200 340" stroke="#c89070" strokeWidth="0.5" fill="none" opacity="0.5" />
            <path d="M 225 320 Q 212 335 200 340" stroke="#c89070" strokeWidth="0.5" fill="none" opacity="0.5" />
            
            {/* רגל ימין - האמסטרינג + גסטרוקנמיוס */}
            <path d="M 152 350 Q 158 390 162 440 Q 165 490 168 540 L 175 555" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            <path d="M 200 365 Q 195 390 192 440 Q 188 490 185 540 L 180 555" fill="none" stroke="#c8a888" strokeWidth="0.6" />
            <path d="M 152 350 Q 158 390 162 440 Q 165 490 168 540 L 175 555 L 185 555 Q 200 365 200 365" fill="url(#skinGrad)" stroke="none" />
            
            {/* רגל שמאל */}
            <path d="M 248 350 Q 242 390 238 440 Q 235 490 232 540 L 225 555" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            <path d="M 200 365 Q 205 390 208 440 Q 212 490 215 540 L 220 555" fill="none" stroke="#c8a888" strokeWidth="0.6" />
            <path d="M 248 350 Q 242 390 238 440 Q 235 490 232 540 L 225 555 L 215 555 Q 200 365 200 365" fill="url(#skinGrad)" stroke="none" />
            
            {/* קווי האמסטרינג */}
            <path d="M 175 380 Q 178 410 175 440" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.5" />
            <path d="M 225 380 Q 222 410 225 440" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.5" />
            
            {/* פוסה פופליטאלית */}
            <ellipse cx="178" cy="440" rx="5" ry="6" fill="none" stroke="#a07050" strokeWidth="0.4" opacity="0.5" />
            <ellipse cx="222" cy="440" rx="5" ry="6" fill="none" stroke="#a07050" strokeWidth="0.4" opacity="0.5" />
            
            {/* גסטרוקנמיוס */}
            <path d="M 170 465 Q 162 490 168 520" stroke="#c89070" strokeWidth="0.7" fill="none" opacity="0.6" />
            <path d="M 188 465 Q 192 490 188 520" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.5" />
            <path d="M 230 465 Q 238 490 232 520" stroke="#c89070" strokeWidth="0.7" fill="none" opacity="0.6" />
            <path d="M 212 465 Q 208 490 212 520" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.5" />
            
            {/* גיד אכילס */}
            <line x1="173" y1="535" x2="175" y2="555" stroke="#a07050" strokeWidth="1.5" opacity="0.7" />
            <line x1="227" y1="535" x2="225" y2="555" stroke="#a07050" strokeWidth="1.5" opacity="0.7" />
            
            {/* כפות רגל מאחור */}
            <ellipse cx="172" cy="568" rx="14" ry="9" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            <ellipse cx="228" cy="568" rx="14" ry="9" fill="url(#skinGrad)" stroke="#c8a888" strokeWidth="1.2" />
            {/* קלקנאוס */}
            <ellipse cx="172" cy="572" rx="6" ry="4" fill="none" stroke="#a07050" strokeWidth="0.5" opacity="0.5" />
            <ellipse cx="228" cy="572" rx="6" ry="4" fill="none" stroke="#a07050" strokeWidth="0.5" opacity="0.5" />
          </g>
        )}

        {/* נקודות אינטראקטיביות */}
        {regionsByView[view].map((region, idx) => (
          <g key={`${view}-${idx}`} onClick={() => handleRegionClick(region.id)} style={{ cursor: 'pointer' }}>
            <circle cx={region.cx} cy={region.cy} r={region.r + 6} fill="#3b82f6" opacity="0.15">
              <animate attributeName="r" values={`${region.r + 6};${region.r + 10};${region.r + 6}`} dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.15;0.05;0.15" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx={region.cx} cy={region.cy} r={region.r} fill="url(#dotGrad)" opacity="0.9" />
            <circle cx={region.cx} cy={region.cy} r={region.r - 6} fill="white" opacity="0.95" />
            <text x={region.cx} y={region.cy + 4} textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e40af">+</text>
          </g>
        ))}
      </svg>
    );
  };

  // ========== חישוב סטטיסטיקות ==========
  const totalPathologies = Object.values(regionsData).reduce((sum, r) => sum + r.pathologies.length, 0);
  const totalTests = Object.values(regionsData).reduce((sum, r) => sum + r.pathologies.reduce((s, p) => s + p.tests.length, 0), 0);

  // ========== פונקציות חיפוש ==========
  const youtubeSearch = (testName) => {
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(testName + ' clinical test')}`;
  };

  const googleImageSearch = (testName) => {
    return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(testName + ' clinical test')}`;
  };

  // ========== כפתור חזרה לעמוד הראשי - תמיד נראה ==========
  const HomeButton = () => (
    <button
      onClick={goHome}
      className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-full p-3 md:p-4 shadow-2xl hover:shadow-blue-500/50 hover:scale-110 active:scale-95 transition-all border-2 border-white"
      style={{ boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)' }}
    >
      <Home className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );

  // ========== כפתור חזרה לאחור - מופיע במודאלים ==========
  const BackButton = () => (
    <button
      onClick={goBack}
      className="flex items-center gap-1.5 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm"
    >
      <ArrowLeft className="w-4 h-4 rotate-180" />
      <span className="text-sm font-medium">חזרה</span>
    </button>
  );

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 pb-24" style={{ fontFamily: "'Heebo', 'Assistant', sans-serif" }}>
      <HomeButton />

      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-10 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-base md:text-xl font-bold text-slate-800 truncate">אטלס בדיקות אורתופדיות</h1>
              <p className="text-[10px] md:text-xs text-slate-500 truncate">{totalPathologies} פתולוגיות · {totalTests} בדיקות קליניות</p>
            </div>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            <button onClick={() => setShowInfo(true)} className="p-2 hover:bg-slate-100 rounded-lg transition-colors" title="מידע">
              <Info className="w-5 h-5 text-slate-600" />
            </button>
            <button
              onClick={() => {
                if (window.confirm('האם אתה בטוח שברצונך להתנתק?\nתצטרך להזין סיסמה שוב בכניסה הבאה.')) {
                  if (onLogout) onLogout();
                }
              }}
              className="p-2 hover:bg-red-50 rounded-lg transition-colors"
              title="התנתקות"
            >
              <span className="text-lg">🔓</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* חיפוש */}
        <div className="bg-white rounded-2xl border border-slate-200 p-3 md:p-4 mb-4 shadow-sm">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="חפש פתולוגיה או בדיקה..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10 pl-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-blue-400 focus:bg-white transition-colors"
            />
          </div>

          {searchResults && searchResults.length > 0 && (
            <div className="mt-3 max-h-64 overflow-y-auto space-y-2">
              {searchResults.map((res, idx) => (
                <button key={idx} onClick={() => { setSelectedRegion(res.regionKey); setSelectedPathology(res.pathIdx); setSearchQuery(''); }} className="w-full text-right p-3 bg-slate-50 hover:bg-blue-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                  <div className="text-sm font-semibold text-slate-800">{res.pathology.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{res.region} · {res.pathology.tests.length} בדיקות</div>
                </button>
              ))}
            </div>
          )}
          {searchResults && searchResults.length === 0 && (
            <div className="mt-3 text-center text-sm text-slate-500 py-4">לא נמצאו תוצאות</div>
          )}
        </div>

        {/* כפתורי כלים מקצועיים - גריד קומפקטי */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-4">
          {/* אבחון לפי סימפטומים */}
          <button
            onClick={() => setShowSymptomSearch(true)}
            className="bg-gradient-to-br from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-xl p-2.5 shadow-md hover:shadow-lg active:scale-95 transition-all text-center"
          >
            <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-1.5">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div className="font-bold text-[11px] md:text-xs leading-tight">סימפטומים</div>
          </button>

          {/* דגלים אדומים */}
          <button
            onClick={() => setShowRedFlags(true)}
            className="bg-gradient-to-br from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white rounded-xl p-2.5 shadow-md hover:shadow-lg active:scale-95 transition-all text-center"
          >
            <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-1.5 relative">
              <Siren className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></span>
            </div>
            <div className="font-bold text-[11px] md:text-xs leading-tight">🚨 דגלים</div>
          </button>

          {/* מועדפים */}
          <button
            onClick={() => setShowFavorites(true)}
            className="bg-gradient-to-br from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl p-2.5 shadow-md hover:shadow-lg active:scale-95 transition-all text-center relative"
          >
            <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-1.5">
              <Star className="w-5 h-5 fill-white" />
            </div>
            <div className="font-bold text-[11px] md:text-xs leading-tight">⭐ מועדפים</div>
            {favoritePathologies.length + favoriteTests.length > 0 && (
              <span className="absolute top-1 right-1 bg-white text-orange-600 text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {favoritePathologies.length + favoriteTests.length}
              </span>
            )}
          </button>

          {/* אנמנזה מובנית */}
          <button
            onClick={() => setShowAnamnesis(true)}
            className="bg-gradient-to-br from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-xl p-2.5 shadow-md hover:shadow-lg active:scale-95 transition-all text-center"
          >
            <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-1.5">
              <ClipboardList className="w-5 h-5" />
            </div>
            <div className="font-bold text-[11px] md:text-xs leading-tight">📋 אנמנזה</div>
          </button>

          {/* אבחנה מבדלת */}
          <button
            onClick={() => setShowDifferential(true)}
            className="bg-gradient-to-br from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white rounded-xl p-2.5 shadow-md hover:shadow-lg active:scale-95 transition-all text-center"
          >
            <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-1.5">
              <GitCompare className="w-5 h-5" />
            </div>
            <div className="font-bold text-[11px] md:text-xs leading-tight">🔀 מבדלת</div>
          </button>

          {/* קלאסטרים */}
          <button
            onClick={() => setShowClusters(true)}
            className="bg-gradient-to-br from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-xl p-2.5 shadow-md hover:shadow-lg active:scale-95 transition-all text-center"
          >
            <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-1.5">
              <Layers className="w-5 h-5" />
            </div>
            <div className="font-bold text-[11px] md:text-xs leading-tight">🎯 קלאסטרים</div>
          </button>

          {/* Outcome Measures */}
          <button
            onClick={() => setShowOutcomeMeasures(true)}
            className="bg-gradient-to-br from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-xl p-2.5 shadow-md hover:shadow-lg active:scale-95 transition-all text-center"
          >
            <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-1.5">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div className="font-bold text-[11px] md:text-xs leading-tight">📊 שאלונים</div>
          </button>

          {/* בדיקה נוירולוגית */}
          <button
            onClick={() => setShowNeuroExam(true)}
            className="bg-gradient-to-br from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white rounded-xl p-2.5 shadow-md hover:shadow-lg active:scale-95 transition-all text-center"
          >
            <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-1.5">
              <Brain className="w-5 h-5" />
            </div>
            <div className="font-bold text-[11px] md:text-xs leading-tight">🧠 נוירו</div>
          </button>

          {/* אנטומיה ו-ROM */}
          <button
            onClick={() => setShowAnatomy(true)}
            className="bg-gradient-to-br from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white rounded-xl p-2.5 shadow-md hover:shadow-lg active:scale-95 transition-all text-center"
          >
            <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-1.5">
              <Layers className="w-5 h-5" />
            </div>
            <div className="font-bold text-[11px] md:text-xs leading-tight">🦴 אנטומיה</div>
          </button>

          {/* כרטיסי מטופלים */}
          <button
            onClick={() => setShowPatients(true)}
            className="bg-gradient-to-br from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-xl p-2.5 shadow-md hover:shadow-lg active:scale-95 transition-all text-center relative"
          >
            <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-1.5">
              <Users className="w-5 h-5" />
            </div>
            <div className="font-bold text-[11px] md:text-xs leading-tight">👥 מטופלים</div>
            {patients.length > 0 && (
              <span className="absolute top-1 right-1 bg-white text-blue-600 text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {patients.length}
              </span>
            )}
          </button>
        </div>

        {/* גוף המפה */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-l from-slate-50 to-blue-50/40 px-4 md:px-6 py-3 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h3 className="text-sm md:text-base font-semibold text-slate-800">תצוגה: {view === 'anterior' ? 'קדמית' : 'אחורית'}</h3>
              <p className="text-[10px] md:text-xs text-slate-500">{view === 'anterior' ? 'Anterior View' : 'Posterior View'}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setView('anterior')} className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${view === 'anterior' ? 'bg-blue-600 text-white shadow-md shadow-blue-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>קדמי</button>
              <button onClick={() => setView('posterior')} className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${view === 'posterior' ? 'bg-blue-600 text-white shadow-md shadow-blue-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>אחורי</button>
            </div>
          </div>

          <div className="p-4 md:p-8">
            <div className="flex flex-col items-center">
              {renderBody()}
            </div>
          </div>

          <div className="px-4 md:px-6 pb-6 pt-2 border-t border-slate-100">
            <h3 className="text-xs font-semibold text-slate-500 mb-2 mt-3">בחירה מהירה לפי אזור:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {Object.entries(regionsData).map(([key, region]) => (
                <button
                  key={key}
                  onClick={() => handleRegionClick(key)}
                  className="px-3 py-2 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 border border-slate-200 rounded-lg text-xs md:text-sm text-slate-700 hover:text-blue-700 transition-colors text-right flex items-center justify-between"
                >
                  <span className="truncate">{region.name}</span>
                  <span className="text-[10px] text-slate-400 mr-1 flex-shrink-0 bg-white px-1.5 py-0.5 rounded">{region.pathologies.length}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Modal של אזור */}
      {selectedRegion && selectedPathology === null && (() => {
        const subLocations = subLocationsByRegion[selectedRegion] || [];
        const allPathologies = regionsData[selectedRegion].pathologies;
        const filteredPathologies = selectedSubLocation
          ? allPathologies.map((p, idx) => ({ p, idx })).filter(({ p }) => isPathologyInSubLocation(p, selectedSubLocation))
          : allPathologies.map((p, idx) => ({ p, idx }));
        const currentSubLoc = subLocations.find(s => s.id === selectedSubLocation);

        return (
          <div className="fixed inset-0 z-20 bg-white overflow-y-auto">
            <div className="max-w-2xl mx-auto w-full min-h-screen">
              <div className="bg-gradient-to-l from-blue-600 to-cyan-500 px-5 py-4 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-3 min-w-0">
                  <BackButton />
                  <div className="min-w-0">
                    <h2 className="text-lg md:text-2xl font-bold text-white truncate">
                      {regionsData[selectedRegion].name}
                      {currentSubLoc && <span className="text-sm md:text-lg text-blue-100"> · {currentSubLoc.label}</span>}
                    </h2>
                    <p className="text-blue-100 text-xs md:text-sm">
                      {currentSubLoc
                        ? `${filteredPathologies.length} פתולוגיות באזור הזה`
                        : `${regionsData[selectedRegion].nameEn} · ${allPathologies.length} פתולוגיות`}
                    </p>
                  </div>
                </div>
                <button onClick={goHome} className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 md:p-6">
                {/* בורר תת-מיקומים */}
                {subLocations.length > 0 && (
                  <div className="mb-5">
                    <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-blue-600" />
                      איפה הכאב? <span className="text-xs text-slate-500 font-normal">(אופציונלי)</span>
                    </h3>
                    <div className={`grid gap-2 ${subLocations.length === 5 ? 'grid-cols-3' : subLocations.length >= 4 ? 'grid-cols-2' : 'grid-cols-2'}`}>
                      {subLocations.map(subLoc => {
                        const isActive = selectedSubLocation === subLoc.id;
                        const matchCount = allPathologies.filter(p => isPathologyInSubLocation(p, subLoc.id)).length;
                        return (
                          <button
                            key={subLoc.id}
                            onClick={() => setSelectedSubLocation(isActive ? null : subLoc.id)}
                            className={`p-3 rounded-xl border-2 transition-all text-right ${
                              isActive
                                ? 'bg-gradient-to-br from-blue-500 to-cyan-500 border-blue-600 text-white shadow-lg'
                                : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-1 mb-1">
                              <span className="text-lg">{subLoc.icon}</span>
                              <span className={`text-[10px] font-bold rounded-full px-1.5 py-0.5 ${isActive ? 'bg-white/30 text-white' : 'bg-blue-100 text-blue-700'}`}>
                                {matchCount}
                              </span>
                            </div>
                            <div className="text-xs md:text-sm font-bold">{subLoc.label}</div>
                            <div className={`text-[10px] mt-0.5 ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
                              {subLoc.labelEn}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {selectedSubLocation && (
                      <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          <Target className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs md:text-sm text-blue-900 font-medium">{currentSubLoc?.description}</p>
                            <button
                              onClick={() => setSelectedSubLocation(null)}
                              className="text-[11px] text-blue-700 hover:text-blue-900 mt-1 font-medium underline"
                            >
                              הצג את כל הפתולוגיות באזור
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* כותרת רשימת הפתולוגיות */}
                <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 bg-blue-600 rounded-full"></span>
                  {selectedSubLocation ? `פתולוגיות באזור ${currentSubLoc?.label}` : 'כל הפתולוגיות'}
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-normal">
                    {filteredPathologies.length}
                  </span>
                </h3>

                {/* רשימת פתולוגיות */}
                {filteredPathologies.length === 0 ? (
                  <div className="text-center py-8 bg-slate-50 rounded-xl">
                    <div className="text-4xl mb-2">🤔</div>
                    <p className="text-sm text-slate-600">לא נמצאו פתולוגיות באזור הזה</p>
                    <button
                      onClick={() => setSelectedSubLocation(null)}
                      className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium transition-colors"
                    >
                      הצג את כל הפתולוגיות
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredPathologies.map(({ p: path, idx }) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedPathology(idx)}
                        className="w-full text-right p-4 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 rounded-xl transition-all group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-slate-800 group-hover:text-blue-700 text-sm md:text-base flex items-center gap-1.5">
                              {path.name}
                              {isPathologyFavorite(selectedRegion, idx) && (
                                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                              )}
                            </h4>
                            <p className="text-[11px] text-slate-500 mt-0.5">{path.nameEn}</p>
                            <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">{path.shortDesc}</p>
                            <div className="flex items-center gap-1.5 mt-2 text-xs text-blue-600">
                              <AlertCircle className="w-3 h-3" />
                              <span>{path.tests.length} בדיקות קליניות</span>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 rotate-180 flex-shrink-0 mt-1" />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Modal של פתולוגיה */}
      {selectedRegion && selectedPathology !== null && selectedTest === null && (
        <div className="fixed inset-0 z-20 bg-white overflow-y-auto">
          <div className="max-w-4xl mx-auto w-full min-h-screen">
            <div className="bg-gradient-to-l from-blue-600 to-cyan-500 px-4 py-4 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <BackButton />
                <div className="min-w-0 flex-1">
                  <h2 className="text-sm md:text-xl font-bold text-white truncate">{regionsData[selectedRegion].pathologies[selectedPathology].name}</h2>
                  <p className="text-blue-100 text-[10px] md:text-sm truncate">{regionsData[selectedRegion].pathologies[selectedPathology].nameEn}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <button
                  onClick={() => togglePathologyFavorite(selectedRegion, selectedPathology)}
                  className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="הוסף למועדפים"
                >
                  <Star className={`w-5 h-5 ${isPathologyFavorite(selectedRegion, selectedPathology) ? 'fill-yellow-300 text-yellow-300' : ''}`} />
                </button>
                <button onClick={goHome} className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-4 md:p-6">
              {/* תיאור מפורט של הפתולוגיה */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                <h3 className="text-sm font-semibold text-blue-800 mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" /> אודות הפתולוגיה
                </h3>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                  {regionsData[selectedRegion].pathologies[selectedPathology].fullDescription}
                </p>
              </div>

              {/* סימנים קליניים */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
                <h3 className="text-sm font-semibold text-amber-800 mb-2">🔍 סימנים קליניים</h3>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                  {regionsData[selectedRegion].pathologies[selectedPathology].clinicalSigns}
                </p>
              </div>

              {/* כפתורי תמונות וסרטונים של הפתולוגיה */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <a
                  href={pathologyImageSearch(regionsData[selectedRegion].pathologies[selectedPathology].nameEn)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-gradient-to-l from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  <ImageIcon className="w-5 h-5" />
                  <span className="text-xs md:text-sm font-semibold">תמונות אנטומיות</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(regionsData[selectedRegion].pathologies[selectedPathology].nameEn + ' explained anatomy')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-gradient-to-l from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  <Youtube className="w-5 h-5" />
                  <span className="text-xs md:text-sm font-semibold">סרטוני הסבר</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>

              {/* כפתור פרוטוקול טיפול */}
              <button
                onClick={() => { setShowTreatment(true); setTreatmentStage('acute'); }}
                className="w-full mb-5 bg-gradient-to-l from-indigo-600 via-blue-600 to-cyan-600 hover:from-indigo-700 hover:via-blue-700 hover:to-cyan-700 text-white rounded-xl p-4 transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 text-right">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ListChecks className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm md:text-base">📋 פרוטוקול טיפול</div>
                    <div className="text-[10px] md:text-xs text-white/85">חריף · סאב-אקוטי · כרוני · כירורגי</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 rotate-180 opacity-80 group-hover:opacity-100 group-hover:-translate-x-1 transition-all flex-shrink-0" />
              </button>

              {/* בדיקות */}
              <h3 className="text-sm md:text-base font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-600 rounded-full"></span>
                בדיקות קליניות ({regionsData[selectedRegion].pathologies[selectedPathology].tests.length})
              </h3>
              
              <div className="space-y-2 mb-6">
                {regionsData[selectedRegion].pathologies[selectedPathology].tests.map((test, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTest(idx)}
                    className="w-full text-right p-3 md:p-4 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 rounded-xl transition-all group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-800 group-hover:text-blue-700 text-sm md:text-base">{test.name}</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">{test.nameEn}</p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md text-[10px] font-medium">
                            Sn: {test.sn}
                          </span>
                          <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-md text-[10px] font-medium">
                            Sp: {test.sp}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 rotate-180 flex-shrink-0 mt-1" />
                    </div>
                  </button>
                ))}
              </div>

              {/* טבלת סיכום */}
              <h3 className="text-sm md:text-base font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-600 rounded-full"></span>
                📊 טבלת סיכום
              </h3>
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-xs md:text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="text-right px-3 py-2.5 font-semibold text-slate-700">בדיקה</th>
                      <th className="text-center px-2 py-2.5 font-semibold text-emerald-700">Sn</th>
                      <th className="text-center px-2 py-2.5 font-semibold text-amber-700">Sp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regionsData[selectedRegion].pathologies[selectedPathology].tests.map((test, idx) => (
                      <tr key={idx} className="border-t border-slate-200 hover:bg-slate-50 cursor-pointer" onClick={() => setSelectedTest(idx)}>
                        <td className="px-3 py-2.5 font-medium text-slate-800">{test.name}</td>
                        <td className="px-2 py-2.5 text-center text-emerald-700 font-medium">{test.sn}</td>
                        <td className="px-2 py-2.5 text-center text-amber-700 font-medium">{test.sp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal של בדיקה ספציפית */}
      {selectedRegion && selectedPathology !== null && selectedTest !== null && (
        <div className="fixed inset-0 z-20 bg-white overflow-y-auto">
          <div className="max-w-3xl mx-auto w-full min-h-screen">
            <div className="bg-gradient-to-l from-blue-600 to-cyan-500 px-4 py-4 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <BackButton />
                <div className="min-w-0 flex-1">
                  <h2 className="text-sm md:text-xl font-bold text-white truncate">
                    {regionsData[selectedRegion].pathologies[selectedPathology].tests[selectedTest].name}
                  </h2>
                  <p className="text-blue-100 text-[10px] md:text-sm truncate">
                    {regionsData[selectedRegion].pathologies[selectedPathology].tests[selectedTest].nameEn}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <button
                  onClick={() => toggleTestFavorite(selectedRegion, selectedPathology, selectedTest)}
                  className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="הוסף למועדפים"
                >
                  <Star className={`w-5 h-5 ${isTestFavorite(selectedRegion, selectedPathology, selectedTest) ? 'fill-yellow-300 text-yellow-300' : ''}`} />
                </button>
                <button onClick={goHome} className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-4 md:p-6">
              {(() => {
                const test = regionsData[selectedRegion].pathologies[selectedPathology].tests[selectedTest];
                return (
                  <>
                    {/* סטטיסטיקה */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-center">
                        <div className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wide mb-1">Sensitivity</div>
                        <div className="text-2xl font-bold text-emerald-700">{test.sn}</div>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
                        <div className="text-[10px] text-amber-600 font-semibold uppercase tracking-wide mb-1">Specificity</div>
                        <div className="text-2xl font-bold text-amber-700">{test.sp}</div>
                      </div>
                    </div>

                    {/* כפתורי וידאו ותמונות */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <a
                        href={youtubeSearch(test.nameEn)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 p-3 bg-gradient-to-l from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
                      >
                        <Youtube className="w-5 h-5" />
                        <span className="text-sm font-semibold">סרטוני הדגמה</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                      </a>
                      <a
                        href={googleImageSearch(test.nameEn)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 p-3 bg-gradient-to-l from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
                      >
                        <ImageIcon className="w-5 h-5" />
                        <span className="text-sm font-semibold">תמונות הדגמה</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                      </a>
                    </div>

                    {/* אופן ביצוע */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                      <h3 className="text-sm font-semibold text-blue-800 mb-2 flex items-center gap-1.5">
                        <span>📋</span> אופן ביצוע הבדיקה
                      </h3>
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                        {test.performance}
                      </p>
                    </div>

                    {/* תוצאה חיובית */}
                    <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mb-4">
                      <h3 className="text-sm font-semibold text-rose-800 mb-2 flex items-center gap-1.5">
                        <span>🎯</span> מה זה אומר תוצאה חיובית?
                      </h3>
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                        {test.positive}
                      </p>
                    </div>

                    {/* פרשנות סטטיסטית */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <h3 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-1.5">
                        <span>💡</span> פרשנות סטטיסטית
                      </h3>
                      <div className="space-y-2 text-xs md:text-sm text-slate-700">
                        <p>
                          <strong className="text-emerald-700">Sensitivity {test.sn}:</strong> מתוך 100 חולים אמיתיים בפתולוגיה זו, הבדיקה תזהה {parseInt(test.sn) || '—'} כחיוביים. בדיקה רגישה טובה לשלילה ("רגישות גבוהה = שולל מחלה כשהבדיקה שלילית").
                        </p>
                        <p>
                          <strong className="text-amber-700">Specificity {test.sp}:</strong> מתוך 100 בריאים, הבדיקה תזהה {parseInt(test.sp) || '—'} כשליליים. בדיקה ספציפית טובה לאישוש ("ספציפיות גבוהה = מאשרת מחלה כשהבדיקה חיובית").
                        </p>
                        {parseInt(test.sn) >= 90 && (
                          <p className="bg-emerald-50 border border-emerald-200 rounded p-2 mt-2">
                            ✅ <strong>בדיקה רגישה מאוד</strong> - מצוינת לשלילת האבחנה כשהיא שלילית.
                          </p>
                        )}
                        {parseInt(test.sp) >= 90 && (
                          <p className="bg-amber-50 border border-amber-200 rounded p-2 mt-2">
                            ✅ <strong>בדיקה ספציפית מאוד</strong> - מצוינת לאישוש האבחנה כשהיא חיובית.
                          </p>
                        )}
                      </div>
                    </div>

                    {/* מעבר מהיר בין בדיקות לאותה פתולוגיה */}
                    {regionsData[selectedRegion].pathologies[selectedPathology].tests.length > 1 && (
                      <div className="mt-5 bg-gradient-to-l from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4">
                        <h3 className="text-sm font-semibold text-blue-900 mb-3 flex items-center gap-1.5">
                          <span>🔄</span> בדיקות נוספות לאותה פתולוגיה
                          <span className="text-[10px] text-blue-600 font-normal bg-blue-100 px-2 py-0.5 rounded-full">
                            {regionsData[selectedRegion].pathologies[selectedPathology].tests.length - 1} בדיקות
                          </span>
                        </h3>
                        <p className="text-[11px] md:text-xs text-blue-700 mb-3">השווה Sn/Sp ובחר את הבדיקה המתאימה ביותר</p>

                        <div className="space-y-2">
                          {regionsData[selectedRegion].pathologies[selectedPathology].tests.map((otherTest, otherIdx) => {
                            if (otherIdx === selectedTest) return null;
                            const otherSn = parseInt(otherTest.sn) || 0;
                            const otherSp = parseInt(otherTest.sp) || 0;
                            const isHighSn = otherSn >= 90;
                            const isHighSp = otherSp >= 90;
                            return (
                              <button
                                key={otherIdx}
                                onClick={() => setSelectedTest(otherIdx)}
                                className="w-full text-right p-3 bg-white hover:bg-blue-50 border border-blue-200 hover:border-blue-400 rounded-xl transition-all group active:scale-[0.99]"
                              >
                                <div className="flex items-start justify-between gap-2 mb-2">
                                  <div className="min-w-0 flex-1">
                                    <h4 className="font-semibold text-slate-800 group-hover:text-blue-700 text-sm flex items-center gap-1.5">
                                      {otherTest.name}
                                      {isTestFavorite(selectedRegion, selectedPathology, otherIdx) && (
                                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                                      )}
                                    </h4>
                                    <p className="text-[10px] text-slate-500">{otherTest.nameEn}</p>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 rotate-180 flex-shrink-0 mt-1" />
                                </div>

                                <div className="flex flex-wrap items-center gap-1.5">
                                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${isHighSn ? 'bg-emerald-200 text-emerald-800' : 'bg-emerald-100 text-emerald-700'}`}>
                                    Sn: {otherTest.sn} {isHighSn && '⭐'}
                                  </span>
                                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${isHighSp ? 'bg-amber-200 text-amber-800' : 'bg-amber-100 text-amber-700'}`}>
                                    Sp: {otherTest.sp} {isHighSp && '⭐'}
                                  </span>
                                  {/* תג מומלץ */}
                                  {(isHighSn || isHighSp) && (
                                    <span className="px-2 py-0.5 bg-blue-600 text-white rounded-md text-[10px] font-bold mr-auto">
                                      {isHighSn && isHighSp ? '🏆 שתיהן' : isHighSn ? 'שלילה חזקה' : 'אישוש חזק'}
                                    </span>
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {/* טבלה השוואתית */}
                        <div className="mt-4 overflow-x-auto rounded-lg border border-blue-200 bg-white">
                          <table className="w-full text-[11px] md:text-xs">
                            <thead className="bg-blue-100">
                              <tr>
                                <th className="text-right px-2 py-2 font-semibold text-blue-900">בדיקה</th>
                                <th className="text-center px-2 py-2 font-semibold text-emerald-700">Sn</th>
                                <th className="text-center px-2 py-2 font-semibold text-amber-700">Sp</th>
                                <th className="text-center px-2 py-2 font-semibold text-slate-700">מתי?</th>
                              </tr>
                            </thead>
                            <tbody>
                              {regionsData[selectedRegion].pathologies[selectedPathology].tests.map((t, tIdx) => {
                                const tSn = parseInt(t.sn) || 0;
                                const tSp = parseInt(t.sp) || 0;
                                const isCurrent = tIdx === selectedTest;
                                let purpose = '—';
                                if (tSn >= 90 && tSp >= 90) purpose = 'מצוינת';
                                else if (tSn >= 90) purpose = 'לשלילה';
                                else if (tSp >= 90) purpose = 'לאישוש';
                                else if (tSn >= 70 && tSp >= 70) purpose = 'מאוזנת';
                                return (
                                  <tr
                                    key={tIdx}
                                    className={`border-t border-blue-100 cursor-pointer transition-colors ${isCurrent ? 'bg-blue-100 font-bold' : 'hover:bg-blue-50'}`}
                                    onClick={() => !isCurrent && setSelectedTest(tIdx)}
                                  >
                                    <td className="px-2 py-2 text-slate-800">
                                      {isCurrent && '👁️ '}{t.name}
                                    </td>
                                    <td className="px-2 py-2 text-center text-emerald-700">{t.sn}</td>
                                    <td className="px-2 py-2 text-center text-amber-700">{t.sp}</td>
                                    <td className="px-2 py-2 text-center text-slate-600 text-[10px]">{purpose}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Outcome Measures Modal */}
      {showOutcomeMeasures && (
        <div className="fixed inset-0 z-30 bg-white overflow-y-auto">
          <div className="max-w-3xl mx-auto w-full min-h-screen">
            <div className="bg-gradient-to-l from-teal-500 via-cyan-500 to-blue-600 px-5 py-4 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-3 min-w-0">
                <button
                  onClick={() => {
                    if (selectedOutcomeMeasure) {
                      setSelectedOutcomeMeasure(null);
                    } else {
                      setShowOutcomeMeasures(false);
                    }
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm"
                >
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                  <span className="text-sm font-medium">חזרה</span>
                </button>
                <div className="min-w-0">
                  <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-1.5">
                    <BarChart3 className="w-5 h-5" />
                    {selectedOutcomeMeasure ? selectedOutcomeMeasure.nameHe : 'שאלוני הערכה תפקודית'}
                  </h2>
                  <p className="text-white/90 text-[11px] md:text-xs truncate">
                    {selectedOutcomeMeasure ? selectedOutcomeMeasure.name : `${outcomeMeasures.length} שאלונים סטנדרטיים`}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {selectedOutcomeMeasure && Object.keys(outcomeAnswers[selectedOutcomeMeasure.id] || {}).length > 0 && (
                  <button
                    onClick={() => setOutcomeAnswers({ ...outcomeAnswers, [selectedOutcomeMeasure.id]: {} })}
                    className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors text-xs"
                  >
                    איפוס
                  </button>
                )}
                <button onClick={goHome} className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 md:p-6">
              {!selectedOutcomeMeasure ? (
                <>
                  {/* תיאור */}
                  <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-5">
                    <h3 className="text-sm font-bold text-teal-900 mb-2 flex items-center gap-1.5">
                      <ClipboardCheck className="w-4 h-4" /> מה הם Outcome Measures?
                    </h3>
                    <p className="text-xs md:text-sm text-teal-800 leading-relaxed">
                      שאלונים סטנדרטיים שמודדים את <strong>השפעת הפתולוגיה על תפקוד המטופל</strong>. שימושיים לקביעת חומרת הבעיה, מעקב אחר התקדמות הטיפול, ותקשורת עם רופאים אחרים.
                    </p>
                    <p className="text-[11px] md:text-xs text-teal-700 mt-2">
                      <strong>טיפ:</strong> מילוי בתחילת הטיפול ושוב אחרי 4-6 שבועות מאפשר למדוד שיפור אמיתי (השוואה ל-MCID).
                    </p>
                  </div>

                  {/* רשימת שאלונים */}
                  <div className="space-y-3">
                    {outcomeMeasures.map(measure => {
                      const score = calculateOutcomeScore(measure);
                      return (
                        <button
                          key={measure.id}
                          onClick={() => setSelectedOutcomeMeasure(measure)}
                          className="w-full text-right p-4 bg-white border border-slate-200 hover:border-teal-400 hover:bg-teal-50/40 rounded-xl transition-all group"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-slate-800 group-hover:text-teal-700 text-sm md:text-base flex items-center gap-2 flex-wrap">
                                <span className="text-2xl">{measure.icon}</span>
                                <span>{measure.nameHe}</span>
                                {score && (
                                  <span className="text-[10px] bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full font-bold">
                                    {score.answered}/{score.total}
                                  </span>
                                )}
                              </h3>
                              <p className="text-[11px] text-teal-700 font-medium mt-1">{measure.name}</p>
                              <p className="text-[10px] text-slate-500 mt-0.5">{measure.region} · {measure.questions.length} שאלות · {measure.reference}</p>
                              <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">{measure.description}</p>
                              {score && score.isComplete && (
                                <div className="mt-2 flex items-center gap-2">
                                  <span className="text-xs font-bold text-teal-700">ציון: {score.unit}</span>
                                  {(() => {
                                    const interp = getOutcomeInterpretation(measure, score);
                                    if (!interp) return null;
                                    const colorClasses = {
                                      emerald: 'bg-emerald-100 text-emerald-800',
                                      green: 'bg-green-100 text-green-800',
                                      amber: 'bg-amber-100 text-amber-800',
                                      orange: 'bg-orange-100 text-orange-800',
                                      red: 'bg-red-100 text-red-800',
                                      rose: 'bg-rose-100 text-rose-800'
                                    };
                                    return (
                                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${colorClasses[interp.color]}`}>
                                        {interp.label}
                                      </span>
                                    );
                                  })()}
                                </div>
                              )}
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-teal-600 rotate-180 flex-shrink-0 mt-1" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </>
              ) : (() => {
                // מסך השאלון הספציפי
                const measure = selectedOutcomeMeasure;
                const answers = outcomeAnswers[measure.id] || {};
                const score = calculateOutcomeScore(measure);
                const interpretation = getOutcomeInterpretation(measure, score);
                const colorClasses = {
                  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-300', text: 'text-emerald-800', solid: 'bg-emerald-500' },
                  green: { bg: 'bg-green-50', border: 'border-green-300', text: 'text-green-800', solid: 'bg-green-500' },
                  amber: { bg: 'bg-amber-50', border: 'border-amber-300', text: 'text-amber-800', solid: 'bg-amber-500' },
                  orange: { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-800', solid: 'bg-orange-500' },
                  red: { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-800', solid: 'bg-red-500' },
                  rose: { bg: 'bg-rose-50', border: 'border-rose-300', text: 'text-rose-800', solid: 'bg-rose-500' }
                };
                const interpColors = interpretation ? colorClasses[interpretation.color] : colorClasses.emerald;

                return (
                  <>
                    {/* תיאור השאלון */}
                    <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-4">
                      <div className="flex items-start gap-3">
                        <span className="text-3xl flex-shrink-0">{measure.icon}</span>
                        <div>
                          <h3 className="font-bold text-teal-900 text-sm md:text-base">{measure.name}</h3>
                          <p className="text-[11px] text-teal-600 mt-0.5">{measure.region} · {measure.reference}</p>
                          <p className="text-xs md:text-sm text-teal-800 mt-2 leading-relaxed">{measure.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* תוצאה חיה */}
                    {score && (
                      <div className={`${interpColors.bg} border-2 ${interpColors.border} rounded-xl p-4 mb-5 sticky top-[5rem] z-[5] backdrop-blur-sm`}>
                        <div className="flex items-center justify-between gap-3 flex-wrap">
                          <div>
                            <div className="text-[10px] uppercase tracking-wide text-slate-600 font-bold">ציון נוכחי</div>
                            <div className={`text-3xl font-black ${interpColors.text}`}>
                              {score.unit}
                            </div>
                            <div className="text-[11px] text-slate-600 mt-0.5">
                              {score.answered}/{score.total} שאלות נענו
                            </div>
                          </div>
                          {interpretation && score.isComplete && (
                            <div className={`px-4 py-2 rounded-full ${interpColors.solid} text-white font-bold text-sm md:text-base`}>
                              {interpretation.label}
                            </div>
                          )}
                          {!score.isComplete && (
                            <div className="px-3 py-1.5 rounded-full bg-slate-200 text-slate-700 font-medium text-xs">
                              ענה על כל השאלות לקבלת פירוש
                            </div>
                          )}
                        </div>

                        {/* פס התקדמות */}
                        <div className="mt-3 bg-slate-200 rounded-full h-2 overflow-hidden">
                          <div
                            className={`${interpColors.solid} h-full transition-all duration-300`}
                            style={{ width: `${(score.answered / score.total) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* שאלות */}
                    <div className="space-y-3 mb-6">
                      {measure.questions.map((question, qIdx) => {
                        const currentValue = answers[qIdx];
                        const isAnswered = currentValue !== undefined;
                        return (
                          <div key={qIdx} className={`border-2 rounded-xl overflow-hidden transition-all ${isAnswered ? `${interpColors.border} ${interpColors.bg}` : 'border-slate-200 bg-white'}`}>
                            <div className="px-4 py-3 border-b border-slate-200 bg-white/50">
                              <h4 className="font-bold text-slate-800 text-sm md:text-base flex items-center gap-2">
                                <span className={`w-6 h-6 rounded-full ${isAnswered ? `${interpColors.solid} text-white` : 'bg-slate-200 text-slate-600'} flex items-center justify-center text-xs font-bold`}>
                                  {qIdx + 1}
                                </span>
                                <span>{question.q}</span>
                                {isAnswered && <span className="mr-auto text-emerald-600">✓</span>}
                              </h4>
                            </div>
                            <div className="p-3 space-y-1.5">
                              {question.options.map((opt, oIdx) => {
                                const isSelected = currentValue === opt.value;
                                return (
                                  <button
                                    key={oIdx}
                                    onClick={() => {
                                      setOutcomeAnswers({
                                        ...outcomeAnswers,
                                        [measure.id]: {
                                          ...answers,
                                          [qIdx]: opt.value
                                        }
                                      });
                                    }}
                                    className={`w-full text-right p-2.5 rounded-lg text-xs md:text-sm transition-all border ${
                                      isSelected
                                        ? `${interpColors.solid} text-white border-transparent shadow-md`
                                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                                    }`}
                                  >
                                    <div className="flex items-center gap-2">
                                      <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${isSelected ? 'border-white' : 'border-slate-300'}`}>
                                        {isSelected && <span className="w-2 h-2 rounded-full bg-white"></span>}
                                      </span>
                                      <span className="flex-1">{opt.text}</span>
                                      <span className={`text-[10px] font-bold ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>{opt.value}</span>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* טבלת פירוש */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-4">
                      <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-1.5">
                        <span>📊</span> טבלת פירוש מלאה
                      </h3>
                      <div className="space-y-1.5">
                        {measure.interpretation.map((interp, iIdx) => {
                          const interpColor = colorClasses[interp.color];
                          const isCurrent = interpretation && interpretation.range === interp.range;
                          return (
                            <div key={iIdx} className={`flex items-center justify-between gap-2 p-2 rounded-lg ${isCurrent ? `${interpColor.bg} border-2 ${interpColor.border} font-bold` : 'bg-white'}`}>
                              <div className="flex items-center gap-2">
                                <span className={`w-3 h-3 rounded-full ${interpColor.solid}`}></span>
                                <span className="text-xs md:text-sm text-slate-700">{interp.label}</span>
                              </div>
                              <span className="text-[10px] md:text-xs text-slate-600 font-mono">{interp.range}</span>
                              {isCurrent && <span className="text-xs">👁️</span>}
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-[11px] text-slate-600 mt-3 italic">
                        <strong>MCID:</strong> {measure.mcid}
                      </p>
                    </div>

                    {/* הערה */}
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <p className="text-[11px] md:text-xs text-amber-800 leading-relaxed">
                        💡 <strong>טיפ:</strong> שמור את הציון, ובצע את השאלון שוב אחרי 4-6 שבועות. שינוי בציון גדול מ-MCID = שיפור משמעותי קלינית.
                      </p>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Neurological Exam Modal */}
      {showNeuroExam && (
        <div className="fixed inset-0 z-30 bg-white overflow-y-auto">
          <div className="max-w-3xl mx-auto w-full min-h-screen">
            <div className="bg-gradient-to-l from-fuchsia-600 via-purple-600 to-violet-700 px-5 py-4 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-3 min-w-0">
                <button
                  onClick={() => {
                    if (selectedNeuroSection) {
                      setSelectedNeuroSection(null);
                    } else {
                      setShowNeuroExam(false);
                    }
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm"
                >
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                  <span className="text-sm font-medium">חזרה</span>
                </button>
                <div className="min-w-0">
                  <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-1.5">
                    <Brain className="w-5 h-5" />
                    {selectedNeuroSection ? selectedNeuroSection.name : 'בדיקה נוירולוגית'}
                  </h2>
                  <p className="text-white/90 text-[11px] md:text-xs truncate">
                    {selectedNeuroSection ? selectedNeuroSection.nameEn : `${neuroExamSections.length} מקטעים`}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {selectedNeuroSection && !selectedNeuroSection.isReference && !selectedNeuroSection.isVisualMap && Object.keys(neuroFindings[selectedNeuroSection.id] || {}).length > 0 && (
                  <button
                    onClick={() => setNeuroFindings({ ...neuroFindings, [selectedNeuroSection.id]: {} })}
                    className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors text-xs"
                  >
                    איפוס
                  </button>
                )}
                <button onClick={goHome} className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 md:p-6">
              {!selectedNeuroSection ? (
                <>
                  {/* תיאור */}
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-5">
                    <h3 className="text-sm font-bold text-purple-900 mb-2 flex items-center gap-1.5">
                      <Brain className="w-4 h-4" /> בדיקה נוירולוגית מלאה
                    </h3>
                    <p className="text-xs md:text-sm text-purple-800 leading-relaxed">
                      ביצוע בדיקה נוירולוגית שיטתית הוא <strong>חיוני</strong> לכל מטופל עם תסמינים מקרינים, כאב מאוחר חבלה, או חשד לפגיעה עצבית.
                    </p>
                    <p className="text-[11px] md:text-xs text-purple-700 mt-2">
                      <strong>סדר מומלץ:</strong> Myotomes → Dermatomes → Reflexes → UMN signs (אם נדרש) → Neural Tension Tests
                    </p>
                  </div>

                  {/* רשימת מקטעים */}
                  <div className="space-y-3">
                    {neuroExamSections.map(section => {
                      const summary = getNeuroSummary(section.id);
                      return (
                        <button
                          key={section.id}
                          onClick={() => setSelectedNeuroSection(section)}
                          className="w-full text-right p-4 bg-white border border-slate-200 hover:border-purple-400 hover:bg-purple-50/40 rounded-xl transition-all group"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-slate-800 group-hover:text-purple-700 text-sm md:text-base flex items-center gap-2 flex-wrap">
                                <span className="text-2xl">{section.icon}</span>
                                <span>{section.name}</span>
                                {summary && (
                                  <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold">
                                    {summary.total} פריטים נבדקו
                                  </span>
                                )}
                              </h3>
                              <p className="text-[11px] text-purple-700 font-medium mt-1">{section.nameEn}</p>
                              <p className="text-[10px] text-slate-500 mt-0.5">{section.reference}</p>
                              <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">{section.description}</p>
                              {summary && summary.abnormal > 0 && (
                                <div className="mt-2 inline-flex items-center gap-1 bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-[10px] font-bold">
                                  <AlertTriangle className="w-3 h-3" />
                                  {summary.abnormal} ממצאים לא תקינים
                                </div>
                              )}
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-purple-600 rotate-180 flex-shrink-0 mt-1" />
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* הערה */}
                  <div className="mt-5 bg-rose-50 border border-rose-200 rounded-lg p-3">
                    <p className="text-[11px] md:text-xs text-rose-800 leading-relaxed">
                      <strong>⚠️ דגל אדום:</strong> ממצאים מרובים לא תקינים, או סימני UMN חיוביים, מחייבים <strong>הפניה דחופה</strong> לרופא / נוירולוג. אבחנה מבדלת: רדיקולופתיה, מיאלופתיה, פגיעה פריפרית, MS, גידול.
                    </p>
                  </div>
                </>
              ) : (() => {
                const section = selectedNeuroSection;
                const findings = neuroFindings[section.id] || {};
                const summary = getNeuroSummary(section.id);

                // ============ תצוגה מיוחדת למפת Dermatomes ויזואלית ============
                if (section.isVisualMap) {
                  // נתוני dermatomes למפה
                  const dermatomeData = {
                    'C2': { name: 'C2', area: 'עורף תחתון', areaEn: 'Posterior occipital', testSite: 'בסיס הגולגולת מאחור', pathologies: 'Upper Cervical Instability, Whiplash', color: '#a78bfa', view: 'posterior' },
                    'C3': { name: 'C3', area: 'צוואר עליון - לטרלי', areaEn: 'Lateral upper neck', testSite: 'צוואר לטרלי בגובה Hyoid', pathologies: 'Cervical Radiculopathy C3', color: '#8b5cf6', view: 'both' },
                    'C4': { name: 'C4', area: 'גב עליון של הכתף', areaEn: 'Top of shoulder', testSite: 'מעל ה-AC joint', pathologies: 'Cervical Radiculopathy C4', color: '#7c3aed', view: 'both' },
                    'C5': { name: 'C5', area: 'דלתואיד לטרלי', areaEn: 'Lateral deltoid (Regimental Badge)', testSite: 'אזור הדלתואיד הלטרלי', pathologies: 'Cervical Radiculopathy C5, TOS', color: '#6d28d9', view: 'both' },
                    'C6': { name: 'C6', area: 'אגודל ואצבע 2', areaEn: 'Thumb & index finger', testSite: 'קצה האגודל / אצבע 2', pathologies: 'Cervical Radiculopathy C6, CTS', color: '#5b21b6', view: 'both' },
                    'C7': { name: 'C7', area: 'אצבע 3', areaEn: 'Middle finger', testSite: 'קצה אצבע 3 (אמצע)', pathologies: 'Cervical Radiculopathy C7', color: '#4c1d95', view: 'both' },
                    'C8': { name: 'C8', area: 'אצבע 4-5', areaEn: 'Ring & little finger', testSite: 'קצה אצבע הזרת', pathologies: 'Cervical Radiculopathy C8, Cubital Tunnel', color: '#3730a3', view: 'both' },
                    'T1': { name: 'T1', area: 'אמה מדיאלית', areaEn: 'Medial forearm', testSite: 'Medial epicondyle', pathologies: 'TOS, Cervical Radiculopathy T1', color: '#1e40af', view: 'both' },
                    'T2': { name: 'T2', area: 'בית השחי / זרוע פנימית', areaEn: 'Axilla / medial arm', testSite: 'בית השחי', pathologies: 'TOS, Pancoast tumor', color: '#1d4ed8', view: 'both' },
                    'T4': { name: 'T4', area: 'פטמות', areaEn: 'Nipple line', testSite: 'גובה הפטמות', pathologies: 'Thoracic Spinal Cord Lesion, T4 Syndrome', color: '#2563eb', view: 'anterior' },
                    'T6': { name: 'T6', area: 'הזיף הסטרני', areaEn: 'Xiphoid process', testSite: 'גובה הזיף הסטרני', pathologies: 'Thoracic spinal lesions', color: '#3b82f6', view: 'anterior' },
                    'T10': { name: 'T10', area: 'טבור', areaEn: 'Umbilicus', testSite: 'גובה הטבור', pathologies: 'Thoracic spinal lesions', color: '#0ea5e9', view: 'anterior' },
                    'T12': { name: 'T12', area: 'מעל המפשעה', areaEn: 'Above inguinal ligament', testSite: 'מעל הליגמנט האינגוינלי', pathologies: 'Thoracolumbar junction lesions', color: '#06b6d4', view: 'anterior' },
                    'L1': { name: 'L1', area: 'מפשעה', areaEn: 'Inguinal area', testSite: 'מתחת לליגמנט האינגוינלי', pathologies: 'L1 Radiculopathy', color: '#0891b2', view: 'anterior' },
                    'L2': { name: 'L2', area: 'ירך עליונה קדמית', areaEn: 'Upper anterior thigh', testSite: 'אמצע הירך הקדמית', pathologies: 'L2 Radiculopathy, Meralgia Paresthetica', color: '#0e7490', view: 'anterior' },
                    'L3': { name: 'L3', area: 'ירך תחתונה / ברך מדיאלית', areaEn: 'Medial knee', testSite: 'מעל הקונדיל המדיאלי', pathologies: 'L3 Radiculopathy, Femoral Neuropathy', color: '#15803d', view: 'anterior' },
                    'L4': { name: 'L4', area: 'מאלאולוס מדיאלי', areaEn: 'Medial malleolus', testSite: 'מעל המאלאולוס המדיאלי', pathologies: 'L4 Radiculopathy', color: '#16a34a', view: 'anterior' },
                    'L5': { name: 'L5', area: 'גב כף הרגל / בוהן 1-3', areaEn: 'Dorsum of foot', testSite: 'בין בוהן 1 ל-2 בגב כף הרגל', pathologies: 'L5 Radiculopathy (the most common!)', color: '#22c55e', view: 'both' },
                    'S1': { name: 'S1', area: 'מאלאולוס לטרלי / סולית', areaEn: 'Lateral foot', testSite: 'מאלאולוס לטרלי / קצה לטרלי', pathologies: 'S1 Radiculopathy', color: '#84cc16', view: 'both' },
                    'S2': { name: 'S2', area: 'אחורי שוק / ירך', areaEn: 'Posterior calf/thigh', testSite: 'מרכז הפוסה הפופליטאלית', pathologies: 'S2 Radiculopathy', color: '#eab308', view: 'posterior' },
                    'S3-S5': { name: 'S3-S5', area: 'אנסטזיה אוכף', areaEn: 'Saddle anesthesia', testSite: 'פרינאום + ישבן פנימי', pathologies: '🚨 Cauda Equina Syndrome', color: '#f59e0b', view: 'posterior' }
                  };

                  const currentDermatomes = dermatomeView === 'anterior'
                    ? Object.values(dermatomeData).filter(d => d.view === 'anterior' || d.view === 'both')
                    : Object.values(dermatomeData).filter(d => d.view === 'posterior' || d.view === 'both');

                  return (
                    <>
                      {/* תיאור */}
                      <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mb-4">
                        <div className="flex items-start gap-3">
                          <span className="text-3xl flex-shrink-0">{section.icon}</span>
                          <div>
                            <h3 className="font-bold text-rose-900 text-sm md:text-base">{section.nameEn}</h3>
                            <p className="text-[11px] text-rose-600 mt-0.5">{section.reference}</p>
                            <p className="text-xs md:text-sm text-rose-800 mt-2 leading-relaxed">{section.description}</p>
                          </div>
                        </div>
                      </div>

                      {/* בורר תצוגה: קדמי / אחורי */}
                      <div className="bg-white border border-slate-200 rounded-xl p-2 mb-4 sticky top-[5rem] z-[5] shadow-sm">
                        <div className="grid grid-cols-2 gap-1">
                          <button
                            onClick={() => setDermatomeView('anterior')}
                            className={`px-3 py-2.5 rounded-lg text-sm font-bold transition-all ${
                              dermatomeView === 'anterior'
                                ? 'bg-gradient-to-l from-rose-500 to-pink-600 text-white shadow-md'
                                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            👤 קדמי (Anterior)
                          </button>
                          <button
                            onClick={() => setDermatomeView('posterior')}
                            className={`px-3 py-2.5 rounded-lg text-sm font-bold transition-all ${
                              dermatomeView === 'posterior'
                                ? 'bg-gradient-to-l from-rose-500 to-pink-600 text-white shadow-md'
                                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            🔄 אחורי (Posterior)
                          </button>
                        </div>
                      </div>

                      {/* SVG של גוף האדם */}
                      <div className="bg-white border-2 border-rose-200 rounded-xl p-4 mb-4">
                        <svg viewBox="0 0 320 600" className="w-full h-auto" style={{ maxHeight: '70vh' }}>
                          {/* תצוגה קדמית */}
                          {dermatomeView === 'anterior' && (
                            <g>
                              {/* ראש - C2-C3 */}
                              <ellipse cx="160" cy="50" rx="32" ry="40" fill="#fce7f3" stroke="#94a3b8" strokeWidth="1.5" />
                              {/* C3 - צוואר */}
                              <path d="M 135 90 L 185 90 L 188 110 L 132 110 Z"
                                    fill={selectedDermatome === 'C3' ? '#5b21b6' : dermatomeData['C3'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C3')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C3' ? 0.5 : 1 }} />
                              <text x="160" y="103" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" pointerEvents="none">C3</text>

                              {/* C4 - כתפיים עליון */}
                              <path d="M 132 110 L 188 110 L 215 132 L 195 145 L 125 145 L 105 132 Z"
                                    fill={selectedDermatome === 'C4' ? '#5b21b6' : dermatomeData['C4'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C4')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C4' ? 0.5 : 1 }} />
                              <text x="160" y="130" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">C4</text>

                              {/* גוף - מבנה */}
                              <path d="M 125 145 L 195 145 L 200 280 L 120 280 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />

                              {/* T2 - בית השחי */}
                              <ellipse cx="105" cy="160" rx="14" ry="22"
                                    fill={selectedDermatome === 'T2' ? '#1e3a8a' : dermatomeData['T2'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('T2')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'T2' ? 0.5 : 1 }} />
                              <text x="105" y="163" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white" pointerEvents="none">T2</text>
                              <ellipse cx="215" cy="160" rx="14" ry="22"
                                    fill={selectedDermatome === 'T2' ? '#1e3a8a' : dermatomeData['T2'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('T2')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'T2' ? 0.5 : 1 }} />
                              <text x="215" y="163" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white" pointerEvents="none">T2</text>

                              {/* T4 - פטמות */}
                              <path d="M 125 175 L 195 175 L 195 200 L 125 200 Z"
                                    fill={selectedDermatome === 'T4' ? '#1e40af' : dermatomeData['T4'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('T4')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'T4' ? 0.5 : 1 }} />
                              <text x="160" y="190" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">T4</text>
                              <circle cx="138" cy="187" r="3" fill="#fff" />
                              <circle cx="182" cy="187" r="3" fill="#fff" />

                              {/* T6 */}
                              <path d="M 125 200 L 195 200 L 195 220 L 125 220 Z"
                                    fill={selectedDermatome === 'T6' ? '#1e40af' : dermatomeData['T6'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('T6')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'T6' ? 0.5 : 1 }} />
                              <text x="160" y="213" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">T6</text>

                              {/* T10 - טבור */}
                              <path d="M 125 220 L 195 220 L 195 245 L 125 245 Z"
                                    fill={selectedDermatome === 'T10' ? '#0c4a6e' : dermatomeData['T10'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('T10')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'T10' ? 0.5 : 1 }} />
                              <text x="160" y="235" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">T10</text>
                              <circle cx="160" cy="232" r="2.5" fill="#fff" />

                              {/* T12 */}
                              <path d="M 125 245 L 195 245 L 200 270 L 120 270 Z"
                                    fill={selectedDermatome === 'T12' ? '#0c4a6e' : dermatomeData['T12'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('T12')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'T12' ? 0.5 : 1 }} />
                              <text x="160" y="260" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">T12</text>

                              {/* L1 - מפשעה */}
                              <path d="M 120 270 L 200 270 L 205 295 L 115 295 Z"
                                    fill={selectedDermatome === 'L1' ? '#155e75' : dermatomeData['L1'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('L1')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'L1' ? 0.5 : 1 }} />
                              <text x="160" y="285" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">L1</text>

                              {/* C5 - דלתואיד לטרלי - שמאל וימין */}
                              <ellipse cx="100" cy="155" rx="22" ry="35"
                                    fill={selectedDermatome === 'C5' ? '#3b0764' : dermatomeData['C5'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C5')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C5' ? 0.5 : 1 }} />
                              <text x="100" y="158" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">C5</text>
                              <ellipse cx="220" cy="155" rx="22" ry="35"
                                    fill={selectedDermatome === 'C5' ? '#3b0764' : dermatomeData['C5'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C5')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C5' ? 0.5 : 1 }} />
                              <text x="220" y="158" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">C5</text>

                              {/* זרועות - שמאל */}
                              <path d="M 78 190 L 95 190 L 92 235 L 75 235 Z"
                                    fill={selectedDermatome === 'C6' ? '#3b0764' : dermatomeData['C6'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C6')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C6' ? 0.5 : 1 }} />
                              <text x="85" y="215" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" pointerEvents="none">C6</text>

                              {/* T1 - אמה מדיאלית שמאל */}
                              <path d="M 75 235 L 92 235 L 88 280 L 70 280 Z"
                                    fill={selectedDermatome === 'T1' ? '#172554' : dermatomeData['T1'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('T1')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'T1' ? 0.5 : 1 }} />
                              <text x="80" y="260" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" pointerEvents="none">T1</text>

                              {/* כף יד שמאל - C6/C7/C8 */}
                              <path d="M 60 282 L 90 282 L 92 320 L 58 320 Z"
                                    fill={selectedDermatome === 'C7' ? '#312e81' : dermatomeData['C7'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C7')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C7' ? 0.5 : 1 }} />
                              <text x="75" y="304" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" pointerEvents="none">C6/C7/C8</text>

                              {/* זרועות - ימין */}
                              <path d="M 225 190 L 242 190 L 245 235 L 228 235 Z"
                                    fill={selectedDermatome === 'C6' ? '#3b0764' : dermatomeData['C6'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C6')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C6' ? 0.5 : 1 }} />
                              <text x="235" y="215" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" pointerEvents="none">C6</text>

                              {/* T1 - אמה ימין */}
                              <path d="M 228 235 L 245 235 L 250 280 L 232 280 Z"
                                    fill={selectedDermatome === 'T1' ? '#172554' : dermatomeData['T1'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('T1')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'T1' ? 0.5 : 1 }} />
                              <text x="240" y="260" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" pointerEvents="none">T1</text>

                              {/* כף יד ימין */}
                              <path d="M 230 282 L 260 282 L 262 320 L 228 320 Z"
                                    fill={selectedDermatome === 'C7' ? '#312e81' : dermatomeData['C7'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C7')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C7' ? 0.5 : 1 }} />
                              <text x="245" y="304" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" pointerEvents="none">C6/C7/C8</text>

                              {/* L2 - ירך עליונה */}
                              <path d="M 115 295 L 158 295 L 158 360 L 115 360 Z"
                                    fill={selectedDermatome === 'L2' ? '#155e75' : dermatomeData['L2'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('L2')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'L2' ? 0.5 : 1 }} />
                              <text x="135" y="330" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">L2</text>
                              <path d="M 162 295 L 205 295 L 205 360 L 162 360 Z"
                                    fill={selectedDermatome === 'L2' ? '#155e75' : dermatomeData['L2'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('L2')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'L2' ? 0.5 : 1 }} />
                              <text x="185" y="330" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">L2</text>

                              {/* L3 - ירך תחתונה / ברך */}
                              <path d="M 115 360 L 158 360 L 158 415 L 118 415 Z"
                                    fill={selectedDermatome === 'L3' ? '#14532d' : dermatomeData['L3'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('L3')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'L3' ? 0.5 : 1 }} />
                              <text x="135" y="390" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">L3</text>
                              <path d="M 162 360 L 205 360 L 202 415 L 162 415 Z"
                                    fill={selectedDermatome === 'L3' ? '#14532d' : dermatomeData['L3'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('L3')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'L3' ? 0.5 : 1 }} />
                              <text x="185" y="390" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">L3</text>

                              {/* L4 - שוק מדיאלית */}
                              <path d="M 118 415 L 158 415 L 155 490 L 122 490 Z"
                                    fill={selectedDermatome === 'L4' ? '#14532d' : dermatomeData['L4'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('L4')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'L4' ? 0.5 : 1 }} />
                              <text x="138" y="455" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">L4</text>
                              <path d="M 162 415 L 202 415 L 198 490 L 162 490 Z"
                                    fill={selectedDermatome === 'L4' ? '#14532d' : dermatomeData['L4'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('L4')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'L4' ? 0.5 : 1 }} />
                              <text x="180" y="455" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">L4</text>

                              {/* L5 - גב כף הרגל */}
                              <ellipse cx="138" cy="540" rx="26" ry="35"
                                    fill={selectedDermatome === 'L5' ? '#14532d' : dermatomeData['L5'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('L5')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'L5' ? 0.5 : 1 }} />
                              <text x="138" y="544" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">L5</text>
                              <ellipse cx="180" cy="540" rx="26" ry="35"
                                    fill={selectedDermatome === 'L5' ? '#14532d' : dermatomeData['L5'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('L5')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'L5' ? 0.5 : 1 }} />
                              <text x="180" y="544" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">L5</text>
                            </g>
                          )}

                          {/* תצוגה אחורית */}
                          {dermatomeView === 'posterior' && (
                            <g>
                              {/* ראש - C2 */}
                              <ellipse cx="160" cy="50" rx="32" ry="40"
                                    fill={selectedDermatome === 'C2' ? '#581c87' : dermatomeData['C2'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C2')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C2' ? 0.5 : 1 }} />
                              <text x="160" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white" pointerEvents="none">C2</text>

                              {/* C3 - צוואר אחורי */}
                              <path d="M 135 90 L 185 90 L 188 110 L 132 110 Z"
                                    fill={selectedDermatome === 'C3' ? '#5b21b6' : dermatomeData['C3'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C3')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C3' ? 0.5 : 1 }} />
                              <text x="160" y="103" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" pointerEvents="none">C3</text>

                              {/* C4 - כתפיים עליון */}
                              <path d="M 132 110 L 188 110 L 215 132 L 195 145 L 125 145 L 105 132 Z"
                                    fill={selectedDermatome === 'C4' ? '#5b21b6' : dermatomeData['C4'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C4')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C4' ? 0.5 : 1 }} />
                              <text x="160" y="130" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">C4</text>

                              {/* גוף - מבנה */}
                              <path d="M 125 145 L 195 145 L 200 280 L 120 280 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />

                              {/* T2-T12 הגב */}
                              <path d="M 125 145 L 195 145 L 195 200 L 125 200 Z"
                                    fill={selectedDermatome === 'T2' ? '#1e3a8a' : dermatomeData['T2'].color}
                                    stroke="#fff" strokeWidth="2" opacity="0.7"
                                    onClick={() => setSelectedDermatome('T2')}
                                    style={{ cursor: 'pointer' }} />
                              <text x="160" y="175" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">T2-T6 גב עליון</text>

                              <path d="M 125 200 L 195 200 L 200 270 L 120 270 Z"
                                    fill="#0ea5e9" stroke="#fff" strokeWidth="2" opacity="0.7" />
                              <text x="160" y="235" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">T6-T12 גב תחתון</text>

                              {/* C5 - דלתואיד אחורי */}
                              <ellipse cx="100" cy="155" rx="22" ry="35"
                                    fill={selectedDermatome === 'C5' ? '#3b0764' : dermatomeData['C5'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C5')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C5' ? 0.5 : 1 }} />
                              <text x="100" y="158" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">C5</text>
                              <ellipse cx="220" cy="155" rx="22" ry="35"
                                    fill={selectedDermatome === 'C5' ? '#3b0764' : dermatomeData['C5'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C5')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C5' ? 0.5 : 1 }} />
                              <text x="220" y="158" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">C5</text>

                              {/* זרוע אחורית - C6/C7/C8 */}
                              <path d="M 78 190 L 95 190 L 92 235 L 75 235 Z"
                                    fill={selectedDermatome === 'C7' ? '#312e81' : dermatomeData['C7'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C7')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C7' ? 0.5 : 1 }} />
                              <text x="85" y="215" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" pointerEvents="none">C7</text>
                              <path d="M 75 235 L 92 235 L 90 285 L 73 285 Z"
                                    fill={selectedDermatome === 'C8' ? '#312e81' : dermatomeData['C8'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C8')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C8' ? 0.5 : 1 }} />
                              <text x="83" y="262" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" pointerEvents="none">C8</text>

                              {/* כף יד אחורית */}
                              <path d="M 60 287 L 90 287 L 92 320 L 58 320 Z"
                                    fill={selectedDermatome === 'C8' ? '#312e81' : dermatomeData['C8'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C8')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C8' ? 0.5 : 1 }} />
                              <text x="75" y="307" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white" pointerEvents="none">C8</text>

                              {/* זרוע ימין */}
                              <path d="M 225 190 L 242 190 L 245 235 L 228 235 Z"
                                    fill={selectedDermatome === 'C7' ? '#312e81' : dermatomeData['C7'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C7')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C7' ? 0.5 : 1 }} />
                              <text x="235" y="215" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" pointerEvents="none">C7</text>
                              <path d="M 228 235 L 245 235 L 247 285 L 230 285 Z"
                                    fill={selectedDermatome === 'C8' ? '#312e81' : dermatomeData['C8'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C8')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C8' ? 0.5 : 1 }} />
                              <text x="237" y="262" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" pointerEvents="none">C8</text>
                              <path d="M 230 287 L 260 287 L 262 320 L 228 320 Z"
                                    fill={selectedDermatome === 'C8' ? '#312e81' : dermatomeData['C8'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('C8')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'C8' ? 0.5 : 1 }} />
                              <text x="245" y="307" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white" pointerEvents="none">C8</text>

                              {/* L1-L2 - גב מותני */}
                              <path d="M 120 270 L 200 270 L 205 295 L 115 295 Z"
                                    fill={selectedDermatome === 'L1' ? '#0891b2' : dermatomeData['L1'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('L1')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'L1' ? 0.5 : 1 }} />
                              <text x="160" y="285" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">L1</text>

                              {/* S3-S5 - אנסטזיה אוכף */}
                              <path d="M 130 295 L 190 295 L 188 320 L 132 320 Z"
                                    fill={selectedDermatome === 'S3-S5' ? '#92400e' : dermatomeData['S3-S5'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('S3-S5')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'S3-S5' ? 0.5 : 1 }} />
                              <text x="160" y="310" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" pointerEvents="none">S3-S5 🚨</text>

                              {/* L5 - ישבן עליון */}
                              <path d="M 115 320 L 158 320 L 158 360 L 115 360 Z"
                                    fill={selectedDermatome === 'L5' ? '#14532d' : dermatomeData['L5'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('L5')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'L5' ? 0.5 : 1 }} />
                              <text x="135" y="343" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">L5</text>
                              <path d="M 162 320 L 205 320 L 205 360 L 162 360 Z"
                                    fill={selectedDermatome === 'L5' ? '#14532d' : dermatomeData['L5'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('L5')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'L5' ? 0.5 : 1 }} />
                              <text x="185" y="343" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">L5</text>

                              {/* S2 - ירך אחורית */}
                              <path d="M 115 360 L 158 360 L 158 415 L 118 415 Z"
                                    fill={selectedDermatome === 'S2' ? '#854d0e' : dermatomeData['S2'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('S2')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'S2' ? 0.5 : 1 }} />
                              <text x="135" y="390" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">S2</text>
                              <path d="M 162 360 L 205 360 L 202 415 L 162 415 Z"
                                    fill={selectedDermatome === 'S2' ? '#854d0e' : dermatomeData['S2'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('S2')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'S2' ? 0.5 : 1 }} />
                              <text x="185" y="390" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">S2</text>

                              {/* S2 - שוק אחורי */}
                              <path d="M 118 415 L 158 415 L 155 490 L 122 490 Z"
                                    fill={selectedDermatome === 'S2' ? '#854d0e' : dermatomeData['S2'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('S2')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'S2' ? 0.5 : 1 }} />
                              <text x="138" y="455" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">S2</text>
                              <path d="M 162 415 L 202 415 L 198 490 L 162 490 Z"
                                    fill={selectedDermatome === 'S2' ? '#854d0e' : dermatomeData['S2'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('S2')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'S2' ? 0.5 : 1 }} />
                              <text x="180" y="455" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">S2</text>

                              {/* S1 - סולית */}
                              <ellipse cx="138" cy="540" rx="26" ry="35"
                                    fill={selectedDermatome === 'S1' ? '#365314' : dermatomeData['S1'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('S1')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'S1' ? 0.5 : 1 }} />
                              <text x="138" y="544" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">S1</text>
                              <ellipse cx="180" cy="540" rx="26" ry="35"
                                    fill={selectedDermatome === 'S1' ? '#365314' : dermatomeData['S1'].color}
                                    stroke="#fff" strokeWidth="2"
                                    onClick={() => setSelectedDermatome('S1')}
                                    style={{ cursor: 'pointer', opacity: selectedDermatome && selectedDermatome !== 'S1' ? 0.5 : 1 }} />
                              <text x="180" y="544" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" pointerEvents="none">S1</text>
                            </g>
                          )}
                        </svg>

                        <p className="text-[11px] text-center text-slate-500 mt-2">
                          💡 לחץ על כל אזור צבעוני לקבלת פרטים מלאים
                        </p>
                      </div>

                      {/* כרטיס מידע על האזור הנבחר */}
                      {selectedDermatome && dermatomeData[selectedDermatome] && (
                        <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-300 rounded-xl p-4 mb-4 sticky bottom-4 shadow-lg">
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div>
                              <span className="text-2xl font-black text-white px-3 py-1 rounded-lg" style={{ backgroundColor: dermatomeData[selectedDermatome].color }}>
                                {dermatomeData[selectedDermatome].name}
                              </span>
                            </div>
                            <button
                              onClick={() => setSelectedDermatome(null)}
                              className="p-1 hover:bg-rose-200 rounded-lg transition-colors"
                            >
                              <X className="w-5 h-5 text-rose-700" />
                            </button>
                          </div>

                          <div className="space-y-2">
                            <div className="bg-white rounded-lg p-2.5 border border-rose-200">
                              <span className="text-[10px] uppercase tracking-wide text-rose-700 font-bold">📍 אזור עצבוב:</span>
                              <p className="text-sm text-slate-800 font-bold">{dermatomeData[selectedDermatome].area}</p>
                              <p className="text-[11px] text-slate-500 italic">{dermatomeData[selectedDermatome].areaEn}</p>
                            </div>

                            <div className="bg-white rounded-lg p-2.5 border border-rose-200">
                              <span className="text-[10px] uppercase tracking-wide text-rose-700 font-bold">🎯 מקום בדיקת תחושה:</span>
                              <p className="text-sm text-slate-800">{dermatomeData[selectedDermatome].testSite}</p>
                            </div>

                            <div className="bg-white rounded-lg p-2.5 border border-rose-200">
                              <span className="text-[10px] uppercase tracking-wide text-rose-700 font-bold">⚠️ פתולוגיות נפוצות:</span>
                              <p className="text-sm text-slate-800">{dermatomeData[selectedDermatome].pathologies}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* רשימת כל ה-Dermatomes */}
                      <div className="bg-white border border-slate-200 rounded-xl p-3">
                        <h4 className="text-xs font-bold text-slate-700 mb-2">📋 כל ה-Dermatomes ({currentDermatomes.length})</h4>
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-1.5">
                          {currentDermatomes.map(d => (
                            <button
                              key={d.name}
                              onClick={() => setSelectedDermatome(d.name)}
                              className={`px-2 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                                selectedDermatome === d.name
                                  ? 'border-rose-500 ring-2 ring-rose-300'
                                  : 'border-slate-200 hover:border-rose-300'
                              }`}
                              style={{ backgroundColor: d.color, color: 'white' }}
                            >
                              {d.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <p className="text-[11px] md:text-xs text-amber-800 leading-relaxed">
                          <strong>💡 שימוש קליני:</strong> בעת בדיקת מטופל עם תסמינים מקרינים - מצא את האזור עם הפגיעה הסנסורית במפה, וזיהית את השורש המעורב. בשלב הבא בדוק את ה-Myotomes וה-Reflexes הרלוונטיים לאישור.
                        </p>
                      </div>
                    </>
                  );
                }

                // ============ תצוגה מיוחדת למקטע מאגר השרירים (Reference) ============
                if (section.isReference) {
                  const muscleRegions = {
                    shoulder: { name: 'כתף ושכמה', icon: '💪', color: 'blue' },
                    arm: { name: 'זרוע ומרפק', icon: '💪', color: 'cyan' },
                    forearm: { name: 'אמה', icon: '🦾', color: 'teal' },
                    hand: { name: 'כף יד', icon: '✋', color: 'emerald' },
                    neck: { name: 'צוואר', icon: '🦴', color: 'violet' },
                    spine: { name: 'עמוד שדרה / טורסו', icon: '🔥', color: 'rose' },
                    hip: { name: 'ירך ואגן', icon: '🦵', color: 'orange' },
                    knee: { name: 'ברך', icon: '🦴', color: 'amber' },
                    leg: { name: 'שוק וכף רגל', icon: '🦶', color: 'pink' }
                  };

                  // חיפוש בתוך המקטע
                  const muscleQuery = (neuroFindings[section.id]?.search || '').toLowerCase();
                  const filteredItems = muscleQuery.length > 1
                    ? section.items.filter(item =>
                        item.muscle.toLowerCase().includes(muscleQuery) ||
                        item.muscleHe.toLowerCase().includes(muscleQuery) ||
                        item.nerve.toLowerCase().includes(muscleQuery) ||
                        item.roots.toLowerCase().includes(muscleQuery)
                      )
                    : section.items;

                  const groupedFiltered = {};
                  filteredItems.forEach(item => {
                    const r = item.region || 'general';
                    if (!groupedFiltered[r]) groupedFiltered[r] = [];
                    groupedFiltered[r].push(item);
                  });

                  return (
                    <>
                      {/* תיאור המקטע */}
                      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-4">
                        <div className="flex items-start gap-3">
                          <span className="text-3xl flex-shrink-0">{section.icon}</span>
                          <div>
                            <h3 className="font-bold text-indigo-900 text-sm md:text-base">{section.nameEn}</h3>
                            <p className="text-[11px] text-indigo-600 mt-0.5">{section.reference} · {section.items.length} שרירים</p>
                            <p className="text-xs md:text-sm text-indigo-800 mt-2 leading-relaxed">{section.description}</p>
                          </div>
                        </div>
                      </div>

                      {/* חיפוש */}
                      <div className="mb-3 sticky top-[5rem] z-[5]">
                        <div className="relative">
                          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            placeholder="חפש שריר / עצב / שורש (Median, C5, ביצפס)..."
                            value={muscleQuery}
                            onChange={(e) => updateNeuroFinding(section.id, 'search', e.target.value)}
                            className="w-full pr-10 pl-4 py-2.5 bg-white border-2 border-indigo-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
                          />
                        </div>
                        {muscleQuery.length > 1 && (
                          <p className="text-[11px] text-indigo-700 mt-1.5 mr-2">
                            <strong>{filteredItems.length}</strong> תוצאות עבור "{muscleQuery}"
                          </p>
                        )}
                      </div>

                      {/* כפתורי פתח/סגור הכל */}
                      {muscleQuery.length <= 1 && (
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <button
                            onClick={() => {
                              const allOpen = {};
                              Object.keys(muscleRegions).forEach(r => {
                                allOpen[`cat_${r}`] = true;
                              });
                              setNeuroFindings(prev => ({
                                ...prev,
                                [section.id]: { ...(prev[section.id] || {}), ...allOpen }
                              }));
                            }}
                            className="px-3 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg text-xs font-bold transition-all"
                          >
                            ⬇️ פתח הכל
                          </button>
                          <button
                            onClick={() => {
                              const allClosed = {};
                              Object.keys(muscleRegions).forEach(r => {
                                allClosed[`cat_${r}`] = false;
                              });
                              setNeuroFindings(prev => ({
                                ...prev,
                                [section.id]: { ...(prev[section.id] || {}), ...allClosed }
                              }));
                            }}
                            className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-all"
                          >
                            ⬆️ סגור הכל
                          </button>
                        </div>
                      )}

                      {/* רשימת שרירים מקובצת */}
                      {filteredItems.length === 0 ? (
                        <div className="bg-slate-50 rounded-xl p-8 text-center">
                          <div className="text-4xl mb-2">🔍</div>
                          <p className="text-sm text-slate-600">לא נמצאו שרירים</p>
                        </div>
                      ) : (
                        Object.entries(groupedFiltered).map(([regionId, muscles]) => {
                          const regionInfo = muscleRegions[regionId];
                          const colorClasses = {
                            blue: 'bg-blue-100 text-blue-800 border-blue-300',
                            cyan: 'bg-cyan-100 text-cyan-800 border-cyan-300',
                            teal: 'bg-teal-100 text-teal-800 border-teal-300',
                            emerald: 'bg-emerald-100 text-emerald-800 border-emerald-300',
                            violet: 'bg-violet-100 text-violet-800 border-violet-300',
                            rose: 'bg-rose-100 text-rose-800 border-rose-300',
                            orange: 'bg-orange-100 text-orange-800 border-orange-300',
                            amber: 'bg-amber-100 text-amber-800 border-amber-300',
                            pink: 'bg-pink-100 text-pink-800 border-pink-300'
                          };
                          // האם הקטגוריה פתוחה? אם יש חיפוש פעיל - תמיד פתוחה
                          const openKey = `cat_${regionId}`;
                          const isOpen = muscleQuery.length > 1 ? true : (neuroFindings[section.id]?.[openKey] === true);
                          return (
                            <div key={regionId} className="mb-3">
                              <button
                                onClick={() => updateNeuroFinding(section.id, openKey, !isOpen)}
                                className={`w-full ${colorClasses[regionInfo.color]} border-2 px-3 py-2.5 rounded-lg text-right transition-all hover:shadow-md active:scale-[0.99]`}
                              >
                                <h3 className="text-sm font-bold flex items-center gap-1.5">
                                  <span className={`transition-transform duration-200 inline-block ${isOpen ? 'rotate-90' : ''}`}>
                                    ◀
                                  </span>
                                  <span className="text-lg">{regionInfo.icon}</span>
                                  {regionInfo.name}
                                  <span className="text-[10px] bg-white/70 px-2 py-0.5 rounded-full font-normal mr-auto">
                                    {muscles.length} שרירים
                                  </span>
                                </h3>
                              </button>
                              {isOpen && (
                                <div className="space-y-1.5 mt-2">
                                  {muscles.map((muscle, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 hover:border-indigo-300 rounded-lg p-3 transition-all">
                                      <div className="flex items-start justify-between gap-2 mb-1.5">
                                        <div className="flex-1 min-w-0">
                                          <h4 className="font-bold text-slate-800 text-sm md:text-base">{muscle.muscle}</h4>
                                          <p className="text-[11px] text-slate-600 mt-0.5">{muscle.muscleHe}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-1 flex-shrink-0">
                                          <span className="text-[10px] bg-purple-600 text-white px-2 py-0.5 rounded font-mono font-bold">
                                            {muscle.roots}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="grid grid-cols-1 gap-1.5 mt-2">
                                        <div className="bg-purple-50 border border-purple-200 rounded px-2 py-1.5">
                                          <span className="text-[10px] uppercase tracking-wide text-purple-700 font-bold">⚡ עצב מעצבב:</span>
                                          <p className="text-xs text-purple-900 font-semibold">{muscle.nerve}</p>
                                        </div>
                                        <div className="bg-emerald-50 border border-emerald-200 rounded px-2 py-1.5">
                                          <span className="text-[10px] uppercase tracking-wide text-emerald-700 font-bold">🎯 פעולה:</span>
                                          <p className="text-xs text-emerald-900">{muscle.action}</p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })
                      )}

                      {/* הערה */}
                      <div className="mt-5 bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <p className="text-[11px] md:text-xs text-amber-800 leading-relaxed">
                          <strong>💡 איך משתמשים?</strong> חפש שריר לפי שם, או חפש לפי עצב (כמו "Median") או שורש (כמו "C5") כדי לראות את כל השרירים שמושפעים מאותו שורש או עצב. שימושי במיוחד בעבודה עם רדיקולופתיה / פגיעה עצבית.
                        </p>
                      </div>
                    </>
                  );
                }

                // ============ תצוגה רגילה למקטעים אינטראקטיביים ============
                // קבוצת items לפי region
                const regions = {
                  upper: { name: 'גף עליון', icon: '💪' },
                  lower: { name: 'גף תחתון', icon: '🦵' },
                  trunk: { name: 'גוף', icon: '🫁' },
                  spine: { name: 'עמוד שדרה', icon: '🦴' },
                  general: { name: 'כללי', icon: '📋' }
                };
                const groupedItems = {};
                (section.items || []).forEach(item => {
                  const r = item.region || 'general';
                  if (!groupedItems[r]) groupedItems[r] = [];
                  groupedItems[r].push(item);
                });

                return (
                  <>
                    {/* תיאור המקטע */}
                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-4">
                      <div className="flex items-start gap-3">
                        <span className="text-3xl flex-shrink-0">{section.icon}</span>
                        <div>
                          <h3 className="font-bold text-purple-900 text-sm md:text-base">{section.nameEn}</h3>
                          <p className="text-[11px] text-purple-600 mt-0.5">{section.reference}</p>
                          <p className="text-xs md:text-sm text-purple-800 mt-2 leading-relaxed">{section.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* תוצאות חיות */}
                    {summary && (
                      <div className={`${summary.abnormal > 0 ? 'bg-red-50 border-red-300' : 'bg-emerald-50 border-emerald-300'} border-2 rounded-xl p-4 mb-5`}>
                        <h3 className="text-sm font-bold mb-2 flex items-center gap-1.5">
                          <Activity className="w-4 h-4" />
                          {summary.abnormal > 0 ? `🚨 ${summary.abnormal} ממצאים לא תקינים` : '✅ כל הממצאים תקינים'}
                        </h3>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-white rounded-lg p-2 text-center">
                            <div className="text-[10px] uppercase tracking-wide text-slate-500">נבדקו</div>
                            <div className="text-xl font-black text-slate-800">{summary.total}</div>
                          </div>
                          <div className="bg-white rounded-lg p-2 text-center">
                            <div className="text-[10px] uppercase tracking-wide text-emerald-600">תקינים</div>
                            <div className="text-xl font-black text-emerald-700">{summary.normal}</div>
                          </div>
                          <div className="bg-white rounded-lg p-2 text-center">
                            <div className="text-[10px] uppercase tracking-wide text-red-600">לא תקינים</div>
                            <div className="text-xl font-black text-red-700">{summary.abnormal}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* טבלת הדירוג */}
                    {section.grading && (
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 mb-4">
                        <h3 className="text-xs font-bold text-slate-700 mb-2">📊 סקאלת דירוג</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
                          {section.grading.map((g, i) => {
                            const colorClasses = {
                              emerald: 'bg-emerald-100 text-emerald-800',
                              green: 'bg-green-100 text-green-800',
                              lime: 'bg-lime-100 text-lime-800',
                              yellow: 'bg-yellow-100 text-yellow-800',
                              amber: 'bg-amber-100 text-amber-800',
                              orange: 'bg-orange-100 text-orange-800',
                              red: 'bg-red-100 text-red-800',
                              rose: 'bg-rose-100 text-rose-800'
                            };
                            return (
                              <div key={i} className={`px-2 py-1.5 rounded-lg ${colorClasses[g.color]} text-[10px]`}>
                                <div className="font-bold">{g.grade}</div>
                                <div className="opacity-90">{g.label}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* פריטי הבדיקה - מקובצים לפי אזור */}
                    {Object.entries(groupedItems).map(([regionId, items]) => {
                      const regionInfo = regions[regionId];
                      return (
                        <div key={regionId} className="mb-5">
                          <h3 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                            <span>{regionInfo.icon}</span>
                            {regionInfo.name}
                            <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-normal">{items.length}</span>
                          </h3>
                          <div className="space-y-2">
                            {items.map((item, idx) => {
                              const itemKey = `${regionId}-${idx}`;
                              const currentValue = findings[itemKey];
                              const isAnswered = currentValue !== undefined;

                              // קבע צבעים לפי האם המצא תקין
                              const isAbnormal = (() => {
                                if (!currentValue) return false;
                                if (section.id === 'myotomes') return currentValue !== '5';
                                if (section.id === 'dermatomes') return currentValue !== 'תקינה';
                                if (section.id === 'reflexes') return currentValue !== '2+';
                                if (section.id === 'umn') return currentValue === 'חיובי';
                                if (section.id === 'neural-tension') return currentValue === 'חיובי' || currentValue === 'חיובי חלקי';
                                return false;
                              })();

                              return (
                                <div key={itemKey} className={`border-2 rounded-xl overflow-hidden transition-all ${
                                  isAnswered
                                    ? (isAbnormal ? 'border-red-300 bg-red-50' : 'border-emerald-300 bg-emerald-50')
                                    : 'border-slate-200 bg-white'
                                }`}>
                                  <div className="p-3">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                      <div className="flex-1 min-w-0">
                                        {/* Myotomes/Dermatomes */}
                                        {(section.id === 'myotomes' || section.id === 'dermatomes') && (
                                          <>
                                            <h4 className="font-bold text-slate-800 text-sm md:text-base flex items-center gap-2">
                                              <span className="bg-purple-600 text-white px-2 py-0.5 rounded text-xs font-mono">{item.root}</span>
                                              {section.id === 'myotomes' ? item.motion : item.area}
                                            </h4>
                                            <p className="text-[11px] text-slate-500 mt-0.5">{section.id === 'myotomes' ? item.motionEn : item.areaEn}</p>
                                            {section.id === 'myotomes' && (
                                              <p className="text-[11px] text-purple-700 font-medium mt-1">שריר: {item.muscle}</p>
                                            )}
                                            {section.id === 'dermatomes' && (
                                              <p className="text-[11px] text-purple-700 font-medium mt-1">📍 {item.testSite}</p>
                                            )}
                                            {item.test && <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{item.test}</p>}
                                          </>
                                        )}

                                        {/* Reflexes */}
                                        {section.id === 'reflexes' && (
                                          <>
                                            <h4 className="font-bold text-slate-800 text-sm md:text-base flex items-center gap-2">
                                              {item.name}
                                              <span className="bg-amber-600 text-white px-2 py-0.5 rounded text-xs font-mono">{item.root}</span>
                                            </h4>
                                            <p className="text-[11px] text-slate-500 mt-0.5">{item.nameEn}</p>
                                            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed"><strong>טכניקה:</strong> {item.technique}</p>
                                            <p className="text-xs text-emerald-700 mt-1"><strong>תגובה תקינה:</strong> {item.expectedResponse}</p>
                                          </>
                                        )}

                                        {/* UMN Signs */}
                                        {section.id === 'umn' && (
                                          <>
                                            <h4 className="font-bold text-slate-800 text-sm md:text-base">{item.name}</h4>
                                            <p className="text-[11px] text-slate-500 mt-0.5">{item.nameEn}</p>
                                            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed"><strong>טכניקה:</strong> {item.technique}</p>
                                            <p className="text-xs text-red-700 mt-1"><strong>תגובה חיובית:</strong> {item.positiveResponse}</p>
                                            <p className="text-[11px] text-slate-600 mt-1 italic">{item.clinicalSig}</p>
                                          </>
                                        )}

                                        {/* Neural Tension */}
                                        {section.id === 'neural-tension' && (
                                          <>
                                            <h4 className="font-bold text-slate-800 text-sm md:text-base">{item.name}</h4>
                                            <p className="text-[11px] text-slate-500 mt-0.5">{item.nameEn}</p>
                                            <p className="text-[11px] text-cyan-700 font-medium mt-1">🎯 {item.target}</p>
                                            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed"><strong>טכניקה:</strong> {item.technique}</p>
                                            <p className="text-xs text-red-700 mt-1"><strong>תגובה חיובית:</strong> {item.positiveResponse}</p>
                                            {item.sn && (
                                              <div className="flex gap-2 mt-1">
                                                <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">Sn: {item.sn}</span>
                                                <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">Sp: {item.sp}</span>
                                              </div>
                                            )}
                                          </>
                                        )}
                                      </div>
                                      {isAnswered && (
                                        <span className={`text-xl flex-shrink-0 ${isAbnormal ? 'text-red-600' : 'text-emerald-600'}`}>
                                          {isAbnormal ? '⚠️' : '✓'}
                                        </span>
                                      )}
                                    </div>

                                    {/* כפתורי דירוג */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 mt-2">
                                      {section.grading.map((g, gIdx) => {
                                        const isSelected = currentValue === g.grade;
                                        const colorClasses = {
                                          emerald: isSelected ? 'bg-emerald-500 text-white' : 'bg-white border-emerald-300 text-emerald-700 hover:bg-emerald-50',
                                          green: isSelected ? 'bg-green-500 text-white' : 'bg-white border-green-300 text-green-700 hover:bg-green-50',
                                          lime: isSelected ? 'bg-lime-500 text-white' : 'bg-white border-lime-300 text-lime-700 hover:bg-lime-50',
                                          yellow: isSelected ? 'bg-yellow-500 text-white' : 'bg-white border-yellow-300 text-yellow-700 hover:bg-yellow-50',
                                          amber: isSelected ? 'bg-amber-500 text-white' : 'bg-white border-amber-300 text-amber-700 hover:bg-amber-50',
                                          orange: isSelected ? 'bg-orange-500 text-white' : 'bg-white border-orange-300 text-orange-700 hover:bg-orange-50',
                                          red: isSelected ? 'bg-red-500 text-white' : 'bg-white border-red-300 text-red-700 hover:bg-red-50',
                                          rose: isSelected ? 'bg-rose-500 text-white' : 'bg-white border-rose-300 text-rose-700 hover:bg-rose-50'
                                        };
                                        return (
                                          <button
                                            key={gIdx}
                                            onClick={() => updateNeuroFinding(section.id, itemKey, g.grade)}
                                            className={`px-2 py-1.5 rounded-lg text-xs font-bold border transition-all ${colorClasses[g.color]}`}
                                          >
                                            <div>{g.grade}</div>
                                            <div className="text-[9px] opacity-80 font-normal">{g.label}</div>
                                          </button>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}

                    {/* הערה לסימני UMN */}
                    {section.id === 'umn' && summary && summary.abnormal >= 2 && (
                      <div className="bg-rose-50 border-2 border-rose-400 rounded-xl p-4 mb-4">
                        <h3 className="text-sm font-bold text-rose-900 mb-1 flex items-center gap-1.5">
                          🚨 חשד גבוה לפגיעה ב-UMN!
                        </h3>
                        <p className="text-xs text-rose-800 leading-relaxed">
                          {summary.abnormal} סימני UMN חיוביים. בדוק את <strong>Cook's CSM Cluster</strong> במסך הקלאסטרים. דורש <strong>הפניה דחופה</strong> לנוירולוג / MRI.
                        </p>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Patient Cards Modal */}
      {showPatients && (() => {
        // פונקציות עזר לניהול מטופלים
        const createPatient = (data) => {
          const newPatient = {
            id: Date.now().toString(),
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            age: data.age || '',
            gender: data.gender || '',
            occupation: data.occupation || '',
            startDate: data.startDate || new Date().toISOString().split('T')[0],
            mainComplaint: data.mainComplaint || '',
            mainRegion: data.mainRegion || '',
            diagnosis: data.diagnosis || '',
            history: data.history || '',
            goals: data.goals || '',
            visits: [],
            createdAt: new Date().toISOString()
          };
          setPatients(prev => [...prev, newPatient]);
          setSelectedPatient(newPatient);
          setShowNewPatientForm(false);
        };

        const updatePatient = (patientId, updates) => {
          setPatients(prev => prev.map(p => p.id === patientId ? { ...p, ...updates } : p));
          if (selectedPatient?.id === patientId) {
            setSelectedPatient(prev => ({ ...prev, ...updates }));
          }
        };

        const deletePatient = (patientId) => {
          if (!window.confirm('האם אתה בטוח שברצונך למחוק את הכרטיס? פעולה זו לא ניתנת לביטול.')) return;
          setPatients(prev => prev.filter(p => p.id !== patientId));
          if (selectedPatient?.id === patientId) {
            setSelectedPatient(null);
          }
        };

        const addVisit = (patientId, visitData) => {
          const visit = {
            id: Date.now().toString(),
            date: visitData.date || new Date().toISOString().split('T')[0],
            subjective: visitData.subjective || '',
            objective: visitData.objective || '',
            assessment: visitData.assessment || '',
            plan: visitData.plan || '',
            painLevel: visitData.painLevel || '',
            outcomeMeasure: visitData.outcomeMeasure || '',
            outcomeScore: visitData.outcomeScore || '',
            createdAt: new Date().toISOString()
          };
          setPatients(prev => prev.map(p =>
            p.id === patientId ? { ...p, visits: [...p.visits, visit] } : p
          ));
          if (selectedPatient?.id === patientId) {
            setSelectedPatient(prev => ({ ...prev, visits: [...prev.visits, visit] }));
          }
          setShowNewVisit(false);
        };

        const deleteVisit = (patientId, visitId) => {
          if (!window.confirm('למחוק את הביקור?')) return;
          setPatients(prev => prev.map(p =>
            p.id === patientId ? { ...p, visits: p.visits.filter(v => v.id !== visitId) } : p
          ));
          if (selectedPatient?.id === patientId) {
            setSelectedPatient(prev => ({ ...prev, visits: prev.visits.filter(v => v.id !== visitId) }));
          }
        };

        // === ייצוא ל-JSON ===
        const exportPatientsJSON = () => {
          const data = {
            exportDate: new Date().toISOString(),
            appVersion: '27',
            patientsCount: patients.length,
            patients: patients
          };
          const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `patients_export_${new Date().toISOString().split('T')[0]}.json`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        };

        const exportSinglePatientJSON = (patient) => {
          const data = {
            exportDate: new Date().toISOString(),
            appVersion: '27',
            patient: patient
          };
          const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `patient_${patient.firstName}_${new Date().toISOString().split('T')[0]}.json`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        };

        // === ייבוא JSON ===
        const importPatientsJSON = (event) => {
          const file = event.target.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = (e) => {
            try {
              const data = JSON.parse(e.target.result);
              let newPatients = [];
              if (data.patients && Array.isArray(data.patients)) {
                newPatients = data.patients;
              } else if (data.patient) {
                newPatients = [data.patient];
              } else if (Array.isArray(data)) {
                newPatients = data;
              } else {
                alert('פורמט קובץ לא תקין. צריך להיות קובץ JSON שיוצא מהאפליקציה.');
                return;
              }
              // וידוא ש-IDs ייחודיים
              newPatients = newPatients.map(p => ({
                ...p,
                id: p.id || Date.now().toString() + Math.random().toString(36).substring(2, 7)
              }));
              const existingIds = new Set(patients.map(p => p.id));
              const uniqueNew = newPatients.filter(p => !existingIds.has(p.id));
              if (uniqueNew.length === 0) {
                alert('כל המטופלים בקובץ כבר קיימים במערכת');
                return;
              }
              setPatients(prev => [...prev, ...uniqueNew]);
              alert(`✅ יובאו בהצלחה ${uniqueNew.length} מטופלים`);
              event.target.value = ''; // איפוס שדה הקובץ
            } catch (err) {
              alert('שגיאה בקריאת הקובץ: ' + err.message);
            }
          };
          reader.readAsText(file);
        };

        // === ייצוא ל-PDF (דרך הדפסה) ===
        const exportPatientPDF = (patient) => {
          // יצירת חלון חדש עם תוכן מעוצב להדפסה
          const printWindow = window.open('', '_blank');
          if (!printWindow) {
            alert('יש לאפשר חלונות קופצים כדי לייצא PDF');
            return;
          }

          const formatDate = (d) => d ? new Date(d).toLocaleDateString('he-IL') : '';
          const visitsHTML = patient.visits.length === 0 ? '<p style="color:#888;font-style:italic;">אין ביקורים</p>' :
            [...patient.visits].sort((a,b) => new Date(a.date) - new Date(b.date)).map((v, i) => `
              <div style="border:1px solid #ddd;border-radius:8px;padding:12px;margin-bottom:10px;page-break-inside:avoid;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;border-bottom:1px solid #eee;padding-bottom:6px;">
                  <strong style="color:#1e40af;">ביקור #${i+1}</strong>
                  <span style="color:#666;font-size:13px;">📅 ${formatDate(v.date)}</span>
                </div>
                ${v.painLevel ? `<div style="margin-bottom:6px;"><strong>VAS:</strong> ${v.painLevel}/10</div>` : ''}
                ${v.outcomeMeasure ? `<div style="margin-bottom:6px;"><strong>${v.outcomeMeasure}:</strong> ${v.outcomeScore || ''}</div>` : ''}
                ${v.subjective ? `<div style="margin:6px 0;"><strong style="color:#1e40af;">S - סובייקטיבי:</strong><br>${v.subjective.replace(/\n/g,'<br>')}</div>` : ''}
                ${v.objective ? `<div style="margin:6px 0;"><strong style="color:#059669;">O - אובייקטיבי:</strong><br>${v.objective.replace(/\n/g,'<br>')}</div>` : ''}
                ${v.assessment ? `<div style="margin:6px 0;"><strong style="color:#d97706;">A - הערכה:</strong><br>${v.assessment.replace(/\n/g,'<br>')}</div>` : ''}
                ${v.plan ? `<div style="margin:6px 0;"><strong style="color:#7c3aed;">P - תכנית:</strong><br>${v.plan.replace(/\n/g,'<br>')}</div>` : ''}
              </div>
            `).join('');

          const html = `
            <!DOCTYPE html>
            <html dir="rtl" lang="he">
            <head>
              <meta charset="UTF-8">
              <title>כרטיס מטופל - ${patient.firstName} ${patient.lastName}</title>
              <style>
                @page { size: A4; margin: 1.5cm; }
                * { box-sizing: border-box; }
                body {
                  font-family: 'Heebo', 'Arial Hebrew', Arial, sans-serif;
                  direction: rtl;
                  color: #1e293b;
                  line-height: 1.5;
                  margin: 0;
                  padding: 20px;
                }
                .header {
                  border-bottom: 3px solid #0284c7;
                  padding-bottom: 15px;
                  margin-bottom: 20px;
                }
                .header h1 {
                  color: #0c4a6e;
                  margin: 0 0 5px 0;
                  font-size: 24px;
                }
                .header p {
                  color: #64748b;
                  margin: 0;
                  font-size: 13px;
                }
                .section {
                  margin-bottom: 18px;
                  page-break-inside: avoid;
                }
                .section-title {
                  background: linear-gradient(to left, #0284c7, #0ea5e9);
                  color: white;
                  padding: 6px 12px;
                  border-radius: 6px;
                  font-size: 14px;
                  font-weight: bold;
                  margin-bottom: 8px;
                }
                .info-grid {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 8px;
                  background: #f8fafc;
                  padding: 12px;
                  border-radius: 8px;
                  border: 1px solid #e2e8f0;
                }
                .info-item {
                  font-size: 13px;
                }
                .info-item strong { color: #475569; }
                .text-block {
                  background: white;
                  padding: 12px;
                  border-radius: 8px;
                  border: 1px solid #e2e8f0;
                  font-size: 13px;
                  white-space: pre-wrap;
                }
                .footer {
                  margin-top: 30px;
                  padding-top: 15px;
                  border-top: 1px solid #ddd;
                  text-align: center;
                  font-size: 11px;
                  color: #888;
                }
                @media print {
                  body { padding: 0; }
                  .no-print { display: none; }
                }
                .print-btn {
                  position: fixed;
                  top: 20px;
                  left: 20px;
                  background: #0284c7;
                  color: white;
                  padding: 10px 20px;
                  border: none;
                  border-radius: 8px;
                  font-size: 14px;
                  font-weight: bold;
                  cursor: pointer;
                  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }
              </style>
            </head>
            <body>
              <button class="print-btn no-print" onclick="window.print()">🖨️ הדפס / שמור כ-PDF</button>

              <div class="header">
                <h1>כרטיס מטופל - ${patient.firstName} ${patient.lastName}</h1>
                <p>תאריך הפקה: ${new Date().toLocaleDateString('he-IL')} · תאריך התחלת טיפול: ${formatDate(patient.startDate)}</p>
              </div>

              <div class="section">
                <div class="section-title">📋 פרטים אישיים</div>
                <div class="info-grid">
                  ${patient.age ? `<div class="info-item"><strong>גיל:</strong> ${patient.age}</div>` : ''}
                  ${patient.gender ? `<div class="info-item"><strong>מין:</strong> ${patient.gender}</div>` : ''}
                  ${patient.occupation ? `<div class="info-item"><strong>מקצוע:</strong> ${patient.occupation}</div>` : ''}
                  ${patient.mainRegion ? `<div class="info-item"><strong>אזור פציעה:</strong> ${patient.mainRegion}</div>` : ''}
                </div>
              </div>

              ${patient.diagnosis ? `
                <div class="section">
                  <div class="section-title">🏥 אבחנה</div>
                  <div class="text-block">${patient.diagnosis}</div>
                </div>
              ` : ''}

              ${patient.mainComplaint ? `
                <div class="section">
                  <div class="section-title">📝 תלונה ראשית</div>
                  <div class="text-block">${patient.mainComplaint.replace(/\n/g,'<br>')}</div>
                </div>
              ` : ''}

              ${patient.history ? `
                <div class="section">
                  <div class="section-title">📜 רקע רפואי / היסטוריה</div>
                  <div class="text-block">${patient.history.replace(/\n/g,'<br>')}</div>
                </div>
              ` : ''}

              ${patient.goals ? `
                <div class="section">
                  <div class="section-title">🎯 מטרות הטיפול</div>
                  <div class="text-block">${patient.goals.replace(/\n/g,'<br>')}</div>
                </div>
              ` : ''}

              <div class="section">
                <div class="section-title">📅 ביקורים (${patient.visits.length})</div>
                ${visitsHTML}
              </div>

              <div class="footer">
                כרטיס זה הופק על ידי Orthopedic Clinical Atlas v27 - אין מדובר במסמך רפואי רשמי
              </div>

              <script>
                window.addEventListener('load', () => setTimeout(() => window.print(), 500));
              </script>
            </body>
            </html>
          `;
          printWindow.document.write(html);
          printWindow.document.close();
        };

        return (
          <div className="fixed inset-0 z-30 bg-white overflow-y-auto">
            <div className="max-w-3xl mx-auto w-full min-h-screen">
              <div className="bg-gradient-to-l from-sky-600 via-blue-600 to-cyan-700 px-5 py-4 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-3 min-w-0">
                  <button
                    onClick={() => {
                      if (showNewVisit) setShowNewVisit(false);
                      else if (showNewPatientForm) setShowNewPatientForm(false);
                      else if (selectedPatient) setSelectedPatient(null);
                      else setShowPatients(false);
                    }}
                    className="flex items-center gap-1.5 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm"
                  >
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                    <span className="text-sm font-medium">חזרה</span>
                  </button>
                  <div className="min-w-0">
                    <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-1.5">
                      <Users className="w-5 h-5" />
                      {showNewPatientForm ? 'מטופל חדש' :
                        showNewVisit ? 'ביקור חדש' :
                        selectedPatient ? `${selectedPatient.firstName} ${selectedPatient.lastName}` :
                        'כרטיסי מטופלים'}
                    </h2>
                    <p className="text-white/90 text-[11px] md:text-xs truncate">
                      {selectedPatient && !showNewVisit && !showNewPatientForm ? `${selectedPatient.visits.length} ביקורים` : `${patients.length} מטופלים`}
                    </p>
                  </div>
                </div>
                <button onClick={goHome} className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 md:p-6">
                {/* === רשימת מטופלים === */}
                {!selectedPatient && !showNewPatientForm && (
                  <>
                    {/* התראה על שמירה */}
                    <div className="bg-amber-50 border border-amber-300 rounded-xl p-3 mb-4">
                      <p className="text-[11px] md:text-xs text-amber-800 leading-relaxed">
                        <strong>⚠️ הערה חשובה:</strong> הכרטיסים נשמרים <strong>רק בסשן הנוכחי</strong>. סגירת האפליקציה תמחק את הנתונים. אנא הימנע מהזנת פרטים מזהים אמיתיים של מטופלים.
                      </p>
                    </div>

                    <button
                      onClick={() => setShowNewPatientForm(true)}
                      className="w-full mb-3 px-4 py-3 bg-gradient-to-l from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-xl font-bold transition-all active:scale-[0.98] shadow-md flex items-center justify-center gap-2"
                    >
                      <UserPlus className="w-5 h-5" />
                      מטופל חדש
                    </button>

                    {/* כפתורי ייצוא/ייבוא */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {patients.length > 0 && (
                        <button
                          onClick={exportPatientsJSON}
                          className="px-3 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                        >
                          📥 ייצוא JSON ({patients.length})
                        </button>
                      )}
                      <label className={`px-3 py-2 bg-violet-100 hover:bg-violet-200 text-violet-700 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${patients.length === 0 ? 'col-span-2' : ''}`}>
                        📤 ייבוא מקובץ JSON
                        <input
                          type="file"
                          accept=".json,application/json"
                          onChange={importPatientsJSON}
                          className="hidden"
                        />
                      </label>
                    </div>

                    {patients.length === 0 ? (
                      <div className="bg-slate-50 rounded-xl p-8 text-center">
                        <div className="text-5xl mb-3">👥</div>
                        <p className="text-sm text-slate-600 font-bold">אין עדיין מטופלים</p>
                        <p className="text-xs text-slate-500 mt-1">לחץ "מטופל חדש" כדי להתחיל</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {patients.map(p => (
                          <button
                            key={p.id}
                            onClick={() => setSelectedPatient(p)}
                            className="w-full text-right p-4 bg-white border border-slate-200 hover:border-sky-400 hover:bg-sky-50/40 rounded-xl transition-all"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-slate-800 text-sm md:text-base">
                                  {p.firstName} {p.lastName}
                                </h3>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {p.age && <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full text-slate-700">גיל {p.age}</span>}
                                  {p.gender && <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full text-slate-700">{p.gender}</span>}
                                  {p.diagnosis && <span className="text-[10px] bg-blue-100 px-2 py-0.5 rounded-full text-blue-700">{p.diagnosis}</span>}
                                </div>
                                {p.mainComplaint && (
                                  <p className="text-xs text-slate-600 mt-2 line-clamp-2">{p.mainComplaint}</p>
                                )}
                                <div className="flex items-center gap-3 mt-2 text-[10px] text-slate-500">
                                  <span>📅 {p.startDate}</span>
                                  <span>🩺 {p.visits.length} ביקורים</span>
                                </div>
                              </div>
                              <ChevronRight className="w-5 h-5 text-slate-400 rotate-180 flex-shrink-0 mt-1" />
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* === טופס מטופל חדש === */}
                {showNewPatientForm && (
                  <PatientForm
                    onSubmit={createPatient}
                    onCancel={() => setShowNewPatientForm(false)}
                  />
                )}

                {/* === פרטי מטופל === */}
                {selectedPatient && !showNewVisit && !editingPatient && (
                  <>
                    {/* פרטי בסיס */}
                    <div className="bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-200 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-sky-900 text-base">📋 פרטים אישיים</h3>
                        <div className="flex gap-1">
                          <button
                            onClick={() => exportPatientPDF(selectedPatient)}
                            className="p-1.5 hover:bg-rose-200 text-rose-700 rounded-lg transition-colors"
                            title="ייצוא ל-PDF"
                          >
                            <FileText className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => exportSinglePatientJSON(selectedPatient)}
                            className="p-1.5 hover:bg-emerald-200 text-emerald-700 rounded-lg transition-colors"
                            title="ייצוא ל-JSON"
                          >
                            📥
                          </button>
                          <button
                            onClick={() => setEditingPatient(true)}
                            className="p-1.5 hover:bg-sky-200 text-sky-700 rounded-lg transition-colors"
                            title="עריכה"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deletePatient(selectedPatient.id)}
                            className="p-1.5 hover:bg-red-200 text-red-700 rounded-lg transition-colors"
                            title="מחיקה"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {selectedPatient.age && <div><span className="text-slate-600">גיל:</span> <strong>{selectedPatient.age}</strong></div>}
                        {selectedPatient.gender && <div><span className="text-slate-600">מין:</span> <strong>{selectedPatient.gender}</strong></div>}
                        {selectedPatient.occupation && <div className="col-span-2"><span className="text-slate-600">מקצוע:</span> <strong>{selectedPatient.occupation}</strong></div>}
                        <div className="col-span-2"><span className="text-slate-600">תאריך התחלה:</span> <strong>{selectedPatient.startDate}</strong></div>
                      </div>
                    </div>

                    {/* תלונה ואבחנה */}
                    {(selectedPatient.mainComplaint || selectedPatient.diagnosis || selectedPatient.history || selectedPatient.goals) && (
                      <div className="bg-white border border-slate-200 rounded-xl p-4 mb-4 space-y-3">
                        {selectedPatient.diagnosis && (
                          <div>
                            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">אבחנה</h4>
                            <p className="text-sm text-slate-800 font-semibold">{selectedPatient.diagnosis}</p>
                          </div>
                        )}
                        {selectedPatient.mainComplaint && (
                          <div>
                            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">תלונה ראשית</h4>
                            <p className="text-sm text-slate-700 leading-relaxed">{selectedPatient.mainComplaint}</p>
                          </div>
                        )}
                        {selectedPatient.history && (
                          <div>
                            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">רקע רפואי / היסטוריה</h4>
                            <p className="text-sm text-slate-700 leading-relaxed">{selectedPatient.history}</p>
                          </div>
                        )}
                        {selectedPatient.goals && (
                          <div>
                            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">מטרות הטיפול</h4>
                            <p className="text-sm text-slate-700 leading-relaxed">{selectedPatient.goals}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* גרף התקדמות */}
                    {selectedPatient.visits.filter(v => v.outcomeScore && v.outcomeScore !== '').length >= 2 && (() => {
                      const scoredVisits = selectedPatient.visits
                        .filter(v => v.outcomeScore && v.outcomeScore !== '')
                        .sort((a, b) => new Date(a.date) - new Date(b.date));
                      const scores = scoredVisits.map(v => parseFloat(v.outcomeScore));
                      const maxScore = Math.max(...scores, 100);
                      const minScore = Math.min(...scores, 0);
                      const range = maxScore - minScore || 1;

                      return (
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4">
                          <h3 className="font-bold text-emerald-900 text-sm mb-3">📈 התקדמות שאלון</h3>
                          <div className="bg-white rounded-lg p-3">
                            <svg viewBox="0 0 320 140" className="w-full h-auto">
                              {/* קווי רקע */}
                              {[0, 1, 2, 3, 4].map(i => (
                                <line key={i} x1="30" y1={20 + i * 25} x2="310" y2={20 + i * 25} stroke="#e2e8f0" strokeWidth="1" />
                              ))}
                              {/* תוויות Y */}
                              {[0, 1, 2, 3, 4].map(i => (
                                <text key={i} x="25" y={24 + i * 25} fontSize="9" fill="#64748b" textAnchor="end">
                                  {Math.round(maxScore - (range / 4) * i)}
                                </text>
                              ))}
                              {/* קו הגרף */}
                              {scoredVisits.length > 1 && (
                                <polyline
                                  fill="none"
                                  stroke="#059669"
                                  strokeWidth="2"
                                  points={scoredVisits.map((v, i) => {
                                    const x = 30 + (i / (scoredVisits.length - 1)) * 280;
                                    const y = 20 + 100 - ((parseFloat(v.outcomeScore) - minScore) / range) * 100;
                                    return `${x},${y}`;
                                  }).join(' ')}
                                />
                              )}
                              {/* נקודות */}
                              {scoredVisits.map((v, i) => {
                                const x = 30 + (i / Math.max(scoredVisits.length - 1, 1)) * 280;
                                const y = 20 + 100 - ((parseFloat(v.outcomeScore) - minScore) / range) * 100;
                                return (
                                  <g key={v.id}>
                                    <circle cx={x} cy={y} r="4" fill="#059669" />
                                    <text x={x} y={y - 8} fontSize="9" fill="#059669" textAnchor="middle" fontWeight="bold">
                                      {v.outcomeScore}
                                    </text>
                                  </g>
                                );
                              })}
                            </svg>
                            <div className="text-[10px] text-slate-500 text-center mt-2">
                              {scoredVisits[0].outcomeMeasure || 'ציון שאלון'} · {scoredVisits.length} מדידות
                            </div>
                          </div>
                        </div>
                      );
                    })()}

                    {/* ביקורים */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" /> ביקורים ({selectedPatient.visits.length})
                      </h3>
                      <button
                        onClick={() => setShowNewVisit(true)}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1"
                      >
                        <Plus className="w-3 h-3" /> ביקור חדש
                      </button>
                    </div>

                    {selectedPatient.visits.length === 0 ? (
                      <div className="bg-slate-50 rounded-xl p-6 text-center">
                        <p className="text-sm text-slate-600">אין עדיין ביקורים</p>
                        <p className="text-xs text-slate-500 mt-1">לחץ "ביקור חדש" כדי להוסיף</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {[...selectedPatient.visits].reverse().map((visit, idx) => (
                          <div key={visit.id} className="bg-white border border-slate-200 rounded-xl p-3">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                                  ביקור #{selectedPatient.visits.length - idx}
                                </span>
                                <span className="text-xs text-slate-600">📅 {visit.date}</span>
                              </div>
                              <button
                                onClick={() => deleteVisit(selectedPatient.id, visit.id)}
                                className="p-1 hover:bg-red-100 text-red-600 rounded transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            {visit.painLevel && (
                              <div className="text-xs mb-2">
                                <span className="text-slate-600">כאב (VAS):</span>{' '}
                                <span className={`font-bold px-2 py-0.5 rounded ${
                                  parseInt(visit.painLevel) >= 7 ? 'bg-red-100 text-red-700' :
                                  parseInt(visit.painLevel) >= 4 ? 'bg-amber-100 text-amber-700' :
                                  'bg-emerald-100 text-emerald-700'
                                }`}>{visit.painLevel}/10</span>
                              </div>
                            )}
                            {visit.outcomeScore && (
                              <div className="text-xs mb-2">
                                <span className="text-slate-600">{visit.outcomeMeasure || 'שאלון'}:</span>{' '}
                                <span className="font-bold text-emerald-700">{visit.outcomeScore}</span>
                              </div>
                            )}
                            {visit.subjective && (
                              <div className="mt-2">
                                <span className="text-[10px] font-bold text-slate-500 uppercase">S - סובייקטיבי:</span>
                                <p className="text-xs text-slate-700 mt-0.5">{visit.subjective}</p>
                              </div>
                            )}
                            {visit.objective && (
                              <div className="mt-2">
                                <span className="text-[10px] font-bold text-slate-500 uppercase">O - אובייקטיבי:</span>
                                <p className="text-xs text-slate-700 mt-0.5">{visit.objective}</p>
                              </div>
                            )}
                            {visit.assessment && (
                              <div className="mt-2">
                                <span className="text-[10px] font-bold text-slate-500 uppercase">A - הערכה:</span>
                                <p className="text-xs text-slate-700 mt-0.5">{visit.assessment}</p>
                              </div>
                            )}
                            {visit.plan && (
                              <div className="mt-2">
                                <span className="text-[10px] font-bold text-slate-500 uppercase">P - תכנית:</span>
                                <p className="text-xs text-slate-700 mt-0.5">{visit.plan}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* === עריכת מטופל === */}
                {selectedPatient && editingPatient && (
                  <PatientForm
                    initialData={selectedPatient}
                    onSubmit={(data) => {
                      updatePatient(selectedPatient.id, data);
                      setEditingPatient(false);
                    }}
                    onCancel={() => setEditingPatient(false)}
                    isEdit={true}
                  />
                )}

                {/* === ביקור חדש === */}
                {selectedPatient && showNewVisit && (
                  <VisitForm
                    onSubmit={(data) => addVisit(selectedPatient.id, data)}
                    onCancel={() => setShowNewVisit(false)}
                  />
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Anatomy & ROM Modal */}
      {showAnatomy && (
        <div className="fixed inset-0 z-30 bg-white overflow-y-auto">
          <div className="max-w-3xl mx-auto w-full min-h-screen">
            <div className="bg-gradient-to-l from-teal-600 via-emerald-600 to-green-700 px-5 py-4 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-3 min-w-0">
                <button
                  onClick={() => {
                    if (selectedAnatomyRegion) setSelectedAnatomyRegion(null);
                    else setShowAnatomy(false);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm"
                >
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                  <span className="text-sm font-medium">חזרה</span>
                </button>
                <div className="min-w-0">
                  <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-1.5">
                    <Layers className="w-5 h-5" />
                    {selectedAnatomyRegion ? `${anatomyAtlas[selectedAnatomyRegion].icon} ${anatomyAtlas[selectedAnatomyRegion].name}` : 'אנטומיה ו-ROM'}
                  </h2>
                  <p className="text-white/90 text-[11px] md:text-xs truncate">
                    {selectedAnatomyRegion ? anatomyAtlas[selectedAnatomyRegion].nameEn : `9 אזורים אנטומיים · מבנים מרכזיים + טווחי תנועה`}
                  </p>
                </div>
              </div>
              <button onClick={goHome} className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 md:p-6">
              {!selectedAnatomyRegion ? (
                <>
                  {/* תיאור */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-5">
                    <h3 className="text-sm font-bold text-emerald-900 mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4" /> אנטומיה תפקודית
                    </h3>
                    <p className="text-xs md:text-sm text-emerald-800 leading-relaxed">
                      בחר אזור אנטומי כדי לראות את <strong>המבנים המרכזיים</strong> (תפקיד, חשיבות קלינית, פתולוגיות נפוצות) ואת <strong>טווחי התנועה התקינים (ROM)</strong>.
                    </p>
                  </div>

                  {/* רשת אזורים */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(anatomyAtlas).map(([regionId, region]) => (
                      <button
                        key={regionId}
                        onClick={() => {
                          setSelectedAnatomyRegion(regionId);
                          setAnatomyTab('structures');
                        }}
                        className={`bg-gradient-to-br ${region.gradient} text-white rounded-xl p-4 shadow-md hover:shadow-lg active:scale-95 transition-all text-right`}
                      >
                        <div className="text-3xl mb-2">{region.icon}</div>
                        <h3 className="font-bold text-base">{region.name}</h3>
                        <p className="text-[11px] text-white/80 mt-0.5">{region.nameEn}</p>
                        <div className="mt-2 flex items-center gap-2 text-[10px]">
                          <span className="bg-white/20 px-2 py-0.5 rounded-full">
                            {region.structures.length} מבנים
                          </span>
                          <span className="bg-white/20 px-2 py-0.5 rounded-full">
                            {region.rom.length} תנועות
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              ) : (() => {
                const region = anatomyAtlas[selectedAnatomyRegion];
                return (
                  <>
                    {/* סקירה */}
                    <div className={`bg-gradient-to-br ${region.gradient} text-white rounded-xl p-4 mb-4`}>
                      <h3 className="font-bold text-base mb-2 flex items-center gap-2">
                        <span className="text-2xl">{region.icon}</span> סקירה כללית
                      </h3>
                      <p className="text-sm leading-relaxed text-white/95">{region.overview}</p>
                    </div>

                    {/* טאבים */}
                    <div className="bg-white border-2 border-slate-200 rounded-xl p-1 mb-4 grid grid-cols-2 gap-1">
                      <button
                        onClick={() => setAnatomyTab('structures')}
                        className={`px-3 py-2.5 rounded-lg text-sm font-bold transition-all ${
                          anatomyTab === 'structures'
                            ? `bg-gradient-to-l ${region.gradient} text-white shadow-md`
                            : 'bg-transparent text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        🏗️ מבנים אנטומיים
                      </button>
                      <button
                        onClick={() => setAnatomyTab('rom')}
                        className={`px-3 py-2.5 rounded-lg text-sm font-bold transition-all ${
                          anatomyTab === 'rom'
                            ? `bg-gradient-to-l ${region.gradient} text-white shadow-md`
                            : 'bg-transparent text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        📐 ROM (טווחי תנועה)
                      </button>
                    </div>

                    {/* תוכן - מבנים */}
                    {anatomyTab === 'structures' && (
                      <div className="space-y-3">
                        {region.structures.map((s, idx) => (
                          <div key={idx} className="bg-white border border-slate-200 hover:border-emerald-300 rounded-xl p-4 transition-all">
                            <div className="flex items-start gap-3 mb-3">
                              <div className={`w-8 h-8 bg-gradient-to-br ${region.gradient} text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                                {idx + 1}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-slate-800 text-sm md:text-base">{s.name}</h4>
                                <p className="text-[11px] text-slate-500 italic">{s.nameEn}</p>
                              </div>
                            </div>

                            <div className="space-y-2 mr-11">
                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-2.5">
                                <span className="text-[10px] uppercase tracking-wide text-blue-700 font-bold">🎯 תפקיד</span>
                                <p className="text-xs md:text-sm text-blue-900 mt-0.5">{s.function}</p>
                              </div>

                              <div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5">
                                <span className="text-[10px] uppercase tracking-wide text-amber-700 font-bold">💡 חשיבות קלינית</span>
                                <p className="text-xs md:text-sm text-amber-900 mt-0.5">{s.clinical}</p>
                              </div>

                              <div className="bg-rose-50 border border-rose-200 rounded-lg p-2.5">
                                <span className="text-[10px] uppercase tracking-wide text-rose-700 font-bold">⚠️ פתולוגיות נפוצות</span>
                                <p className="text-xs md:text-sm text-rose-900 mt-0.5">{s.pathologies}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* תוכן - ROM */}
                    {anatomyTab === 'rom' && (
                      <>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                          <p className="text-[11px] md:text-xs text-blue-800 leading-relaxed">
                            <strong>💡 הערה:</strong> ערכים אלה הם נורמליים. שונות אישית אפשרית. השווה תמיד עם הצד הנגדי. הגבלות עשויות להעיד על פתולוגיה.
                          </p>
                        </div>

                        <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className={`bg-gradient-to-l ${region.gradient} text-white`}>
                                <th className="text-right px-3 py-2.5 text-xs md:text-sm font-bold">תנועה</th>
                                <th className="text-right px-3 py-2.5 text-xs md:text-sm font-bold">ROM תקין</th>
                              </tr>
                            </thead>
                            <tbody>
                              {region.rom.map((r, idx) => (
                                <tr key={idx} className={`border-t border-slate-200 ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
                                  <td className="px-3 py-3">
                                    <div className="font-bold text-slate-800 text-xs md:text-sm">{r.motion}</div>
                                    <div className="text-[10px] md:text-[11px] text-slate-500 italic">{r.motionEn}</div>
                                  </td>
                                  <td className="px-3 py-3">
                                    <div className="font-black text-emerald-700 text-base md:text-lg">{r.normal}</div>
                                    <div className="text-[10px] md:text-[11px] text-slate-600 leading-tight">{r.notes}</div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3">
                          <p className="text-[11px] md:text-xs text-amber-800 leading-relaxed">
                            <strong>📏 איך מודדים?</strong> השתמש ב-Goniometer רגיל / מד-זווית. קבע נקודות פיקס: ציר תנועה (Axis), זרוע פיקס (Stationary Arm), זרוע נע (Mobile Arm). למדידה מדויקת, חזור 3 פעמים והשתמש בממוצע.
                          </p>
                        </div>
                      </>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Anamnesis Modal */}
      {showAnamnesis && (() => {
        const { hasCritical, results } = computeAnamnesisResults();
        const answeredCount = Object.keys(anamnesisAnswers).length;
        const totalQuestions = anamnesisQuestions.length;

        return (
          <div className="fixed inset-0 z-30 bg-white overflow-y-auto">
            <div className="max-w-3xl mx-auto w-full min-h-screen">
              <div className="bg-gradient-to-l from-violet-500 via-purple-600 to-fuchsia-600 px-5 py-4 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-3 min-w-0">
                  <button onClick={() => setShowAnamnesis(false)} className="flex items-center gap-1.5 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm">
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                    <span className="text-sm font-medium">חזרה</span>
                  </button>
                  <div className="min-w-0">
                    <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-1.5">
                      <ClipboardList className="w-5 h-5" />
                      אנמנזה מובנית
                    </h2>
                    <p className="text-white/90 text-[11px] md:text-xs">{answeredCount}/{totalQuestions} שאלות נענו</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {answeredCount > 0 && (
                    <button
                      onClick={() => setAnamnesisAnswers({})}
                      className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors text-xs"
                    >
                      איפוס
                    </button>
                  )}
                  <button onClick={goHome} className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-4 md:p-6">
                {/* פס התקדמות */}
                <div className="mb-5">
                  <div className="bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-l from-violet-500 to-purple-600 h-full transition-all duration-300"
                      style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* הנחיה */}
                <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 mb-5">
                  <p className="text-xs md:text-sm text-violet-900 leading-relaxed">
                    💬 <strong>איך זה עובד?</strong> ענה על השאלות לפי המטופל שלך. ככל שתענה על יותר שאלות, ההמלצות יהיו מדויקות יותר. האפליקציה תציע פתולוגיות סבירות וכיווני בדיקה.
                  </p>
                </div>

                {/* שאלות */}
                <div className="space-y-4">
                  {anamnesisQuestions.map((q, qIdx) => {
                    const answer = anamnesisAnswers[q.id];
                    const isAnswered = q.multiSelect ? (Array.isArray(answer) && answer.length > 0) : !!answer;

                    return (
                      <div key={q.id} className={`border-2 rounded-xl overflow-hidden transition-all ${isAnswered ? 'border-violet-300 bg-violet-50/30' : 'border-slate-200 bg-white'}`}>
                        <div className="px-4 py-3 border-b border-slate-200 bg-slate-50/50">
                          <h3 className="font-bold text-slate-800 text-sm md:text-base flex items-center gap-2">
                            <span className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-xs font-bold">
                              {qIdx + 1}
                            </span>
                            <span>{q.icon}</span>
                            <span>{q.question}</span>
                            {isAnswered && <span className="mr-auto text-violet-600">✓</span>}
                            {q.multiSelect && <span className="text-[10px] text-slate-500 mr-auto">(מרובה בחירות)</span>}
                          </h3>
                        </div>
                        <div className="p-3 space-y-2">
                          {q.options.map(opt => {
                            let isSelected;
                            if (q.multiSelect) {
                              isSelected = Array.isArray(answer) && answer.includes(opt.value);
                            } else {
                              isSelected = answer === opt.value;
                            }

                            return (
                              <button
                                key={opt.value}
                                onClick={() => {
                                  if (q.multiSelect) {
                                    const current = Array.isArray(answer) ? answer : [];
                                    if (current.includes(opt.value)) {
                                      setAnamnesisAnswers({ ...anamnesisAnswers, [q.id]: current.filter(v => v !== opt.value) });
                                    } else {
                                      setAnamnesisAnswers({ ...anamnesisAnswers, [q.id]: [...current, opt.value] });
                                    }
                                  } else {
                                    setAnamnesisAnswers({ ...anamnesisAnswers, [q.id]: opt.value });
                                  }
                                }}
                                className={`w-full text-right p-2.5 rounded-lg text-xs md:text-sm transition-all border ${
                                  isSelected
                                    ? opt.critical
                                      ? 'bg-rose-100 border-rose-400 text-rose-900 font-medium shadow-sm'
                                      : 'bg-violet-100 border-violet-400 text-violet-900 font-medium shadow-sm'
                                    : opt.critical
                                      ? 'bg-white border-rose-200 text-slate-700 hover:bg-rose-50 hover:border-rose-300'
                                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  {q.multiSelect ? (
                                    <span className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${isSelected ? 'bg-violet-500 border-violet-500' : 'border-slate-300'}`}>
                                      {isSelected && <span className="text-white text-[10px] font-bold">✓</span>}
                                    </span>
                                  ) : (
                                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${isSelected ? 'border-violet-500' : 'border-slate-300'}`}>
                                      {isSelected && <span className="w-2 h-2 rounded-full bg-violet-500"></span>}
                                    </span>
                                  )}
                                  <span className="flex-1">{opt.label}</span>
                                  {opt.critical && <span className="text-rose-500 text-xs">🚨</span>}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* תוצאות */}
                {answeredCount >= 2 && (
                  <div className="mt-6 border-2 border-violet-300 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 overflow-hidden">
                    <div className="bg-gradient-to-l from-violet-600 to-purple-600 px-4 py-3">
                      <h3 className="text-white font-bold text-sm md:text-base flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        🎯 פתולוגיות אפשריות לפי האנמנזה
                      </h3>
                    </div>
                    <div className="p-4">
                      {/* אזהרת דגלים אדומים */}
                      {hasCritical && (
                        <div className="bg-rose-100 border-2 border-rose-400 rounded-xl p-3 mb-4">
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-bold text-rose-900 text-sm">🚨 דגל אדום זוהה!</h4>
                              <p className="text-xs md:text-sm text-rose-800 mt-1 leading-relaxed">
                                סימני אזהרה דורשים בירור רפואי דחוף לפני המשך טיפול שמרני.
                              </p>
                              <button
                                onClick={() => { setShowAnamnesis(false); setShowRedFlags(true); }}
                                className="mt-2 text-xs bg-rose-600 hover:bg-rose-700 text-white px-3 py-1.5 rounded-lg font-medium transition-colors"
                              >
                                ראה פירוט דגלים אדומים →
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {results.length === 0 ? (
                        <p className="text-sm text-slate-500 text-center py-4">ענה על עוד שאלות לקבלת המלצות.</p>
                      ) : (
                        <div className="space-y-2">
                          {results.map((res, idx) => (
                            <button
                              key={`${res.regionKey}-${res.pathIdx}`}
                              onClick={() => {
                                setSelectedRegion(res.regionKey);
                                setSelectedPathology(res.pathIdx);
                                setShowAnamnesis(false);
                              }}
                              className="w-full text-right p-3 bg-white border border-violet-200 hover:border-violet-400 hover:bg-violet-50 rounded-lg transition-all group"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <h4 className="font-semibold text-slate-800 text-sm">{res.pathology.name}</h4>
                                    {idx < 3 && (
                                      <span className="px-2 py-0.5 bg-violet-100 text-violet-700 rounded-full text-[10px] font-bold">
                                        {idx === 0 ? '🥇 התאמה גבוהה' : idx === 1 ? '🥈 התאמה טובה' : '🥉 אפשרי'}
                                      </span>
                                    )}
                                    {isPathologyFavorite(res.regionKey, res.pathIdx) && (
                                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                    )}
                                  </div>
                                  <p className="text-[10px] text-slate-500 mt-0.5">{res.region} · {res.pathology.tests.length} בדיקות</p>
                                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">{res.pathology.shortDesc}</p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-violet-600 rotate-180 flex-shrink-0 mt-1" />
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* הצהרה */}
                <div className="mt-5 bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-[11px] md:text-xs text-amber-800 leading-relaxed">
                    ⚠️ <strong>חשוב:</strong> אנמנזה מובנית היא כלי תמיכה בלבד. אבחנה רפואית דורשת אנמנזה מלאה, בדיקה גופנית, ולעיתים הדמיה - ע"י איש מקצוע מוסמך.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Differential Diagnosis Modal */}
      {showDifferential && (
        <div className="fixed inset-0 z-30 bg-white overflow-y-auto">
          <div className="max-w-3xl mx-auto w-full min-h-screen">
            <div className="bg-gradient-to-l from-pink-500 via-rose-500 to-pink-600 px-5 py-4 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-3 min-w-0">
                <button onClick={() => { selectedDifferential ? setSelectedDifferential(null) : setShowDifferential(false); }} className="flex items-center gap-1.5 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm">
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                  <span className="text-sm font-medium">חזרה</span>
                </button>
                <div className="min-w-0">
                  <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-1.5">
                    <GitCompare className="w-5 h-5" />
                    {selectedDifferential ? selectedDifferential.title : 'אבחנה מבדלת'}
                  </h2>
                  <p className="text-white/90 text-[11px] md:text-xs">
                    {selectedDifferential ? `${selectedDifferential.pathologies.length} פתולוגיות בהשוואה` : `${differentialGroups.length} קבוצות פתולוגיות מתחזות`}
                  </p>
                </div>
              </div>
              <button onClick={goHome} className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 md:p-6">
              {!selectedDifferential ? (
                <>
                  {/* תיאור */}
                  <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 mb-5">
                    <p className="text-xs md:text-sm text-pink-900 leading-relaxed">
                      🤔 <strong>למה זה חשוב?</strong> פתולוגיות שונות יכולות להציג סימפטומים דומים ולהתחזות אחת לשנייה. כאן תמצא טבלאות השוואה שיעזרו לך להבדיל ביניהן.
                    </p>
                  </div>

                  {/* רשימת קבוצות */}
                  <div className="space-y-3">
                    {differentialGroups.map(group => (
                      <button
                        key={group.id}
                        onClick={() => setSelectedDifferential(group)}
                        className="w-full text-right p-4 bg-white border border-slate-200 hover:border-pink-400 hover:bg-pink-50/40 rounded-xl transition-all group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-slate-800 group-hover:text-pink-700 text-sm md:text-base flex items-center gap-2">
                              <span className="text-2xl">{group.icon}</span>
                              {group.title}
                            </h3>
                            <p className="text-xs md:text-sm text-slate-600 mt-1.5 leading-relaxed">{group.description}</p>
                            <div className="flex flex-wrap gap-1.5 mt-2.5">
                              {group.pathologies.map((p, i) => (
                                <span key={i} className="px-2 py-0.5 bg-pink-100 text-pink-700 rounded-md text-[10px] font-medium">
                                  {p.label}
                                </span>
                              ))}
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-pink-600 rotate-180 flex-shrink-0 mt-1" />
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {/* תיאור הקבוצה */}
                  <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 mb-5">
                    <h3 className="font-bold text-pink-900 text-sm md:text-base mb-1.5 flex items-center gap-2">
                      <span className="text-xl">{selectedDifferential.icon}</span>
                      {selectedDifferential.title}
                    </h3>
                    <p className="text-xs md:text-sm text-pink-800 leading-relaxed">{selectedDifferential.description}</p>
                  </div>

                  {/* הפתולוגיות (כותרות) */}
                  <div className="grid gap-2 mb-4" style={{ gridTemplateColumns: `repeat(${selectedDifferential.pathologies.length}, minmax(0, 1fr))` }}>
                    {selectedDifferential.pathologies.map((p, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setSelectedRegion(p.regionKey);
                          setSelectedPathology(p.pathIdx);
                          setShowDifferential(false);
                          setSelectedDifferential(null);
                        }}
                        className="bg-white border-2 border-pink-300 hover:border-pink-500 hover:bg-pink-50 rounded-lg p-2 text-center transition-all group"
                      >
                        <div className="text-[10px] md:text-xs font-bold text-slate-800 group-hover:text-pink-700 leading-tight">{p.label}</div>
                        <div className="text-[9px] text-pink-600 mt-1">פרטים מלאים →</div>
                      </button>
                    ))}
                  </div>

                  {/* טבלת השוואה */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                    <table className="w-full text-[10px] md:text-xs">
                      <thead className="bg-pink-100 sticky top-0">
                        <tr>
                          <th className="text-right px-2 py-2.5 font-bold text-pink-900 sticky right-0 bg-pink-100 z-10">מאפיין</th>
                          {selectedDifferential.pathologies.map((p, i) => (
                            <th key={i} className="text-center px-2 py-2.5 font-bold text-pink-900 min-w-[100px]">{p.label}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {selectedDifferential.comparisonRows.map((row, rIdx) => {
                          const isHighlight = row.feature === 'דגל מבדיל' || row.feature === 'בדיקה מובילה';
                          return (
                            <tr key={rIdx} className={`border-t border-slate-200 ${isHighlight ? 'bg-amber-50' : rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                              <td className={`px-2 py-2.5 sticky right-0 ${isHighlight ? 'bg-amber-50' : rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} font-semibold text-slate-800 z-10`}>
                                {isHighlight && '⭐ '}{row.feature}
                              </td>
                              {row.values.map((value, vIdx) => (
                                <td key={vIdx} className="px-2 py-2.5 text-center text-slate-700 leading-relaxed">{value}</td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* טיפ */}
                  <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-[11px] md:text-xs text-blue-800 leading-relaxed">
                      💡 <strong>טיפ קליני:</strong> השורות המסומנות ב-⭐ הן המאפיינים החשובים ביותר להבדלה. התמקד בהן כשאתה לא בטוח.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Clinical Clusters Modal */}
      {showClusters && (
        <div className="fixed inset-0 z-30 bg-white overflow-y-auto">
          <div className="max-w-3xl mx-auto w-full min-h-screen">
            <div className="bg-gradient-to-l from-indigo-600 via-blue-600 to-violet-600 px-5 py-4 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-3 min-w-0">
                <button
                  onClick={() => {
                    if (selectedCluster) {
                      setSelectedCluster(null);
                      setClusterResults({});
                      setPretestProb(50);
                    } else {
                      setShowClusters(false);
                    }
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm"
                >
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                  <span className="text-sm font-medium">חזרה</span>
                </button>
                <div className="min-w-0">
                  <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-1.5">
                    <Layers className="w-5 h-5" />
                    {selectedCluster ? selectedCluster.name : 'קלאסטרים אבחנתיים'}
                  </h2>
                  <p className="text-white/90 text-[11px] md:text-xs truncate">
                    {selectedCluster ? selectedCluster.pathology : `${clinicalClusters.length} קלאסטרים מבוססי-ספרות`}
                  </p>
                </div>
              </div>
              <button onClick={goHome} className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 md:p-6">
              {!selectedCluster ? (
                <>
                  {/* תיאור */}
                  <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-5">
                    <h3 className="text-sm font-bold text-indigo-900 mb-2 flex items-center gap-1.5">
                      <Calculator className="w-4 h-4" /> מה זה קלאסטר אבחנתי?
                    </h3>
                    <p className="text-xs md:text-sm text-indigo-800 leading-relaxed">
                      בדיקה יחידה לעיתים נדירות מספיקה לאבחנה. <strong>קלאסטרים</strong> משלבים מספר בדיקות יחד ונותנים LR גבוה משמעותית.
                    </p>
                    <p className="text-[11px] md:text-xs text-indigo-700 mt-2">
                      <strong>דוגמה:</strong> Spurling לבד = LR+ 4.3 · Wainner Cluster (4 בדיקות) = <strong className="text-indigo-900">LR+ 30.3!</strong>
                    </p>
                  </div>

                  {/* רשימת קלאסטרים */}
                  <div className="space-y-3">
                    {clinicalClusters.map(cluster => (
                      <button
                        key={cluster.id}
                        onClick={() => {
                          setSelectedCluster(cluster);
                          setClusterResults({});
                          setPretestProb(50);
                        }}
                        className="w-full text-right p-4 bg-white border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 rounded-xl transition-all group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-slate-800 group-hover:text-indigo-700 text-sm md:text-base flex items-center gap-2 flex-wrap">
                              <span className="text-2xl">{cluster.icon}</span>
                              <span>{cluster.name}</span>
                              <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-normal">
                                {cluster.tests.length} בדיקות
                              </span>
                            </h3>
                            <p className="text-xs md:text-sm text-indigo-700 font-medium mt-1">{cluster.pathology}</p>
                            <p className="text-[10px] text-slate-500 mt-0.5">{cluster.reference}</p>
                            <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">{cluster.description}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 rotate-180 flex-shrink-0 mt-1" />
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              ) : (() => {
                // מסך פרטי קלאסטר
                const posCount = computeClusterPosCount(selectedCluster.id);
                const interpretation = getCurrentInterpretation(selectedCluster);
                const lrValue = interpretation?.lrPos;
                const postTestProb = lrValue && lrValue !== '—'
                  ? calculatePostTestProb(pretestProb, lrValue)
                  : pretestProb;

                return (
                  <>
                    {/* תיאור הקלאסטר */}
                    <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-5">
                      <div className="flex items-start gap-3">
                        <span className="text-3xl flex-shrink-0">{selectedCluster.icon}</span>
                        <div>
                          <h3 className="font-bold text-indigo-900 text-sm md:text-base">{selectedCluster.pathology}</h3>
                          <p className="text-[10px] text-indigo-600 mt-0.5">{selectedCluster.pathologyEn} · {selectedCluster.reference}</p>
                          <p className="text-xs md:text-sm text-indigo-800 mt-2 leading-relaxed">{selectedCluster.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* טבלת תוצאות חיה */}
                    <div className="bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 rounded-xl p-4 mb-5 text-white shadow-lg">
                      <h3 className="text-sm font-bold mb-3 flex items-center gap-1.5">
                        <Activity className="w-4 h-4" />
                        תוצאות חיות
                      </h3>
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="bg-white/20 rounded-lg p-2.5 text-center backdrop-blur-sm">
                          <div className="text-[10px] uppercase tracking-wide opacity-90">חיוביות</div>
                          <div className="text-2xl font-black">{posCount}/{selectedCluster.tests.length}</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-2.5 text-center backdrop-blur-sm">
                          <div className="text-[10px] uppercase tracking-wide opacity-90">LR+</div>
                          <div className="text-2xl font-black">{lrValue || '—'}</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-2.5 text-center backdrop-blur-sm">
                          <div className="text-[10px] uppercase tracking-wide opacity-90">Post-Test</div>
                          <div className="text-2xl font-black">{postTestProb}%</div>
                        </div>
                      </div>
                      {interpretation && interpretation.notes && (
                        <div className="bg-white/15 rounded-lg p-2.5 text-xs md:text-sm leading-relaxed">
                          <strong>פירוש:</strong> {interpretation.notes}
                        </div>
                      )}
                    </div>

                    {/* בדיקות הקלאסטר */}
                    <h3 className="text-sm md:text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-indigo-600 rounded-full"></span>
                      🔬 סמן את תוצאות הבדיקות
                    </h3>
                    <div className="space-y-2 mb-5">
                      {selectedCluster.tests.map((test, tIdx) => {
                        const result = clusterResults[selectedCluster.id]?.[tIdx];
                        return (
                          <div key={tIdx} className={`border-2 rounded-xl overflow-hidden transition-all ${
                            result === 'positive' ? 'border-emerald-400 bg-emerald-50' :
                            result === 'negative' ? 'border-slate-400 bg-slate-50' :
                            'border-slate-200 bg-white'
                          }`}>
                            <div className="p-3">
                              <div className="flex items-start gap-2 mb-2">
                                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                                  {tIdx + 1}
                                </span>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-slate-800 text-sm md:text-base">{test.name}</h4>
                                  <p className="text-[10px] text-slate-500">{test.nameEn}</p>
                                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{test.description}</p>
                                </div>
                              </div>
                              <div className="grid grid-cols-3 gap-1.5 mt-2">
                                <button
                                  onClick={() => setClusterResults({
                                    ...clusterResults,
                                    [selectedCluster.id]: {
                                      ...(clusterResults[selectedCluster.id] || {}),
                                      [tIdx]: 'positive'
                                    }
                                  })}
                                  className={`px-2 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                                    result === 'positive'
                                      ? 'bg-emerald-500 text-white shadow-md'
                                      : 'bg-white border border-emerald-300 text-emerald-700 hover:bg-emerald-50'
                                  }`}
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  חיובי
                                </button>
                                <button
                                  onClick={() => setClusterResults({
                                    ...clusterResults,
                                    [selectedCluster.id]: {
                                      ...(clusterResults[selectedCluster.id] || {}),
                                      [tIdx]: 'negative'
                                    }
                                  })}
                                  className={`px-2 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                                    result === 'negative'
                                      ? 'bg-slate-600 text-white shadow-md'
                                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                                  }`}
                                >
                                  <XCircle className="w-3.5 h-3.5" />
                                  שלילי
                                </button>
                                <button
                                  onClick={() => {
                                    const newResults = { ...(clusterResults[selectedCluster.id] || {}) };
                                    delete newResults[tIdx];
                                    setClusterResults({ ...clusterResults, [selectedCluster.id]: newResults });
                                  }}
                                  className={`px-2 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-center ${
                                    !result
                                      ? 'bg-slate-200 text-slate-700'
                                      : 'bg-white border border-slate-300 text-slate-500 hover:bg-slate-50'
                                  }`}
                                >
                                  לא בוצע
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* חישובון בייסיאני */}
                    <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4 mb-5">
                      <h3 className="text-sm font-bold text-amber-900 mb-2 flex items-center gap-1.5">
                        <Calculator className="w-4 h-4" /> חישובון בייסיאני
                      </h3>
                      <p className="text-[11px] md:text-xs text-amber-800 mb-3 leading-relaxed">
                        מהי הסבירות לפתולוגיה הזו לפני הבדיקות (לפי האנמנזה)? התוצאה תעודכן עם כל בדיקה שתסמן.
                      </p>
                      <div className="bg-white border border-amber-200 rounded-lg p-3">
                        <label className="text-xs font-semibold text-amber-900 block mb-2">
                          הסבירות לפני הבדיקה (Pre-test Probability): <strong className="text-amber-700">{pretestProb}%</strong>
                        </label>
                        <input
                          type="range"
                          min="1"
                          max="99"
                          value={pretestProb}
                          onChange={(e) => setPretestProb(parseInt(e.target.value))}
                          className="w-full accent-amber-600"
                        />
                        <div className="flex justify-between text-[10px] text-amber-600 mt-1">
                          <span>1% (סביר נמוך)</span>
                          <span>50% (לא יודע)</span>
                          <span>99% (סביר גבוה)</span>
                        </div>
                      </div>

                      {/* תצוגת תוצאה */}
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        <div className="bg-white border border-amber-200 rounded-lg p-3 text-center">
                          <div className="text-[10px] uppercase tracking-wide text-amber-600">לפני</div>
                          <div className="text-2xl font-black text-amber-700">{pretestProb}%</div>
                        </div>
                        <div className="bg-amber-100 border-2 border-amber-400 rounded-lg p-3 text-center">
                          <div className="text-[10px] uppercase tracking-wide text-amber-700">אחרי</div>
                          <div className="text-2xl font-black text-amber-900">{postTestProb}%</div>
                        </div>
                      </div>

                      {/* שינוי משמעותי */}
                      {posCount > 0 && lrValue && lrValue !== '—' && (
                        <div className="mt-3 bg-amber-100/60 rounded-lg p-2.5 text-[11px] md:text-xs text-amber-900">
                          {postTestProb > pretestProb + 30 ? (
                            <span>📈 <strong>שינוי משמעותי!</strong> הסבירות עלתה ב-{postTestProb - pretestProb} נקודות</span>
                          ) : postTestProb > pretestProb + 10 ? (
                            <span>↗️ הסבירות עלתה ב-{postTestProb - pretestProb} נקודות</span>
                          ) : (
                            <span>➡️ שינוי קטן בסבירות ({postTestProb - pretestProb >= 0 ? '+' : ''}{postTestProb - pretestProb} נקודות)</span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* טבלת פירוש מלא */}
                    <h3 className="text-sm md:text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-indigo-600 rounded-full"></span>
                      📊 טבלת פירוש מלאה
                    </h3>
                    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-4">
                      <table className="w-full text-[10px] md:text-xs">
                        <thead className="bg-indigo-100">
                          <tr>
                            <th className="text-center px-2 py-2 font-bold text-indigo-900">חיוביות</th>
                            <th className="text-center px-2 py-2 font-bold text-emerald-700">Sn</th>
                            <th className="text-center px-2 py-2 font-bold text-amber-700">Sp</th>
                            <th className="text-center px-2 py-2 font-bold text-blue-700">LR+</th>
                            <th className="text-right px-2 py-2 font-bold text-indigo-900">פירוש</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedCluster.interpretation.map((row, rIdx) => {
                            const isCurrent = row.positives === posCount;
                            return (
                              <tr key={rIdx} className={`border-t border-indigo-100 ${isCurrent ? 'bg-indigo-100 font-bold' : rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                                <td className="px-2 py-2 text-center text-indigo-900">{isCurrent && '👁️ '}{row.positives}/{selectedCluster.tests.length}</td>
                                <td className="px-2 py-2 text-center text-emerald-700">{row.sensitivity}</td>
                                <td className="px-2 py-2 text-center text-amber-700">{row.specificity}</td>
                                <td className="px-2 py-2 text-center text-blue-700 font-bold">{row.lrPos}</td>
                                <td className="px-2 py-2 text-right text-slate-700">{row.notes}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* הערה קריטית */}
                    {selectedCluster.criticalNote && (
                      <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-3 mb-4">
                        <p className="text-xs md:text-sm text-rose-900 leading-relaxed font-medium">
                          {selectedCluster.criticalNote}
                        </p>
                      </div>
                    )}

                    {/* מעבר לפתולוגיה */}
                    <button
                      onClick={() => {
                        // מציאת הפתולוגיה במאגר
                        let foundRegion = null, foundIdx = null;
                        Object.entries(regionsData).forEach(([rKey, region]) => {
                          region.pathologies.forEach((p, pIdx) => {
                            if (p.nameEn === selectedCluster.pathologyEn) {
                              foundRegion = rKey;
                              foundIdx = pIdx;
                            }
                          });
                        });
                        if (foundRegion !== null) {
                          setSelectedRegion(foundRegion);
                          setSelectedPathology(foundIdx);
                          setShowClusters(false);
                          setSelectedCluster(null);
                        }
                      }}
                      className="w-full bg-gradient-to-l from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-xl p-3 transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm font-bold">פרטים מלאים על הפתולוגיה</span>
                      <ChevronRight className="w-4 h-4 rotate-180" />
                    </button>

                    {/* הסבר על Likelihood Ratio */}
                    <div className="mt-5 bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <h4 className="text-xs font-bold text-blue-900 mb-1.5">💡 איך לפרש LR+?</h4>
                      <ul className="space-y-1 text-[11px] md:text-xs text-blue-800">
                        <li><strong>&gt; 10:</strong> שינוי גדול בסבירות (אבחנה כמעט ודאית)</li>
                        <li><strong>5-10:</strong> שינוי בינוני</li>
                        <li><strong>2-5:</strong> שינוי קטן אבל חשוב</li>
                        <li><strong>1-2:</strong> שינוי מינימלי - לא משמעותי</li>
                      </ul>
                    </div>

                    {/* אזהרה */}
                    <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <p className="text-[11px] md:text-xs text-amber-800 leading-relaxed">
                        ⚠️ קלאסטרים הם כלי תמיכה - אבחנה סופית דורשת שיקול קליני, אנמנזה מלאה ולעיתים הדמיה.
                      </p>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Favorites Modal */}
      {showFavorites && (
        <div className="fixed inset-0 z-30 bg-white overflow-y-auto">
          <div className="max-w-3xl mx-auto w-full min-h-screen">
            <div className="bg-gradient-to-l from-amber-500 via-yellow-500 to-orange-500 px-5 py-4 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-3 min-w-0">
                <button onClick={() => setShowFavorites(false)} className="flex items-center gap-1.5 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm">
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                  <span className="text-sm font-medium">חזרה</span>
                </button>
                <div className="min-w-0">
                  <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-1.5">
                    <Star className="w-5 h-5 fill-white" />
                    המועדפים שלי
                  </h2>
                  <p className="text-white/90 text-[11px] md:text-xs">{favoritePathologyData.length} פתולוגיות · {favoriteTestData.length} בדיקות</p>
                </div>
              </div>
              <button onClick={goHome} className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 md:p-6">
              {favoritePathologyData.length === 0 && favoriteTestData.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-10 h-10 text-amber-500" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">עוד אין מועדפים</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    כשתצפה בפתולוגיה או בבדיקה, לחץ על כפתור הכוכב ⭐ בכותרת כדי לשמור אותה כאן לגישה מהירה.
                  </p>
                  <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 text-right max-w-md mx-auto">
                    <h4 className="text-sm font-bold text-amber-800 mb-2 flex items-center gap-1.5">
                      💡 למה כדאי?
                    </h4>
                    <ul className="space-y-1.5 text-xs md:text-sm text-amber-900">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 flex-shrink-0">•</span>
                        <span>גישה מהירה לפתולוגיות שאתה לומד עכשיו</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 flex-shrink-0">•</span>
                        <span>חזרה קלה על בדיקות לקראת מבחן או סטאז'</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 flex-shrink-0">•</span>
                        <span>שמירה של בדיקות שאתה משתמש בהן בקליניקה</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <>
                  {/* פתולוגיות מועדפות */}
                  {favoritePathologyData.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm md:text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 bg-amber-500 rounded-full"></span>
                        🩺 פתולוגיות מועדפות ({favoritePathologyData.length})
                      </h3>
                      <div className="space-y-2">
                        {favoritePathologyData.map((item) => (
                          <div key={item.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-amber-300 transition-colors">
                            <button
                              onClick={() => {
                                setSelectedRegion(item.regionKey);
                                setSelectedPathology(item.pathIdx);
                                setShowFavorites(false);
                              }}
                              className="w-full text-right p-3 md:p-4 hover:bg-amber-50/40 transition-colors group"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-slate-800 group-hover:text-amber-700 text-sm md:text-base">{item.pathology.name}</h4>
                                  <p className="text-[11px] text-slate-500 mt-0.5">{item.pathology.nameEn} · {item.regionName}</p>
                                  <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">{item.pathology.shortDesc}</p>
                                  <div className="flex items-center gap-1.5 mt-2 text-xs text-amber-600">
                                    <AlertCircle className="w-3 h-3" />
                                    <span>{item.pathology.tests.length} בדיקות</span>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      togglePathologyFavorite(item.regionKey, item.pathIdx);
                                    }}
                                    className="p-1.5 hover:bg-amber-100 rounded-lg transition-colors"
                                    aria-label="הסר ממועדפים"
                                  >
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  </button>
                                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 rotate-180" />
                                </div>
                              </div>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* בדיקות מועדפות */}
                  {favoriteTestData.length > 0 && (
                    <div>
                      <h3 className="text-sm md:text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 bg-amber-500 rounded-full"></span>
                        🔬 בדיקות מועדפות ({favoriteTestData.length})
                      </h3>
                      <div className="space-y-2">
                        {favoriteTestData.map((item) => (
                          <div key={item.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-amber-300 transition-colors">
                            <button
                              onClick={() => {
                                setSelectedRegion(item.regionKey);
                                setSelectedPathology(item.pathIdx);
                                setSelectedTest(item.testIdx);
                                setShowFavorites(false);
                              }}
                              className="w-full text-right p-3 md:p-4 hover:bg-amber-50/40 transition-colors group"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-slate-800 group-hover:text-amber-700 text-sm md:text-base">{item.test.name}</h4>
                                  <p className="text-[11px] text-slate-500 mt-0.5">{item.test.nameEn}</p>
                                  <p className="text-[11px] text-slate-400 mt-1">{item.regionName} · {item.pathologyName}</p>
                                  <div className="flex flex-wrap gap-1.5 mt-2">
                                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md text-[10px] font-medium">
                                      Sn: {item.test.sn}
                                    </span>
                                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-md text-[10px] font-medium">
                                      Sp: {item.test.sp}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleTestFavorite(item.regionKey, item.pathIdx, item.testIdx);
                                    }}
                                    className="p-1.5 hover:bg-amber-100 rounded-lg transition-colors"
                                    aria-label="הסר ממועדפים"
                                  >
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  </button>
                                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 rotate-180" />
                                </div>
                              </div>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* כפתור ניקוי */}
                  {(favoritePathologyData.length > 0 || favoriteTestData.length > 0) && (
                    <div className="mt-6 pt-4 border-t border-slate-200">
                      <button
                        onClick={() => {
                          if (window.confirm('האם אתה בטוח שברצונך להסיר את כל המועדפים?')) {
                            setFavoritePathologies([]);
                            setFavoriteTests([]);
                          }
                        }}
                        className="w-full p-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-lg text-xs font-medium transition-colors"
                      >
                        🗑️ ניקוי כל המועדפים
                      </button>
                    </div>
                  )}
                </>
              )}

              {/* הערה */}
              <div className="mt-5 bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-[11px] md:text-xs text-blue-700 leading-relaxed">
                  💡 <strong>טיפ:</strong> המועדפים נשמרים כל עוד האפליקציה פתוחה. סגירת הדפדפן תאפס אותם.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Symptom Search Modal */}
      {showSymptomSearch && (
        <div className="fixed inset-0 z-30 bg-white overflow-y-auto">
          <div className="max-w-3xl mx-auto w-full min-h-screen">
            <div className="bg-gradient-to-l from-emerald-500 via-teal-500 to-cyan-500 px-5 py-4 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-white">אבחון לפי סימפטומים</h2>
                  <p className="text-white/85 text-[11px] md:text-xs">בחר/תאר סימפטומים וקבל פתולוגיות מתאימות</p>
                </div>
              </div>
              <button onClick={closeSymptomSearch} className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 md:p-6">
              {/* תיאור חופשי */}
              <div className="mb-5">
                <label className="text-xs font-semibold text-slate-600 mb-1.5 block">📝 תיאור חופשי (אופציונלי)</label>
                <textarea
                  placeholder="לדוגמה: כאב בכתף שמחמיר בלילה, נימול ביד..."
                  value={symptomTextQuery}
                  onChange={(e) => setSymptomTextQuery(e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-emerald-400 focus:bg-white transition-colors resize-none"
                />
              </div>

              {/* סימפטומים מובנים */}
              <div className="mb-5">
                <label className="text-xs font-semibold text-slate-600 mb-2 block flex items-center gap-1.5">
                  <ListChecks className="w-3.5 h-3.5" />
                  בחר סימפטומים מהרשימה ({selectedSymptoms.length} נבחרו)
                </label>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(symptomKeywords).map((sym) => {
                    const isSelected = selectedSymptoms.includes(sym);
                    return (
                      <button
                        key={sym}
                        onClick={() => toggleSymptom(sym)}
                        className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                          isSelected
                            ? 'bg-gradient-to-l from-emerald-500 to-teal-500 text-white shadow-md'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                        }`}
                      >
                        {isSelected && '✓ '}{sym}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* תוצאות */}
              {symptomBasedResults.length > 0 && (
                <div className="border-t border-slate-200 pt-4">
                  <h3 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 bg-emerald-500 rounded-full"></span>
                    פתולוגיות אפשריות ({symptomBasedResults.length})
                  </h3>
                  <div className="space-y-2">
                    {symptomBasedResults.map((res, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedRegion(res.regionKey);
                          setSelectedPathology(res.pathIdx);
                          closeSymptomSearch();
                        }}
                        className="w-full text-right p-3 md:p-4 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/40 rounded-xl transition-all group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-semibold text-slate-800 group-hover:text-emerald-700 text-sm md:text-base">{res.pathology.name}</h4>
                              {idx < 3 && (
                                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold">
                                  {idx === 0 ? '🥇 התאמה גבוהה' : idx === 1 ? '🥈 התאמה טובה' : '🥉 התאמה'}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 mt-0.5">{res.pathology.nameEn} · {res.region}</p>
                            <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">{res.pathology.shortDesc}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 rotate-180 flex-shrink-0 mt-1" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {(selectedSymptoms.length > 0 || symptomTextQuery) && symptomBasedResults.length === 0 && (
                <div className="border-t border-slate-200 pt-4 text-center py-6">
                  <p className="text-sm text-slate-500">לא נמצאו פתולוגיות מתאימות. נסה סימפטומים נוספים.</p>
                </div>
              )}

              {selectedSymptoms.length === 0 && !symptomTextQuery && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <p className="text-xs md:text-sm text-slate-600">בחר לפחות סימפטום אחד מהרשימה או תאר סימפטום בכתב כדי לקבל המלצות.</p>
                </div>
              )}

              {/* אזהרה רפואית */}
              <div className="mt-5 bg-rose-50 border border-rose-200 rounded-lg p-3">
                <p className="text-[11px] md:text-xs text-rose-700 leading-relaxed">
                  ⚠️ <strong>הערה:</strong> כלי זה הוא עזר ללימוד בלבד ואינו מהווה אבחנה רפואית. אבחנה רפואית דורשת בדיקה גופנית מלאה ע"י איש מקצוע מוסמך.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Red Flags Modal */}
      {showRedFlags && (
        <div className="fixed inset-0 z-30 bg-white overflow-y-auto">
          <div className="max-w-3xl mx-auto w-full min-h-screen">
            <div className="bg-gradient-to-l from-red-600 via-rose-600 to-red-700 px-5 py-4 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 relative">
                  <Siren className="w-5 h-5 text-white" />
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-pulse"></span>
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-white">🚨 דגלים אדומים</h2>
                  <p className="text-white/90 text-[11px] md:text-xs">מצבים הדורשים הפניה דחופה</p>
                </div>
              </div>
              <button onClick={closeRedFlags} className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 md:p-6">
              {/* התראה כללית */}
              <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-4 mb-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-rose-800 mb-1">חשוב לדעת</h3>
                    <p className="text-xs md:text-sm text-rose-700 leading-relaxed">
                      דגלים אדומים הם סימני אזהרה המצביעים על פתולוגיה חמורה הדורשת בירור דחוף. בנוכחות אחד או יותר מהם - <strong>אין להמשיך בטיפול שמרני</strong> אלא להפנות מיידית להערכה רפואית.
                    </p>
                  </div>
                </div>
              </div>

              {/* טלפוני חירום */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-5 flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div className="text-xs md:text-sm">
                  <strong className="text-blue-800">בישראל:</strong> מד"א 101 · משטרה 100 · קופ"ח דחוף לפי הביטוח
                </div>
              </div>

              {/* קטגוריות הדגלים */}
              <div className="space-y-5">
                {redFlagsData.map((category, catIdx) => (
                  <div key={catIdx} className="border-2 border-slate-200 rounded-xl overflow-hidden">
                    <div className={`px-4 py-3 ${category.severity === 'critical' ? 'bg-red-100 border-b-2 border-red-300' : 'bg-amber-100 border-b-2 border-amber-300'}`}>
                      <h3 className={`text-sm md:text-base font-bold ${category.severity === 'critical' ? 'text-red-900' : 'text-amber-900'} flex items-center gap-2`}>
                        {category.severity === 'critical' ? '🔴' : '🟡'} {category.category}
                      </h3>
                    </div>

                    <div className="divide-y divide-slate-200">
                      {category.conditions.map((cond, condIdx) => (
                        <div key={condIdx} className="p-4">
                          <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                            <div className="min-w-0 flex-1">
                              <h4 className="font-bold text-slate-800 text-sm md:text-base">{cond.name}</h4>
                              <p className="text-[11px] text-slate-500 mt-0.5">{cond.nameEn}</p>
                            </div>
                            <span className={`px-2 py-1 rounded-md text-[10px] md:text-[11px] font-bold whitespace-nowrap ${category.severity === 'critical' ? 'bg-red-600 text-white' : 'bg-amber-500 text-white'}`}>
                              ⏰ {cond.urgency}
                            </span>
                          </div>

                          <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-3 italic">
                            {cond.context}
                          </p>

                          <div className="bg-rose-50 border border-rose-200 rounded-lg p-3 mb-2">
                            <h5 className="text-[10px] md:text-xs font-bold text-rose-800 mb-1.5 uppercase tracking-wide">⚠️ סימני אזהרה</h5>
                            <ul className="space-y-1">
                              {cond.warningSigns.map((sign, signIdx) => (
                                <li key={signIdx} className="text-xs md:text-sm text-slate-700 flex items-start gap-2">
                                  <span className="text-rose-500 flex-shrink-0 mt-0.5">•</span>
                                  <span className="leading-relaxed">{sign}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                            <h5 className="text-[10px] md:text-xs font-bold text-emerald-800 mb-1 uppercase tracking-wide">✅ פעולה נדרשת</h5>
                            <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">{cond.action}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* סיכום מהיר */}
              <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span>📋</span> כלל אצבע לזיהוי דגלים אדומים
                </h3>
                <div className="space-y-2 text-xs md:text-sm text-slate-700">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-red-600 flex-shrink-0">B</span>
                    <span><strong>Bowel/Bladder</strong> - שינוי בתפקוד סוגרים → CES</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-red-600 flex-shrink-0">A</span>
                    <span><strong>Anesthesia</strong> - אנסטזיה אוכף, אובדן תחושה דרמטומלי</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-red-600 flex-shrink-0">C</span>
                    <span><strong>Cancer history</strong> - היסטוריה של סרטן + כאב חדש</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-red-600 flex-shrink-0">K</span>
                    <span><strong>Kid/Geriatric</strong> - גיל קיצוני + סימנים</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-red-600 flex-shrink-0">P</span>
                    <span><strong>Pain</strong> - כאב לילי קבוע, לא משתפר במנוחה</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-red-600 flex-shrink-0">A</span>
                    <span><strong>Autoimmune/Steroids</strong> - שימוש כרוני בסטרואידים</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-red-600 flex-shrink-0">I</span>
                    <span><strong>IV drug use / Infection</strong> - חום + כאב, סמים IV</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-red-600 flex-shrink-0">N</span>
                    <span><strong>Neurological deficit</strong> - חולשה מתקדמת, סימני UMN</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-red-600 flex-shrink-0">T</span>
                    <span><strong>Trauma</strong> - חבלה משמעותית או מינורית בקשיש</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-red-600 flex-shrink-0">S</span>
                    <span><strong>Systemic</strong> - חום, ירידה במשקל, חולשה כללית</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-3 italic">📚 מבוסס על ICSI Guidelines ו-Clinical Practice Guidelines for Low Back Pain.</p>
              </div>

              {/* הצהרה */}
              <div className="mt-4 bg-rose-50 border border-rose-200 rounded-lg p-3">
                <p className="text-[11px] md:text-xs text-rose-700 leading-relaxed">
                  ⚠️ <strong>הצהרה רפואית:</strong> רשימה זו מהווה כלי עזר ללימוד והיא אינה ממצה. בכל ספק קליני - יש להתייעץ עם רופא ולא להסתמך רק על הרשימה. ההחלטה הסופית להפניה היא של איש המקצוע המטפל.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Treatment Protocol Modal */}
      {showTreatment && selectedRegion && selectedPathology !== null && (() => {
        const pathology = regionsData[selectedRegion].pathologies[selectedPathology];
        const protocol = getProtocol(pathology);
        const stages = [
          { key: 'acute', label: 'חריף', color: 'red', emoji: '🔴' },
          { key: 'subacute', label: 'סאב-אקוטי', color: 'amber', emoji: '🟡' },
          { key: 'chronic', label: 'כרוני', color: 'emerald', emoji: '🟢' }
        ];
        const currentStage = protocol[treatmentStage];

        return (
          <div className="fixed inset-0 z-30 bg-white overflow-y-auto">
            <div className="max-w-3xl mx-auto w-full min-h-screen">
              <div className="bg-gradient-to-l from-indigo-600 via-blue-600 to-cyan-600 px-5 py-4 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-3 min-w-0">
                  <button onClick={() => setShowTreatment(false)} className="flex items-center gap-1.5 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm">
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                    <span className="text-sm font-medium">חזרה</span>
                  </button>
                  <div className="min-w-0">
                    <h2 className="text-sm md:text-lg font-bold text-white truncate">📋 פרוטוקול טיפול</h2>
                    <p className="text-white/85 text-[10px] md:text-xs truncate">{pathology.name}</p>
                  </div>
                </div>
                <button onClick={goHome} className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 md:p-6">
                {/* כפתורי שלבים */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {stages.map(stage => {
                    const isActive = treatmentStage === stage.key;
                    return (
                      <button
                        key={stage.key}
                        onClick={() => setTreatmentStage(stage.key)}
                        className={`p-3 rounded-xl border-2 transition-all ${
                          isActive
                            ? stage.color === 'red'
                              ? 'bg-red-50 border-red-400 shadow-md'
                              : stage.color === 'amber'
                              ? 'bg-amber-50 border-amber-400 shadow-md'
                              : 'bg-emerald-50 border-emerald-400 shadow-md'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <div className="text-2xl mb-1">{stage.emoji}</div>
                        <div className={`text-xs md:text-sm font-bold ${
                          isActive
                            ? stage.color === 'red'
                              ? 'text-red-700'
                              : stage.color === 'amber'
                              ? 'text-amber-700'
                              : 'text-emerald-700'
                            : 'text-slate-600'
                        }`}>
                          {stage.label}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* כותרת השלב הנוכחי */}
                <div className={`rounded-xl p-4 mb-4 border-2 ${
                  treatmentStage === 'acute' ? 'bg-red-50 border-red-200' :
                  treatmentStage === 'subacute' ? 'bg-amber-50 border-amber-200' :
                  'bg-emerald-50 border-emerald-200'
                }`}>
                  <h3 className={`text-base md:text-lg font-bold mb-1 ${
                    treatmentStage === 'acute' ? 'text-red-800' :
                    treatmentStage === 'subacute' ? 'text-amber-800' :
                    'text-emerald-800'
                  }`}>
                    {currentStage.title}
                  </h3>
                </div>

                {/* יעדים */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                  <h4 className="text-sm font-bold text-blue-800 mb-2 flex items-center gap-1.5">
                    🎯 יעדי הטיפול
                  </h4>
                  <ul className="space-y-1.5">
                    {currentStage.goals.map((goal, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-slate-700 flex items-start gap-2">
                        <span className="text-blue-500 flex-shrink-0 mt-0.5">▸</span>
                        <span className="leading-relaxed">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* התערבויות */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4">
                  <h4 className="text-sm font-bold text-emerald-800 mb-2 flex items-center gap-1.5">
                    ✅ התערבויות מומלצות
                  </h4>
                  <ul className="space-y-2">
                    {currentStage.interventions.map((item, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-slate-700 flex items-start gap-2">
                        <span className="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">{idx + 1}</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* הימנעויות */}
                {currentStage.avoid && currentStage.avoid.length > 0 && (
                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mb-4">
                    <h4 className="text-sm font-bold text-rose-800 mb-2 flex items-center gap-1.5">
                      ⛔ יש להימנע
                    </h4>
                    <ul className="space-y-1.5">
                      {currentStage.avoid.map((item, idx) => (
                        <li key={idx} className="text-xs md:text-sm text-slate-700 flex items-start gap-2">
                          <span className="text-rose-500 flex-shrink-0 mt-0.5">✕</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* התערבות ניתוחית */}
                {protocol.surgical && (
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-4">
                    <h4 className="text-sm font-bold text-purple-800 mb-2 flex items-center gap-1.5">
                      🏥 התערבות ניתוחית
                    </h4>
                    <p className="text-xs md:text-sm text-slate-700 leading-relaxed">{protocol.surgical}</p>
                  </div>
                )}

                {/* קישור לספריית תרגילים */}
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-300 rounded-xl p-4 mb-4">
                  <h4 className="text-sm font-bold text-indigo-900 mb-2 flex items-center gap-1.5">
                    💪 ספריית תרגילים שיקומיים
                  </h4>
                  <p className="text-xs md:text-sm text-indigo-800 leading-relaxed mb-2">
                    מסמך נפרד עם <strong>83 תרגילים מובנים</strong> לפי אזור ושלב טיפול - עם תיאור ביצוע, מינון, ואזהרות.
                  </p>
                  <p className="text-[11px] md:text-xs text-indigo-700">
                    📄 ראה את הקובץ <strong>exercise_library_v1.md</strong> שצורף לאפליקציה
                  </p>
                </div>

                {/* הערה */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                  <p className="text-[11px] md:text-xs text-amber-800 leading-relaxed">
                    ⚠️ <strong>חשוב:</strong> פרוטוקול זה הוא הנחיה כללית מבוססת ספרות (APTA Clinical Practice Guidelines, JOSPT). הטיפול בפועל חייב להתאים אישית למטופל הספציפי, על-בסיס הערכה קלינית מלאה ובהתחשב במאפיינים אישיים, מטרות, ומצבים נלווים.
                  </p>
                </div>

                {/* קישורים */}
                <div className="grid grid-cols-2 gap-3 mt-5">
                  <a
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(pathology.nameEn + ' rehabilitation exercises')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-gradient-to-l from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
                  >
                    <Youtube className="w-5 h-5" />
                    <span className="text-xs md:text-sm font-semibold">סרטוני תרגילים</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(pathology.nameEn + ' clinical practice guidelines physical therapy')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-gradient-to-l from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span className="text-xs md:text-sm font-semibold">מאמרים מקצועיים</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Info Modal */}
      {showInfo && (
        <div className="fixed inset-0 z-30 bg-white overflow-y-auto">
          <div className="max-w-md mx-auto w-full min-h-screen">
            <div className="bg-gradient-to-l from-blue-600 to-cyan-500 px-5 py-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">אודות האפליקציה</h2>
              <button onClick={() => setShowInfo(false)} className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-3 text-sm text-slate-700">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <h3 className="font-semibold mb-1">📚 תכולה</h3>
                <p className="text-xs">{totalPathologies} פתולוגיות, {totalTests} בדיקות קליניות, נתוני Sn/Sp מבוססי ספרות.</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                <h3 className="font-semibold mb-1">🎯 איך משתמשים?</h3>
                <p className="text-xs">לחץ על אזור בדמות → בחר פתולוגיה → בחר בדיקה. בכל בדיקה תמצא הסבר ביצוע, משמעות תוצאה חיובית, וכפתורים לחיפוש סרטוני הדגמה ותמונות.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-lg p-3">
                <h3 className="font-semibold mb-1">🚨 הצהרה רפואית</h3>
                <p className="text-xs">אפליקציה זו מיועדת ללימוד והכשרה. אינה מהווה תחליף להערכה קלינית של איש מקצוע מוסמך.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <h3 className="font-semibold mb-1">📖 מקורות</h3>
                <p className="text-xs">Hegedus et al., Cook & Hegedus, Magee, Cleland Orthopedic Clinical Examination, Buckup Clinical Tests.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
