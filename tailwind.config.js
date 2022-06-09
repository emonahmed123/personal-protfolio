module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
 primary: "#99f6e4",
        
secondary: "#15023a",
        
accent: "#c7d2fe",
        
neutral: "#3D4451",
        
"base-100": "#FFFFFF",
        
info: "#fef9c3",
        
success: "#fecdd3",
        

        

        },
      },
    ],
  },
 
 
 
 
 
 
 
 
  plugins: [require("daisyui")],
}
