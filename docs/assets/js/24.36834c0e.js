(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{405:function(n,s,a){"use strict";a.r(s);var t=a(44),i=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"电视直播"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#电视直播"}},[n._v("#")]),n._v(" 电视直播")]),n._v(" "),a("h2",{attrs:{id:"央视频php代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#央视频php代码"}},[n._v("#")]),n._v(" 央视频PHP代码")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("<?php\n    $channels = array(\n            'cctv4k'=>'600002264',\n            'cctv1'=>'600001859',\n            'cctv2'=>'600001800',\n            'cctv3'=>'600001801',\n            'cctv4'=>'600001814',\n            'cctv5'=>'600001818',\n            'cctv5p'=>'600001817',\n            'cctv6'=>'600001802',\n            'cctv7'=>'600004092',\n            'cctv8'=>'600001803',\n            'cctv9'=>'600004078',\n            'cctv10'=>'600001805',\n            'cctv11'=>'600001806',\n            'cctv12'=>'600001807',\n            'cctv13'=>'600001811',\n            'cctv14'=>'600001809',\n            'cctv15'=>'600001815',\n            'cctv17'=>'600001810',\n            'zjws'=>'600002520',\n            'jsws'=>'600002521',\n            'szws'=>'600002481',\n            'gdws'=>'600002485',\n            'hljws'=>'600002498',\n            'dfws'=>'600002483',\n            'flws'=>'600002475'\n    );\n    $pid = $channels[$_GET['pid']];\n    if(!$pid){\n            die('need pid');\n    }\n    $lua_cmd =urlencode(\"\n    function main(splash)\n            splash:go('https://m.yangshipin.cn/video?type=1&pid=$pid')\n        splash:wait(0.5)\n        splash:mouse_click(305, 305)\n        splash:wait(0.1)\n        return splash:har()\n    end\");\n    $source = curl_get_contents(\"http://splash_api_address/execute?lua_source=$lua_cmd\");\n    preg_match('/https:\\/\\/liveinfo(.*?)\"/', $source, $output);\n    $api_url = str_replace('&defn=&', '&defn=fhd&', 'https://liveinfo'.$output[1]);\n    $result = curl_get_contents($api_url);\n    preg_match('/\"playurl\":\"(.*?)\\?from=player/', $result, $output);\n    $play_url = $output[1];\n    //header(\"Content-Type: audio/mpegurl\");\n    //header(\"Content-Disposition: attachment; filename=playlist.m3u\");\n    echo \"#EXTM3U\\r\\n#EXTINF:-1 tvg-name='\".$_GET['pid'].\"', \".$_GET['pid'].\"\\r\\n\".$play_url;\n \n    function curl_get_contents($url)\n    {\n            $header = array(\n            'authority: liveinfo.yangshipin.cn',\n            'user-agent: Mozilla/5.0 (Windows NT 10.2; Win64; x64) AppleWebKit/888.36 (KHTML, like Gecko) Chrome/88',\n            'accept: */*',\n            'referer: https://m.yangshipin.cn/video?'\n            );\n        $ch = curl_init();\n        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);\n        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n        curl_setopt($ch, CURLOPT_URL, $url);\n        $data = curl_exec($ch);\n        curl_close($ch);\n        return $data;\n    }\n?>\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br")])]),a("h2",{attrs:{id:"视频wap端网页地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频wap端网页地址"}},[n._v("#")]),n._v(" 视频WAP端网页地址")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("\n【CCTV】\n超高清4K：https://m.yangshipin.cn/video?type=1&vid=2000266303&pid=600002264\nCCTV1：https://m.yangshipin.cn/video?type=1&vid=2000210103&pid=600001859\nCCTV2：https://m.yangshipin.cn/video?type=1&vid=2000203603&pid=600001800\nCCTV3：https://m.yangshipin.cn/video?type=1&vid=2000203803&pid=600001801\nCCTV4：https://m.yangshipin.cn/video?type=1&vid=2000204803&pid=600001814\nCCTV5：https://m.yangshipin.cn/video?type=1&vid=2000205103&pid=600001818\nCCTV5+：https://m.yangshipin.cn/video?type=1&vid=2000204503&pid=600001817\nCCTV6：https://m.yangshipin.cn/video?type=1&vid=2000203303&pid=600001802\nCCTV7：https://m.yangshipin.cn/video?type=1&vid=2000510003&pid=600004092\nCCTV8：https://m.yangshipin.cn/video?type=1&vid=2000203903&pid=600001803\nCCTV9：https://m.yangshipin.cn/video?type=1&vid=2000499403&pid=600004078\nCCTV10：https://m.yangshipin.cn/video?type=1&vid=2000203503&pid=600001805\nCCTV11：https://m.yangshipin.cn/video?type=1&vid=2000204103&pid=600001806\nCCTV12：https://m.yangshipin.cn/video?type=1&vid=2000202603&pid=600001807\nCCTV13：https://m.yangshipin.cn/video?type=1&vid=2000204603&pid=600001811\nCCTV14：https://m.yangshipin.cn/video?type=1&vid=2000204403&pid=600001809\nCCTV15：https://m.yangshipin.cn/video?type=1&vid=2000205003&pid=600001815\nCCTV16：无\nCCTV17：https://m.yangshipin.cn/video?type=1&vid=2000204203&pid=600001810\n【卫视】\n浙江卫视：https://m.yangshipin.cn/video?type=1&vid=2000295503&pid=600002520\n江苏卫视：https://m.yangshipin.cn/video?type=1&vid=2000295603&pid=600002521\n深圳卫视：https://m.yangshipin.cn/video?type=1&vid=2000292203&pid=600002481\n广东卫视：https://m.yangshipin.cn/video?type=1&vid=2000292703&pid=600002485\n黑龙江卫视：https://m.yangshipin.cn/video?type=1&vid=2000293903&pid=600002498\n东方卫视：https://m.yangshipin.cn/video?type=1&vid=2000292403&pid=600002483\n湖南卫视：https://m.yangshipin.cn/video?type=1&vid=2000296203&pid=600002475\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br")])])])}),[],!1,null,null,null);s.default=i.exports}}]);