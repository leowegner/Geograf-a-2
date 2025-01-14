document.addEventListener('DOMContentLoaded', function() {
    // Data organization by continents
    const countriesByContinent = {
        'Europa': {
            countries: ['España', 'Albania', 'Alemania', 'Andorra', 'Austria', 'Belarús', 'Bélgica', 'Bosnia y Herzegovina', 
                       'Bulgaria', 'Croacia', 'Dinamarca', 'Eslovenia', 'Estonia', 'Finlandia', 'Francia', 'Grecia', 
                       'Hungría', 'Irlanda', 'Islandia', 'Italia', 'Letonia', 'Liechtenstein', 'Lituania', 'Luxemburgo', 
                       'Macedonia', 'Malta', 'Moldavia', 'Mónaco', 'Montenegro', 'Noruega', 'Países Bajos', 'Polonia', 
                       'Portugal', 'Reino Unido', 'República Checa', 'República Eslovaca', 'Rumanía', 'Rusia', 'Serbia', 
                       'Suecia', 'Suiza', 'Ucrania'],
            values: [13223, 72, 35258, 16, 2486, 105, 4053, 89, 2837, 103, 1139, 245, 187, 1607, 5610, 275, 1364, 
                    1896, 162, 18219, 418, 10, 371, 110, 18, 25, 253, 6, 8, 3683, 3097, 3485, 4640, 31778, 1318, 
                    1183, 7320, 2194, 269, 2398, 1804, 724]
        },
        'América': {
            countries: ['Antigua y Barbuda', 'Argentina', 'Bahamas', 'Barbados', 'Belice', 'Bolivia', 'Brasil', 'Canadá', 
                       'Chile', 'Colombia', 'Costa Rica', 'Cuba', 'Dominica', 'Ecuador', 'El Salvador', 'Estados Unidos', 
                       'Granada', 'Guatemala', 'Guyana', 'Haití', 'Honduras', 'Jamaica', 'México', 'Nicaragua', 'Panamá', 
                       'Paraguay', 'Perú', 'República Dominicana', 'San Cristóbal y Nieves', 'San Vicente y las Granadinas', 
                       'Santa Lucía', 'Surinam', 'Trinidad y Tobago', 'Uruguay', 'Venezuela'],
            values: [0, 11520, 0, 2, 3, 3425, 2938, 146, 2410, 18057, 66, 12053, 25, 4217, 68, 678, 2, 232, 4, 12, 
                    446, 14, 633, 96, 101, 1513, 2408, 2141, 0, 0, 0, 4, 7, 6302, 10148]
        },
        'África': {
            countries: ['Angola', 'Argelia', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Camerún', 
                       'Chad', 'Comores', 'Congo', 'Costa de Marfil', 'Djibouti', 'Egipto', 'Eritrea', 'Etiopía', 
                       'Gabón', 'Gambia', 'Ghana', 'Guinea', 'Guinea Ecuatorial', 'Guinea-Bissau', 'Kenia', 'Lesotho', 
                       'Liberia', 'Libia', 'Madagascar', 'Malawi', 'Mali', 'Marruecos', 'Mauricio', 'Mauritania', 
                       'Mozambique', 'Namibia', 'Níger', 'Nigeria', 'República Centroafricana', 'República Democrática del Congo', 
                       'Ruanda', 'Santo Tomé y Príncipe', 'Senegal', 'Seychelles', 'Sierra Leona', 'Somalia', 'Sudáfrica', 
                       'Sudán', 'Swazilandia', 'Tanzania', 'Togo', 'Túnez', 'Uganda', 'Zambia', 'Zimbabwe'],
            values: [96, 590, 10, 0, 10, 2, 367, 59, 1, 0, 35, 71, 2, 58, 3, 12, 6, 130, 526, 609, 368, 646, 51, 0, 
                    73, 11, 8, 5, 286, 16055, 11, 2755, 53, 6, 5, 1410, 9, 17, 9, 20, 2726, 4, 222, 5, 129, 13, 0, 
                    15, 25, 69, 11, 7, 11]
        },
        'Asia': {
            countries: ['Afganistán', 'Arabia Saudí', 'Armenia', 'Azerbaiyán', 'Bahrein', 'Bangladesh', 'Brunei', 'Camboya', 
                       'China', 'Chipre', 'Corea', 'Corea del Norte', 'Emiratos Árabes Unidos', 'Filipinas', 'Georgia', 
                       'India', 'Indonesia', 'Irán', 'Iraq', 'Israel', 'Japón', 'Jordania', 'Kazajstán', 'Kirguistán', 
                       'Kuwait', 'Laos', 'Líbano', 'Malasia', 'Maldivas', 'Mongolia', 'Myanmar', 'Nepal', 'Omán', 'Pakistán', 
                       'Qatar', 'Singapur', 'Siria', 'Sri Lanka', 'Tadyikistán', 'Tailandia', 'Taiwán', 'Timor Oriental', 
                       'Turkmenistán', 'Turquía', 'Uzbekistán', 'Vietnam', 'Yemen'],
            values: [10, 6, 23, 6, 1, 176, 1, 3, 7272, 20, 478, 33, 3, 1747, 69, 3298, 109, 158, 51, 66, 141, 50, 51, 
                    5, 13, 2, 148, 44, 0, 13, 2, 125, 1, 404, 5, 38, 66, 41, 0, 156, 11, 0, 1, 109, 11, 70, 1]
        },
        'Oceanía': {
            countries: ['Australia', 'Fiji', 'Islas Cook', 'Islas Marshall', 'Islas Salomón', 'Micronesia', 'Nauru', 
                       'Nueva Zelanda', 'Palaos', 'Papúa Nueva Guinea', 'Samoa', 'Tonga', 'Tuvalu', 'Vanuatu'],
            values: [83, 2, 0, 0, 0, 0, 0, 22, 1, 1, 0, 0, 1, 0]
        }
    };

    let currentChart = null;
    let currentView = 'Continentes';

    // Function to get top N items
    function getTopN(data, n) {
        if (n === 'all' || n >= data.length) return data;
        
        const sortedIndices = data.values
            .map((value, index) => ({ value, index }))
            .sort((a, b) => b.value - a.value)
            .slice(0, n)
            .map(item => item.index);

        return {
            countries: sortedIndices.map(i => data.countries[i]),
            values: sortedIndices.map(i => data.values[i])
        };
    }

    // Function to create or update chart
    function updateChart(viewType, topN = 'all') {
        const chartContainer = document.querySelector('.chart-container');
        const tableContainer = document.querySelector('.table-container');
        
        if (viewType === 'Tabla') {
            chartContainer.style.display = 'none';
            tableContainer.style.display = 'block';
            updateTable();
            return;
        } else {
            chartContainer.style.display = 'block';
            tableContainer.style.display = 'none';
        }

        const ctx = document.getElementById('immigrationChart').getContext('2d');
        
        if (currentChart) {
            currentChart.destroy();
        }

        let chartData;
        if (viewType === 'Continentes') {
            const continentValues = Object.values(countriesByContinent).map(continent => 
                continent.values.reduce((a, b) => a + b, 0)
            );
            const total = continentValues.reduce((a, b) => a + b, 0);
            const percentages = continentValues.map(value => ((value / total) * 100).toFixed(1));
            const labels = Object.keys(countriesByContinent).map((continent, i) => 
                `${continent} (${continentValues[i].toLocaleString()} - ${percentages[i]}%)`
            );
            
            chartData = {
                labels: labels,
                datasets: [{
                    data: continentValues,
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
                }]
            };
        } else {
            const continentData = countriesByContinent[viewType];
            const filteredData = getTopN(continentData, topN);
            const total = filteredData.values.reduce((a, b) => a + b, 0);
            const continentTotal = continentData.values.reduce((a, b) => a + b, 0);
            const percentages = filteredData.values.map(value => ((value / continentTotal) * 100).toFixed(1));
            const labels = filteredData.countries.map((country, i) => 
                `${country} (${filteredData.values[i].toLocaleString()} - ${percentages[i]}%)`
            );

            chartData = {
                labels: labels,
                datasets: [{
                    data: filteredData.values,
                    backgroundColor: filteredData.countries.map(() => 
                        '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
                    )
                }]
            };
        }

        currentChart = new Chart(ctx, {
            type: 'pie',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        right: 200 // Add padding to prevent legend overlap
                    }
                },
                plugins: {
                    legend: {
                        position: 'right',
                        align: 'center',
                        labels: {
                            font: { size: 12 },
                            boxWidth: 15,
                            padding: 15
                        }
                    },
                    title: {
                        display: true,
                        text: viewType === 'Continentes' ? 'Distribución por Continentes' : 
                            `Distribución de Inmigrantes en ${viewType}`,
                        font: { size: 18 }
                    }
                }
            }
        });
    }

    // Function to update table
    function updateTable() {
        const tbody = document.querySelector('#dataTable tbody');
        const searchTerm = document.getElementById('tableSearch').value.toLowerCase();
        const total = Object.values(countriesByContinent)
            .reduce((sum, continent) => sum + continent.values.reduce((a, b) => a + b, 0), 0);
        
        tbody.innerHTML = '';
        
        Object.entries(countriesByContinent).forEach(([continent, data]) => {
            data.countries.forEach((country, index) => {
                if (country.toLowerCase().includes(searchTerm)) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${country}</td>
                        <td>${continent}</td>
                        <td>${data.values[index].toLocaleString()}</td>
                        <td>${((data.values[index] / total) * 100).toFixed(2)}%</td>
                    `;
                    tbody.appendChild(row);
                }
            });
        });
    }

    // Initialize view buttons
    const viewButtons = document.querySelectorAll('.view-controls button');
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            viewButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            currentView = button.textContent;
            if (currentView === 'Tabla Completa') {
                updateChart('Tabla');
            } else {
                updateChart(currentView, document.getElementById('topFilter').value);
            }
        });
    });

    // Initialize filter
    const topFilter = document.getElementById('topFilter');
    topFilter.addEventListener('change', () => {
        if (currentView !== 'Tabla Completa') {
            updateChart(currentView, topFilter.value);
        }
    });

    // Initialize table search
    const tableSearch = document.getElementById('tableSearch');
    tableSearch.addEventListener('input', updateTable);

    // Initial chart
    updateChart('Continentes');
});
