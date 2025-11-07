'use client'

import { motion } from 'framer-motion'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>Visit Us</h2>
          <p className={styles.subtitle}>We'd love to serve you</p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={styles.card}
          >
            <div className={styles.icon}>📍</div>
            <h3 className={styles.cardTitle}>Location</h3>
            <p className={styles.cardText}>123 Coffee Street</p>
            <p className={styles.cardText}>Downtown, City 12345</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className={styles.card}
          >
            <div className={styles.icon}>⏰</div>
            <h3 className={styles.cardTitle}>Hours</h3>
            <p className={styles.cardText}>Mon - Fri: 7am - 8pm</p>
            <p className={styles.cardText}>Sat - Sun: 8am - 9pm</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className={styles.card}
          >
            <div className={styles.icon}>📞</div>
            <h3 className={styles.cardTitle}>Contact</h3>
            <p className={styles.cardText}>+1 (555) 123-4567</p>
            <p className={styles.cardText}>hello@artisancafe.com</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className={styles.social}
        >
          <a href="#" className={styles.socialLink}>Instagram</a>
          <a href="#" className={styles.socialLink}>Facebook</a>
          <a href="#" className={styles.socialLink}>Twitter</a>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className={styles.footer}
        >
          <p>© 2024 Artisan Cafe. All rights reserved.</p>
        </motion.footer>
      </div>
    </section>
  )
}
