function getprofiletext() {
  var result = `
  
  <p><b>Microsoft Certified Software Developer (MCSA, MCSD)​</b> offering over 8 years of experience in Microsoft .NET, Apple FileMaker and JAMStack technologies. 
  I am a Creative and dynamic developer with proven expertise in consistently delivering scalable solutions in AGILE and SCRUM based teams.</p>

  <p>I have worked with all sorts of businesses on bulilding scalable solutions, from startup retail businesses all the way up to distributed enterprise solutions for fortune 100 companies.</p>

  <p>I Leverage exemplary communication and in-person meetings to establish presence while fostering continuous client engagement, and am Adept at working effectively to achieve goals 
  both as a cross-functional team member and individual contributor.</p>
  
  `;

  return result;
}

function gettoolboxtext() {
  var result = `
  
  <p>Besides playing around with HTML, CSS, and next-gen JS libraries, I juggle with a lot of frameworks and building tools to create great webapps. Here I have listed some of them:</p>

  <ul>
  <li>JavaScript ES6 + ES7</li>
  <li>Node.js</li>
  <li>Git/GitHub</li>
  <li>ASP.NET MVC/.NET Core/Razor/Blazor</li>
  <li>Webpack</li>
  <li>Sass/SCSS/Less</li>
  </ul>
  
  `;

  return result;
}

export default {
  getprofiletext,
  gettoolboxtext
};