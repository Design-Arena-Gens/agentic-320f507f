import styles from './Loader.module.css'

export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Loading 3D Experience...</p>
    </div>
  )
}
