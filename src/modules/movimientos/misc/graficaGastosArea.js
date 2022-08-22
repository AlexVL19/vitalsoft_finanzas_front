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
              label: "Operativa",
              data: [3, 5, 6, 1, 9, 3, 5, 3, 2, 7, 1, 3],
              backgroundColor: "rgba(252, 70, 70, .5)",
              borderColor: "#fc4646",
              borderWidth: 3
            },
            {
              label: "Administrativa",
              data: [2, 1, 4, 6, 7, 6, 4, 5, 6, 2, 4, 5],
              backgroundColor: "rgba(122, 171, 255, .5)",
              borderColor: "#7aabff",
              borderWidth: 3
            },

            {
              label: "Comercial",
              data: [9, 2, 7, 3, 5, 4, 1, 2, 9, 7, 5, 3],
              backgroundColor: "#fffb7a",
              borderColor: "#fffb7a",
              borderWidth: 3
            },

            {
              label: "Servicio al cliente",
              data: [2, 5, 2, 4, 3, 1, 2, 7, 3, 5, 1, 4],
              backgroundColor: "#7aff7a",
              borderColor: "#7aff7a",
              borderWidth: 3
            },

            {
              label: "Talento humano",
              data: [5, 3, 4, 5, 1, 7, 4, 6, 2, 8, 2, 1],
              backgroundColor: "#c37aff",
              borderColor: "#c37aff",
              borderWidth: 3
            },
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