import React, { useState, useEffect } from 'react';
import styles from './PasswordProtected.module.css';

// Array of valid passwords
const VALID_PASSWORDS = ['vendedor2024', 'capacitacion123', 'equipo-ventas'];
// Session storage key
const AUTH_KEY = 'isAuthenticated';

const PasswordProtected = ({ children }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Check if user is already authenticated
  useEffect(() => {
    const authStatus = sessionStorage.getItem(AUTH_KEY);
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (VALID_PASSWORDS.includes(password)) {
      sessionStorage.setItem(AUTH_KEY, 'true');
      setIsAuthenticated(true);
    } else {
      setError('Contraseña incorrecta. Por favor, intente nuevamente.');
    }
  };

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingSpinner} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>Acceso Restringido</h2>
          <p>Por favor, ingrese la contraseña para ver este contenido.</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder="Ingrese la contraseña"
                required
              />
            </div>
            <button type="submit" className={styles.button}>
              Ingresar
            </button>
            {error && <p className={styles.error}>{error}</p>}
          </form>
        </div>
      </div>
    );
  }

  // If authenticated, render the protected content
  return <>{children}</>;
};

export default PasswordProtected;
