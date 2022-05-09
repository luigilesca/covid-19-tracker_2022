import React from "react";
import styles from "./Footer.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.container_contact}>
        <h2>Find me here:</h2>
        <ul>
          <div className={styles.contact}>
            <div className={styles.icon_link}>
              <LinkedInIcon style={{ color: "#0B3B59" }} />{" "}
              <li>
                <a href="https://www.linkedin.com/in/luigi-lesca/" target="_blank">
                  LinkedIn
                </a>
              </li>
            </div>
            <div className={styles.icon_link}>
              <LanguageIcon style={{ color: "#0B3B59" }} />{" "}
              <li>
                <a href="https://talent.start2impact.it/profile/luigi-lesca" target="_blank">
                  start2impact
                </a>
              </li>
            </div>
            <div className={styles.icon_link}>
              <GitHubIcon style={{ color: "#0B3B59" }} />{" "}
              <li>
                <a href="https://github.com/luigilesca" target="_blank">
                  GitHub
                </a>
              </li>
            </div>

            <div className={styles.icon_link}>
              <EmailIcon style={{ color: "#0B3B59" }} />{" "}
              <li>
                <a href="mailto: luigilesca@hotmail.it">e-mail</a>
              </li>
            </div>
          </div>
        </ul>
        <div className={styles.footer}>
          <h3>Made with ❤️ by Luigi Lesca</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
