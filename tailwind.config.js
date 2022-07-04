module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
//         mytheme: {
        
//  primary: "#99f6e4",
        
// secondary: "#15023a",
        
// accent: "#c7d2fe",
        
// neutral: "#3D4451",
        
// "base-100": "#FFFFFF",
        
// info: "#ecf0f3",
        
// success: "#fecdd3",
        

        

//         },
mytheme: {
  primary: "#212428",
  secondary: "#0097e6",
  accent: "#c4cfde",
  neutral: "#3d4451",
  "base-100": "#ffffff",
},



      },
    ],
  },
 
 
 
 
 
 
 
 
  plugins: [require("daisyui")],
}
