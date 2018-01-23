/*!
 * Common
 */
;var _common={_ui:{manager:null,iscomplete:false},_mode:null,_isRTL:$("html").hasClass("rtl"),_document_width:$(window).width(),_bc_idkey:{playerId:null,playerKey:null,siteList:{uk:{playerId:"2766386806001",playerKey:"AQ~~,AAAA1u88VXE~,x0_28B_6Zvm1pXn7J32HLZeBFPB6Wy5Z"},jp:{playerId:"926210515001",playerKey:"AQ~~,AAAA1vDIa-E~,E6N35iQp8jDwx86w-tUgYVHCLPSCiARX"},global:{playerId:"1859038942001",playerKey:"AQ~~,AAABqrGsuXk~,7hyRZCnLH6ddG7KenkpacZaPSIy5hy-r",networks:{playerId:"1859057230001",playerKey:"AQ~~,AAABqrGs6Fk~,aFOxBA5wOp5szioNs4Q-pcBj-SedtweM"}},au:{playerId:"926210511001",playerKey:"AQ~~,AAAA1vDIZBE~,8Qxfn_gGqXQWmvXHrUz4r05jOuPCLzUa"},nz:{playerId:"926196169001",playerKey:"AQ~~,AAAA1u88PgE~,GmWzarV2MErCAUzi5b8t5EKcBnk6E8yV"},at:{playerId:"924336545001",playerKey:"AQ~~,AAAA1vSqZOk~,hp4Wt3zVjWc2whDUvqDH9CGlKil8OyNx"},be:{playerId:"926196191001",playerKey:"AQ~~,AAAA1u88bOE~,jLxL4xeWUGVW0JUPGna3w8uSmCNmlptZ"},be_fr:{playerId:"926210528001",playerKey:"AQ~~,AAAA1vDIg1E~,MkoiW9FH-nnG4ZUl3DOpygEFQNnhP-uI"},bg:{playerId:"926210323001",playerKey:"AQ~~,AAAA1vc3_Tk~,mISXqRtx5TCJSuRDXFAyj0wgMMFj3s4q"},ch:{playerId:"926210526001",playerKey:"AQ~~,AAAA1vDIf2k~,iVoVKzdFbeHQvN-Pf_SvWToP7TwoRgPA"},ch_fr:{playerId:"926251507001",playerKey:"AQ~~,AAAA1vSqaNE~,EQ78wh6EYWdP_mwBFB3IbXxs7JLIAwqv"},cz:{playerId:"926210321001",playerKey:"AQ~~,AAAA1vc3-VE~,q0UeQmlKWUjB8EFbz1b9FLjEfqJ84u3l"},de:{playerId:"924336537001",playerKey:"AQ~~,AAAA1vSqVUk~,Ij_lFfu7jRUnSOIVjtgLuFNXLbFsKk9w"},dk:{playerId:"926210311001",playerKey:"AQ~~,AAAA1vc36bE~,FiLtJnouWb44elliFsUPMk5UTMEBLc10"},ee:{playerId:"926251513001",playerKey:"AQ~~,AAAA1vSqcKE~,pLfhI1aol64198gOZquO36bmCItlna-V"},es:{playerId:"926210519001",playerKey:"AQ~~,AAAA1vDIc7E~,HUeD8rCqt9P3_ICbpxGIpFVTu2PVdhqe"},fi:{playerId:"926210524001",playerKey:"AQ~~,AAAA1vDIe4E~,lKlcTymj-FAv5_CC2dxasn2HZF-vT7a1"},fr:{playerId:"924336541001",playerKey:"AQ~~,AAAA1vSqXRk~,4Gh2JxitIlZ5MuGnkuyrS7FZ60fKqZ6m"},gr:{playerId:"926196187001",playerKey:"AQ~~,AAAA1u88YSk~,vxFU_YgYcCL89X9Qwe1s7rnR0bJNIE-M"},hr:{playerId:"926210332001",playerKey:"AQ~~,AAAA1vc4CPE~,snrDcnWtt4VES1PU9mYW_mbeNmOz1bG8"},hu:{playerId:"926210309001",playerKey:"AQ~~,AAAA1vc35ck~,MU-_2j7kl_JrhjFN8O5yPCelm0A90oNf"},ie:{playerId:"926196183001",playerKey:"AQ~~,AAAA1u88WVk~,uCEaQuZ8nzgtayb6cqEcyT1RHclkJG_9"},it:{playerId:"926196185001",playerKey:"AQ~~,AAAA1u88XUE~,fft8jN67dHT3bQ4T-YR299dVUUW2Wq13"},lt:{playerId:"926251515001",playerKey:"AQ~~,AAAA1vSqdIk~,FfPsfAjtZCPUWwnff6eUCf5dSEQmz-kJ"},lv:{playerId:"926210326001",playerKey:"AQ~~,AAAA1vc4ASE~,axBlmjdcgk_FU76yezkFgm_XktjFJsfJ"},nl:{playerId:"926196193001",playerKey:"AQ~~,AAAA1u88cMk~,aJXrrmXqcmSiDmFHqX1rl8jwuB1XCwGA"},no:{playerId:"924336539001",playerKey:"AQ~~,AAAA1vSqWTE~,NIYuVb4Yj1W-Vy50_tEzbsb7GSNBGjUu"},pl:{playerId:"926210319001",playerKey:"AQ~~,AAAA1vc39Wk~,VQ1_fYOWigV90NMn7kDlwSpB5fr6HAHC"},pt:{playerId:"926210317001",playerKey:"AQ~~,AAAA1vc38YE~,E3RfSFCBgebLJXrs8gqIapjCZAgtmC6W"},ro:{playerId:"926196189001",playerKey:"AQ~~,AAAA1u88aPk~,81hqJ9oLX0Eod2XeyfzxgoAGCbN2YRcH"},rs:{playerId:"926210534001",playerKey:"AQ~~,AAAA1vDIiyE~,1l625wgL4J5inOw1R1uIHQ2AI0mBhVFr"},si:{playerId:"3855497514001",playerKey:"AQ~~,AAADga3gQqE~,ighS4vLAqw7aEJSfMheNEQNl3lgkikCf"},se:{playerId:"926210522001",playerKey:"AQ~~,AAAA1vDId5k~,wl2s5WAZVZQm20Pfrgap3hb8Pb_GhmS2"},sk:{playerId:"924336543001",playerKey:"AQ~~,AAAA1vSqYQE~,ri_moVr2zWAxhVn98njnuti412uSoK-x"},sec:{playerId:"926196177001",playerKey:"AQ~~,AAABkXNeUlk~,PDzHSVYzejqIkWe1eXlO0IODATM4_JrV"},ca:{playerId:"924384217001",playerKey:"AQ~~,AAAA1vc30kE~,cbXkIMRl2tur-XePkk1yLTgjdi2k0-MS"},ca_fr:{playerId:"924336521001",playerKey:"AQ~~,AAAA1vSqOfE~,sZkSFUdTS6eUK64OErxusx96DKJNIbJi"},latin:{playerId:"926196165001",playerKey:"AQ~~,AAAA1u88Ohk~,v-_KXguDfE5YT_ue64VtxZK0J-pcj-0C"},latin_en:{playerId:"924336525001",playerKey:"AQ~~,AAAA1vSqQcE~,BgcEcsklFLovEoVnOt9RPKJB5s7msCEw"},sg:{playerId:"926210509001",playerKey:"AQ~~,AAAA1vDIYCk~,zKw77YEpCQO0r9qz-sEytHx3lFErk4ss"},my:{playerId:"926196173001",playerKey:"AQ~~,AAAA1u88RdE~,kPQQqwrYdp4bxmwR-nZmYOOY7ci7Pwgy"},ph:{playerId:"926196175001",playerKey:"AQ~~,AAAA1u88Sbk~,WIP_y9MCYC_2l3T_Wm3nrg1cmQbpBrij"},"in":{playerId:"926210517001",playerKey:"AQ~~,AAAA1vDIb8k~,lUaeNA43HwiHGbg_2NeUs3hiAJaenQDK"},cn:{playerId:"926210307001",playerKey:"AQ~~,AAAA1vc34eE~,kItzOdTai_fzjaKuIxIg8DV223Iq6cvi"},ru:{playerId:"926196195001",playerKey:"AQ~~,AAAA1u88dLE~,N1tbZZomcgAsb_PfXERrXa4VDTt73bow"},ae:{playerId:"926251517001",playerKey:"AQ~~,AAAA1vSqeHE~,sL-qYGp5vDs9lvQC58LpmsrAdgrnDt-w"},ae_ar:{playerId:"926196197001",playerKey:"AQ~~,AAAA1u88eJk~,S0yiLpxyHQcCakj-7HKFJS5XjwgkAXtx"},sa:{playerId:"926196199001",playerKey:"AQ~~,AAAA1u88fIE~,O2m1MLoG_muG7KThKuLs8ABApukPd0cJ"},sa_en:{playerId:"2573241962001",playerKey:"AQ~~,AAACVrpFEuE~,IGsISVlCgs-KnLEUg3gHYj5oez9ODaU5"},levant:{playerId:"926251519001",playerKey:"AQ~~,AAAA1vSqfFk~,wpJou2CBGiTHSgG-P42Xe63FMRD6TyXo"},pk:{playerId:"926251521001",playerKey:"AQ~~,AAAA1vSqgEE~,wOnUwNgORxX5Lx7vj1pm6XhYLoDcEM4_"},za:{playerId:"2573241961001",playerKey:"AQ~~,AAACVrpFDvk~,goA5RG4suySVUwJKOuX3yfgABbX2fkrD"},iran:{playerId:"926210340001",playerKey:"AQ~~,AAAA1vc4GJE~,YM3AHViBVn9RFzwbP1jQ_aE5oeVo1AqU"},il:{playerId:"926210540001",playerKey:"AQ~~,AAAA1vDIltk~,IPAPGgmj_6fc11IflU32LkXpdx93feNU"},eg:{playerId:"926210542001",playerKey:"AQ~~,AAAA1vDImsE~,cmf9fQlzDEX60Ap9x_kSo3zfwvzYk9fg"},hk:{playerId:"924336535001",playerKey:"AQ~~,AAAA1vSqUWE~,2V3Gfvyx2SIdZnODa2GsXGASlNJYJB_E"},hk_en:{playerId:"926196179001",playerKey:"AQ~~,AAAA1u88UYk~,XDIlg6GcmdvGAbMXEj4cy62aA8fWZ7Rg"},tw:{playerId:"926210305001",playerKey:"AQ~~,AAAA1vc33fk~,LaoPq8X-3PefH08VUXN2EctTZqxgCTWv"},id:{playerId:"926210513001",playerKey:"AQ~~,AAAA1vDIZ_k~,nr0_v_QukmUrfpAfwd6syDNAutP_lYjB"},th:{playerId:"924336529001",playerKey:"AQ~~,AAAA1vSqSZE~,QkYUAXu3lHXJWLnyQOCo2M0yp2LeVm6X"},vn:{playerId:"926196171001",playerKey:"AQ~~,AAAA1u88Qek~,6VFss6TVSqtCkDpG6h2Uh4I4PD0GLZLq"},ua:{playerId:"926210538001",playerKey:"AQ~~,AAAA1vDIkvE~,i2xeGsQLR673hBz63dg10Ip937VIAfWE"},ua_ru:{playerId:"926210536001",playerKey:"AQ~~,AAAA1vDIjwk~,A2lOutVBN3UbEUcePOvvpHzT5fzY9DPx"},kz_ru:{playerId:"926210334001",playerKey:"AQ~~,AAAA1vc4DNk~,qbZrUsiJtsTqPJmQELpgpisg96XC54ai"},africa_en:{playerId:"926210336001",playerKey:"AQ~~,AAAA1vc4EME~,Mr9Hje7LqNftSlNIaKpcSkhnqcpbbP89"},africa_fr:{playerId:"926251525001",playerKey:"AQ~~,AAAA1vSqiBE~,Qp5WvJFrHi_K02EFeBsQgtJ5MwsmpUMX"},africa_pt:{playerId:"926196207001",playerKey:"AQ~~,AAAA1u88iDk~,ccsEg19-CbJkk_zJ9c6aFicBsNvJsIn8"},tr:{playerId:"926196201001",playerKey:"AQ~~,AAAA1u88gGk~,tmBYuNAdVdgtccZMqQiemGQppaBGQ4_z"},uy:{playerId:"926210303001",playerKey:"AQ~~,AAAA1vc32hE~,GuUbplf11bKwpRy4EAYNGiU2J4b_cVdU"},py:{playerId:"926210303001",playerKey:"AQ~~,AAAA1vc32hE~,GuUbplf11bKwpRy4EAYNGiU2J4b_cVdU"},ar:{playerId:"926210303001",playerKey:"AQ~~,AAAA1vc32hE~,GuUbplf11bKwpRy4EAYNGiU2J4b_cVdU"},br:{playerId:"926210501001",playerKey:"AQ~~,AAAA1vDIUIk~,LHrzhhIkh5_rkM4qIaeYSJ61GOZoclmv"},cl:{playerId:"924336527001",playerKey:"AQ~~,AAAA1vSqRak~,EnrWLy5bVf2utzcUFuidrHPW6lZMMy2X"},co:{playerId:"926210505001",playerKey:"AQ~~,AAAA1vDIWFk~,-osp2UwmJkSayIBzpe-fiWWjFetpHFs9"},mx:{playerId:"924336523001",playerKey:"AQ~~,AAAA1vSqPdk~,0hHIlIMEKBPQrwDwbHYwzm2SiuZ5pER1"},pe:{playerId:"926210507001",playerKey:"AQ~~,AAAA1vDIXEE~,y0ET89E0lhD6DaPPu4E_3SyvFnevN5ut"},ve:{playerId:"926210503001",playerKey:"AQ~~,AAAA1vDIVHE~,OedBXOLjIJrH7dJYXr4eGBbyQ_PYA65j"},n_africa:{playerId:"926251523001",playerKey:"AQ~~,AAAA1vSqhCk~,tjW3A2k5zkQthYBV9Dwp5Qie2wZvGoF-"}}},init:function(){this.init_ui();this.init_indicator();this.init_bc_idkey()},init_ui:function(){if(this._ui.manager==null){var a=this;a._ui.manager=new UIManager();a._ui.iscomplete=true;a.reinit()}},reinit:function(){if(this._ui.manager!=null){if(typeof(initPage)!=="undefined"){initPage()}if(typeof(initAuthPage)!=="undefined"){initAuthPage()}}},reinit_ui:function(a){if(this._ui.manager!=null){this._ui.manager.reinit.apply(this._ui.manager,arguments)}},init_mode:function(){var a=this;$(window).bind({resize:function(){var b=a.is_mode();a.change_img(b)}})},init_indicator:function(){$(document).on({"ajaxStop ajaxError":function(a){$("*[data-role=ui-indicator]").remove()}})},open_indicator:function(b,a){var c=$('<div class="ui-indicator" data-role="ui-indicator">');$("*[data-role=ui-indicator]").remove();switch(a){case"more":c.insertBefore(b);break;case"filter":c.prependTo(b);break;case"step":c.insertAfter(b);break;case"search":c.insertAfter(b);break;case"search_more":c.appendTo(b);break}},init_bc_idkey:function(){var a=this;if(typeof a._bc_idkey.siteList[SITE_CD]!="undefined"){a._bc_idkey.playerId=a._bc_idkey.siteList[SITE_CD].playerId;a._bc_idkey.playerKey=a._bc_idkey.siteList[SITE_CD].playerKey}var b=window.location.pathname;if(b.indexOf("/global/business/networks/")>-1){a._bc_idkey.playerId=a._bc_idkey.siteList[SITE_CD].networks.playerId;a._bc_idkey.playerKey=a._bc_idkey.siteList[SITE_CD].networks.playerKey}},is_mode:function(){var b="";var a=window.innerWidth;if(navigator.userAgent.indexOf("MSIE 7.0")!==-1||navigator.userAgent.indexOf("MSIE 8.0")!==-1){a=$(window).width()}if(a<=767){b="MOBILE"}else{if(a>767&&a<=1023){b="TABLET_A"}else{if(a>1023&&a<=1280){b="TABLET_B"}else{if(a>1280){b="PC"}}}}return b},get_mode:function(){return this._mode},set_mode:function(a){this._mode=a},trace:function(){try{if(typeof(window.console)!="undefined"&&window.console&&window.console.log){console.log.apply(console,arguments)}}catch(a){}},change_img:function(b){var a="";$("*[data-role=ui-flick]").not(".key-visual").find(">div>ul>li>div:not([data-role=not-responsive])").each(function(){switch(String(b).toUpperCase()){case"MOBILE":a=typeof $(this).attr("data-media-mobile")!=="undefined"?$(this).attr("data-media-mobile"):$(this).css("backbround-image");break;case"TABLET_A":case"TABLET_B":case"PC":a=typeof $(this).attr("data-media-desktop")!=="undefined"?$(this).attr("data-media-desktop"):$(this).css("backbround-image");break}$(this).css("background-image",'url("'+a+'")')})},open_popup_layer:function(c){var b=$("<div>").attr("data-role","ui-btn-"+c);var a=$("*[data-role=ui-layer-"+c+"]");if(a.length>0){new LayerCommonUI(b)}}};$(document).ready(function(){new NavUI($("*[data-role=ui-nav]"));_common.init();window.onYouTubeIframeAPIReady=function(){try{_common.reinit_ui("video")}catch(a){_common.trace(a)}};if(!$.cookies){window.$.cookies=jaaulde.utils.cookies}if(typeof OP_MODE!=="undefined"){if(OP_MODE){if(typeof inlineEdit!=="undefined"){inlineEdit()}}else{$("input[type=text], textarea").each(function(){var a=$(this).attr("placeholder")!=undefined?true:false;if(a){$(this).placeholder()}})}}init_textoverflow()});function init_textoverflow(){$("*[data-ui-textoverflow=true]").dotdotdot()};
/* add luxemburg confirm popup (15.06.25 by wj.lee) */

// show msg
function setLngMsg(){
    if(!($('#lng_form').val() == "") && !($('#lng_url_form').val() == "")) {
        var lng = $('#lng_form').val();
        var obj_wrapper = "#lng_popup";
        var obj_popup = ".layer_popup";
        var obj_popup_this = ".layer_popup."+lng;

        $(obj_wrapper).css({"height" : $(document).height()});
        $('#lng_popup .pop-wrap').css({"height" : "100%"});
        $(obj_wrapper).show();
        $(obj_popup_this).show();

        var top = ($(window).height() / 2) - ($(obj_popup_this).height() / 2);
        if($(window).width() > 400){
          var left = ($(window).width() / 2) - ($(obj_popup_this).width() / 2);
        } else {
          var left = 0;
        }
        $(obj_popup_this).css({ "position" : "absolute", "top": top+$(document).scrollTop(), "left": left });
    }
}

$(document).ready(function() {
    $('.siteList li a').click(function() {
        if( $(this).parent('li').hasClass('lu') ) {
            $('#lng_form').val('lu');
            $('#lng_url_form').val($(this).attr('href'));
            setLngMsg();
            return false;
        }
    });

    // button action
    $('#lng_popup .pop-btn a').click(function() {
        if($(this).attr('data-focus-id') == "ok-button") {
            var url = $('#lng_url_form').val();
        } else {
            var url = $('#lng_url_form').val();
        }
        window.location.href = url;
    });

    // hide msg
    $('#lng_popup .btn-close').click(function() {
        $('#lng_form').val('');
        $('#lng_url_form').val('');
        $('.layer_popup').hide();
        $('#lng_popup').hide();
    });
});
$(window).resize(function() { setLngMsg() });