(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Blossom",image:"./assets/images/Blossom-pic.png"},{id:2,name:"Bubbles",image:"./assets/images/Bubbles-pic.png"},{id:3,name:"Buttercup",image:"./assets/images/Buttercup-pic.jpg"},{id:4,name:"Brick",image:"./assets/images/Brick-pic.jpg"},{id:5,name:"Boomer",image:"./assets/images/Boomer-pic.png"},{id:6,name:"Butch",image:"./assets/images/Butch-pic.png"},{id:7,name:"Professor Utonium",image:"./assets/images/Professor-pic.jpg"},{id:8,name:"The Mayor",image:"./assets/images/Mayor-pic.png"},{id:9,name:"Sara Bellum",image:"./assets/images/Sara_Bellum-pic.png"},{id:10,name:"Princes Morebucks",image:"./assets/images/Princess-pic.png"},{id:11,name:"Mojo Jojo",image:"./assets/images/Mojo_jojo-pic.png"},{id:12,name:"HIM",image:"./assets/images/HIM-pic.png"}]},,,,,,,,,function(e,a,s){e.exports=s(21)},,,,,,function(e,a,s){},function(e,a,s){},function(e,a,s){},function(e,a,s){},function(e,a,s){},function(e,a,s){"use strict";s.r(a);var t=s(0),n=s.n(t),i=s(3),c=s.n(i),r=(s(16),s(8)),o=s(4),l=s(5),m=s(7),u=s(6),g=s(9);s(17);var p=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{src:e.image,alt:e.name,onClick:function(){return e.handleBtnClick(e.id)}})))};s(18);var h=function(e){return n.a.createElement("nav",{className:"navbar"},n.a.createElement("div",null,n.a.createElement("a",{href:"/"},n.a.createElement("p",{className:"partitle"},"Clicky Puff!"))),n.a.createElement("div",{className:"clicktostart"},n.a.createElement("p",{className:"par par1"},"Click Someone to Get Started!")),n.a.createElement("div",null,n.a.createElement("p",{className:" par par2"},"Score: ",e.score)," "),n.a.createElement("div",null,n.a.createElement("p",{className:"par par3"},"Losses: ",e.losses)," "),n.a.createElement("div",null,n.a.createElement("p",{className:"par par4"},"High Score: ",e.highScore)," "))};s(19);var d=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)},f=s(1),v=(s(20),function(e){function a(){var e,s;Object(o.a)(this,a);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(s=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={characters:f,clicked:!1,score:0,losses:0,highScore:0,guesses:[]},s.handleBtnClick=function(e){var a=Object(r.a)({},s.state);a.guesses.includes(e)?(console.log("You lose"),a.losses=a.losses+1,a.guesses=[],a.score=0):(a.score=a.score+1,a.guesses.push(e)),s.shuffle(f),a.score>a.highScore&&(a.highScore=a.score),s.setState(a)},s}return Object(g.a)(a,e),Object(l.a)(a,[{key:"componentWillMount",value:function(){this.shuffle(f)}},{key:"shuffle",value:function(e){var a,s,t;for(t=e.length-1;t>0;t--)a=Math.floor(Math.random()*(t+1)),s=e[t],e[t]=e[a],e[a]=s;return e}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"background"},n.a.createElement(h,{score:this.state.score,losses:this.state.losses,highScore:this.state.highScore}),n.a.createElement(d,null,this.state.characters.map(function(a){return n.a.createElement(p,{handleBtnClick:e.handleBtnClick,id:a.id,key:a.id,name:a.name,image:a.image})})))}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.69f91f96.chunk.js.map