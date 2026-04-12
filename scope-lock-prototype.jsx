import React, { useState, useEffect } from 'react';
import { Check, Lock, ArrowRight, FileText, Send, Sparkles, CheckCircle2, AlertCircle, Clock, User } from 'lucide-react';

export default function ScopeLockApp() {
  const [currentView, setCurrentView] = useState('welcome');
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    projectType: '',
    timeline: '',
    budget: '',
    revisions: false,
    pages: '',
    designStyle: ''
  });

  useEffect(() => {
    const steps = { welcome: 0, intake1: 20, intake2: 40, intake3: 60, review: 80, locked: 100 };
    setProgress(steps[currentView] || 0);
  }, [currentView]);

  const ProjectTypeCard = ({ icon, title, description, selected, onClick }) => (
    <div
      onClick={onClick}
      className={`project-card ${selected ? 'selected' : ''}`}
    >
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
      {selected && <div className="selected-badge"><Check size={16} /></div>}
    </div>
  );

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="logo-section">
          <div className="logo-icon">
            <Lock size={24} />
          </div>
          <div className="logo-text">Scope<span>Lock</span></div>
        </div>
        <div className="progress-section">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="progress-text">{progress}% Complete</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        {/* Welcome View */}
        {currentView === 'welcome' && (
          <div className="view welcome-view">
            <div className="welcome-content">
              <div className="welcome-badge">
                <Sparkles size={16} />
                <span>Smart Onboarding</span>
              </div>
              <h1 className="welcome-title">
                Let's align on your project<br />before we begin
              </h1>
              <p className="welcome-subtitle">
                Complete this guided intake to ensure we're on the same page about deliverables, 
                timeline, and scope. It takes about 5 minutes.
              </p>

              <div className="feature-grid">
                <div className="feature-item">
                  <div className="feature-number">01</div>
                  <div className="feature-label">Answer Questions</div>
                  <div className="feature-desc">Tell us about your project needs</div>
                </div>
                <div className="feature-item">
                  <div className="feature-number">02</div>
                  <div className="feature-label">Review Scope</div>
                  <div className="feature-desc">See what's included & excluded</div>
                </div>
                <div className="feature-item">
                  <div className="feature-number">03</div>
                  <div className="feature-label">Lock & Sign</div>
                  <div className="feature-desc">Both parties approve & e-sign</div>
                </div>
              </div>

              <button className="primary-button" onClick={() => setCurrentView('intake1')}>
                Start Onboarding <ArrowRight size={20} />
              </button>

              <div className="trust-badge">
                <Clock size={14} /> Average completion time: 5 minutes
              </div>
            </div>

            <div className="welcome-visual">
              <div className="floating-card card-1">
                <FileText size={20} />
                <span>Scope Document</span>
              </div>
              <div className="floating-card card-2">
                <CheckCircle2 size={20} />
                <span>Approved</span>
              </div>
              <div className="floating-card card-3">
                <Lock size={20} />
                <span>Locked</span>
              </div>
            </div>
          </div>
        )}

        {/* Intake 1: Project Type */}
        {currentView === 'intake1' && (
          <div className="view intake-view">
            <div className="intake-header">
              <div className="step-indicator">Step 1 of 3</div>
              <h2 className="intake-title">What type of project is this?</h2>
              <p className="intake-subtitle">This helps us understand your deliverables and set the right expectations.</p>
            </div>

            <div className="project-grid">
              <ProjectTypeCard
                icon="🌐"
                title="Website Design"
                description="Full site redesign or new build"
                selected={formData.projectType === 'website'}
                onClick={() => setFormData({ ...formData, projectType: 'website' })}
              />
              <ProjectTypeCard
                icon="🎨"
                title="Brand Identity"
                description="Logo, colors, typography system"
                selected={formData.projectType === 'branding'}
                onClick={() => setFormData({ ...formData, projectType: 'branding' })}
              />
              <ProjectTypeCard
                icon="📱"
                title="Mobile App"
                description="iOS/Android app design"
                selected={formData.projectType === 'app'}
                onClick={() => setFormData({ ...formData, projectType: 'app' })}
              />
              <ProjectTypeCard
                icon="🖼️"
                title="Marketing Assets"
                description="Social graphics, ads, email"
                selected={formData.projectType === 'marketing'}
                onClick={() => setFormData({ ...formData, projectType: 'marketing' })}
              />
            </div>

            <div className="button-row">
              <button className="secondary-button" onClick={() => setCurrentView('welcome')}>
                Back
              </button>
              <button 
                className="primary-button" 
                onClick={() => setCurrentView('intake2')}
                disabled={!formData.projectType}
              >
                Continue <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Intake 2: Timeline & Details */}
        {currentView === 'intake2' && (
          <div className="view intake-view">
            <div className="intake-header">
              <div className="step-indicator">Step 2 of 3</div>
              <h2 className="intake-title">Timeline & Project Details</h2>
              <p className="intake-subtitle">Help us scope your project accurately.</p>
            </div>

            <div className="form-section">
              <label className="form-label">When do you need this completed?</label>
              <div className="radio-group">
                {[
                  { value: '2weeks', label: '2 weeks', badge: 'Rush Fee' },
                  { value: '1month', label: '1 month', badge: 'Standard' },
                  { value: '2months', label: '2+ months', badge: 'Flexible' }
                ].map(option => (
                  <div 
                    key={option.value}
                    className={`radio-card ${formData.timeline === option.value ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, timeline: option.value })}
                  >
                    <div className="radio-indicator">
                      {formData.timeline === option.value && <div className="radio-dot" />}
                    </div>
                    <div className="radio-content">
                      <div className="radio-label">{option.label}</div>
                      <div className="radio-badge">{option.badge}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-section">
              <label className="form-label">What's your budget range?</label>
              <div className="input-group">
                <span className="input-prefix">$</span>
                <input 
                  type="text" 
                  className="text-input"
                  placeholder="5,000 - 10,000"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                />
              </div>
              <div className="input-hint">
                <AlertCircle size={14} /> This helps set realistic scope expectations
              </div>
            </div>

            {formData.projectType === 'website' && (
              <div className="form-section">
                <label className="form-label">How many pages do you need?</label>
                <div className="pill-group">
                  {['1-3 pages', '4-7 pages', '8-15 pages', '15+ pages'].map(option => (
                    <button
                      key={option}
                      className={`pill ${formData.pages === option ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, pages: option })}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="button-row">
              <button className="secondary-button" onClick={() => setCurrentView('intake1')}>
                Back
              </button>
              <button 
                className="primary-button" 
                onClick={() => setCurrentView('intake3')}
                disabled={!formData.timeline}
              >
                Continue <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Intake 3: Revision Policy */}
        {currentView === 'intake3' && (
          <div className="view intake-view">
            <div className="intake-header">
              <div className="step-indicator">Step 3 of 3</div>
              <h2 className="intake-title">Understanding Revisions</h2>
              <p className="intake-subtitle">Clear revision limits prevent scope creep and keep projects on track.</p>
            </div>

            <div className="policy-cards">
              <div className="policy-card included">
                <div className="policy-header">
                  <CheckCircle2 size={24} />
                  <h3>What's Included</h3>
                </div>
                <ul className="policy-list">
                  <li>2 rounds of revisions</li>
                  <li>Minor text & color adjustments</li>
                  <li>Layout tweaks within scope</li>
                  <li>File format variations</li>
                </ul>
              </div>

              <div className="policy-card excluded">
                <div className="policy-header">
                  <AlertCircle size={24} />
                  <h3>Additional Charges</h3>
                </div>
                <ul className="policy-list">
                  <li>New pages or sections</li>
                  <li>Complete redesigns</li>
                  <li>Revisions after approval</li>
                  <li>Scope changes mid-project</li>
                </ul>
              </div>
            </div>

            <div className="checkbox-card" onClick={() => setFormData({ ...formData, revisions: !formData.revisions })}>
              <div className={`checkbox ${formData.revisions ? 'checked' : ''}`}>
                {formData.revisions && <Check size={16} />}
              </div>
              <div className="checkbox-label">
                I understand the revision policy and scope boundaries
              </div>
            </div>

            <div className="button-row">
              <button className="secondary-button" onClick={() => setCurrentView('intake2')}>
                Back
              </button>
              <button 
                className="primary-button" 
                onClick={() => setCurrentView('review')}
                disabled={!formData.revisions}
              >
                Review Scope <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Review View */}
        {currentView === 'review' && (
          <div className="view review-view">
            <div className="review-header">
              <div className="review-badge">
                <FileText size={16} />
                <span>Ready for Approval</span>
              </div>
              <h2 className="review-title">Your Project Scope</h2>
              <p className="review-subtitle">Review everything below. Once locked, any changes require mutual approval.</p>
            </div>

            <div className="summary-grid">
              <div className="summary-card">
                <div className="summary-label">Project Type</div>
                <div className="summary-value">
                  {formData.projectType === 'website' && '🌐 Website Design'}
                  {formData.projectType === 'branding' && '🎨 Brand Identity'}
                  {formData.projectType === 'app' && '📱 Mobile App'}
                  {formData.projectType === 'marketing' && '🖼️ Marketing Assets'}
                </div>
              </div>
              <div className="summary-card">
                <div className="summary-label">Timeline</div>
                <div className="summary-value">
                  {formData.timeline === '2weeks' && '2 weeks'}
                  {formData.timeline === '1month' && '1 month'}
                  {formData.timeline === '2months' && '2+ months'}
                </div>
              </div>
              <div className="summary-card">
                <div className="summary-label">Budget</div>
                <div className="summary-value">${formData.budget || '—'}</div>
              </div>
              <div className="summary-card">
                <div className="summary-label">Revisions</div>
                <div className="summary-value">2 rounds included</div>
              </div>
            </div>

            <div className="deliverables-section">
              <h3 className="deliverables-title">Included Deliverables</h3>
              <div className="deliverables-list">
                <div className="deliverable-item">
                  <Check size={18} />
                  <span>Initial design concepts (3 options)</span>
                </div>
                <div className="deliverable-item">
                  <Check size={18} />
                  <span>High-fidelity mockups</span>
                </div>
                <div className="deliverable-item">
                  <Check size={18} />
                  <span>Final design files (Figma/Sketch)</span>
                </div>
                <div className="deliverable-item">
                  <Check size={18} />
                  <span>Style guide & component library</span>
                </div>
                <div className="deliverable-item">
                  <Check size={18} />
                  <span>2 revision rounds</span>
                </div>
              </div>
            </div>

            <div className="button-row">
              <button className="secondary-button" onClick={() => setCurrentView('intake1')}>
                Edit Details
              </button>
              <button 
                className="primary-button lock-button" 
                onClick={() => {
                  setCurrentView('locked');
                  setShowSuccess(true);
                }}
              >
                <Lock size={20} /> Approve & Lock Scope
              </button>
            </div>
          </div>
        )}

        {/* Locked View */}
        {currentView === 'locked' && (
          <div className="view locked-view">
            {showSuccess && (
              <div className="success-animation">
                <div className="success-circle">
                  <CheckCircle2 size={64} />
                </div>
              </div>
            )}

            <div className="locked-content">
              <div className="locked-badge">
                <Lock size={16} />
                <span>Scope Locked</span>
              </div>
              <h2 className="locked-title">You're all set!</h2>
              <p className="locked-subtitle">
                Both you and Alex Torres have agreed to the project scope. 
                Any changes will require mutual approval and may adjust timeline/budget.
              </p>

              <div className="next-steps">
                <div className="next-step-header">What happens next?</div>
                <div className="next-step-item">
                  <div className="step-bullet">1</div>
                  <div className="step-text">Alex will reach out within 24 hours to schedule your creative kickoff call</div>
                </div>
                <div className="next-step-item">
                  <div className="step-bullet">2</div>
                  <div className="step-text">You'll receive a copy of the locked scope document via email</div>
                </div>
                <div className="next-step-item">
                  <div className="step-bullet">3</div>
                  <div className="step-text">Project work begins after the kickoff call</div>
                </div>
              </div>

              <div className="action-grid">
                <button className="primary-button">
                  <FileText size={20} /> View Full Contract
                </button>
                <button className="secondary-button">
                  <Send size={20} /> Download PDF
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Fraunces:wght@600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .app-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%);
          font-family: 'Outfit', sans-serif;
          color: #e2e8f0;
          position: relative;
          overflow-x: hidden;
        }

        .app-container::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        /* Header */
        .app-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(15, 15, 35, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(99, 102, 241, 0.2);
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
        }

        .logo-text {
          font-family: 'Fraunces', serif;
          font-size: 28px;
          font-weight: 800;
          color: white;
        }

        .logo-text span {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .progress-section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .progress-bar {
          width: 200px;
          height: 8px;
          background: rgba(99, 102, 241, 0.2);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
          border-radius: 4px;
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .progress-text {
          font-size: 14px;
          font-weight: 600;
          color: #a5b4fc;
        }

        /* Main Content */
        .app-main {
          max-width: 1000px;
          margin: 0 auto;
          padding: 3rem 2rem;
          position: relative;
          z-index: 1;
        }

        .view {
          animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Welcome View */
        .welcome-view {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          min-height: 70vh;
        }

        .welcome-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.2);
          color: #a5b4fc;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .welcome-title {
          font-family: 'Fraunces', serif;
          font-size: 56px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .welcome-subtitle {
          font-size: 18px;
          line-height: 1.7;
          color: #cbd5e1;
          margin-bottom: 3rem;
        }

        .feature-grid {
          display: grid;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 1.5rem;
          background: rgba(99, 102, 241, 0.05);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: rgba(99, 102, 241, 0.4);
          transform: translateX(8px);
        }

        .feature-number {
          font-family: 'Fraunces', serif;
          font-size: 32px;
          font-weight: 800;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .feature-label {
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 0.25rem;
        }

        .feature-desc {
          font-size: 14px;
          color: #94a3b8;
        }

        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 14px;
          color: #94a3b8;
          margin-top: 1rem;
        }

        /* Welcome Visual */
        .welcome-visual {
          position: relative;
          height: 500px;
        }

        .floating-card {
          position: absolute;
          background: rgba(15, 15, 35, 0.9);
          border: 1px solid rgba(99, 102, 241, 0.3);
          padding: 1.5rem 2rem;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 600;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          animation: float 6s ease-in-out infinite;
        }

        .card-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .card-2 {
          top: 50%;
          right: 10%;
          animation-delay: 2s;
        }

        .card-3 {
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        /* Buttons */
        .primary-button {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
          font-family: 'Outfit', sans-serif;
        }

        .primary-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.6);
        }

        .primary-button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .secondary-button {
          background: rgba(99, 102, 241, 0.1);
          color: #a5b4fc;
          border: 1px solid rgba(99, 102, 241, 0.3);
          padding: 1rem 2rem;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
          font-family: 'Outfit', sans-serif;
        }

        .secondary-button:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.5);
        }

        /* Intake Views */
        .intake-view {
          max-width: 800px;
          margin: 0 auto;
        }

        .intake-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .step-indicator {
          font-size: 14px;
          font-weight: 600;
          color: #6366f1;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }

        .intake-title {
          font-family: 'Fraunces', serif;
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .intake-subtitle {
          font-size: 18px;
          color: #94a3b8;
        }

        /* Project Cards */
        .project-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .project-card {
          position: relative;
          background: rgba(15, 15, 35, 0.6);
          border: 2px solid rgba(99, 102, 241, 0.2);
          padding: 2rem;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          border-color: rgba(99, 102, 241, 0.5);
          transform: translateY(-4px);
          box-shadow: 0 10px 40px rgba(99, 102, 241, 0.2);
        }

        .project-card.selected {
          background: rgba(99, 102, 241, 0.15);
          border-color: #6366f1;
          box-shadow: 0 10px 40px rgba(99, 102, 241, 0.3);
        }

        .card-icon {
          font-size: 48px;
          margin-bottom: 1rem;
        }

        .card-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .card-description {
          font-size: 14px;
          color: #94a3b8;
        }

        .selected-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 32px;
          height: 32px;
          background: #6366f1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        /* Form Sections */
        .form-section {
          margin-bottom: 2.5rem;
        }

        .form-label {
          display: block;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .radio-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: rgba(15, 15, 35, 0.6);
          border: 2px solid rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .radio-card:hover {
          border-color: rgba(99, 102, 241, 0.5);
        }

        .radio-card.selected {
          background: rgba(99, 102, 241, 0.15);
          border-color: #6366f1;
        }

        .radio-indicator {
          width: 24px;
          height: 24px;
          border: 2px solid #6366f1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .radio-dot {
          width: 12px;
          height: 12px;
          background: #6366f1;
          border-radius: 50%;
        }

        .radio-content {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .radio-label {
          font-weight: 600;
        }

        .radio-badge {
          font-size: 12px;
          padding: 0.25rem 0.75rem;
          background: rgba(99, 102, 241, 0.2);
          color: #a5b4fc;
          border-radius: 100px;
          font-weight: 600;
        }

        .input-group {
          display: flex;
          align-items: center;
          background: rgba(15, 15, 35, 0.6);
          border: 2px solid rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          padding: 0 1.5rem;
          transition: all 0.3s ease;
        }

        .input-group:focus-within {
          border-color: #6366f1;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }

        .input-prefix {
          font-weight: 600;
          color: #94a3b8;
          margin-right: 0.5rem;
        }

        .text-input {
          flex: 1;
          background: none;
          border: none;
          padding: 1.25rem 0;
          font-size: 16px;
          color: white;
          font-family: 'Outfit', sans-serif;
          outline: none;
        }

        .text-input::placeholder {
          color: #475569;
        }

        .input-hint {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.75rem;
          font-size: 14px;
          color: #64748b;
        }

        .pill-group {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .pill {
          padding: 0.75rem 1.5rem;
          background: rgba(15, 15, 35, 0.6);
          border: 2px solid rgba(99, 102, 241, 0.2);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Outfit', sans-serif;
          color: #e2e8f0;
        }

        .pill:hover {
          border-color: rgba(99, 102, 241, 0.5);
        }

        .pill.selected {
          background: rgba(99, 102, 241, 0.3);
          border-color: #6366f1;
          color: white;
        }

        /* Policy Cards */
        .policy-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .policy-card {
          padding: 2rem;
          border-radius: 16px;
          border: 2px solid;
        }

        .policy-card.included {
          background: rgba(34, 197, 94, 0.05);
          border-color: rgba(34, 197, 94, 0.3);
        }

        .policy-card.excluded {
          background: rgba(239, 68, 68, 0.05);
          border-color: rgba(239, 68, 68, 0.3);
        }

        .policy-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .policy-header h3 {
          font-size: 20px;
          font-weight: 700;
        }

        .policy-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .policy-list li {
          font-size: 15px;
          color: #cbd5e1;
          padding-left: 1.5rem;
          position: relative;
        }

        .policy-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          font-weight: 700;
        }

        .policy-card.included .policy-list li::before {
          color: #22c55e;
        }

        .policy-card.excluded .policy-list li::before {
          color: #ef4444;
        }

        .checkbox-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: rgba(99, 102, 241, 0.05);
          border: 2px solid rgba(99, 102, 241, 0.3);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 3rem;
        }

        .checkbox-card:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: #6366f1;
        }

        .checkbox {
          width: 32px;
          height: 32px;
          border: 2px solid #6366f1;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .checkbox.checked {
          background: #6366f1;
        }

        .checkbox-label {
          font-weight: 600;
          font-size: 16px;
        }

        /* Review View */
        .review-view {
          max-width: 900px;
          margin: 0 auto;
        }

        .review-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .review-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(34, 197, 94, 0.2);
          color: #4ade80;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .review-title {
          font-family: 'Fraunces', serif;
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .review-subtitle {
          font-size: 18px;
          color: #94a3b8;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .summary-card {
          background: rgba(15, 15, 35, 0.6);
          border: 2px solid rgba(99, 102, 241, 0.2);
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
        }

        .summary-label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #64748b;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .summary-value {
          font-size: 18px;
          font-weight: 700;
        }

        .deliverables-section {
          background: rgba(99, 102, 241, 0.05);
          border: 2px solid rgba(99, 102, 241, 0.2);
          padding: 2rem;
          border-radius: 16px;
          margin-bottom: 3rem;
        }

        .deliverables-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .deliverables-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .deliverable-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 16px;
        }

        .deliverable-item svg {
          color: #22c55e;
          flex-shrink: 0;
        }

        /* Locked View */
        .locked-view {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .success-animation {
          margin-bottom: 2rem;
        }

        .success-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          border-radius: 50%;
          animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 10px 50px rgba(34, 197, 94, 0.4);
        }

        @keyframes scaleIn {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }

        .locked-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.2);
          color: #a5b4fc;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .locked-title {
          font-family: 'Fraunces', serif;
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .locked-subtitle {
          font-size: 18px;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 3rem;
        }

        .next-steps {
          background: rgba(99, 102, 241, 0.05);
          border: 2px solid rgba(99, 102, 241, 0.2);
          padding: 2rem;
          border-radius: 16px;
          margin-bottom: 3rem;
          text-align: left;
        }

        .next-step-header {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .next-step-item {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .next-step-item:last-child {
          margin-bottom: 0;
        }

        .step-bullet {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }

        .step-text {
          flex: 1;
          padding-top: 0.25rem;
          color: #cbd5e1;
        }

        .action-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .button-row {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          margin-top: 3rem;
        }

        @media (max-width: 768px) {
          .welcome-view {
            grid-template-columns: 1fr;
          }

          .welcome-visual {
            display: none;
          }

          .project-grid {
            grid-template-columns: 1fr;
          }

          .summary-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .policy-cards {
            grid-template-columns: 1fr;
          }

          .action-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
