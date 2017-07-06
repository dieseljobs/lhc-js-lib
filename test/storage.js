import { JSDOM, VirtualConsole } from 'jsdom'

describe('storage', () => {
  /*
  it('should listen to broadcasted actions', () => {


    function inherit(p) {
      if (p == null) throw TypeError();
      if (Object.create) return Object.create(p);
      var t = typeof p;
      if (t !== "object" && t !== "function") throw TypeError();
      function f() {};
      f.prototype = p;
      return new f();
    }

    const virtualConsole = new VirtualConsole()
    virtualConsole.sendTo(console)

    const dom = new JSDOM(
      `<!DOCTYPE html><head></head><body></body></html>`,
      { runScripts: "dangerously" }
    );

    const { window } = dom

    window.localStorage = localStorage
    window.sessionStorage = sessionStorage
    const script = window.document.createElement('script')
    script.src = 'app-test.compiled.js'
    window.document.getElementsByTagName('head')[0].appendChild(script)

    window.eval(`setAndBroadcastSession('foo', 'bar')`)

    const broadcastMessage = {
      key: 'foo',
      value: 'bar'
    }

    //window.eval(`localStorage.setItem( 'broadcastSessionStorage', JSON.stringify({key:'foo',value:'bar'}) )`)
    //window.eval(`localStorage.removeItem( 'broadcastSessionStorage' )`)

    //const newStore = inherit(sessionStorage)
    //console.log(newStore)
    //const window = (new JSDOM()).window
    //window.createElement("script")
    //console.log('localStorage>>>>', dom.window.localStorage)
    console.log('sessionStorage>>>>', dom.window.sessionStorage)

  })
  */
})

/*
JSDOM.fromFile("storage-test.html", {}).then(dom => {

  console.log(dom.serialize());
});
*/
