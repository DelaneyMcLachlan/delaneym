import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Work Experience</h1>
        </header>

        <section className={styles.section}>
          {/* Synopsys */}
          <article className={styles.article}>
            <div className={styles.articleHeader}>
              <h2 className={styles.companyTitle}>
                <span className={styles.companyName}>Synopsys Inc.</span>{" "}
                <span className={styles.role}>— Firmware Engineering Intern (DDR PHY ATE)</span>
              </h2>
              <p className={styles.date}>Nepean, ON | May 2024 – August 2025</p>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.contentTitle}>Overview</h3>
              <p className={styles.contentText}>
                Worked on firmware tooling and automation for DDR PHY Automatic Test Equipment (ATE), supporting
                multiple memory standards and internal release workflows across teams.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.contentTitle}>Key Contributions</h3>
              <ul className={styles.list}>
                <li>
                  Designed and implemented a <strong>Python-based automation pipeline</strong> to replace a legacy C
                  metadata file used in DDR PHY test management, enabling automated comment generation, conditional test
                  visibility, and header file generation across <strong>LPDDR5</strong> and <strong>DDR6</strong>{" "}
                  product lines.
                </li>
                <li>
                  Built and maintained a <strong>YAML-driven configuration system</strong> powering an internal ATE GUI;
                  regularly debugged production releases and resolved edge cases caused by metadata inconsistencies and
                  configuration drift.
                </li>
                <li>
                  Enhanced an internal <strong>System Analyst web application</strong> by updating the PHP backend and
                  Vue.js frontend to deliver accurate board usage metrics, user activity statistics, and DDR PHY data
                  visualization.
                </li>
                <li>
                  Automated firmware release workflows using Python to reduce manual engineering effort, including:
                  <ul className={styles.nestedList}>
                    <li>Test name diffing between TCL sources and Excel outputs to visualize release changes</li>
                    <li>Password-less SSH automation for generating MISRA-C compliance report PDFs</li>
                    <li>A Swarm-integrated script to detect unfinished reports and produce summary PDFs</li>
                    <li>A directory diff tool to flag missing or inconsistent files across firmware builds</li>
                  </ul>
                </li>
                <li>
                  Collaborated via <strong>Swarm code reviews</strong> and <strong>Perforce version control</strong>,
                  working cross-functionally with firmware, test, and systems teams to ensure reliable releases.
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.contentTitle}>Technologies</h3>
              <p className={styles.contentText}>
                Python, YAML, C, PHP, Vue.js, Node.js, TCL, Linux, Excel, Perforce, Swarm API
              </p>
            </div>
          </article>

          {/* Qualcomm */}
          <article className={styles.article}>
            <div className={styles.articleHeader}>
              <h2 className={styles.companyTitle}>
                <span className={styles.companyName}>Qualcomm</span>{" "}
                <span className={styles.role}>
                  — Automotive Security &amp; Display Standards Engineering Intern
                </span>
              </h2>
              <p className={styles.date}>Markham, ON | May 2023 – December 2023</p>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.contentTitle}>Overview</h3>
              <p className={styles.contentText}>
                Contributed to automotive security tooling and display pipeline validation in the context of evolving
                industry standards.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.contentTitle}>Key Contributions</h3>
              <ul className={styles.list}>
                <li>
                  Developed a <strong>CRC calculator</strong> in both Python and C to support evolving automotive security
                  requirements.
                </li>
                <li>
                  Implemented a robust <strong>DPX image file reader</strong>, handling 100+ format combinations across
                  color formats, endianness, bit depths, and channel packing layouts.
                </li>
                <li>
                  Generated and validated <strong>test patterns</strong> for display and imaging pipelines to ensure
                  compliance with <strong>SMPTE RP 268-3</strong> and <strong>VESA DisplayPort 1.4a</strong> standards.
                </li>
                <li>
                Contributed technical input to industry standards development, with my contributions acknowledged by name in the published standard, collaborating with cross-company engineering working groups..
                </li>
                <li>
                  Delivered structured weekly technical updates to management, summarizing progress, blockers, and next
                  steps.
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.contentTitle}>Technologies</h3>
              <p className={styles.contentText}>
                Python, C, Image Processing, DPX, DisplayPort, SMPTE Standards, PowerPoint
              </p>
            </div>
          </article>
        </section>
      </div>
    </footer>
  )
}

