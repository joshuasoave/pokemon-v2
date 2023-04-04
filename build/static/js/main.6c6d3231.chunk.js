(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(27)},19:function(e,t,a){},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),l=(a(19),a(3)),s=(a(21),function(e){var t=e.rocketStyle;return r.a.createElement("header",{className:t?"rocket-header":" normal-header"},r.a.createElement("h1",null,"Pokemon Quiz Game"))}),m=function(e){var t=e.closeAbout,a=e.rocketStyle;return r.a.createElement("div",{className:a?"rocket-modal":"about-modal",id:"about-modal"},r.a.createElement("div",{className:"modal-textbox",id:"about-text"},r.a.createElement("p",null,"This is a game to test your Pokemon knowledge.")," ",r.a.createElement("p",{id:"btm-text"},"Click on the Who's That Pokemon button to start your journey!"),r.a.createElement("button",{type:"button",id:"close-abt",className:a?"rocket-close":"close-btn",onClick:t},"Close")))},i=function(e){var t=e.producePokemon,a=e.rocketStyle;return r.a.createElement("button",{type:"button",className:a?"rocket-randomizer":"normal-randomizer",id:"randomizer",onClick:t},"Who's That Pokemon?")},u=function(e){var t=e.pkmn,a=e.showHintClick,n=e.score,o=e.totalGuesses,c=e.setScore,l=e.setTotalGuesses,s=e.setUserAnswer,m=e.userAnswer,i=e.setIsAnswerCorrect,u=e.setShowResults,d=e.rocketStyle,p=t&&t.sprites&&t.sprites.front_default?t.sprites.front_default:"";return r.a.createElement("div",null,r.a.createElement("div",{className:"current-pokemon"},t?r.a.createElement("img",{src:p,alt:t.name}):""),r.a.createElement("div",{className:"hint-div"},r.a.createElement("button",{type:"button",id:"hint",className:d?"rocket-hint":"normal-hint",onClick:a},"Hint")),r.a.createElement("div",{className:"submit-form"},r.a.createElement("form",{onSubmit:function(e){!function(e){if(e.preventDefault(),m.toLowerCase()===t.name.toLowerCase()){var a=o+1;c(n+1),l(a),i(!0)}else l(o+1),i(!1);u(!0)}(e)}},r.a.createElement("input",{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Name this pokemon",value:m}),r.a.createElement("button",{type:"submit",id:"submit-btn",className:d?"rocket-submit":"normal-submit"},"Submit"))))},d=function(e){var t=e.pkmn,a=e.closeHintClick,n=e.rocketStyle,o=t&&t.sprites&&t.sprites.front_default?t.sprites.front_default:"",c=t&&t.types?t.types:[],l=t&&t.abilities?t.abilities:[];return r.a.createElement("div",{class:"hint-modal"},r.a.createElement("div",{class:n?"rocket-modal":"modal-textbox",id:"modal-text"},r.a.createElement("div",{class:"sprite"},r.a.createElement("img",{id:"hint-sprite",src:o,alt:t.name})),r.a.createElement("div",{class:"typing"},r.a.createElement("h3",{id:"type-h3"},"Type:"),c.map(function(e){return r.a.createElement("p",null,e.type.name)})),r.a.createElement("div",{class:"abilities"},r.a.createElement("h3",{id:"ability-h3"},"Abilities:"),l.map(function(e){return r.a.createElement("p",null,e.ability.name)})),r.a.createElement("button",{type:"button",id:"close-btn",class:n?"rocket-btn":"close-btn",onClick:a},"Close")))},p=function(e){var t=e.score,a=e.totalGuesses,n=e.rocketStyle;return r.a.createElement("div",{id:"score"},r.a.createElement("p",{id:"score-text",className:n?"rocket-score":"normal-score"},"Score:",r.a.createElement("span",{id:"current-score"},0!==a?"".concat(t,"/").concat(a):null)))},b=a(29),k=function(e){var t=e.isAnswerCorrect,a=e.pkmn,n=e.userAnswer,o=e.setShowResults,c=e.producePokemon,l=e.setUserAnswer,s=e.rocketStyle;function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{id:"correct-answer results-modal",className:s?"correct-answer-rocket":"correct-answer-normal"},r.a.createElement("p",null,"Correct! It's",r.a.createElement("span",{clasName:"name"}," ",m(a.name))),r.a.createElement("p",null,"You're becoming the very best!")):r.a.createElement("div",{id:"wrong-answer results-modal",className:s?"wrong-answer-rocket":"wrong-answer-normal"},r.a.createElement("p",null,"No, it's not ",r.a.createElement("span",null," ",n)),r.a.createElement("p",null,"This Pokemon's name is",r.a.createElement("span",{className:"name"}," ",m(a.name))),r.a.createElement("p",null,"You'll get it right next time!")),r.a.createElement("button",{className:s?"rocket-btn":"close-btn",onClick:function(){o(!1),c(),l()}},"Next"))},E=function(e){var t=e.rocketStyle,a=e.setRocketStyle;return console.log(t),r.a.createElement("footer",null,t?r.a.createElement("div",{className:"normal-style"},r.a.createElement("button",{type:"button",id:"normal-mode",onClick:function(){a(!1)}},"I Choose You!")):r.a.createElement("div",{className:"team-rocket"},r.a.createElement("button",{type:"button",id:"rocket-mode",onClick:function(){a(!0)}},"Prepare For Trouble")))};var f=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(0),f=Object(l.a)(c,2),y=f[0],h=f[1],v=Object(n.useState)(0),S=Object(l.a)(v,2),w=S[0],C=S[1],N=Object(n.useState)(!1),j=Object(l.a)(N,2),O=j[0],g=j[1],A=Object(n.useState)({}),P=Object(l.a)(A,2),x=P[0],T=P[1],G=Object(n.useState)(!1),R=Object(l.a)(G,2),I=R[0],H=R[1],U=Object(n.useState)(""),z=Object(l.a)(U,2),_=z[0],F=z[1],M=Object(n.useState)(!1),Y=Object(l.a)(M,2),J=Y[0],L=Y[1],W=Object(n.useState)(!1),B=Object(l.a)(W,2),D=B[0],Q=B[1],q=Object(n.useState)(!1),K=Object(l.a)(q,2),V=K[0],X=K[1],Z=function(){var e=Math.floor(809*Math.random()+1);b.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e)).then(function(e){T(e.data)}),!0!==O&&g(!0)};return r.a.createElement("div",{className:"App"},r.a.createElement(s,{rocketStyle:V}),r.a.createElement("div",{className:"container"},a?r.a.createElement(m,{closeAbout:function(){o(!1)},rocketStyle:V}):null,r.a.createElement("div",{className:"wtp-button"},O?null:r.a.createElement(i,{setIsPlaying:g,setCurrentPokemon:T,producePokemon:Z,rocketStyle:V})),O&&!D?r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{score:y,rocketStyle:V,totalGuesses:w}),r.a.createElement(u,{pkmn:x,showHintClick:function(){H(!0)},score:y,totalGuesses:w,setTotalGuesses:C,setScore:h,producePokemon:Z,userAnswer:_,setUserAnswer:F,setIsAnswerCorrect:L,setShowResults:Q,rocketStyle:V})):null,I?r.a.createElement(d,{pkmn:x,closeHintClick:function(){H(!1)},rocketStyle:V}):null,O&&D?r.a.createElement(k,{pkmn:x,isAnswerCorrect:J,userAnswer:_,setShowResults:Q,producePokemon:Z,setUserAnswer:F,rocketStyle:V}):null,r.a.createElement(E,{rocketStyle:V,setRocketStyle:X})))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)))}},[[10,2,1]]]);
//# sourceMappingURL=main.6c6d3231.chunk.js.map