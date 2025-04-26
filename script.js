document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Validación simple (simulación)
    if (email === 'admin@devhealth.com' && password === 'admin') {
        alert('¡Bienvenido a HealthTrack Pro!');
        window.location.href = 'dashboard.html'; // Redirigir al dashboard (simulado)
    } else {
        alert('Credenciales incorrectas. Intente nuevamente.');
    }



    document.addEventListener('DOMContentLoaded', () => {
        // Datos simulados para gráficos
        const appointmentsData = {
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
          data: [45, 60, 55, 70, 65]
        };
      
        const patientsData = {
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
          data: [12, 15, 18, 20, 22]
        };
      
        // Gráfico de citas
        const appointmentsCtx = document.getElementById('appointmentsChart').getContext('2d');
        new Chart(appointmentsCtx, {
          type: 'bar',
          data: {
            labels: appointmentsData.labels,
            datasets: [{
              label: 'Citas por mes',
              data: appointmentsData.data,
              backgroundColor: 'rgba(52, 152, 219, 0.7)'
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      
        // Gráfico de pacientes
        const patientsCtx = document.getElementById('patientsChart').getContext('2d');
        new Chart(patientsCtx, {
          type: 'line',
          data: {
            labels: patientsData.labels,
            datasets: [{
              label: 'Pacientes nuevos',
              data: patientsData.data,
              borderColor: 'rgba(46, 204, 113, 1)',
              backgroundColor: 'rgba(46, 204, 113, 0.1)',
              fill: true
            }]
          },
          options: {
            responsive: true
          }
        });
      
        // Exportar reporte
        document.getElementById('exportReport').addEventListener('click', () => {
          alert('Reporte exportado (simulación)');
          // En una implementación real, generaría un PDF o Excel
        });
      });

 
        
});



function pacientes() {
  window.open('pacientes.html','_blank');
}

function citas() {
  window.open('citas.html','_blank');
}

function reportes() {
  window.open('reportes.html','_blank');
}
