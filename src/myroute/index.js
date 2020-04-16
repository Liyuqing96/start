function HistoryRoute(){
    this.current = null
}

function VueRouter(options){       
    this.mode= options.mode||'hash'
    this.routes = options.routes||[]
    this.history= new HistoryRoute;
    this.routesMap = this.createMap(this.routes)
    this.init();
}
VueRouter.prototype.init = function(){
    if(this.mode ==='hash'){
        location.hash?'':location.hash='/'//自动加#
        window.addEventListener("load",() =>{
            this.history.current=location.hash.slice(1)
        })
        window.addEventListener("hashchange",() =>{
            this.history.current=location.hash.slice(1)
        })
    }
}
VueRouter.prototype.createMap = function(routes){
    let memo = {}
    routes.forEach((current,index) =>{
        memo[current.path] = current.component
    })
    return memo
}

VueRouter.install = function(vue){
    if(VueRouter.install.installed) return
    VueRouter.install.installed = true
    vue.mixin({
        beforeCreate(){
            if(this.$options && this.$options.router){
                this._root = this;
                this._router = this.$options.router
                vue.util.defineReactive(this,'current',this._router.history)
            }else {
                this._root = this.$parent._root
            }
        }
    })
    vue.component('router-view',{
        render(h){
            let current = this._self._root._router.history.current;
            let routerMap = this._self._root._router.routesMap
            return h(routerMap[current])
        }
    })
}
export default VueRouter;