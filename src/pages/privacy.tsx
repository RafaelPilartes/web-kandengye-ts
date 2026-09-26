import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'

import heroBg from '../assets/header/hero_bg_1.jpg'

const LAST_UPDATE = '14 de Novembro de 2025'

/**
 * Política de privacidade.
 *
 * Era uma cópia da página "Sobre nós" com o texto trocado — trazia atrás as
 * secções de contadores, soluções e equipa, mais metade dos `import` por usar.
 */
function Privacy() {
  return (
    <div className="flex flex-col">
      <HeroSection
        backgroundImage={heroBg}
        title="Privacy Policy"
        breadcrumb={['Policy']}
      />

      <section className="container-page section-padding">
        <SectionHeading
          eyebrow="Privacy Policy — Kandengue Atrevido"
          title="Privacy Policy"
        />

        <p className="mt-4 text-sm text-mute-light">
          Última actualização: {LAST_UPDATE}
        </p>

        <article className="legal-content mt-10">
          <p>
            Kandengue Atrevido (“we”, “our”, “us”) is committed to protecting
            your privacy and ensuring the security of your personal information.
            This Privacy Policy explains how we collect, use, store, and share
            your data when you use our mobile application or any related
            services.
          </p>
          <p>
            By using our services, you agree to the terms described in this
            Privacy Policy.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>1.1. Information Collected Automatically</h3>
          <p>When you use our app, we automatically collect:</p>
          <ul>
            <li>Device information (model, OS, unique identifiers, app version)</li>
            <li>IP address and network information</li>
            <li>Location data (GPS, Wi-Fi, cellular), even in background when required</li>
            <li>Usage information such as screens visited and interaction logs</li>
            <li>Crash logs and diagnostics (e.g., via Firebase Crashlytics)</li>
          </ul>

          <h3>1.2. Information You Provide</h3>
          <ul>
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Profile information</li>
            <li>Payment information (when applicable)</li>
            <li>Delivery or ride details (pickup, dropoff, route, time)</li>
          </ul>

          <h3>1.3. Transaction and Ride Information</h3>
          <ul>
            <li>Pickup and dropoff addresses</li>
            <li>Trip route, timestamp, and duration</li>
            <li>Driver and user identifiers</li>
            <li>Payment details</li>
            <li>
              Background location data for:
              <ul>
                <li>Ride tracking</li>
                <li>Driver navigation</li>
                <li>Safety and fraud prevention</li>
                <li>Real-time customer updates</li>
              </ul>
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>

          <h3>2.1. Service Delivery</h3>
          <ul>
            <li>Create and manage accounts</li>
            <li>Match users with drivers</li>
            <li>Provide navigation and geolocation services</li>
            <li>Process payments and confirmations</li>
          </ul>

          <h3>2.2. App Improvement</h3>
          <ul>
            <li>Optimize performance and user experience</li>
            <li>Understand usage patterns</li>
            <li>Improve routing accuracy</li>
          </ul>

          <h3>2.3. Communication</h3>
          <ul>
            <li>Send notifications about rides or deliveries</li>
            <li>Provide support responses</li>
            <li>Send security alerts</li>
          </ul>

          <h3>2.4. Legal and Security</h3>
          <ul>
            <li>Detect fraud or misuse</li>
            <li>Comply with legal obligations</li>
            <li>Protect the safety of users and drivers</li>
          </ul>

          <h2>3. Information Sharing</h2>

          <h3>3.1. Service Providers</h3>
          <p>We may share your information with partners such as:</p>
          <ul>
            <li>Firebase (Auth, Firestore, Crashlytics)</li>
            <li>Google Maps and related services</li>
            <li>Payment processors</li>
            <li>Analytics tools</li>
          </ul>

          <h3>3.2. Legal Compliance</h3>
          <p>
            We may share data when required to comply with laws, respond to
            legal requests, or protect our rights or public safety.
          </p>
          <p>
            <strong>We do not sell personal information.</strong>
          </p>

          <h2>4. Privacy Rights — GDPR (EU/EEA)</h2>
          <ul>
            <li>Access, correction, deletion</li>
            <li>Objection to processing</li>
            <li>Data portability</li>
            <li>Withdrawal of consent</li>
          </ul>

          <h2>5. Privacy Rights — LGPD (Brazil)</h2>
          <ul>
            <li>Confirmation of data processing</li>
            <li>Access and correction</li>
            <li>Anonymization or deletion</li>
            <li>Portability</li>
            <li>Information about sharing</li>
            <li>Withdrawal of consent</li>
          </ul>

          <h2>6. Data Storage and Security</h2>
          <p>
            We implement strong technical and organizational measures to keep
            your data safe. Data may be stored in secure systems such as
            Firebase, compliant with GDPR and ISO/IEC 27001.
          </p>

          <h2>7. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy to reflect legal changes or
            improvements in our services. Updates will be published within the
            app or our website.
          </p>

          <h2>8. Contact</h2>
          <p>
            📧{' '}
            <a
              href="mailto:support@kandengueatrevido.com"
              className="font-semibold text-red hover:underline"
            >
              support@kandengueatrevido.com
            </a>
          </p>
          <p>📍 Kandengue Atrevido — Customer Support, Luanda, Angola</p>
          <p>
            If you wish to request access, correction, or deletion of your data,
            please include your request in the message.
          </p>
        </article>
      </section>
    </div>
  )
}

export default Privacy
