(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();class b{constructor(t){this.data=t}getId(){return this.data.id}getFirstName(){return this.data.first_name}getLastName(){return this.data.last_name}getEmail(){return this.data.email}getCreatedDate(){return new Date(this.data.date_created)}getLastAccessedDate(){return new Date(this.data.date_last_accessed)}}const P={id:"yudwuujwd",first_name:"Bob",last_name:"Doe",email:"bob.doe@noaddress.com",date_created:"December 25, 2024 13:03:00Z",date_last_accessed:"April 26, 2025 09:00:00Z"},C={id:"ijdkwplasd",first_name:"John",last_name:"Doe",email:"john.doe@noaddress.com",date_created:"December 17, 2024 03:24:00Z",date_last_accessed:"April 26, 2025 07:00:00Z"};class I{constructor(t){this.data=t}getId(){return this.data.id}getName(){return this.data.name}getPrice(){return this.data.price}getQuantity(){return this.data.quantity}}class U{constructor(t){this.data=t,this.products=[],this.data.products.forEach(e=>{this.products.push(new I(e))})}getId(){return this.data.id}getStatus(){return this.data.status}getTotalValue(){return this.data.total}getCurrency(){return this.data.currency}getProducts(){return this.products}}const A={id:"trpykados",name:"IPhone 16 Pro",price:1200,quantity:1},D={id:"uiuieroas",name:"HeadPhones Apple Smart",price:110,quantity:1},E={id:"iuijwfwe",name:"Smart Insurance",price:50,quantity:1},O={id:"odasdqwrq",status:"shipping",total:1360,currency:"EUR",products:[A,D,E]};class S{constructor(){this.currentUser=null}async authenticate(t,e){const r=t==="bob"?P:t==="john"?C:null;return this.currentUser=r?new b(r):null,this.currentUser}getCurrentUser(){return this.currentUser}async logout(){this.currentUser=null}async getOrders(){if(this.currentUser===null)throw new Error("The user is not authenticated for this operation");return[new U(O)]}}class q{constructor(){this.ui=null,this.api=new S,this.onLogin=async(t,e)=>{await this.api.authenticate(t,e)?this.getUI().showAccount():this.getUI().showLogin()},this.onLogout=async()=>{await this.api.logout(),this.getUI().showLogin()}}connectUI(t){this.ui=t,this.ui.showLogin()}getUIProps(){const{api:t,onLogin:e,onLogout:r}=this;return{api:t,onLogin:e,onLogout:r}}getUI(){if(this.ui===null)throw new Error("UI is not connected");return this.ui}}const i=class i extends HTMLElement{constructor(t={}){const e=new.target;i.registerComponent(e),super(),this.props=t;const r=this.template();r&&(this.innerHTML=r)}static registerComponent(t){const e=t.element;if(!customElements.get(e)){if(e===i.element)throw new Error("The component implementation must specify a static element name");customElements.define(e,t)}}removeAllChildren(t=[]){for(let e=0;e<this.children.length;e++){const r=this.children[e];t.includes(r)||this.removeChild(r)}}};i.element="missing-name";let o=i;const m=class m extends o{constructor(t){super(t),this.querySelector("button").addEventListener("click",()=>{const e=this.querySelector('input[name="email"]').value,r=this.querySelector('input[name="password"]').value;this.props.onLogin(e,r)})}template(){return`<div>
            <h1>Login</h1>
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button>Login</button>
        </div>`}};m.element="login-view";let d=m;const g=class g extends o{constructor(t){super(t),this.querySelector('[data-name="logout"]').addEventListener("click",t.onLogout),this.querySelector('[data-name="account"]').addEventListener("click",t.onAccount),this.querySelector('[data-name="orders"]').addEventListener("click",t.onOrders)}template(){return`
            <a class="link" href="#" data-name="logout" onclick="return false;">Logout</a>
            <a class="link" href="#" data-name="account" onclick="return false;">Account</a>
            <a class="link" href="#" data-name="orders" onclick="return false;">Orders</a>
        `}};g.element="menu-view";let u=g;function $(n){return n.getFirstName()+" "+n.getLastName()}function L(n){return n.toLocaleDateString()}function N(n,t){return n.toLocaleString(void 0,{style:"currency",currency:t,maximumFractionDigits:2})}const f=class f extends o{template(){const{user:t}=this.props;return`
            <div>
                <h1>Account Information</h1>
                <p><strong>Name:</strong> ${$(t)}</p>
                <p><strong>Email:</strong> ${t.getEmail()}</p>
                <p><strong>Account created:</strong> ${L(t.getCreatedDate())}</p>
                <p><strong>Last accessed:</strong> ${L(t.getLastAccessedDate())}</p>
            </div>
        `}};f.element="account-view";let l=f;const w=class w extends o{template(){return`<div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>Total Value</th>
                        <th>Products</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.props.orders.map(e=>`<tr>
                                <td>${e.getId()}</td>
                                <td>${e.getStatus()}</td>
                                <td>${N(e.getTotalValue(),e.getCurrency())}</td>
                                <td>
                                    <table border="1">
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${e.getProducts().map(r=>`<tr>
                                                        <td>${r.getName()}</td>
                                                        <td>${r.getQuantity()}</td>
                                                        <td>${r.getPrice().toFixed(2)} ${e.getCurrency()}</td>
                                                    </tr>`).join("")}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>`).join("")}
                </tbody>
            </table>
        </div>`}};w.element="orders-view";let h=w;const y=class y extends o{constructor(t){super(t),this.container=document.body,this.menuView=this.createMenu(),this.appendChild(this.menuView),this.container.appendChild(this)}template(){return null}async showAccount(){const t=this.props.api.getCurrentUser();if(t===null)return await this.showLogin();this.removeAllChildren(),this.appendChild(new l({user:t}))}async showLogin(){this.removeAllChildren(),this.appendChild(new d({onLogin:this.props.onLogin}))}async showOrders(){if(this.props.api.getCurrentUser()===null)return await this.showLogin();const e=await this.props.api.getOrders();this.removeAllChildren(),this.appendChild(new h({orders:e}))}removeAllChildren(){super.removeAllChildren([this.menuView])}createMenu(){return new u({onLogout:()=>this.showLogin(),onAccount:()=>this.showAccount(),onOrders:()=>this.showOrders()})}};y.element="app-view";let p=y;const v=new q,x=v.getUIProps(),j=new p(x);v.connectUI(j);
