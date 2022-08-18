export const graficaMovimientos = {
        type: "line",
        data: {
          labels: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],

          datasets: [
            {
              label: "Gastos",
              data: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8],
              backgroundColor: "rgba(252, 70, 70, .5)",
              borderColor: "#6c2020",
              borderWidth: 3
            },
            {
              label: "Ingresos",
              data: [7, 4, 7, 2, 9, 0, 1, 2, 4, 7, 7, 10],
              backgroundColor: "rgba(122, 171, 255, .5)",
              borderColor: "#405985",
              borderWidth: 3
            }
          ]
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25
                }
              }
            ]
          }
        }
      }

      export default graficaMovimientos;