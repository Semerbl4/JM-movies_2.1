(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var s=n(6),a=n(0),r=n.n(a),i=n(20),o=n.n(i),c=n(31),u=n(39),l=n(52),d=n(51),h=(n(84),n(85),n(105)),v=n(104),g=n(22),p=n.n(g),f=n(36),m=function e(){var t=this;Object(c.a)(this,e),this.apiKey="c33f54366ccf34ec81775c2d46bea63e",this.getMovies=function(){var e=Object(f.a)(p.a.mark((function e(n){var s,a,r,i=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.length>1&&void 0!==i[1]?i[1]:null,a=s,a=s?"&page=".concat(s):"",e.next=5,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(t.apiKey,"&query=").concat(n).concat(a));case 5:if(!(r=e.sent).ok){e.next=11;break}return e.next=9,r.json();case 9:return r=e.sent,e.abrupt("return",r);case 11:throw new Error(r.status);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getGenres=Object(f.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(t.apiKey,"&language=en-US"));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return n=e.sent,e.abrupt("return",n.genres);case 8:throw new Error(n.status);case 9:case"end":return e.stop()}}),e)}))),this.getGuestSessionId=Object(f.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/authentication/guest_session/new?api_key=".concat(t.apiKey));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return n=e.sent,e.abrupt("return",n.guest_session_id);case 8:throw new Error(n.status);case 9:case"end":return e.stop()}}),e)}))),this.rateMovie=function(){var e=Object(f.a)(p.a.mark((function e(n,s,a){var r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={value:n},e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(s,"/rating?api_key=").concat(t.apiKey,"&guest_session_id=").concat(a),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(r)});case 3:return i=e.sent,e.next=6,i.json();case 6:case"end":return e.stop()}}),e)})));return function(t,n,s){return e.apply(this,arguments)}}(),this.getGuestRatedMovies=function(){var e=Object(f.a)(p.a.mark((function e(n){var s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/guest_session/".concat(n,"/rated/movies?api_key=").concat(t.apiKey));case 2:if(!(s=e.sent).ok){e.next=8;break}return e.next=6,s.json();case 6:return s=e.sent,e.abrupt("return",s);case 8:throw new Error(s.status);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=r.a.createContext(),b=j.Provider,x=j.Consumer,O=(n(86),function(e){var t=e.setSearchMode,n=e.setRatedMovies,a=e.guestSessionId,r=e.toogleLoading,i=e.setError,o=new m;return Object(s.jsxs)("ul",{className:"filters",type:"none",children:[Object(s.jsx)("li",{className:"filters__filter",children:Object(s.jsx)("button",{className:"filters__button",type:"button",name:"search",onClick:function(e){t(e)},children:"Search"})}),Object(s.jsx)("li",{className:"filters__filter",children:Object(s.jsx)("button",{className:"filters__button",type:"submit",name:"rated",onClick:function(e){r(),o.getGuestRatedMovies(a).then((function(e){n(e)})).then((function(){return t(e)})).then((function(){return r()})).catch((function(e){i(e)}))},children:"Rated"})})]})}),w=(n(87),n(65)),_=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).moviesApiService=new m,e.state={value:""},e.changedInput=function(t){e.setState({value:t.target.value})},e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this.props.currentPage,s=this.state.value,a=this.props.changeMovies;t.value===s&&e.currentPage===n||""===s||a(s,n)}},{key:"render",value:function(){var e=this;return Object(s.jsx)("input",{type:"text",placeholder:"Type to search...",className:"search",onChange:Object(w.debounce)((function(t){e.changedInput(t)}),1e3)})}}]),n}(r.a.Component);_.defaultProps={changeMovies:function(){},currentPage:1};var S=_,y=(n(89),n(103)),M=(n(90),n(106)),k=function(e){var t=e.title,n=e.poster,a=e.releaseDate,r=e.rating,i=e.overview,o=e.id,c=e.guestSessionId,u=e.guestRating,l=e.genreIds,d=i.split(" ").slice(0,20);d.push("...");var h=new m,v=function(e,t){var n=[];return t.forEach((function(t){e.forEach((function(e){e.id===t&&n.push(Object(s.jsx)("li",{className:"movie-card__category",children:e.name},t))}))})),n};return Object(s.jsx)(x,{children:function(e){return Object(s.jsxs)("div",{className:"movie-card",children:[Object(s.jsx)("img",{className:"movie-card__poster",src:(i=n,null===n?null:"https://image.tmdb.org/t/p/w500".concat(i)),alt:"\u041f\u043e\u0441\u0442\u0435\u0440"}),Object(s.jsxs)("div",{className:"movie-card__information",children:[Object(s.jsx)("h5",{className:"movie-card__title",children:t}),Object(s.jsx)("div",{className:"movie-card__raiting",style:r<=3?{borderColor:"#E90000"}:r<=5?{borderColor:"#E97E00"}:r<=7?{borderColor:"#E9D100"}:{borderColor:"#66E900"},children:Object(s.jsx)("p",{children:r})}),Object(s.jsx)("p",{className:"movie-card__date",children:a}),Object(s.jsx)("ul",{className:"movie-card__categorys-list",type:"none",children:v(e,l)}),window.matchMedia("(max-width: 420px)").matches?null:Object(s.jsx)("p",{className:"movie-card__overview",children:d.join(" ")}),Object(s.jsx)(M.a,{count:10,allowHalf:!0,defaultValue:u,style:{width:"".concat(231,"px")},onChange:function(e){h.rateMovie(e,o,c)}})]}),window.matchMedia("(max-width: 420px)").matches?Object(s.jsx)("p",{className:"movie-card__overview",children:d.join(" ")}):null]});var i}})};k.defaultProps={releaseDate:"\u0414\u0430\u0442\u0430 \u0440\u0435\u043b\u0438\u0437\u0430 \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430",rating:0,overview:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",poster:null,id:0,guestSessionId:null,guestRating:0};var N=k,C=function(e){var t,n=e.movies,a=e.loading,r=e.guestSessionId,i=e.searchMode,o=e.ratedMovies;return a?Object(s.jsx)(y.a,{size:"large",className:"spin_scale"}):Object(s.jsx)("ul",{className:"movies-list",type:"none",children:(t=i,n?(t?n:o).map((function(e){return Object(s.jsx)("li",{className:"movie-list__item",children:Object(s.jsx)(N,{title:e.original_title,overview:e.overview,poster:e.poster_path,releaseDate:e.release_date,rating:e.vote_average,id:e.id,guestRating:e.rating,genreIds:e.genre_ids,guestSessionId:r})},e.id)})):null)})};C.defaultProps={movies:null,loading:!1,guestSessionId:null,ratedMovies:null};var I=C,P=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).moviesApiServise=new m,e.state={movies:null,ratedMovies:null,loading:!1,error:!1,totalPages:null,currentPage:1,guestSessionId:"",searchMode:!0,genres:null,moviesNotFound:!1},e.online=window.navigator.onLine,e.toogleLoading=function(){e.setState((function(e){return{loading:!e.loading}}))},e.setRatedMovies=function(t){e.setState({ratedMovies:t.results})},e.setError=function(t){e.setState({error:t.message})},e.setSearchMode=function(t){"search"===t.target.name?e.setState({searchMode:!0,currentPage:1,movies:null}):e.setState({searchMode:!1})},e.changeMovies=function(t,n){e.setState((function(e){return{loading:!e.loading,totalPages:null}})),e.moviesApiServise.getMovies(t,n).then((function(t){e.setState((function(e){return{movies:t.results,loading:!e.loading,totalPages:t.total_pages,moviesNotFound:0===t.results.length}}))})).catch((function(t){e.setState({error:t.message})}))},e.setCurrentPage=function(t){e.setState({currentPage:t})},e.isMoviesFound=function(){var t=e.state.movies,n=e.state.loading,a=e.state.guestSessionId,r=e.state.ratedMovies,i=e.state.searchMode;return e.state.moviesNotFound?Object(s.jsx)("p",{className:"notFoundMessage",children:"Sry, this movie was not found"}):Object(s.jsx)(I,{movies:t,ratedMovies:r,searchMode:i,loading:n,guestSessionId:a})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.moviesApiServise.getGenres().then((function(t){return e.setState({genres:t})})).catch((function(t){e.setState({error:t.message})})),this.moviesApiServise.getGuestSessionId().then((function(t){e.setState({guestSessionId:t})})).catch((function(t){e.setState({error:t.message})}))}},{key:"componentDidCatch",value:function(e){this.setState({error:e})}},{key:"render",value:function(){var e=this,t=this.state.movies,n=this.state.loading,a=this.state.error,r=this.state.totalPages,i=this.state.currentPage,o=this.state.guestSessionId,c=this.state.searchMode,u=this.state.genres;return this.online?a?Object(s.jsx)(h.a,{message:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 ".concat(a),type:"error"}):Object(s.jsx)(b,{value:u,children:Object(s.jsx)("main",{className:"app",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(O,{guestSessionId:o,setSearchMode:this.setSearchMode,setRatedMovies:this.setRatedMovies,toogleLoading:this.toogleLoading,setError:this.setError}),c?Object(s.jsx)(S,{changeMovies:this.changeMovies,currentPage:i}):null,this.isMoviesFound(),!n&&t&&c?Object(s.jsx)(v.a,{className:"pagination",defaultCurrent:i,total:10*r,showSizeChanger:!1,onChange:function(t){e.setCurrentPage(t)}}):null]})})}):Object(s.jsx)(h.a,{type:"warning",message:"\u0412\u0430\u0448 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u043f\u0440\u0438\u043a\u0430\u0437\u0430\u043b \u0434\u043e\u043b\u0433\u043e \u0436\u0438\u0442\u044c (\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441\u0435\u0442\u0438)"})}}]),n}(r.a.Component);o.a.render(Object(s.jsx)(P,{}),document.getElementById("root"))},84:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.97f68a00.chunk.js.map