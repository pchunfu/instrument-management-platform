/** 打印模块 date:2020-05-04   License By http://easyweb.vip */
layui.define(["jquery"], function(a) {
  var d = layui.jquery;
  var f = "hide-print";
  var c = "printing";
  var e = '<object id="WebBrowser" classid="clsid:8856F961-340A-11D0-A96B-00C04FD705A2" width="0" height="0"></object>';
  var b = {
    isIE: function() {
      return (!!window.ActiveXObject || "ActiveXObject" in window)
    },
    isEdge: function() {
      return navigator.userAgent.indexOf("Edge") !== -1
    },
    isFirefox: function() {
      return navigator.userAgent.indexOf("Firefox") !== -1
    }
  };
  b.print = function(h) {
    window.focus();
    h || (h = {});
    var j = h.hide;
    var g = h.horizontal;
    var l = h.iePreview;
    var i = h.blank;
    var o = h.close;
    (l === undefined) && (l = true);
    (i === undefined && window !== top && l && b.isIE()) && (i = true);
    (o === undefined && i && !b.isIE()) && (o = true);
    d("#page-print-set").remove();
    if (g !== undefined) {
      var p = '<style type="text/css" media="print" id="page-print-set">';
      p += ("     @page { size: " + (g ? "landscape" : "portrait") + "; }");
      p += "   </style>";
      d("body").append(p)
    }
    b.hideElem(j);
    var k;
    if (i) {
      k = window.open("", "_blank");
      k.focus();
      var n = k.document;
      n.open();
      var m = "<!DOCTYPE html>" + document.getElementsByTagName("html")[0].innerHTML;
      if (l && b.isIE()) {
        m += e;
        m += ("<script>window.onload = function(){ WebBrowser.ExecWB(7, 1); " + (o ? "window.close();" : "") + " }<\/script>")
      } else {
        m += ("<script>window.onload = function(){ window.print(); " + (o ? "window.close();" : "") + " }<\/script>")
      }
      n.write(m);
      n.close()
    } else {
      k = window;
      if (l && b.isIE()) {
        (d("#WebBrowser").length === 0) && (d("body").append(e));
        WebBrowser.ExecWB(7, 1)
      } else {
        k.print()
      }
    }
    b.showElem(j);
    return k
  };
  b.printHtml = function(i) {
    i || (i = {});
    var k = i.html;
    var j = i.blank;
    var p = i.close;
    var g = i.print;
    var h = i.horizontal;
    var m = i.iePreview;
    (g === undefined) && (g = true);
    (m === undefined) && (m = true);
    (j === undefined && b.isIE()) && (j = true);
    (p === undefined && j && !b.isIE()) && (p = true);
    var l, o;
    if (j) {
      l = window.open("", "_blank");
      o = l.document
    } else {
      var n = document.getElementById("printFrame");
      if (!n) {
        d("body").append('<iframe id="printFrame" style="display: none;"></iframe>');
        n = document.getElementById("printFrame")
      }
      l = n.contentWindow;
      o = n.contentDocument || n.contentWindow.document
    }
    l.focus();
    if (k) {
      k += ("<style>" + b.getCommonCss(true) + "</style>");
      if (h !== undefined) {
        k += '<style type="text/css" media="print">';
        k += ("  @page { size: " + (h ? "landscape" : "portrait") + "; }");
        k += "</style>"
      }
      if (m && b.isIE()) {
        k += e;
        if (g) {
          k += ("<script>window.onload = function(){ WebBrowser.ExecWB(7, 1); " + (p ? "window.close();" : "") + " }<\/script>")
        }
      } else {
        if (g) {
          k += ("<script>window.onload = function(){ window.print(); " + (p ? "window.close();" : "") + " }<\/script>")
        }
      }
      o.open();
      o.write(k);
      o.close()
    }
    return l
  };
  b.printPage = function(l) {
    l || (l = {});
    var g = l.htmls;
    var x = l.horizontal;
    var w = l.style;
    var p = l.padding;
    var n = l.blank;
    var q = l.close;
    var k = l.print;
    var s = l.width;
    var r = l.height;
    var h = l.iePreview;
    var t = l.debug;
    (k === undefined) && (k = true);
    (h === undefined) && (h = true);
    (n === undefined && b.isIE()) && (n = true);
    (q === undefined && n && !b.isIE()) && (q = true);
    var j, o;
    if (n) {
      j = window.open("", "_blank");
      o = j.document
    } else {
      var y = document.getElementById("printFrame");
      if (!y) {
        d("body").append('<iframe id="printFrame" style="display: none;"></iframe>');
        y = document.getElementById("printFrame")
      }
      j = y.contentWindow;
      o = y.contentDocument || y.contentWindow.document
    }
    j.focus();
    var m = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>打印窗口</title>';
    w && (m += w);
    m += b.getPageCss(p, s, r);
    if (x !== undefined) {
      m += '<style type="text/css" media="print">';
      m += ("  @page { size: " + (x ? "landscape" : "portrait") + "; }");
      m += "</style>"
    }
    m += "</head><body>";
    if (g) {
      var v = t ? " page-debug" : "";
      m += '<div class="print-page' + v + '">';
      for (var u = 0; u < g.length; u++) {
        m += '<div class="print-page-item">';
        m += g[u];
        m += "</div>"
      }
      m += "</div>"
    }
    if (h && b.isIE()) {
      m += e;
      if (k) {
        m += ("<script>window.onload = function(){ WebBrowser.ExecWB(7, 1); " + (q ? "window.close();" : "") + " }<\/script>")
      }
    } else {
      if (k) {
        m += ("<script>window.onload = function(){ window.print(); " + (q ? "window.close();" : "") + " }<\/script>")
      }
    }
    m += "</body></html>";
    o.open();
    o.write(m);
    o.close();
    return j
  };
  b.getPageCss = function(j, h, g) {
    var i = "<style>";
    i += "body {";
    i += "    margin: 0 !important;";
    i += "} ";
    i += ".print-page .print-page-item {";
    i += "    page-break-after: always !important;";
    i += "    box-sizing: border-box !important;";
    i += "    border: none !important;";
    j && (i += ("padding: " + j + ";"));
    h && (i += ("  width: " + h + ";"));
    g && (i += (" height: " + g + ";"));
    i += "} ";
    i += ".print-page.page-debug .print-page-item {";
    i += "    border: 1px solid red !important;";
    i += "} ";
    i += b.getCommonCss(true);
    i += "</style>";
    return i
  };
  b.hideElem = function(g) {
    d("." + f).addClass(c);
    if (!g) {
      return
    }
    if (g instanceof Array) {
      for (var h = 0; h < g.length; h++) {
        d(g[h]).addClass(f + " " + c)
      }
    } else {
      d(g).addClass(c)
    }
  };
  b.showElem = function(g) {
    d("." + f).removeClass(c);
    if (!g) {
      return
    }
    if (g instanceof Array) {
      for (var h = 0; h < g.length; h++) {
        d(g[h]).removeClass(f + " " + c)
      }
    } else {
      d(g).removeClass(c)
    }
  };
  b.getCommonCss = function(h) {
    var g = ("." + f + "." + c + " {");
    g += "        visibility: hidden !important;";
    g += "   }";
    g += "   .print-table {";
    g += "        border: none;";
    g += "        border-collapse: collapse;";
    g += "        width: 100%;";
    g += "   }";
    g += "   .print-table td, .print-table th {";
    g += "        color: #333;";
    g += "        padding: 9px 15px;";
    g += "        word-break: break-all;";
    g += "        border: 1px solid #333;";
    g += "   }";
    if (h) {
      g += ("." + f + " {");
      g += "     visibility: hidden !important;";
      g += "}"
    }
    return g
  };
  b.makeHtml = function(k) {
    var j = k.title;
    var h = k.style;
    var g = k.body;
    j == undefined && (j = "打印窗口");
    var i = '<!DOCTYPE html><html lang="en">';
    i += '      <head><meta charset="UTF-8">';
    i += ("        <title>" + j + "</title>");
    h && (i += h);
    i += "      </head>";
    i += "      <body>";
    g && (i += g);
    i += "      </body>";
    i += "   </html>";
    return i
  };
  d("head").append("<style>" + b.getCommonCss() + "</style>");
  a("printer", b)
});
