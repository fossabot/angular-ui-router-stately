angular
  .module('statelyDemo', [
    'ng',
    'ui.router',
    'stately'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/');
    $stateProvider
      .state('n', {
        url: '/n',
        template: '<div><a ui-sref="n">State n</a><ui-view></ui-view></div>'
      })
      .state('n.m', {
        url: '/m',
        template: '<div><a ui-sref="n.m">State m</a><ui-view></ui-view></div>'
      })
      .state('n.m.s', {
        url: '/s',
        template: '<div><a ui-sref="n.m.s">State s</a><ui-view></ui-view></div>'
      })
      .state('n.m.s.p', {
        url: '/p',
        template: '<div><a ui-sref="n.m.s.p">State p</a><ui-view></ui-view></div>'
      })
      .state('n.m.s.p.x', {
        url: '/x',
        template: '<div><a ui-sref="n.m.s.p.x">State x</a><ui-view></ui-view></div>'
      })
      .state('n.m.s.p.x.w', {
        url: '/w',
        template: '<div><a ui-sref="n.m.s.p.x.w">State w</a><ui-view></ui-view></div>'
      })
      .state('n.m.s.p.x.w.q', {
        url: '/q',
        template: '<div><a ui-sref="n.m.s.p.x.w.q">State q</a><ui-view></ui-view></div>'
      })
      .state('n.m.s.l', {
        url: '/l',
        template: '<div><a ui-sref="n.m.s.l">State l</a><ui-view></ui-view></div>'
      })
      .state('n.m.s.l.i', {
        url: '/i',
        template: '<div><a ui-sref="n.m.s.l.i">State i</a><ui-view></ui-view></div>'
      })
      .state('n.m.s.q', {
        url: '/q',
        template: '<div><a ui-sref="n.m.s.q">State q</a><ui-view></ui-view></div>'
      })
      .state('n.m.s.q.h', {
        url: '/h',
        template: '<div><a ui-sref="n.m.s.q.h">State h</a><ui-view></ui-view></div>'
      })
      .state('n.m.y', {
        url: '/y',
        template: '<div><a ui-sref="n.m.y">State y</a><ui-view></ui-view></div>'
      })
      .state('n.m.r', {
        url: '/r',
        template: '<div><a ui-sref="n.m.r">State r</a><ui-view></ui-view></div>'
      })
      .state('v', {
        url: '/v',
        template: '<div><a ui-sref="v">State v</a><ui-view></ui-view></div>'
      })
      .state('v.b', {
        url: '/b',
        template: '<div><a ui-sref="v.b">State b</a><ui-view></ui-view></div>'
      })
      .state('v.b.t', {
        url: '/t',
        template: '<div><a ui-sref="v.b.t">State t</a><ui-view></ui-view></div>'
      })
      .state('v.b.t.w', {
        url: '/w',
        template: '<div><a ui-sref="v.b.t.w">State w</a><ui-view></ui-view></div>'
      })
      .state('v.b.t.w.g', {
        url: '/g',
        template: '<div><a ui-sref="v.b.t.w.g">State g</a><ui-view></ui-view></div>'
      })
      .state('v.b.t.w.g.h', {
        url: '/h',
        template: '<div><a ui-sref="v.b.t.w.g.h">State h</a><ui-view></ui-view></div>'
      })
      .state('v.b.t.w.o', {
        url: '/o',
        template: '<div><a ui-sref="v.b.t.w.o">State o</a><ui-view></ui-view></div>'
      })
      .state('v.b.t.f', {
        url: '/f',
        template: '<div><a ui-sref="v.b.t.f">State f</a><ui-view></ui-view></div>'
      })
      .state('v.b.t.f.w', {
        url: '/w',
        template: '<div><a ui-sref="v.b.t.f.w">State w</a><ui-view></ui-view></div>'
      })
      .state('v.b.t.q', {
        url: '/q',
        template: '<div><a ui-sref="v.b.t.q">State q</a><ui-view></ui-view></div>'
      })
      .state('v.b.t.q.v', {
        url: '/v',
        template: '<div><a ui-sref="v.b.t.q.v">State v</a><ui-view></ui-view></div>'
      })
      .state('v.b.t.q.v.j', {
        url: '/j',
        template: '<div><a ui-sref="v.b.t.q.v.j">State j</a><ui-view></ui-view></div>'
      })
      .state('v.b.t.q.v.j.j', {
        url: '/j',
        template: '<div><a ui-sref="v.b.t.q.v.j.j">State j</a><ui-view></ui-view></div>'
      })
      .state('v.b.t.q.f', {
        url: '/f',
        template: '<div><a ui-sref="v.b.t.q.f">State f</a><ui-view></ui-view></div>'
      })
      .state('v.b.t.q.f.m', {
        url: '/m',
        template: '<div><a ui-sref="v.b.t.q.f.m">State m</a><ui-view></ui-view></div>'
      })
      .state('v.b.t.q.f.y', {
        url: '/y',
        template: '<div><a ui-sref="v.b.t.q.f.y">State y</a><ui-view></ui-view></div>'
      })
      .state('v.b.t.q.f.p', {
        url: '/p',
        template: '<div><a ui-sref="v.b.t.q.f.p">State p</a><ui-view></ui-view></div>'
      })
      .state('v.b.t.q.f.omega', {
        url: '/omega',
        template: '<div><a ui-sref="v.b.t.q.f.omega">State omega</a><ui-view></ui-view></div>'
      })
      .state('v.b.t.q.e', {
        url: '/e',
        template: '<div><a ui-sref="v.b.t.q.e">State e</a><ui-view></ui-view></div>'
      })
      .state('v.b.r', {
        url: '/r',
        template: '<div><a ui-sref="v.b.r">State r</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x', {
        url: '/x',
        template: '<div><a ui-sref="v.b.r.x">State x</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.t', {
        url: '/t',
        template: '<div><a ui-sref="v.b.r.x.t">State t</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.t.p', {
        url: '/p',
        template: '<div><a ui-sref="v.b.r.x.t.p">State p</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.t.p.b', {
        url: '/b',
        template: '<div><a ui-sref="v.b.r.x.t.p.b">State b</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.t.f', {
        url: '/f',
        template: '<div><a ui-sref="v.b.r.x.t.f">State f</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.t.t', {
        url: '/t',
        template: '<div><a ui-sref="v.b.r.x.t.t">State t</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.t.t.w', {
        url: '/w',
        template: '<div><a ui-sref="v.b.r.x.t.t.w">State w</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.t.t.w.y', {
        url: '/y',
        template: '<div><a ui-sref="v.b.r.x.t.t.w.y">State y</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.t.h', {
        url: '/h',
        template: '<div><a ui-sref="v.b.r.x.t.h">State h</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.t.h.p', {
        url: '/p',
        template: '<div><a ui-sref="v.b.r.x.t.h.p">State p</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.v', {
        url: '/v',
        template: '<div><a ui-sref="v.b.r.x.v">State v</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.v.d', {
        url: '/d',
        template: '<div><a ui-sref="v.b.r.x.v.d">State d</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.v.d.t', {
        url: '/t',
        template: '<div><a ui-sref="v.b.r.x.v.d.t">State t</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.v.d.z', {
        url: '/z',
        template: '<div><a ui-sref="v.b.r.x.v.d.z">State z</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.v.d.z.b', {
        url: '/b',
        template: '<div><a ui-sref="v.b.r.x.v.d.z.b">State b</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.v.d.z.b.x', {
        url: '/x',
        template: '<div><a ui-sref="v.b.r.x.v.d.z.b.x">State x</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.v.d.z.r', {
        url: '/r',
        template: '<div><a ui-sref="v.b.r.x.v.d.z.r">State r</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.v.d.z.r.r', {
        url: '/r',
        template: '<div><a ui-sref="v.b.r.x.v.d.z.r.r">State r</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.v.d.z.s', {
        url: '/s',
        template: '<div><a ui-sref="v.b.r.x.v.d.z.s">State s</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.v.d.s', {
        url: '/s',
        template: '<div><a ui-sref="v.b.r.x.v.d.s">State s</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.v.d.s.alpha', {
        url: '/alpha',
        template: '<div><a ui-sref="v.b.r.x.v.d.s.alpha">State alpha</a><ui-view></ui-view></div>'
      })
      .state('v.b.r.x.c', {
        url: '/c',
        template: '<div><a ui-sref="v.b.r.x.c">State c</a><ui-view></ui-view></div>'
      })
      .state('v.b.x', {
        url: '/x',
        template: '<div><a ui-sref="v.b.x">State x</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d', {
        url: '/d',
        template: '<div><a ui-sref="v.b.x.d">State d</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d.h', {
        url: '/h',
        template: '<div><a ui-sref="v.b.x.d.h">State h</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d.v', {
        url: '/v',
        template: '<div><a ui-sref="v.b.x.d.v">State v</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d.v.o', {
        url: '/o',
        template: '<div><a ui-sref="v.b.x.d.v.o">State o</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d.v.o.q', {
        url: '/q',
        template: '<div><a ui-sref="v.b.x.d.v.o.q">State q</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d.v.o.q.d', {
        url: '/d',
        template: '<div><a ui-sref="v.b.x.d.v.o.q.d">State d</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d.v.o.q.d.i', {
        url: '/i',
        template: '<div><a ui-sref="v.b.x.d.v.o.q.d.i">State i</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d.v.o.q.d.k', {
        url: '/k',
        template: '<div><a ui-sref="v.b.x.d.v.o.q.d.k">State k</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d.v.o.q.d.a', {
        url: '/a',
        template: '<div><a ui-sref="v.b.x.d.v.o.q.d.a">State a</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d.v.o.q.b', {
        url: '/b',
        template: '<div><a ui-sref="v.b.x.d.v.o.q.b">State b</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d.v.o.g', {
        url: '/g',
        template: '<div><a ui-sref="v.b.x.d.v.o.g">State g</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d.v.o.g.p', {
        url: '/p',
        template: '<div><a ui-sref="v.b.x.d.v.o.g.p">State p</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d.v.h', {
        url: '/h',
        template: '<div><a ui-sref="v.b.x.d.v.h">State h</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d.v.h.n', {
        url: '/n',
        template: '<div><a ui-sref="v.b.x.d.v.h.n">State n</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d.v.q', {
        url: '/q',
        template: '<div><a ui-sref="v.b.x.d.v.q">State q</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d.s', {
        url: '/s',
        template: '<div><a ui-sref="v.b.x.d.s">State s</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d.s.g', {
        url: '/g',
        template: '<div><a ui-sref="v.b.x.d.s.g">State g</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.d.i', {
        url: '/i',
        template: '<div><a ui-sref="v.b.x.d.i">State i</a><ui-view></ui-view></div>'
      })
      .state('v.b.x.g', {
        url: '/g',
        template: '<div><a ui-sref="v.b.x.g">State g</a><ui-view></ui-view></div>'
      })
      .state('v.b.i', {
        url: '/i',
        template: '<div><a ui-sref="v.b.i">State i</a><ui-view></ui-view></div>'
      })
      .state('v.t', {
        url: '/t',
        template: '<div><a ui-sref="v.t">State t</a><ui-view></ui-view></div>'
      })
      .state('v.t.l', {
        url: '/l',
        template: '<div><a ui-sref="v.t.l">State l</a><ui-view></ui-view></div>'
      })
      .state('v.t.l.i', {
        url: '/i',
        template: '<div><a ui-sref="v.t.l.i">State i</a><ui-view></ui-view></div>'
      })
      .state('v.t.l.h', {
        url: '/h',
        template: '<div><a ui-sref="v.t.l.h">State h</a><ui-view></ui-view></div>'
      })
      .state('v.t.l.m', {
        url: '/m',
        template: '<div><a ui-sref="v.t.l.m">State m</a><ui-view></ui-view></div>'
      })
      .state('v.t.l.n', {
        url: '/n',
        template: '<div><a ui-sref="v.t.l.n">State n</a><ui-view></ui-view></div>'
      })
      .state('v.t.k', {
        url: '/k',
        template: '<div><a ui-sref="v.t.k">State k</a><ui-view></ui-view></div>'
      })
      .state('v.t.k.w', {
        url: '/w',
        template: '<div><a ui-sref="v.t.k.w">State w</a><ui-view></ui-view></div>'
      })
      .state('v.t.k.w.j', {
        url: '/j',
        template: '<div><a ui-sref="v.t.k.w.j">State j</a><ui-view></ui-view></div>'
      })
      .state('v.t.k.w.y', {
        url: '/y',
        template: '<div><a ui-sref="v.t.k.w.y">State y</a><ui-view></ui-view></div>'
      })
      .state('v.t.j', {
        url: '/j',
        template: '<div><a ui-sref="v.t.j">State j</a><ui-view></ui-view></div>'
      })
      .state('v.t.j.e', {
        url: '/e',
        template: '<div><a ui-sref="v.t.j.e">State e</a><ui-view></ui-view></div>'
      })
      .state('v.t.j.e.v', {
        url: '/v',
        template: '<div><a ui-sref="v.t.j.e.v">State v</a><ui-view></ui-view></div>'
      })
      .state('v.t.j.y', {
        url: '/y',
        template: '<div><a ui-sref="v.t.j.y">State y</a><ui-view></ui-view></div>'
      })
      .state('v.t.j.y.m', {
        url: '/m',
        template: '<div><a ui-sref="v.t.j.y.m">State m</a><ui-view></ui-view></div>'
      })
      .state('v.t.j.y.m.m', {
        url: '/m',
        template: '<div><a ui-sref="v.t.j.y.m.m">State m</a><ui-view></ui-view></div>'
      })
      .state('v.t.j.y.w', {
        url: '/w',
        template: '<div><a ui-sref="v.t.j.y.w">State w</a><ui-view></ui-view></div>'
      })
      .state('v.t.j.y.w.h', {
        url: '/h',
        template: '<div><a ui-sref="v.t.j.y.w.h">State h</a><ui-view></ui-view></div>'
      })
      .state('v.i', {
        url: '/i',
        template: '<div><a ui-sref="v.i">State i</a><ui-view></ui-view></div>'
      })
      .state('v.k', {
        url: '/k',
        template: '<div><a ui-sref="v.k">State k</a><ui-view></ui-view></div>'
      })
      .state('v.e', {
        url: '/e',
        template: '<div><a ui-sref="v.e">State e</a><ui-view></ui-view></div>'
      })
      .state('u', {
        url: '/u',
        template: '<div><a ui-sref="u">State u</a><ui-view></ui-view></div>'
      })
      .state('u.v', {
        url: '/v',
        template: '<div><a ui-sref="u.v">State v</a><ui-view></ui-view></div>'
      })
      .state('u.v.j', {
        url: '/j',
        template: '<div><a ui-sref="u.v.j">State j</a><ui-view></ui-view></div>'
      });
  });
