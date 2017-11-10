//Google Tag Manager
initTagManager();

function initTagManager() {
    var gtmcode = "(function(w,d,s,l,i){" +
                    "w[l]=w[l]||[];" +
                    "w[l].push({" +
                    "'gtm.start': new Date().getTime()," +
                        "event:'gtm.js'" +
                    "});" +
                    "var f=d.getElementsByTagName(s)[0]," +
                        "j=d.createElement(s)," +
                        "dl=l!='dataLayer'?'&l='+l:'';" +
                    "j.async=true;" +
                    "j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;" +
                    "f.parentNode.insertBefore(j,f);" +
                    "})(window,document,'script','dataLayer','GTM-MK6NR2X');";
    var noscript = $("<noscript></noscript>");
    var iframe = $("<iframe></iframe>").attr("src", "//www.googletagmanager.com/ns.html?id=GTM-MK6NR2X")
                                       .attr("height", "0")
                                       .css("display", "none")
                                       .css("visibility", "hidden");

    var script = $("<script></script>").text(gtmcode);

    $("head").prepend(script.append(gtmcode));
    $("body").prepend(noscript.append(iframe));
}