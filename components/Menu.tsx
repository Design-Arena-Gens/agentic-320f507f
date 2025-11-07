'use client'

import { motion } from 'framer-motion'
import styles from './Menu.module.css'

const menuItems = [
  {
    category: 'Espresso',
    items: [
      { name: 'Single Espresso', price: '$3.50', desc: 'Rich and bold' },
      { name: 'Double Espresso', price: '$4.50', desc: 'Extra strong kick' },
      { name: 'Americano', price: '$4.00', desc: 'Smooth and balanced' },
    ]
  },
  {
    category: 'Specialty',
    items: [
      { name: 'Cappuccino', price: '$5.50', desc: 'Velvety foam perfection' },
      { name: 'Flat White', price: '$5.00', desc: 'Microfoam artistry' },
      { name: 'Caramel Macchiato', price: '$6.00', desc: 'Sweet indulgence' },
    ]
  },
  {
    category: 'Cold Brew',
    items: [
      { name: 'Classic Cold Brew', price: '$5.00', desc: 'Smooth and refreshing' },
      { name: 'Nitro Cold Brew', price: '$6.50', desc: 'Creamy cascade' },
      { name: 'Iced Latte', price: '$5.50', desc: 'Cool and creamy' },
    ]
  },
]

export default function Menu() {
  return (
    <section className={styles.menu}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>Our Menu</h2>
          <p className={styles.subtitle}>Crafted with passion, served with love</p>
        </motion.div>

        <div className={styles.grid}>
          {menuItems.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={styles.card}
            >
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.items}>
                {category.items.map((item) => (
                  <div key={item.name} className={styles.item}>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemPrice}>{item.price}</span>
                    </div>
                    <p className={styles.itemDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
