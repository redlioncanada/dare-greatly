/* SiteCatalyst code version: H.22.1. Copyright 1996-2011 Adobe, Inc. All Rights Reserved More info available at http://www.adobe.com */

// Looks for the iPad user agent and changes the report suite id
var isiPad = navigator.userAgent.match(/iPad/i) != null;
if (isiPad) { s_account = "gmcadillacipadprod"; }

// Sets the s_account variable into the s object
var s = s_gi(s_account);
// If the iPad user agent isn't present, dynamically sets the report suite id based upon development or production URL
if (!isiPad) {
    s.dynamicAccountSelection = true;
    s.dynamicAccountList = "genmotcorgmwpcanadadev=gm.com";
}
var Omniture_s_code_version = '1.8.cadillac.02052015';
var Omniture_s = s_gi(s_account);
/************************** IPAD CONFIGURATION SECTION **************************/
var isiPad = navigator.userAgent.match(/iPad/i) != null;
function guidGenerator() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) { var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 0x3 | 0x8; return v.toString(16); });
}
if (isiPad) {
    var visitor_id = $.cookie('visitor_id') + '';
    if ((visitor_id == '') || (visitor_id == "null")) {
        // no guid found, set it.
        visitor_id = guidGenerator();
        $.cookie("visitor_id", visitor_id, { expires: (5 * 365) });
        // window.alert(' generated visitor_id='+visitor_id);
    } else {
        // window.alert('found visitor_id='+visitor_id);
    }
    // set the visitor ID
    if (typeof (Omniture_s) != "undefined") { Omniture_s.visitorID = visitor_id; }
} else {
    //window.alert('not an iPad');
}
/************************** IPAD CONFIGURATION SECTION **************************/
/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
Omniture_s.charSet = "ISO-8859-1";
Omniture_s.currencyCode = "USD";
Omniture_s.trackDownloadLinks = true;
Omniture_s.trackExternalLinks = true;
Omniture_s.trackInlineStats = true;
Omniture_s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
Omniture_s.linkInternalFilters = "javascript:,cadillac.com";
Omniture_s.linkInternalFilters += "," + window.location.hostname;
Omniture_s.linkLeaveQueryString = true;
Omniture_s.linkTrackVars = "events,eVar24,eVar56,eVar57,eVar58,prop43";
Omniture_s.linkTrackEvents = "event21,event24,event70,event71,event72,event73,event74,event75,event76";
Omniture_s.usePlugins = true;
function s_doPlugins(s) {
    if (!Omniture_s.eVar22) { Omniture_s.eVar22 = Omniture_s.getQueryParam('cmp'); }
    Omniture_s.eVar25 = Omniture_s.getQueryParam('evar25');
    Omniture_s.eVar36 = Omniture_s.getQueryParam('evar36');
    Omniture_s.eVar40 = Omniture_s.getQueryParam('evar40');
    Omniture_s.eVar29 = Omniture_s.getQueryParam('seo');
    if (Omniture_s.eVar22) { Omniture_s.prop21 = Omniture_s.eVar22 + ":" + Omniture_s.pageName; }
    else { Omniture_s.prop21 = Omniture_s.pageName; }
    Omniture_s.eVar1 = Omniture_s.getQueryParam('intcid');
    var Omniture_date = new Date();
    var Omniture_year = Omniture_date.getFullYear();
    Omniture_s.eVar9 = Omniture_s.getTimeParting('h', '-5', Omniture_year); // Set hour
    Omniture_s.eVar10 = Omniture_s.getTimeParting('d', '-5', Omniture_year); // Set day
    Omniture_s.eVar11 = Omniture_s.getTimeParting('w', '-5', Omniture_year); // Set Weekend / Weekday
    Omniture_s.eVar12 = Omniture_s.getNewRepeat(90, 's_nr1');
    Omniture_s.eVar55 = Omniture_s.getNewRepeat(60, 's_nr2');
    Omniture_s.prop22 = Omniture_s_code_version;
    Omniture_s.manageVars("lowercaseVars", "eVar22,eVar29,eVar10,eVar11,eVar12,eVar25,eVar36,eVar40,eVar9,eVar56", 2);
    Omniture_s.eVar37 = Omniture_s.pageName;
    var percent = Omniture_s.getPercentPageViewed(Omniture_s.pageName);
    try {
        if (typeof (percent[2]) != "undefined") {
            Omniture_s.prop38 = percent[0];
            Omniture_s.prop39 = percent[1] + ":" + percent[2];
            Omniture_s.prop40 = percent[3];
        }
    } catch (err) { }
}
Omniture_s.loadModule("Media");
/*Configure Media Module Functions */
Omniture_s.Media.autoTrack = false;
Omniture_s.Media.trackMilestones = "25,50,75";
// Define the video player name or set it dynamically vide a JavaScript variable
Omniture_s.Media.playerName = "JW Player";
Omniture_s.Media.segmentByMilestones = true;
Omniture_s.Media.trackUsingContextData = true;
Omniture_s.Media.contextDataMapping = {
    "a.media.name": "eVar56,prop43",
    "a.media.segment": "eVar57",
    "a.contentType": "eVar58",
    "a.media.timePlayed": "event70",
    "a.media.view": "event71",
    "a.media.segmentView": "event73",
    "a.media.complete": "event72",
    "a.media.milestones": {
        25: "event74",
        50: "event75",
        75: "event76"
    }
};
Omniture_s.doPlugins = s_doPlugins;
/************************** PLUGINS SECTION *************************/
//Plugin: getQueryParam 2.3
Omniture_s.getQueryParam = new Function("p", "d", "u", ""
+ "var s=this,v='',i,t;d=d?d:'';u=u?u:(Omniture_s.pageURL?Omniture_s.pageURL:Omniture_s.wd.locati"
+ "on);if(u=='f')u=Omniture_s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+ ".length:i;t=Omniture_s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+ "1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+ "=p.length?i:i+1)}return v");
Omniture_s.p_gpv = new Function("k", "u", ""
+ "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+ "=Omniture_s.pt(q,'&','p_gvf',k)}return v");
Omniture_s.p_gvf = new Function("t", "k", ""
+ "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+ "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return Omniture_s."
+ "epa(v)}return ''");
//Plugin: getNewRepeat 1.2 - Return whether user is new or repeat
Omniture_s.getNewRepeat = new Function("d", "cn", ""
+ "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+ "'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+ "=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+ "-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+ "ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
// Plugin: getTimeParting 2.0
Omniture_s.getTimeParting = new Function("t", "z", "y", "l", ""
+ "var s=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=S"
+ "tring(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U"
+ ".substring(2,4);X='090801|101407|111306|121104|131003|140902|150801"
+ "|161306|171205|181104|191003';X=Omniture_s.split(X,'|');for(W=0;W<=10;W++){Z"
+ "=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substrin"
+ "g(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D"
+ "=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Dat"
+ "a Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new"
+ " Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.g"
+ "etTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Mo"
+ "nday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.get"
+ "Hours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='"
+ "00';if(C>30){X='30'}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6"
+ "||D==0){A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Availab"
+ "le'}else{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){r"
+ "eturn A}}else{return Z+', '+W}}}");
//Utility manageVars v0.2 - clear variable values (requires split 1.5)
Omniture_s.manageVars = new Function("c", "l", "f", ""
+ "var s=this,vl,la,vla;l=l?l:'';f=f?f:1 ;if(!s[c])return false;vl='pa"
+ "geName,purchaseID,channel,server,pageType,campaign,state,zip,events"
+ ",products,transactionID';for(var n=1;n<51;n++){vl+=',prop'+n+',eVar"
+ "'+n+',hier'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2){la=s.spl"
+ "it(l,',');vla=s.split(vl,',');vl='';for(x in la){for(y in vla){if(l"
+ "a[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+vla[y]:'';}"
+ "}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.pt(vl,',',c,0"
+ ");return true;}else{return false;}");
//Omniture_s.clearVars=new Function("t","var s=this;s[t]='';");
Omniture_s.lowercaseVars = new Function("t", ""
+ "var s=this;if(s[t]){s[t]=s[t].toString();s[t]=s[t].toLowerCase();}");
// Percent Page View Plug-in
Omniture_s.handlePPVevents = new Function("", ""
+ "var s=s_c_il[" + Omniture_s._in + "];if(!s.getPPVid)return;var dh=Math.max(Math."
+ "max(s.d.body.scrollHeight,s.d.documentElement.scrollHeight),Math.ma"
+ "x(s.d.body.offsetHeight,s.d.documentElement.offsetHeight),Math.max("
+ "s.d.body.clientHeight,s.d.documentElement.clientHeight)),vph=s.wd.i"
+ "nnerHeight||(s.d.documentElement.clientHeight||s.d.body.clientHeigh"
+ "t),st=s.wd.pageYOffset||(s.wd.document.documentElement.scrollTop||s"
+ ".wd.document.body.scrollTop),vh=st+vph,pv=Math.min(Math.round(vh/dh"
+ "*100),100),c=s.c_r('s_ppv'),a=(c.indexOf(',')>-1)?c.split(',',4):[]"
+ ",id=(a.length>0)?(a[0]):escape(s.getPPVid),cv=(a.length>1)?parseInt"
+ "(a[1]):(0),p0=(a.length>2)?parseInt(a[2]):(pv),cy=(a.length>3)?pars"
+ "eInt(a[3]):(0),cn=(pv>0)?(id+','+((pv>cv)?pv:cv)+','+p0+','+((vh>cy"
+ ")?vh:cy)):'';s.c_w('s_ppv',cn);");
Omniture_s.getPercentPageViewed = new Function("pid", ""
+ "pid=pid?pid:'-';var s=this,ist=!s.getPPVid?true:false;if(typeof(s.l"
+ "inkType)!='undefined'&&s.linkType!='e')return'';var v=s.c_r('s_ppv'"
+ "),a=(v.indexOf(',')>-1)?v.split(',',4):[];if(a.length<4){for(var i="
+ "3;i>0;i--){a[i]=(i<a.length)?(a[i-1]):('');}a[0]='';}a[0]=unescape("
+ "a[0]);s.getPPVpid=pid;s.c_w('s_ppv',escape(pid));if(ist){s.getPPVid"
+ "=(pid)?(pid):(s.pageName?s.pageName:document.location.href);s.c_w('"
+ "s_ppv',escape(s.getPPVid));if(s.wd.addEventListener){s.wd.addEventL"
+ "istener('load',s.handlePPVevents,false);s.wd.addEventListener('scro"
+ "ll',s.handlePPVevents,false);s.wd.addEventListener('resize',s.handl"
+ "ePPVevents,false);}else if(s.wd.attachEvent){s.wd.attachEvent('onlo"
+ "ad',s.handlePPVevents);s.wd.attachEvent('onscroll',s.handlePPVevent"
+ "s);s.wd.attachEvent('onresize',s.handlePPVevents);}}return(pid!='-'"
+ ")?(a):(a[1]);");
//Utility Function: split v1.5 (JS 1.0 compatible)
Omniture_s.split = new Function("l", "d", ""
+ "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+ "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/* WARNING: Changing any of the below variables will cause drastic changes to how your visitor data is collected. Changes should only be made when instructed to do so by your account manager.*/
Omniture_s.visitorNamespace = "generalmotorscorporation";
Omniture_s.trackingServer = "generalmotorscorporation.sc.omtrdc.net";
/* WARNING: Changing any of the below variables will cause drastic changes to how your visitor data is collected. Changes should only be made when instructed to do so by your account manager.*/
Omniture_s.loadModule("Survey")
var s_sv_dynamic_root = "survey.112.2o7.net/survey/dynamic"
var s_sv_gather_root = "survey.112.2o7.net/survey/gather"
var s_sv_suppressionSettings = {
    "suppressIfCookieExists": ["survey_lock"],
    "suppressOnCallback": null,
    suppressManualLaunchesIfBlocked: false,
    "suppressTriggeredSurveys": false,
    cookies: [{
        "name": "survey_lock",
        "value": "",
        "domain": "cadillac.com",
        expiration: { "onShow": 2592000 }
    }]
};
/* Module: Survey */
Omniture_s.m_Survey_c = "var m=s.m_i(\"Survey\");m.launch=function(i,e,c,o,f){this._boot();var m=this,g=window.s_sv_globals||{},l,j;if(g.unloaded||m._blocked())return 0;i=i&&i.constructor&&i.constructor==Array?"
+ "i:[i];l=g.manualTriggers;for(j=0;j<i.length;++j)l[l.length]={l:m._suites,i:i[j],e:e||0,c:c||0,o:o||0,f:f||0};m._execute();return 1;};m.version = 10001;m._t=function(){this._boot();var m=this,s=m.s,"
+ "g=window.s_sv_globals||{},l,impr,i,k,impr={};if(m._blocked())return;for(i=0;i<s.va_t.length;i++){k=s.va_t[i];if(s[k]) impr[k]=s[k];}impr[\"l\"]=m._suites;impr[\"n\"]=impr[\"pageName\"]||\"\";impr["
+ "\"u\"]=impr[\"pageURL\"]||\"\";impr[\"c\"]=impr[\"campaign\"]||\"\";impr[\"r\"]=impr[\"referrer\"]||\"\";l=g.pageImpressions;if(l.length > 4) l[l.length - 4]=null;l[l.length]=impr;m._execute();};m."
+ "_rr=function(){var g=window.s_sv_globals||{},f=g.onScQueueEmpty||0;if(f)f();};m._blocked=function(){var m=this,g=window.s_sv_globals||{};return !m._booted||g.stop||!g.pending&&!g.triggerRequested;}"
+ ";m._execute=function(){if(s_sv_globals.execute)setTimeout(\"s_sv_globals.execute();\",0);};m._boot=function(){var m=this,s=m.s,w=window,g,c,d=s.dc,e=s.visitorNamespace,n=navigator.appName.toLowerCa"
+ "se(),a=navigator.userAgent,v=navigator.appVersion,h,i,j,k,l,b;if(w.s_sv_globals)return;if(!((b=v.match(/AppleWebKit\\/([0-9]+)/))?521<b[1]:n==\"netscape\"?a.match(/gecko\\//i):(b=a.match(/opera[ \\"
+ "/]?([0-9]+).[0-9]+/i))?7<b[1]:n==\"microsoft internet explorer\"&&!v.match(/macintosh/i)&&(b=v.match(/msie ([0-9]+).([0-9]+)/i))&&(5<b[1]||b[1]==5&&4<b[2])))return;g=w.s_sv_globals={};g.module=m;g."
+ "pending=0;g.incomingLists=[];g.pageImpressions=[];g.manualTriggers=[];e=\"survey\";c=g.config={};m._param(c,\"dynamic_root\",(e?e+\".\":\"\")+d+\".2o7.net/survey/dynamic\");m._param(c,\"gather_root"
+ "\",(e?e+\".\":\"\")+d+\".2o7.net/survey/gather\");g.url=location.protocol+\"//\"+c.dynamic_root;g.gatherUrl=location.protocol+\"//\"+c.gather_root;g.dataCenter=d;g.onListLoaded=new Function(\"r\","
+ "\"b\",\"d\",\"i\",\"l\",\"s_sv_globals.module._loaded(r,b,d,i,l);\");m._suites=(m.suites||s.un).toLowerCase().split(\",\");l=m._suites;b={};for(j=0;j<l.length;++j){i=l[j];if(i&&!b[i]){h=i.length;fo"
+ "r(k=0;k<i.length;++k)h=(h&0x03ffffff)<<5^h>>26^i.charCodeAt(k);b[i]={url:g.url+\"/suites/\"+(h%251+100)+\"/\"+encodeURIComponent(i.replace(/\\|/,\"||\").replace(/\\//,\"|-\"))};++g.pending;}}g.suit"
+ "es=b;setTimeout(\"s_sv_globals.module._load();\",0);m._booted=1;};m._param=function(c,n,v){var p=\"s_sv_\",w=window,u=\"undefined\";if(typeof c[n]==u)c[n]=typeof w[p+n]==u?v:w[p+n];};m._load=functi"
+ "on(){var m=this,g=s_sv_globals,q=g.suites,r,i,n=\"s_sv_sid\",b=m.s.c_r(n);if(!b){b=parseInt((new Date()).getTime()*Math.random());m.s.c_w(n,b);}for(i in q){r=q[i];if(!r.requested){r.requested=1;m._"
+ "script(r.url+\"/list.js?\"+b);}}};m._loaded=function(r,b,d,i,l){var m=this,g=s_sv_globals,n=g.incomingLists;--g.pending;if(!g.commonRevision){g.bulkRevision=b;g.commonRevision=r;g.commonUrl=g.url+"
+ "\"/common/\"+b;}else if(g.commonRevision!=r)return;if(!l.length)return;n[n.length]={r:i,l:l};if(g.execute)g.execute();else if(!g.triggerRequested){g.triggerRequested=1;m._script(g.commonUrl+\"/trig"
+ "ger.js\");}};m._script=function(u){var d=document,e=d.createElement(\"script\");e.type=\"text/javascript\";e.src=u;d.getElementsByTagName(\"head\")[0].appendChild(e);};if(m.onLoad)m.onLoad(s,m)";
s.m_i("Survey");
/* Module: Media */
Omniture_s.m_Media_c = "var m=s.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function(n){var m="
+ "this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;"
+ "if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm"
+ ".getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.co=0;i.cot=0;i.lm=0;i.lom=0;m.l[n]=i}};m._delete=function(n){var"
+ " m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=new Object;"
+ "i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.complete=function(n,o){th"
+ "is.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=vo.linkTrackEvents,pe='m_i',pev3,c=vo.context"
+ "Data,x;c['a.contentType']='video';c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0){c[ns+'length']=i.l;}c[ns+'timePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe='m_s';i.vt=1}if(i.sx){c[ns"
+ "+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView']=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i.cot=1}if(i.lm>0)c[ns+'milestone']=i"
+ ".lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3='video';vo.pe=pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2='';if(v)v+=',events';for(x i"
+ "n d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='string'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentType\"){if(v)v+=','+a;vo[a]="
+ "c[x]}else if(y){if(y=='view'||y=='segmentView'||y=='complete'||y=='timePlayed'){if(e)e+=','+a;if(c[x]){if(y=='timePlayed'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c[x];}else if(c[x])vo.events"
+ "2+=(vo.events2?',':'')+a}}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}}else if(y=='milestones'||y=='offsetMilestones'){x=x.substring(0,"
+ "x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d[x+'s'][c[x]];vo.events2+=(vo.events2?',':'')+d[x+'s'][c[x]]}}}vo.contextData=0}vo.linkTrackVars=v;vo.linkTrackEvents=e};m.bpe=function(vo,i,x,o){v"
+ "ar m=this,pe='m_o',pev3,d='--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.floor(i.t)+d+i.s+d+(i.to>=0?'L'+Math.fl"
+ "oor(i.to):'')+i.e+(x!=0&&x!=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v=m.trackVars,e=m.trackEvent"
+ "s,ti=m.trackSeconds,tp=m.trackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,tc,vo=new Object;n=m.cn(n);i=n&&m.l&&"
+ "m.l[n]?m.l[n]:0;if(i){if(o<0){if(i.lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;i.o=o;if(i.l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name"
+ "=n;w.length=i.l;w.openTime=new Date;w.openTime.setTime(i.s*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if(i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP"
+ "':(x==3?'MONITOR':(x==4?'TRACK':(x==5?'COMPLETE':('CLOSE'))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i"
+ ".lo=o;if((x<=3||x==5)&&i.to>=0){t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i"
+ ".l)*100<c&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if(z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z"
+ ".length;w.mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat('"
+ "'+z[j]):0;if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.length]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if("
+ "c||z[j]=='E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){i.us=1;if(!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if(x>=2&&i.lo<o){i.t+=o-i.lo;i.ts+=o-"
+ "i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||i.x>"
+ "=100){x=0;m.e(n,2,-1,0,0,-1,pd);v=e=\"None\";w.mediaEvent=w.event=\"CLOSE\"}if(x==5||(m.completeByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m.completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}e"
+ "k=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePl"
+ "ayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monitor(m.s,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new Object;vo.contextData=new Object;vo.linkTrackVars=v;vo"
+ ".linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.linkTrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i);else m.bpe(vo,i,x,o);m.s.t(vo);if(i.us){i.sn=sn;i.sx="
+ "sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl,pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthReq"
+ "uired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,x"
+ "c=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s"
+ "_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new Function('o','var e,p=0;try{if(o.versionInfo&&o.curre"
+ "ntMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o'"
+ ",'var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-"
+ "1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}"
+ "';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='text/javascript';x.htmlFor=i;x.event='PlayStateC"
+ "hange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()"
+ "?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+"
+ "';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l"
+ ",\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '"
+ "+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if"
+ "(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'"
+ "+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)"
+ "\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTag"
+ "Name(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,fal"
+ "se);if(m.onLoad)m.onLoad(s,m)";
Omniture_s.m_i("Media");
/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code = '', s_objectID; function s_gi(un, pg, ss) {
    var c = "s.version='H.24.2';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(m,\"\\n\",\"\\\\n\"),\""
    + "\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){retur"
    + "n x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p"
    + "<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toU"
    + "pperCase():'';if(x){x=''+x;if(s.em==3)x=encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h"
    + ".substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=escape(''+x);x=s.rep(x,'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('"
    + "%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x)"
    + "{var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substri"
    + "ng(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a"
    + "=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var"
    + " s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=unde"
    + "fined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';"
    + "s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?pa"
    + "rseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.a"
    + "pe(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd"
    + "(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie"
    + "=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s."
    + "_in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if("
    + "x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return "
    + "r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfs"
    + "oe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=thi"
    + "s,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet"
    + "('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=fun"
    + "ction(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Obje"
    + "ct,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p"
    + "=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl"
    + "(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window"
    + ".s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im."
    + "s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;if"
    + "(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.na"
    + "me&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg"
    + "=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s"
    + "=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCas"
    + "e();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l"
    + "=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.su"
    + "bstring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f"
    + "){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v) {if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>="
    + "0)){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.in"
    + "dexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(s"
    + "v){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';e"
    + "lse if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}}if(qs"
    + "!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType"
    + "){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;"
    + "if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&"
    + "e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL"
    + "'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationS"
    + "erverSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s"
    + ".em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='"
    + "cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';els"
    + "e if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else"
    + " if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q"
    + "='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=="
    + "'deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if("
    + "b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase("
    + "):'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h."
    + "indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if("
    + "s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';r"
    + "eturn ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],"
    + "f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e"
    + "){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&"
    + "&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/"
    + "':'')+h}return h};s.ot=function(o){var t=o.tagName;if((''+o.tagUrn)!='undefined'||((''+o.scopeName)!='undefined'&&(''+o.scopeName).toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase("
    + "):'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0"
    + ";if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",'"
    + "'),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){"
    + "o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+','"
    + ")>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un"
    + ");return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){"
    + "var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)i"
    + "f(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v"
    + "+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o"
    + "=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if("
    + "s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,"
    + "s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n"
    + "){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0"
    + "&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,"
    + "i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.u"
    + "n.substring(0,i)};s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,"
    + "l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;"
    + "m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m"
    + "._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s"
    + "[g+\"_c\"],m,x,f=0;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if"
    + "((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl"
    + ")for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]"
    + "){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o="
    + "g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.su"
    + "bstring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s="
    + "s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s"
    + ".maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o"
    + ".type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o')"
    + ";o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=fun"
    + "ction(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]="
    + "v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<"
    + "s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxD"
    + "elay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()}"
    + ";s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),v"
    + "t=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code=''"
    + ",vb=new Object;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.proto"
    + "type){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','"
    + "var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if"
    + "(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElem"
    + "ent.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}re"
    + "turn hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&"
    + "pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.con"
    + "nectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pa"
    + "geURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo"
    + "&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('."
    + "s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);"
    + "if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');q+='&pe='+s.pe+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex"
    + ";if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}"
    + "if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLi"
    + "ghtProfiles=s.deleteLightProfiles=''}s.sq(qs)}}else s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd."
    + "s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfile"
    + "ID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagConta"
    + "inerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];"
    + "x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&ty"
    + "peof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().in"
    + "dexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var "
    + "apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.iso"
    + "pera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.ap"
    + "v=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i"
    + "=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cooki"
    + "eDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s."
    + "va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,"
    + "channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n"
    + "=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWi"
    + "dth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBuffer"
    + "edRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,lin"
    + "kDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=n"
    + "ew Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){s_gi(\"_\",1,1).co(o)};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
    w = window, l = w.s_c_il, n = navigator, u = n.userAgent, v = n.appVersion, e = v.indexOf('MSIE '), m = u.indexOf('Netscape6/'), a, i, j, x, s; if (un) { un = un.toLowerCase(); if (l) for (j = 0; j < 2; j++) for (i = 0; i < l.length; i++) { s = l[i]; x = s._c; if ((!x || x == 's_c' || (j > 0 && x == 's_l')) && (s.oun == un || (s.fs && s.sa && s.fs(s.oun, un)))) { if (s.sa) s.sa(un); if (x == 's_c') return s } else s = 0 } } w.s_an = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    w.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
    + "ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
    w.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
    w.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)");
    w.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
    + "=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
    + "x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
    w.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
    w.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
    + "a");
    w.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
    + "f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
    + "'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
    c = s_d(c); if (e > 0) { a = parseInt(i = v.substring(e + 5)); if (a > 3) a = parseFloat(i) } else if (m > 0) a = parseFloat(u.substring(m + 10)); else a = parseFloat(v); if (a < 5 || v.indexOf('Opera') >= 0 || u.indexOf('Opera') >= 0) c = s_ft(c); if (!s) { s = new Object; if (!w.s_c_in) { w.s_c_il = new Array; w.s_c_in = 0 } s._il = w.s_c_il; s._in = w.s_c_in; s._il[s._in] = s; w.s_c_in++; } s._c = 's_c'; (new Function("s", "un", "pg", "ss", c))(s, un, pg, ss); return s
}
function s_giqf() { var w = window, q = w.s_giq, i, t, s; if (q) for (i = 0; i < q.length; i++) { t = q[i]; s = s_gi(t.oun); s.sa(t.un); s.setTagContainer(t.tagContainerName) } w.s_giq = 0 } s_giqf()
/************* DO NOT ALTER ANYTHING ABOVE THIS LINE ! **************/
/************* Audience Manager ***********************/
"function" != typeof DIL && (DIL = function (c, d) {
    var a = [], e, f, g, i, m, s, q; "object" != typeof c && (c = {}); m = !!c.disableDestinationPublishingIframe; s = c.mappings; q = c.uuidCookie; (e = d) && a.push(e + ""); f = c.partner; if (!f || "string" != typeof f) return e = "DIL partner is invalid or not specified in initConfig", DIL.errorModule.handleError({ name: "error", message: e, filename: "dil.js" }), Error(e); e = "DIL containerNSID is invalid or not specified in initConfig, setting to default of 0"; if ((g = c.containerNSID) || "number" == typeof g) g = parseInt(g,
    10), !isNaN(g) && 0 <= g && (e = ""); e && (g = 0, a.push(e), e = ""); i = DIL.getDil(f, g); if (i instanceof DIL && i.api.getPartner() == f && i.api.getContainerNSID() == g) return i; if (this instanceof DIL) DIL.registerDil(this, f, g); else return new DIL(c, "DIL was not instantiated with the 'new' operator, returning a valid instance with partner = " + f + " and containerNSID = " + g); var r = { IS_HTTPS: "https:" == document.location.protocol, POST_MESSAGE_ENABLED: !!window.postMessage }, x = {}, k = {}, j = {
        firingQueue: [], fired: [], firing: !1, errored: [], reservedKeys: {
            sids: !0,
            pdata: !0, logdata: !0, callback: !0, postCallbackFn: !0, useImageRequest: !0
        }, callbackPrefix: "demdexRequestCallback", firstRequestHasFired: !1, useJSONP: !0, abortRequests: !1, num_of_jsonp_responses: 0, num_of_jsonp_errors: 0, num_of_img_responses: 0, num_of_img_errors: 0, registerRequest: function (b) { var h = this.firingQueue; "object" == typeof b && h.push(b); !this.firing && h.length && (b = h.shift(), w.fireRequest(b), !this.firstRequestHasFired && "script" == b.tag && (this.firstRequestHasFired = !0)) }
    }; i = function () {
        var b = "http://fast."; r.IS_HTTPS &&
        (b = !0 === c.iframeAkamaiHTTPS ? "https://fast." : "https://"); return b + f + ".demdex.net/dest3.html?d_nsid=" + g + "#" + encodeURIComponent(document.location.href)
    }; var t = {
        THROTTLE_START: 3E4, throttleTimerSet: !1, id: "destination_publishing_iframe_" + f + "_" + g, url: i(), iframe: null, iframeHasLoaded: !1, sendingMessages: !1, messages: [], messageSendingInterval: r.POST_MESSAGE_ENABLED ? 15 : 100, jsonProcessed: [], attachIframe: function () {
            var b = this, h = document.createElement("iframe"); h.id = this.id; h.style.cssText = "display: none; width: 0; height: 0;";
            h.src = this.url; l.addListener(h, "load", function () { b.iframeHasLoaded = !0; b.requestToProcess() }); document.body.appendChild(h); this.iframe = h
        }, requestToProcess: function (b) { var h = this; b && !n.isEmptyObject(b) && this.process(b); this.iframeHasLoaded && (this.messages.length && !this.sendingMessages) && (this.throttleTimerSet || (this.throttleTimerSet = !0, setTimeout(function () { h.messageSendingInterval = r.POST_MESSAGE_ENABLED ? 15 : 150 }, this.THROTTLE_START)), this.sendingMessages = !0, this.sendMessages()) }, process: function (b) {
            var h =
            this.messages, o = encodeURIComponent, p, c, a, e, d; if ((p = b.dests) && p instanceof Array && (c = p.length)) for (a = 0; a < c; a++) e = p[a], e = [o("dests"), o(e.id || ""), o(e.y || ""), o(e.c || "")], h.push(e.join("|")); if ((p = b.ibs) && p instanceof Array && (c = p.length)) for (a = 0; a < c; a++) e = p[a], e = [o("ibs"), o(e.id || ""), o(e.tag || ""), l.encodeAndBuildRequest(e.url || [], ","), o(e.ttl || "")], h.push(e.join("|")); if ((p = b.dpcalls) && p instanceof Array && (c = p.length)) for (a = 0; a < c; a++) e = p[a], d = e.callback || {}, d = [d.obj || "", d.fn || "", d.key || "", d.tag || "", d.url ||
            ""], e = [o("dpm"), o(e.id || ""), o(e.tag || ""), l.encodeAndBuildRequest(e.url || [], ","), o(e.ttl || ""), l.encodeAndBuildRequest(d, ",")], h.push(e.join("|")); this.jsonProcessed.push(b)
        }, sendMessages: function () { var b = this; this.messages.length ? (DIL.xd.postMessage(b.messages.shift(), b.url, b.iframe.contentWindow), setTimeout(function () { b.sendMessages() }, this.messageSendingInterval)) : this.sendingMessages = !1 }
    }, y = {
        traits: function (b) { n.isValidPdata(b) && (k.sids instanceof Array || (k.sids = []), l.extendArray(k.sids, b)); return this },
        pixels: function (b) { n.isValidPdata(b) && (k.pdata instanceof Array || (k.pdata = []), l.extendArray(k.pdata, b)); return this }, logs: function (b) { n.isValidLogdata(b) && ("object" != typeof k.logdata && (k.logdata = {}), l.extendObject(k.logdata, b)); return this }, customQueryParams: function (b) { n.isEmptyObject(b) || l.extendObject(k, b, j.reservedKeys); return this }, signals: function (b, h) { var a, e = b; if (!n.isEmptyObject(e)) { if (h && "string" == typeof h) for (a in e = {}, b) b.hasOwnProperty(a) && (e[h + a] = b[a]); l.extendObject(k, e, j.reservedKeys) } return this },
        result: function (b) { "function" == typeof b && (k.callback = b); return this }, afterResult: function (b) { "function" == typeof b && (k.postCallbackFn = b); return this }, useImageRequest: function () { k.useImageRequest = !0; return this }, clearData: function () { k = {}; return this }, submit: function () { w.submitRequest(k); k = {}; return this }, getPartner: function () { return f }, getContainerNSID: function () { return g }, getEventLog: function () { return a }, getState: function () {
            var b = {}, h = {}; l.extendObject(b, j, { callbackPrefix: !0, useJSONP: !0, registerRequest: !0 });
            l.extendObject(h, t, { attachIframe: !0, requestToProcess: !0, process: !0, sendMessages: !0 }); return { pendingRequest: k, otherRequestInfo: b, destinationPublishingInfo: h }
        }
    }, w = {
        submitRequest: function (b) { j.registerRequest(w.createQueuedRequest(b)); return !0 }, createQueuedRequest: function (b) {
            var h, e = b.callback, c = "img"; if (!n.isEmptyObject(s)) { var d, f, g; for (d in s) if (s.hasOwnProperty(d) && (f = s[d], !(null == f || "" === f) && d in b && !(f in b) && !(f in j.reservedKeys))) g = b[d], null == g || "" === g || (b[f] = g) } n.isValidPdata(b.sids) || (a.push("requestProcs.createQueuedRequest(): sids is not valid, converting to an empty array"),
            b.sids = []); n.isValidPdata(b.pdata) || (a.push("requestProcs.createQueuedRequest(): pdata is not valid, converting to an empty array"), b.pdata = []); n.isValidLogdata(b.logdata) || (a.push("requestProcs.createQueuedRequest(): logdata is not valid, converting to an empty object"), b.logdata = {}); b.logdataArray = l.convertObjectToKeyValuePairs(b.logdata, "=", !0); b.logdataArray.push("_ts=" + (new Date).getTime()); "function" != typeof e && (e = this.defaultCallback); if (j.useJSONP = !b.useImageRequest || "boolean" != typeof b.useImageRequest) c =
            "script", h = j.callbackPrefix + (new Date).getTime(); return { tag: c, src: w.makeRequestSrc(b, h), internalCallbackName: h, callbackFn: e, postCallbackFn: b.postCallbackFn, useImageRequest: b.useImageRequest, requestData: b }
        }, defaultCallback: function (b) {
            var h, e, a, c, d, f, g, r, i; if ((h = b.stuff) && h instanceof Array && (e = h.length)) for (a = 0; a < e; a++) if ((c = h[a]) && "object" == typeof c) if (d = c.cn, f = c.cv, g = c.ttl || 0, r = c.dmn || "." + document.domain, i = c.type, d && (f || "number" == typeof f)) "var" != i && (g = parseInt(g, 10)) && !isNaN(g) && l.setCookie(d,
            f, 1440 * g, "/", r, !1), x[d] = f; h = b.uuid; if ("string" == typeof h && h.length && !n.isEmptyObject(q)) { e = q.path; if ("string" != typeof e || !e.length) e = "/"; a = parseInt(q.days, 10); isNaN(a) && (a = 100); l.setCookie(q.name || "aam_did", h, 1440 * a, e, q.domain || "." + document.domain, !0 === q.secure) } !m && !j.abortRequests && t.requestToProcess(b)
        }, makeRequestSrc: function (b, h) {
            b.sids = n.removeEmptyArrayValues(b.sids || []); b.pdata = n.removeEmptyArrayValues(b.pdata || []); var a = l.encodeAndBuildRequest(b.sids, ","), e = l.encodeAndBuildRequest(b.pdata,
            ","), c = (b.logdataArray || []).join("&"); delete b.logdataArray; var d = r.IS_HTTPS ? "https://" : "http://", i; i = []; var m, k; for (m in b) !(m in j.reservedKeys) && b.hasOwnProperty(m) && (k = b[m], m = encodeURIComponent(m), k instanceof Array ? i.push(m + "=" + l.encodeAndBuildRequest(k, ",")) : i.push(m + "=" + encodeURIComponent(k))); i = i.length ? "&" + i.join("&") : ""; return d + f + ".demdex.net/event?d_nsid=" + g + (a.length ? "&d_sid=" + a : "") + (e.length ? "&d_px=" + e : "") + (c.length ? "&d_ld=" + encodeURIComponent(c) : "") + i + (j.useJSONP ? "&d_rtbd=json&d_jsonv=" +
            DIL.jsonVersion + "&d_dst=1&d_cts=1&d_cb=" + (h || "") : "")
        }, fireRequest: function (b) { "img" == b.tag ? this.fireImage(b) : "script" == b.tag && this.fireScript(b) }, fireImage: function (b) {
            var h, c; j.abortRequests || (j.firing = !0, h = new Image(0, 0), h.onload = function () { j.firing = !1; j.fired.push(b); j.num_of_img_responses++; j.registerRequest() }, c = function (h) { e = "imgAbortOrErrorHandler received the event of type " + h.type; a.push(e); j.abortRequests = !0; j.firing = !1; j.errored.push(b); j.num_of_img_errors++; j.registerRequest() }, h.addEventListener ?
            (h.addEventListener("error", c, !1), h.addEventListener("abort", c, !1)) : h.attachEvent && (h.attachEvent("onerror", c), h.attachEvent("onabort", c)), h.src = b.src)
        }, fireScript: function (b) {
            var h = this, c, d, g = b.src, i = b.postCallbackFn, m = "function" == typeof i; j.abortRequests || (j.firing = !0, window[b.internalCallbackName] = function (h) {
                try { h || (h = {}); var c = b.callbackFn; j.firing = !1; j.fired.push(b); j.num_of_jsonp_responses++; c(h); m && i(h) } catch (d) {
                    d.message = "DIL jsonp callback caught error with message " + d.message; e = d.message;
                    a.push(e); d.filename = d.filename || "dil.js"; d.partner = f; DIL.errorModule.handleError(d); try { c({ error: d.name + "|" + d.message }), m && i({ error: d.name + "|" + d.message }) } catch (g) { }
                } finally { j.registerRequest() }
            }, d = document.createElement("script"), d.addEventListener && d.addEventListener("error", function (c) { e = "jsonp script tag error listener received the event of type " + c.type + " with src " + g; h.handleScriptError(e, b) }, !1), d.type = "text/javascript", d.src = g, c = document.getElementsByTagName("script")[0], c.parentNode.insertBefore(d,
            c))
        }, handleScriptError: function (b, h) { a.push(b); j.abortRequests = !0; j.firing = !1; j.errored.push(h); j.num_of_jsonp_errors++; j.registerRequest() }
    }, n = {
        isValidPdata: function (b) { return b instanceof Array && this.removeEmptyArrayValues(b).length ? !0 : !1 }, isValidLogdata: function (b) { return !this.isEmptyObject(b) }, isEmptyObject: function (b) { if ("object" != typeof b) return !0; for (var h in b) if (b.hasOwnProperty(h)) return !1; return !0 }, removeEmptyArrayValues: function (b) {
            for (var h = 0, c = b.length, a, e = [], h = 0; h < c; h++) a = b[h], "undefined" !=
            typeof a && null != a && e.push(a); return e
        }
    }, u; u = document.addEventListener ? function (b, c, a) { b.addEventListener(c, function (b) { "function" == typeof a && a(b) }, !1) } : document.attachEvent ? function (b, c, a) { b.attachEvent("on" + c, function (b) { "function" == typeof a && a(b) }) } : void 0; var l = {
        addListener: u, convertObjectToKeyValuePairs: function (b, c, a) { var e = [], c = c || "=", d, f; for (d in b) f = b[d], "undefined" != typeof f && null != f && e.push(d + c + (a ? encodeURIComponent(f) : f)); return e }, encodeAndBuildRequest: function (b, c) {
            return this.map(b,
            function (b) { return encodeURIComponent(b) }).join(c)
        }, map: function (b, c) { if (Array.prototype.map) return b.map(c); if (void 0 === b || null === b) throw new TypeError; var a = Object(b), e = a.length >>> 0; if ("function" !== typeof c) throw new TypeError; for (var d = Array(e), f = 0; f < e; f++) f in a && (d[f] = c.call(c, a[f], f, a)); return d }, filter: function (b, c) {
            if (!Array.prototype.filter) {
                if (void 0 === b || null === b) throw new TypeError; var a = Object(b), e = a.length >>> 0; if ("function" !== typeof c) throw new TypeError; for (var d = [], f = 0; f < e; f++) if (f in
                a) { var g = a[f]; c.call(c, g, f, a) && d.push(g) } return d
            } return b.filter(c)
        }, getCookie: function (b) { var b = b + "=", c = document.cookie.split(";"), a, e, d; a = 0; for (e = c.length; a < e; a++) { for (d = c[a]; " " == d.charAt(0) ;) d = d.substring(1, d.length); if (0 == d.indexOf(b)) return decodeURIComponent(d.substring(b.length, d.length)) } return null }, setCookie: function (b, c, a, d, e, f) {
            var g = new Date; a && (a *= 6E4); document.cookie = b + "=" + encodeURIComponent(c) + (a ? ";expires=" + (new Date(g.getTime() + a)).toUTCString() : "") + (d ? ";path=" + d : "") + (e ? ";domain=" +
                e : "") + (f ? ";secure" : "")
        }, extendArray: function (b, a) { return b instanceof Array && a instanceof Array ? (Array.prototype.push.apply(b, a), !0) : !1 }, extendObject: function (b, a, c) { var d; if ("object" == typeof b && "object" == typeof a) { for (d in a) if (a.hasOwnProperty(d) && (n.isEmptyObject(c) || !(d in c))) b[d] = a[d]; return !0 } return !1 }
    }; "error" == f && 0 == g && l.addListener(window, "load", function () { DIL.windowLoaded = !0 }); u = function () {
        m || setTimeout(function () { j.firstRequestHasFired || y.submit() }, DIL.constants.TIME_TO_DEFAULT_REQUEST);
        !m && !j.abortRequests && t.attachIframe()
    }; var z = document, v = c.iframeAttachmentDelay; "error" != f && (DIL.windowLoaded ? u() : "complete" != z.readyState && "loaded" != z.readyState ? l.addListener(window, "load", u) : DIL.isAddedPostWindowLoadWasCalled ? l.addListener(window, "load", u) : (v = "number" == typeof v ? parseInt(v, 10) : 0, 0 > v && (v = 0), setTimeout(u, v || DIL.constants.TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT))); this.api = y; this.getStuffedVariable = function (b) {
        var a = x[b]; !a && "number" != typeof a && (a = l.getCookie(b), !a && "number" != typeof a &&
        (a = "")); return a
    }; this.validators = n; this.helpers = l; window._unit_tests && (this.constants = r, this.pendingRequest = k, this.requestController = j, this.setDestinationPublishingUrl = i, this.destinationPublishing = t, this.requestProcs = w, this.log = a)
}, function () { var c = document, d; null == c.readyState && c.addEventListener && (c.readyState = "loading", c.addEventListener("DOMContentLoaded", d = function () { c.removeEventListener("DOMContentLoaded", d, !1); c.readyState = "complete" }, !1)) }(), DIL.extendStaticPropertiesAndMethods = function (c) {
    var d;
    if ("object" == typeof c) for (d in c) c.hasOwnProperty(d) && (this[d] = c[d])
}, DIL.extendStaticPropertiesAndMethods({
    version: "2.6", jsonVersion: 1, constants: { TIME_TO_DEFAULT_REQUEST: 50, TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT: 500 }, windowLoaded: !1, dils: {}, isAddedPostWindowLoadWasCalled: !1, isAddedPostWindowLoad: function (c) { this.isAddedPostWindowLoadWasCalled = !0; this.windowLoaded = "function" == typeof c ? !!c() : "boolean" == typeof c ? c : !0 }, create: function (c) {
        try { return new DIL(c) } catch (d) {
            return (new Image(0, 0)).src = "http://error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D" +
            (new Date).getTime(), Error("Error in attempt to create DIL instance with DIL.create()")
        }
    }, registerDil: function (c, d, a) { d = d + "$" + a; d in this.dils || (this.dils[d] = c) }, getDil: function (c, d) { var a; "string" != typeof c && (c = ""); d || (d = 0); a = c + "$" + d; return a in this.dils ? this.dils[a] : Error("The DIL instance with partner = " + c + " and containerNSID = " + d + " was not found") }, dexGetQSVars: function (c, d, a) { d = this.getDil(d, a); return d instanceof this ? d.getStuffedVariable(c) : "" }, xd: {
        postMessage: function (c, d, a) {
            var e = 1; d &&
            (window.postMessage ? a.postMessage(c, d.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : d && (a.location = d.replace(/#.*$/, "") + "#" + +new Date + e++ + "&" + c))
        }
    }
}), DIL.errorModule = function () {
    var c = DIL.create({ partner: "error", containerNSID: 0, disableDestinationPublishingIframe: !0 }), d = { harvestererror: 14138, destpuberror: 14139, dpmerror: 14140, generalerror: 14137, error: 14137, noerrortypedefined: 15021, evalerror: 15016, rangeerror: 15017, referenceerror: 15018, typeerror: 15019, urierror: 15020 }; return {
        handleError: function (a) {
            var e = a.name ?
            (new String(a.name)).toLowerCase() : "", f = [], a = { name: e, filename: a.filename ? a.filename + "" : "", partner: a.partner ? a.partner + "" : "no_partner", site: a.site ? a.site + "" : document.location.href, message: a.message ? a.message + "" : "" }; f.push(e in d ? d[e] : d.noerrortypedefined); c.api.pixels(f).logs(a).useImageRequest().submit()
        }, pixelMap: d
    }
}()); DIL.tools = {};
DIL.tools.getSearchReferrer = function (c, d) {
    var a = DIL.getDil("error"), e = DIL.tools.decomposeURI(c || document.referrer), f = "", g = "", i = { queryParam: "q" }, f = a.helpers.filter(["object" == typeof d ? d : {}, { hostPattern: /aol\./ }, { hostPattern: /ask\./ }, { hostPattern: /bing\./ }, { hostPattern: /google\./ }, { hostPattern: /yahoo\./, queryParam: "p" }], function (a) { return !(!a.hasOwnProperty("hostPattern") || !e.hostname.match(a.hostPattern)) }).shift(); return !f ? { valid: !1, name: "", keywords: "" } : {
        valid: !0, name: e.hostname, keywords: (a.helpers.extendObject(i,
        f), g = i.queryPattern ? (f = ("" + e.search).match(i.queryPattern)) ? f[1] : "" : e.uriParams[i.queryParam], decodeURIComponent(g || "").replace(/\+|%20/g, " "))
    }
};
DIL.tools.decomposeURI = function (c) { var d = DIL.getDil("error"), a = document.createElement("a"); a.href = c || document.referrer; var c = a.hash, e = a.host.split(":").shift(), f = a.hostname, g = a.href, i = a.pathname.replace(/^\//, ""), m = a.protocol, s = a.search, q = {}, a = a.search.replace(/^(\/|\?)?|\/$/g, ""); d.helpers.map(a.split("&"), function (a) { a = a.split("="); q[a.shift()] = a.shift() }); return { hash: c, host: e, hostname: f, href: g, pathname: i, protocol: m, search: s, uriParams: q } };
DIL.tools.getMetaTags = function () { var c = {}, d = document.getElementsByTagName("meta"), a, e, f, g, i; a = 0; for (f = arguments.length; a < f; a++) if (g = arguments[a], null !== g) for (e = 0; e < d.length; e++) if (i = d[e], i.name == g) { c[g] = i.content; break } return c }; DIL.modules = {};
DIL.modules.siteCatalyst = {
    init: function (c, d, a) {
        try {
            var e = { name: "DIL Site Catalyst Module Error" }, f; if (!(d instanceof DIL)) return f = "dilInstance is not a valid instance of DIL", e.message = f, DIL.errorModule.handleError(e), f; e.partner = d.api.getPartner(); if ("object" != typeof c) return f = "siteCatalystReportingSuite is not an object", e.message = f, DIL.errorModule.handleError(e), f; if ("function" != typeof c.m_i || "function" != typeof c.loadModule) return f = "s.m_i is not a function or s.loadModule is not a function",
            e.message = f, DIL.errorModule.handleError(e), f; var g = c.m_i("DIL"); if ("object" != typeof g) return f = "m is not an object", e.message = f, DIL.errorModule.handleError(e), f; g.trackVars = this.constructTrackVars(a); g.d = 0; g._t = function () {
                var a, c, d = "," + this.trackVars + ",", g = this.s, i, k = []; i = []; var j = {}, t = !1; if ("object" != typeof g || !(g.va_t instanceof Array)) return f = "Error in m._t function: s is not an object or s.va_t is not an array", e.message = f, DIL.errorModule.handleError(e), f; if (this.d) {
                    if (g.lightProfileID) (a = g.lightTrackVars) &&
                    (a = "," + a + "," + g.vl_mr + ","); else if (g.pe || g.linkType) a = g.linkTrackVars, g.pe && (c = g.pe.substring(0, 1).toUpperCase() + g.pe.substring(1), g[c] && (a = g[c].trackVars)), a && (a = "," + a + "," + g.vl_l + "," + g.vl_l2 + ","); if (a) { c = 0; for (k = a.split(",") ; c < k.length; c++) 0 <= d.indexOf("," + k[c] + ",") && i.push(k[c]); i.length && (d = "," + i.join(",") + ",") } i = 0; for (c = g.va_t.length; i < c; i++) a = g.va_t[i], 0 <= d.indexOf("," + a + ",") && (null != g[a] && "" !== g[a]) && (j[a] = g[a], t = !0); t && this.d.api.signals(j, "c_").submit()
                }
            }; g.setup = function () { this.d = d }; c.loadModule("DIL");
            if ("object" != typeof c.DIL || "function" != typeof c.DIL.setup) return f = "s.DIL is not an object or s.DIL.setup is not a function", e.message = f, DIL.errorModule.handleError(e), f; c.DIL.setup()
        } catch (i) { return i.message = "DIL Site Catalyst module caught error with message " + i.message, d instanceof DIL && (i.partner = d.api.getPartner()), DIL.errorModule.handleError(i), i.message }
    }, constructTrackVars: function (c) {
        var d = [], a, e, f, g, i; if ("object" == typeof c) {
            a = c.names; if (a instanceof Array && (f = a.length)) for (e = 0; e < f; e++) g =
            a[e], "string" == typeof g && g.length && d.push(g); c = c.iteratedNames; if (c instanceof Array && (f = c.length)) for (e = 0; e < f; e++) if (a = c[e], "object" == typeof a && (g = a.name, i = parseInt(a.maxIndex, 10), "string" == typeof g && g.length && !isNaN(i) && 0 <= i)) for (a = 0; a <= i; a++) d.push(g + a); if (d.length) return d.join(",")
        } return this.constructTrackVars({ names: "pageName channel campaign products events pe pev1 pev2 pev3".split(" "), iteratedNames: [{ name: "prop", maxIndex: 75 }, { name: "eVar", maxIndex: 75 }] })
    }
};
// Get the in Site Catalyst object instance
var _scObj = s_gi(s_account);
// Instantiate a DIL code
var scDil = DIL.create({
    partner: 'gm'
});
DIL.modules.siteCatalyst.init(_scObj, scDil);
