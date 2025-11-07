'use client'

import { motion } from 'framer-motion'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.content}
        >
          <h2 className={styles.title}>Our Story</h2>
          <p className={styles.text}>
            Founded in 2020, Artisan Cafe began with a simple mission: to serve the finest coffee
            while creating a welcoming space for our community. Every bean is carefully sourced,
            every cup is thoughtfully crafted, and every customer is treated like family.
          </p>
          <p className={styles.text}>
            We believe that great coffee is an art form. Our expert baristas combine traditional
            brewing methods with modern techniques to create drinks that are as beautiful as they
            are delicious.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50K+</span>
              <span className={styles.statLabel}>Cups Served</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>15</span>
              <span className={styles.statLabel}>Coffee Origins</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5★</span>
              <span className={styles.statLabel}>Average Rating</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.imageContainer}
        >
          <div className={styles.imagePlaceholder}>
            <div className={styles.imageOverlay}>
              <span className={styles.imageIcon}>☕</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
