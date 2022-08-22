export const graficaMovimientos = {
        //Datos necesarios para la gráfica, incluida la leyenda y el set de datos necesarios para mostrarlos
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
              label: "Rutinarios",
              data: [5, 4, 2, 1, 3, 2, 4, 5, 6, 3, 2, 3],
              backgroundColor: "rgba(252, 70, 70, .5)",
              borderColor: "#fc4646",
              borderWidth: 3
            },
            {
              label: "Fortuitos",
              data: [2, 3, 2, 4, 3, 6, 3, 4, 2, 3, 1, 2],
              backgroundColor: "rgba(122, 171, 255, .5)",
              borderColor: "#7aabff",
              borderWidth: 3
            }
          ]
        },

        //Objeto de opciones en donde hay ajustes misceláneos como el estilo de las líneas o el gráfico en sí
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