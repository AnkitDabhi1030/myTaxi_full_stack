import{b as h}from"./chunk-DCJQCLEB.js";import{b as a,n as l,p as u}from"./chunk-DA3W5VMP.js";import{$ as s,V as c,n}from"./chunk-53WIH66V.js";var y=(()=>{let r=class r{constructor(){this.backendUrl=u.backendUrl,this.router=s(h),this.http=s(a),this.toaster=s(l),this.loginurl=this.backendUrl,this.newserverurl=this.backendUrl+"/vehicles/"}getAllVehiclesData(){return this.http.get(`${this.newserverurl}get_all_vehicles`)}addnewVehicle(t){return this.http.post(`${this.newserverurl}add_new_vehicles`,t)}updateVehicle(t,e,i){return this.http.put(`${this.newserverurl}`+t+e,i)}getcountryname(t,e){return this.http.get("https://restcountries.com/v3.1/all").pipe(n(p=>(console.log("GET COUNTRY NAME--SERVICE---"),p.find(m=>m.name.common.substring(0,e).toLowerCase()===t.substring(0,e).toLowerCase()))))}addcountry(t){return this.http.post(this.backendUrl+"/country/add_country",t)}};r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=c({token:r,factory:r.\u0275fac,providedIn:"root"});let o=r;return o})();export{y as a};
