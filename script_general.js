(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scripts":{"setValue":TDV.Tour.Script.setValue,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"downloadFile":TDV.Tour.Script.downloadFile,"setLocale":TDV.Tour.Script.setLocale,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"openLink":TDV.Tour.Script.openLink,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"executeJS":TDV.Tour.Script.executeJS,"clone":TDV.Tour.Script.clone,"quizShowScore":TDV.Tour.Script.quizShowScore,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getOverlays":TDV.Tour.Script.getOverlays,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"showPopupImage":TDV.Tour.Script.showPopupImage,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"shareSocial":TDV.Tour.Script.shareSocial,"quizStart":TDV.Tour.Script.quizStart,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"startMeasurement":TDV.Tour.Script.startMeasurement,"getPixels":TDV.Tour.Script.getPixels,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizFinish":TDV.Tour.Script.quizFinish,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"initQuiz":TDV.Tour.Script.initQuiz,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"init":TDV.Tour.Script.init,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getKey":TDV.Tour.Script.getKey,"showWindow":TDV.Tour.Script.showWindow,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"resumePlayers":TDV.Tour.Script.resumePlayers,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"historyGoForward":TDV.Tour.Script.historyGoForward,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"createTween":TDV.Tour.Script.createTween,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"existsKey":TDV.Tour.Script.existsKey,"registerKey":TDV.Tour.Script.registerKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getComponentByName":TDV.Tour.Script.getComponentByName,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"disableVR":TDV.Tour.Script.disableVR,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"toggleVR":TDV.Tour.Script.toggleVR,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"enableVR":TDV.Tour.Script.enableVR,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaByName":TDV.Tour.Script.getMediaByName,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMapLocation":TDV.Tour.Script.setMapLocation,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"mixObject":TDV.Tour.Script.mixObject,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"translate":TDV.Tour.Script.translate,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMainViewer":TDV.Tour.Script.getMainViewer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"playAudioList":TDV.Tour.Script.playAudioList,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera},"hash": "ed7158e857be23b7a46e3bae636f2669235ba1ecec270b63439f192370ea407c", "definitions": [{"id":"mainPlayList","class":"PlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_7A696587_76D9_5EB4_41CF_2B3E83622DB0_camera","media":"this.panorama_7A696587_76D9_5EB4_41CF_2B3E83622DB0","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","camera":"this.panorama_7DDA82D2_76D9_BAAC_419E_1C60C5686640_camera","media":"this.panorama_7DDA82D2_76D9_BAAC_419E_1C60C5686640","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}]},{"vrThumbstickRotationStep":20,"progressRight":"33%","subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowOpacity":1,"progressOpacity":0.7,"toolTipFontFamily":"Arial","surfaceReticleColor":"#FFFFFF","data":{"name":"Main Viewer"},"progressBarBackgroundColorDirection":"horizontal","subtitlesTextShadowVerticalLength":1,"playbackBarProgressBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"subtitlesBottom":50,"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowBlurRadius":3,"vrPointerSelectionTime":2000,"progressBarBorderRadius":2,"playbackBarLeft":0,"progressBarBorderSize":0,"playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipTextShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipFontSize":"1.11vmin","playbackBarHeadShadowColor":"#000000","vrPointerColor":"#FFFFFF","toolTipPaddingTop":4,"playbackBarHeadBorderSize":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadShadow":true,"toolTipPaddingLeft":6,"toolTipShadowColor":"#333138","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","toolTipBorderColor":"#767676","playbackBarHeadBackgroundColor":["#111111","#666666"],"id":"MainViewer","subtitlesBackgroundColor":"#000000","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesFontSize":"3vmin","class":"ViewerArea","subtitlesGap":0,"subtitlesFontColor":"#FFFFFF","playbackBarBottom":5,"subtitlesFontFamily":"Arial","progressBackgroundColor":["#000000"],"toolTipFontColor":"#606060","subtitlesBackgroundOpacity":0.2,"minHeight":50,"surfaceReticleSelectionColor":"#FFFFFF","minWidth":100,"progressBottom":10,"toolTipPaddingRight":6,"playbackBarBackgroundOpacity":1,"progressBorderRadius":2,"subtitlesTop":0,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingBottom":4,"firstTransitionDuration":0,"playbackBarHeight":10,"propagateClick":false,"toolTipBackgroundColor":"#F6F6F6","progressLeft":"33%","playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"subtitlesTextShadowColor":"#000000","playbackBarBackgroundColorDirection":"vertical","width":"100%","progressHeight":2,"playbackBarProgressBorderRadius":0,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColorRatios":[0],"height":"100%","progressBorderSize":0},{"vfov":180,"hfov":360,"adjacentPanoramas":[{"data":{"overlayID":"overlay_7B5DAD9B_76D8_CEDD_41D4_69868B60713E"},"class":"AdjacentPanorama","distance":100,"select":"this.overlay_7B5DAD9B_76D8_CEDD_41D4_69868B60713E.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_7A696587_76D9_5EB4_41CF_2B3E83622DB0","yaw":0,"backwardYaw":-30.07}],"id":"panorama_7DDA82D2_76D9_BAAC_419E_1C60C5686640","cardboardMenu":"this.Menu_66F755B1_76DB_7EEC_418B_AC148EC67999","class":"Panorama","data":{"label":"BTTB (7)_sphere"},"thumbnailUrl":"media/panorama_7DDA82D2_76D9_BAAC_419E_1C60C5686640_t.webp","label":trans('panorama_7DDA82D2_76D9_BAAC_419E_1C60C5686640.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","height":4096,"url":"media/panorama_7DDA82D2_76D9_BAAC_419E_1C60C5686640_0/{face}/0/{row}_{column}.webp","colCount":48,"width":24576,"rowCount":8,"tags":"ondemand"},{"class":"TiledImageResourceLevel","height":2048,"url":"media/panorama_7DDA82D2_76D9_BAAC_419E_1C60C5686640_0/{face}/1/{row}_{column}.webp","colCount":24,"width":12288,"rowCount":4,"tags":"ondemand"},{"class":"TiledImageResourceLevel","height":1024,"url":"media/panorama_7DDA82D2_76D9_BAAC_419E_1C60C5686640_0/{face}/2/{row}_{column}.webp","colCount":12,"width":6144,"rowCount":2,"tags":"ondemand"},{"class":"TiledImageResourceLevel","height":512,"url":"media/panorama_7DDA82D2_76D9_BAAC_419E_1C60C5686640_0/{face}/3/{row}_{column}.webp","colCount":6,"width":3072,"rowCount":1,"tags":["ondemand","preload"]}]},"thumbnailUrl":"media/panorama_7DDA82D2_76D9_BAAC_419E_1C60C5686640_t.webp"}],"hfovMax":130,"overlays":["this.overlay_7B5DAD9B_76D8_CEDD_41D4_69868B60713E"]},{"class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"initialSequence":"this.sequence_7C331F7B_76D9_CA5C_41C7_000F363D3671","id":"panorama_7A696587_76D9_5EB4_41CF_2B3E83622DB0_camera","enterPointingToHorizon":true},{"vfov":180,"hfov":360,"adjacentPanoramas":[{"data":{"overlayID":"overlay_7BADDD96_76D8_CED7_41D4_BE3382105400"},"class":"AdjacentPanorama","distance":4.76,"select":"this.overlay_7BADDD96_76D8_CED7_41D4_BE3382105400.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_7DDA82D2_76D9_BAAC_419E_1C60C5686640","yaw":-30.07,"backwardYaw":0}],"id":"panorama_7A696587_76D9_5EB4_41CF_2B3E83622DB0","cardboardMenu":"this.Menu_66F755B1_76DB_7EEC_418B_AC148EC67999","class":"Panorama","data":{"label":"BTTB (6)_sphere"},"thumbnailUrl":"media/panorama_7A696587_76D9_5EB4_41CF_2B3E83622DB0_t.webp","label":trans('panorama_7A696587_76D9_5EB4_41CF_2B3E83622DB0.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","height":4096,"url":"media/panorama_7A696587_76D9_5EB4_41CF_2B3E83622DB0_0/{face}/0/{row}_{column}.webp","colCount":48,"width":24576,"rowCount":8,"tags":"ondemand"},{"class":"TiledImageResourceLevel","height":2048,"url":"media/panorama_7A696587_76D9_5EB4_41CF_2B3E83622DB0_0/{face}/1/{row}_{column}.webp","colCount":24,"width":12288,"rowCount":4,"tags":"ondemand"},{"class":"TiledImageResourceLevel","height":1024,"url":"media/panorama_7A696587_76D9_5EB4_41CF_2B3E83622DB0_0/{face}/2/{row}_{column}.webp","colCount":12,"width":6144,"rowCount":2,"tags":"ondemand"},{"class":"TiledImageResourceLevel","height":512,"url":"media/panorama_7A696587_76D9_5EB4_41CF_2B3E83622DB0_0/{face}/3/{row}_{column}.webp","colCount":6,"width":3072,"rowCount":1,"tags":["ondemand","preload"]}]},"thumbnailUrl":"media/panorama_7A696587_76D9_5EB4_41CF_2B3E83622DB0_t.webp"}],"hfovMax":130,"overlays":["this.overlay_7BADDD96_76D8_CED7_41D4_BE3382105400"]},{"class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"initialSequence":"this.sequence_7C37AF7D_76D9_CA54_41CC_AB818A545021","id":"panorama_7DDA82D2_76D9_BAAC_419E_1C60C5686640_camera","enterPointingToHorizon":true},{"opacity":0.4,"class":"Menu","distance":2,"selectedBackgroundColor":"#202020","selectedFontColor":"#FFFFFF","fontColor":"#FFFFFF","backgroundColor":"#404040","children":["this.MenuItem_669C35E9_76DB_7E7C_41AD_79490AB3F52E","this.MenuItem_669CE5E9_76DB_7E7C_41D2_7CAD7ADF921B"],"rollOverOpacity":0.8,"label":trans('Menu_66F755B1_76DB_7EEC_418B_AC148EC67999.label'),"id":"Menu_66F755B1_76DB_7EEC_418B_AC148EC67999","rollOverFontColor":"#FFFFFF","fontFamily":"Arial","rollOverBackgroundColor":"#000000"},{"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","aaEnabled":true,"keepModel3DLoadedWithoutLocation":true,"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","displayPlaybackBar":true,"arrowKeysAction":"translate"},{"data":{"hasPanoramaAction":true,"label":"GoToBttb(6)_sphere"},"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","distance":100,"hfov":10.5,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_66FDF4FF_76DB_7E55_41DA_E15392CFC75E","vfov":9.45,"data":{"label":"GoToBttb(6)_sphere"}}],"maps":[],"enabledInCardboard":true,"useHandCursor":true,"id":"overlay_7B5DAD9B_76D8_CEDD_41D4_69868B60713E","areas":["this.HotspotPanoramaOverlayArea_669355F7_76DB_7E54_41CE_26853FD35B58"]},{"class":"PanoramaCameraSequence","id":"sequence_7C331F7B_76D9_CA5C_41C7_000F363D3671","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}]},{"data":{"hasPanoramaAction":true,"label":"GoToBttb(7)_sphere"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-19.66,"class":"HotspotPanoramaOverlayImage","distance":100,"yaw":-30.07,"hfov":10.5,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_66FD24FE_76DB_7E57_41BE_02E2A7C0FCAE","vfov":9.45,"data":{"label":"GoToBttb(7)_sphere"}}],"maps":[],"enabledInCardboard":true,"useHandCursor":true,"id":"overlay_7BADDD96_76D8_CED7_41D4_BE3382105400","areas":["this.HotspotPanoramaOverlayArea_7B29ADCC_76D8_CEBB_41BF_617BCCD3247C"]},{"class":"PanoramaCameraSequence","id":"sequence_7C37AF7D_76D9_CA54_41CC_AB818A545021","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}]},{"id":"MenuItem_669C35E9_76DB_7E7C_41AD_79490AB3F52E","class":"MenuItem","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","label":trans('MenuItem_669C35E9_76DB_7E7C_41AD_79490AB3F52E.label')},{"id":"MenuItem_669CE5E9_76DB_7E7C_41D2_7CAD7ADF921B","class":"MenuItem","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","label":trans('MenuItem_669CE5E9_76DB_7E7C_41D2_7CAD7ADF921B.label')},{"class":"AnimatedImageResource","colCount":3,"levels":[{"class":"ImageResourceLevel","height":270,"url":"media/res_79B3CC14_76D9_4DD4_4183_9E2072436126_0.webp","width":300}],"frameDuration":62,"frameCount":9,"id":"AnimatedImageResource_66FDF4FF_76DB_7E55_41DA_E15392CFC75E","finalFrame":"first","rowCount":3},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_669355F7_76DB_7E54_41CE_26853FD35B58","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","displayTooltipInTouchScreens":true},{"class":"AnimatedImageResource","colCount":3,"levels":[{"class":"ImageResourceLevel","height":270,"url":"media/res_79B3CC14_76D9_4DD4_4183_9E2072436126_0.webp","width":300}],"frameDuration":62,"frameCount":9,"id":"AnimatedImageResource_66FD24FE_76DB_7E57_41BE_02E2A7C0FCAE","finalFrame":"first","rowCount":3},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_7B29ADCC_76D8_CEBB_41BF_617BCCD3247C","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true}],"start":"this.init()","id":"rootPlayer","data":{"defaultLocale":"en","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"volume":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"rate":1},"name":"Player481","history":{},"displayTooltipInTouchScreens":true},"class":"Player","backgroundColor":["#FFFFFF"],"defaultMenu":["fullscreen","mute","rotation"],"minHeight":0,"minWidth":0,"gap":10,"height":"100%","scrollBarMargin":2,"propagateClick":false,"layout":"absolute","width":"100%","scrollBarColor":"#000000","backgroundColorRatios":[0],"children":["this.MainViewer"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.35, Wed Nov 12 2025