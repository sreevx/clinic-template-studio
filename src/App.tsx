
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import "./App.css";
import { motion, MotionConfig } from "framer-motion";

const doctors = [
  {
    name: "Dr. Olivia Bennett",
    role: "Lead Cosmetic Dentist",
    experience: "12+ years experience",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=85",
  },
  {
    name: "Dr. James Carter",
    role: "Orthodontic Specialist",
    experience: "9+ years experience",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=700&q=85",
  },
  {
    name: "Dr. Sophia Williams",
    role: "General Dentist",
    experience: "8+ years experience",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=700&q=85",
  },
];

const treatments = [
  ["01", "General Dentistry", "Thoughtful preventive and restorative dental care."],
  ["02", "Cosmetic Dentistry", "Refined smile transformations designed around you."],
  ["03", "Dental Implants", "Natural-looking solutions for lasting confidence."],
  ["04", "Teeth Whitening", "Professional treatments for a brighter smile."],
  ["05", "Orthodontics", "Modern alignment solutions for every smile."],
  ["06", "Root Canal Treatment", "Gentle treatment focused on preserving your teeth."],
];

const testimonials = [
  {
    quote:
      "The entire experience was exceptional. The team made me feel comfortable from the moment I walked in.",
    name: "Emily R.",
    treatment: "Cosmetic Dentistry",
  },
  {
    quote:
      "Beautiful clinic, professional doctors and genuinely thoughtful care. I couldn't be happier with my results.",
    name: "Michael T.",
    treatment: "Dental Implants",
  },
  {
    quote:
      "Everything was explained clearly. The treatment was comfortable and the results exceeded my expectations.",
    name: "Sarah K.",
    treatment: "General Dentistry",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to enquire about a dental appointment."
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
    <main>
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">m</span>
          <span>
            <strong>MONROE</strong>
            <small>DENTAL STUDIO</small>
          </span>
        </a>

        <button
          className="mobile-menu-button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>Our Story</a>
          <a href="#treatments" onClick={closeMenu}>Treatments</a>
          <a href="#doctors" onClick={closeMenu}>Our Doctors</a>
          <a href="#reviews" onClick={closeMenu}>Testimonials</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Book a Visit <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }} className="hero" id="home">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            A DIFFERENT KIND OF DENTAL EXPERIENCE
          </span>

          <h1>
            Confidence begins
            <br />
            with a <em>beautiful</em>
            <br />
            smile.
          </h1>

          <p>
            Exceptional dentistry, thoughtfully delivered.
            Discover personalised dental care in a space
            designed around your comfort.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-button">
              Schedule a Visit <ArrowUpRight size={17} />
            </a>
            <a href="#treatments" className="text-button">
              Explore Treatments <ArrowRight size={16} />
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-rating">
              <span className="stars">★★★★★</span>
              <strong>4.9/5</strong>
            </div>
            <span>Trusted care. Beautiful smiles.</span>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=90"
            alt="Beautiful modern dental clinic interior"
          />
          <div className="hero-image-caption">
            <span>01 / 03</span>
            <span>Care that feels different.</span>
          </div>
          <div className="floating-card">
            <Sparkles size={20} />
            <div>
              <strong>Carefully considered.</strong>
              <span>Every smile is unique.</span>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}  className="stats-strip">
        <div><strong>12+</strong><span>Years of experience</span></div>
        <div><strong>5k+</strong><span>Smiles cared for</span></div>
        <div><strong>06</strong><span>Specialist treatments</span></div>
        <div><strong>4.9</strong><span>Patient satisfaction</span></div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}  className="intro-section section-pad" id="about">
        <div className="section-label">01 — OUR PHILOSOPHY</div>
        <div className="intro-content">
          <h2>
            Dentistry should feel
            <br />
            <em>as good as it looks.</em>
          </h2>
          <div className="intro-description">
            <p>
              At Monroe, we believe exceptional dentistry starts
              with listening. We combine modern technology,
              experienced clinicians and a personal approach
              to create a more considered dental experience.
            </p>
            <a href="#doctors" className="underlined-link">
              Get to know us <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}  className="treatments-section section-pad" id="treatments">
        <div className="section-heading">
          <div>
            <div className="section-label">02 — WHAT WE DO</div>
            <h2>Care for every <em>smile.</em></h2>
          </div>
          <p>
            Comprehensive dental care, tailored to your
            needs, goals and comfort.
          </p>
        </div>

        <div className="treatment-grid">
          {treatments.map(([number, title, description]) => (
            <article className="treatment-card" key={number}>
              <span className="treatment-number">{number}</span>
              <div className="treatment-icon">
                <Sparkles size={21} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#contact" aria-label={`Enquire about ${title}`}>
                <ArrowUpRight size={19} />
              </a>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}  className="doctors-section section-pad" id="doctors">
        <div className="section-heading">
          <div>
            <div className="section-label">03 — THE PEOPLE BEHIND YOUR SMILE</div>
            <h2>Meet your <em>care team.</em></h2>
          </div>
          <p>
            Skilled hands, thoughtful minds and a genuine
            passion for patient care.
          </p>
        </div>

        <div className="doctor-grid">
          {doctors.map((doctor) => (
            <article className="doctor-card" key={doctor.name}>
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} loading="lazy" />
              </div>
              <div className="doctor-info">
                <div>
                  <h3>{doctor.name}</h3>
                  <span>{doctor.role}</span>
                  <small>{doctor.experience}</small>
                </div>
                <ArrowUpRight size={20} />
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}  className="experience-section">
        <div className="experience-image">
          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=85"
            alt="Dental professional providing patient care"
            loading="lazy"
          />
        </div>
        <div className="experience-content">
          <div className="section-label">04 — THE MONROE DIFFERENCE</div>
          <h2>
            Thoughtful care.
            <br />
            <em>Lasting confidence.</em>
          </h2>
          <p>
            From your first consultation to your final follow-up,
            every detail is designed to make your dental
            experience comfortable and personal.
          </p>
          <div className="experience-points">
            <span><Check size={17} /> Personalised treatment plans</span>
            <span><Check size={17} /> Modern dental technology</span>
            <span><Check size={17} /> Experienced professionals</span>
            <span><Check size={17} /> Patient-first approach</span>
          </div>
          <a href="#contact" className="primary-button">
            Begin Your Journey <ArrowUpRight size={17} />
          </a>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}  className="reviews-section section-pad" id="reviews">
        <div className="section-label">05 — KIND WORDS</div>
        <h2>Experiences worth <em>sharing.</em></h2>
        <div className="review-grid">
          {testimonials.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={15} fill="currentColor" />
                ))}
              </div>
              <blockquote>“{review.quote}”</blockquote>
              <div className="review-author">
                <strong>{review.name}</strong>
                <span>{review.treatment}</span>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}  className="appointment-section section-pad" id="contact">
        <div className="appointment-info">
          <div className="section-label">06 — YOUR NEXT CHAPTER</div>
          <h2>
            Let's make your
            <br />
            smile <em>matter.</em>
          </h2>
          <p>
            Tell us a little about yourself. Our team will
            get in touch to help arrange your visit.
          </p>

          <div className="contact-detail">
            <MapPin size={19} />
            <span>123 Wellness Avenue, Your City</span>
          </div>
          <div className="contact-detail">
            <Phone size={19} />
            <span>+91 98765 43210</span>
          </div>
          <div className="contact-detail">
            <Clock3 size={19} />
            <span>Mon – Sat, 9:00 AM – 6:00 PM</span>
          </div>

          <a
            className="whatsapp-button"
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            Chat with us on WhatsApp <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="appointment-form-wrap">
          {submitted ? (
            <div className="success-message">
              <ShieldCheck size={42} />
              <h3>Thank you for reaching out.</h3>
              <p>
                Your demo enquiry has been received on this page.
                Connect a backend to deliver real appointment requests.
              </p>
              <button onClick={() => setSubmitted(false)}>
                Send another enquiry
              </button>
            </div>
          ) : (
            <form className="appointment-form" onSubmit={handleSubmit}>
              <h3>Request an appointment</h3>
              <p>We'll be happy to hear from you.</p>

              <label htmlFor="patient-name">Your name</label>
              <input
                id="patient-name"
                name="name"
                placeholder="Enter your full name"
                required
              />

              <label htmlFor="patient-phone">Phone number</label>
              <input
                id="patient-phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                required
              />

              <label htmlFor="patient-email">Email address</label>
              <input
                id="patient-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />

              <label htmlFor="treatment">Treatment of interest</label>
              <select id="treatment" name="treatment" required defaultValue="">
                <option value="" disabled>Select a treatment</option>
                {treatments.map(([, title]) => (
                  <option value={title} key={title}>{title}</option>
                ))}
              </select>

              <label htmlFor="appointment-date">Preferred date</label>
              <input
                id="appointment-date"
                name="date"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                required
              />

              <button type="submit" className="primary-button form-submit">
                Send Enquiry <ArrowUpRight size={17} />
              </button>
              <small className="form-note">
                This is a demonstration form. No patient information
                is transmitted or stored.
              </small>
            </form>
          )}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}  className="location-section section-pad">
        <div className="section-heading">
          <div>
            <div className="section-label">07 — FIND US</div>
            <h2>We're closer than <em>you think.</em></h2>
          </div>
          <a
            href="https://maps.google.com/?q=dental+clinic"
            target="_blank"
            rel="noreferrer"
            className="underlined-link"
          >
            Get directions <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="map-frame">
          <iframe
            title="Dental clinic location map"
            src="https://maps.google.com/maps?q=dental%20clinic&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.section>

      <footer className="footer">
        <div className="footer-main">
          <a href="#home" className="brand footer-brand">
            <span className="brand-mark">m</span>
            <span>
              <strong>MONROE</strong>
              <small>DENTAL STUDIO</small>
            </span>
          </a>
          <p>Thoughtful dentistry.<br />Beautifully considered care.</p>
          <div className="footer-social">
            <a href="https://instagram.com" aria-label="Instagram">IG</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Monroe Dental Studio. Demo template.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <Phone size={21} />
      </a>
        </main>
  </MotionConfig>
  );
}

export default App;






