function _0x1f44(){const _0x19c595=['notify','replace','cache','mimetype','unwatchFile','ext','silent','sendAudio','key','msg','593139OQaZwA','WhatsApp','@g.us','2myRqhF','../js/lib/color','concat','caption','../js/lib/exif','chalk','sendButMessage','split','open','downloadAndSaveMediaMessage','message','@adiwajshing/baileys','log','sendButtonText','loggedOut','getName','WebMessageInfo','base64','length','sendList','contacts','viewOnce','Safari','remoteJid','status@broadcast','Standard','mtype','copyNForward','set','send5ButGif','white','messages','3157256gewqNT','fromBuffer','../src/','name','participant','waUploadToServer','sendVideo','getFile','./sessi.json','resolve','subject','../js/lib/functions','fromObject','ignore','map','existsSync','alloc','setStatus','application/octet-stream','245pOExIf','@s.whatsapp.net','user','watchFile','output','ephemeralMessage','statusCode','videoMessage','chat','@broadcast','text','imageMessage','sendTextWithMentions','send5ButImg','fromMe','contacts.update','parseMention','includes','1744638HgRxlj','751830rSskLs','isBuffer','.bin','promises','11728gauMyg','writeFileSync','error','international','sendMessage','0@s.whatsapp.net','status','utf-8','startsWith','pino','relayMessage','BAE5','../js/xd','402465UZinLV','public','contextInfo','Message','endsWith','author','from','test','join','awesome-phonenumber','packname','cMod','send5ButLoc','bind','180rmFgCs','serializeM','viewOnceMessage','messages.upsert','figlet','connection.update','1.0.0','1715766TJkCVF','file-type','matchAll','readViewOnce','./settings','path','keys','decodeJid','Update\x20File\x20Terbaru\x20','sendText','readFileSync','downloadMediaMessage','string','getNumber','textSync'];_0x1f44=function(){return _0x19c595;};return _0x1f44();}const _0x32daec=_0x98ed;function _0x98ed(_0x625c82,_0xfb1082){const _0x1f44b3=_0x1f44();return _0x98ed=function(_0x98ed5e,_0x124c6d){_0x98ed5e=_0x98ed5e-0x17e;let _0x18fbbd=_0x1f44b3[_0x98ed5e];return _0x18fbbd;},_0x98ed(_0x625c82,_0xfb1082);}(function(_0x5b8def,_0x187d0a){const _0x4a4b45=_0x98ed,_0x45a6b2=_0x5b8def();while(!![]){try{const _0x4c6413=-parseInt(_0x4a4b45(0x200))/0x1+-parseInt(_0x4a4b45(0x1a9))/0x2*(parseInt(_0x4a4b45(0x1a6))/0x3)+parseInt(_0x4a4b45(0x1f3))/0x4*(-parseInt(_0x4a4b45(0x1dc))/0x5)+-parseInt(_0x4a4b45(0x18d))/0x6+parseInt(_0x4a4b45(0x1ee))/0x7+-parseInt(_0x4a4b45(0x1c9))/0x8+parseInt(_0x4a4b45(0x186))/0x9*(parseInt(_0x4a4b45(0x1ef))/0xa);if(_0x4c6413===_0x187d0a)break;else _0x45a6b2['push'](_0x45a6b2['shift']());}catch(_0xe3e764){_0x45a6b2['push'](_0x45a6b2['shift']());}}}(_0x1f44,0x502ee),require(_0x32daec(0x191)));const {default:xdconnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x32daec(0x1b4)),{state}=useSingleFileAuthState(_0x32daec(0x1d1)),pino=require(_0x32daec(0x1fc)),{Boom}=require('@hapi/boom'),fs=require('fs'),chalk=require(_0x32daec(0x1ae)),figlet=require(_0x32daec(0x18a)),FileType=require(_0x32daec(0x18e)),path=require(_0x32daec(0x192)),PhoneNumber=require(_0x32daec(0x181)),{color,bgcolor,mycolor}=require(_0x32daec(0x1aa)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x32daec(0x1ad)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x32daec(0x1d4)),store=makeInMemoryStore({'logger':pino()['child']({'level':'silent','stream':'store'})});async function startxd(){const _0xf38425=_0x32daec;let {version:_0x521009,isLatest:_0x4345e9}=await fetchLatestBaileysVersion();const _0x458aaf=xdconnect({'logger':pino({'level':_0xf38425(0x1a2)}),'printQRInTerminal':!![],'browser':['by\x20kurrxd\x20official',_0xf38425(0x1bf),_0xf38425(0x18c)],'auth':state,'version':_0x521009});return store[_0xf38425(0x185)](_0x458aaf['ev']),console['log'](color(figlet[_0xf38425(0x19b)]('Jb\x20Whatsapp\x20v2',{'font':_0xf38425(0x1c2),'horizontalLayout':'default','vertivalLayout':'default','width':0x50,'whitespaceBreak':![]}),_0xf38425(0x1c7))),_0x458aaf['ev']['on'](_0xf38425(0x189),async _0xd9ef32=>{const _0x412b9c=_0xf38425;try{m=_0xd9ef32[_0x412b9c(0x1c8)][0x0];if(!m[_0x412b9c(0x1b3)])return;m[_0x412b9c(0x1b3)]=Object[_0x412b9c(0x193)](m['message'])[0x0]===_0x412b9c(0x1e1)?m['message'][_0x412b9c(0x1e1)][_0x412b9c(0x1b3)]:m[_0x412b9c(0x1b3)];if(m[_0x412b9c(0x1a4)]&&m[_0x412b9c(0x1a4)][_0x412b9c(0x1c0)]===_0x412b9c(0x1c1))return;if(!_0x458aaf['public']&&!m[_0x412b9c(0x1a4)][_0x412b9c(0x1ea)]&&_0xd9ef32['type']===_0x412b9c(0x19c))return;if(m['key']['id'][_0x412b9c(0x1fb)](_0x412b9c(0x1fe))&&m[_0x412b9c(0x1a4)]['id'][_0x412b9c(0x1bb)]===0x10)return;m=smsg(_0x458aaf,m,store),require(_0x412b9c(0x1ff))(_0x458aaf,m,_0xd9ef32,store);}catch(_0xa13725){console[_0x412b9c(0x1b5)](_0xa13725);}}),_0x458aaf[_0xf38425(0x194)]=_0x3c621f=>{const _0x559054=_0xf38425;if(!_0x3c621f)return _0x3c621f;if(/:\d+@/gi[_0x559054(0x17f)](_0x3c621f)){let _0x255f0c=jidDecode(_0x3c621f)||{};return _0x255f0c[_0x559054(0x1de)]&&_0x255f0c['server']&&_0x255f0c[_0x559054(0x1de)]+'@'+_0x255f0c['server']||_0x3c621f;}else return _0x3c621f;},_0x458aaf['ev']['on'](_0xf38425(0x1eb),_0x67e2de=>{const _0x376f1a=_0xf38425;for(let _0x489ba7 of _0x67e2de){let _0x7aa105=_0x458aaf[_0x376f1a(0x194)](_0x489ba7['id']);if(store&&store['contacts'])store[_0x376f1a(0x1bd)][_0x7aa105]={'id':_0x7aa105,'name':_0x489ba7[_0x376f1a(0x19c)]};}}),_0x458aaf[_0xf38425(0x1b8)]=(_0x34547a,_0x411394=![])=>{const _0x806bab=_0xf38425;id=_0x458aaf['decodeJid'](_0x34547a),_0x411394=_0x458aaf['withoutContact']||_0x411394;let _0xc3ac67;if(id[_0x806bab(0x204)](_0x806bab(0x1a8)))return new Promise(async _0x4fde10=>{const _0x1ed0b2=_0x806bab;_0xc3ac67=store[_0x1ed0b2(0x1bd)][id]||{};if(!(_0xc3ac67[_0x1ed0b2(0x1cc)]||_0xc3ac67[_0x1ed0b2(0x1d3)]))_0xc3ac67=_0x458aaf['groupMetadata'](id)||{};_0x4fde10(_0xc3ac67['name']||_0xc3ac67['subject']||PhoneNumber('+'+id[_0x1ed0b2(0x19d)](_0x1ed0b2(0x1dd),''))[_0x1ed0b2(0x19a)](_0x1ed0b2(0x1f6)));});else _0xc3ac67=id===_0x806bab(0x1f8)?{'id':id,'name':_0x806bab(0x1a7)}:id===_0x458aaf[_0x806bab(0x194)](_0x458aaf[_0x806bab(0x1de)]['id'])?_0x458aaf[_0x806bab(0x1de)]:store[_0x806bab(0x1bd)][id]||{};return(_0x411394?'':_0xc3ac67[_0x806bab(0x1cc)])||_0xc3ac67[_0x806bab(0x1d3)]||_0xc3ac67['verifiedName']||PhoneNumber('+'+_0x34547a['replace']('@s.whatsapp.net',''))['getNumber']('international');},_0x458aaf[_0xf38425(0x1da)]=_0x357f81=>{const _0x3618b1=_0xf38425;return _0x458aaf['query']({'tag':'iq','attrs':{'to':'@s.whatsapp.net','type':_0x3618b1(0x1c5),'xmlns':_0x3618b1(0x1f9)},'content':[{'tag':_0x3618b1(0x1f9),'attrs':{},'content':Buffer[_0x3618b1(0x17e)](_0x357f81,_0x3618b1(0x1fa))}]}),_0x357f81;},_0x458aaf[_0xf38425(0x201)]=!![],_0x458aaf[_0xf38425(0x187)]=_0x48c998=>smsg(_0x458aaf,_0x48c998,store),_0x458aaf['ev']['on'](_0xf38425(0x18b),_0x4b71af=>{const _0x5929ad=_0xf38425,{connection:_0x5dd877,lastDisconnect:_0x4dd0a9}=_0x4b71af;if(_0x5dd877==='close')_0x4dd0a9[_0x5929ad(0x1f5)]?.[_0x5929ad(0x1e0)]?.[_0x5929ad(0x1e2)]!==DisconnectReason[_0x5929ad(0x1b7)]?startxd():'';else{if(_0x5dd877===_0x5929ad(0x1b1))console[_0x5929ad(0x1b5)](_0x4b71af);}}),_0x458aaf[_0xf38425(0x1c6)]=async(_0x2b98a1,_0x34938f='',_0x507187='',_0x35366a=[],_0x2ff3ec={})=>{const _0x2e38f2=_0xf38425;let _0xd88a93=await prepareWAMessageMedia({'video':thumb,'gifPlayback':!![]},{'upload':_0x458aaf[_0x2e38f2(0x1ce)]});const _0xf8134=generateWAMessageFromContent(m[_0x2e38f2(0x1e4)],proto[_0x2e38f2(0x203)]['fromObject']({'templateMessage':{'hydratedTemplate':{'videoMessage':_0xd88a93['videoMessage'],'hydratedContentText':_0x34938f,'hydratedFooterText':_0x507187,'hydratedButtons':_0x35366a}}}),_0x2ff3ec);_0x458aaf[_0x2e38f2(0x1fd)](_0x2b98a1,_0xf8134[_0x2e38f2(0x1b3)],{'messageId':_0xf8134['key']['id']});},_0x458aaf[_0xf38425(0x1e9)]=async(_0x2d3bee,_0x109358='',_0x24ac97='',_0x19b60f,_0x3bf47c=[],_0x4bd62b={})=>{const _0x2ed3f7=_0xf38425;let _0x1776ba=await prepareWAMessageMedia({'image':_0x19b60f},{'upload':_0x458aaf['waUploadToServer']});var _0x41558b=generateWAMessageFromContent(m[_0x2ed3f7(0x1e4)],proto['Message']['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x1776ba[_0x2ed3f7(0x1e7)],'hydratedContentText':_0x109358,'hydratedFooterText':_0x24ac97,'hydratedButtons':_0x3bf47c}}}),_0x4bd62b);_0x458aaf['relayMessage'](_0x2d3bee,_0x41558b[_0x2ed3f7(0x1b3)],{'messageId':_0x41558b['key']['id']});},_0x458aaf['send5ButVid']=async(_0x5d0b26,_0x8d1811='',_0x2be84c='',_0x580481,_0x25fc1a=[],_0x2fc84f={})=>{const _0x136653=_0xf38425;let _0x5d11ae=await prepareWAMessageMedia({'video':_0x580481},{'upload':_0x458aaf['waUploadToServer']});var _0x192cc7=generateWAMessageFromContent(m[_0x136653(0x1e4)],proto['Message'][_0x136653(0x1d5)]({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x5d11ae[_0x136653(0x1e3)],'hydratedContentText':_0x8d1811,'hydratedFooterText':_0x2be84c,'hydratedButtons':_0x25fc1a}}}),_0x2fc84f);_0x458aaf['relayMessage'](_0x5d0b26,_0x192cc7[_0x136653(0x1b3)],{'messageId':_0x192cc7[_0x136653(0x1a4)]['id']});},_0x458aaf[_0xf38425(0x184)]=async(_0x2ebf2e,_0x5cfe70='',_0xfe55c5='',_0x4eb422,_0x5e23c4=[],_0x292b31={})=>{const _0x5d1b7a=_0xf38425;var _0x234b74=generateWAMessageFromContent(m['chat'],proto[_0x5d1b7a(0x203)][_0x5d1b7a(0x1d5)]({'templateMessage':{'hydratedTemplate':{'hydratedContentText':_0x5cfe70,'locationMessage':{'jpegThumbnail':_0x4eb422},'hydratedFooterText':_0xfe55c5,'hydratedButtons':_0x5e23c4}}}),_0x292b31);_0x458aaf[_0x5d1b7a(0x1fd)](_0x2ebf2e,_0x234b74[_0x5d1b7a(0x1b3)],{'messageId':_0x234b74[_0x5d1b7a(0x1a4)]['id']});},_0x458aaf[_0xf38425(0x1bc)]=async(_0x25d181,_0x9bcb42='',_0x44d60f='',_0x475f2c='',_0x3c75f6='',_0x4ad7a3=[],_0x3dbca1={})=>{const _0x3a071b=_0xf38425;var _0x43e7b5=generateWAMessageFromContent(m['chat'],proto[_0x3a071b(0x203)][_0x3a071b(0x1d5)]({'listMessage':{'title':_0x9bcb42,'description':_0x44d60f,'buttonText':_0x475f2c,'footerText':_0x3c75f6,'listType':'SELECT','sections':_0x4ad7a3,'listType':0x1}}),_0x3dbca1);_0x458aaf[_0x3a071b(0x1fd)](_0x25d181,_0x43e7b5[_0x3a071b(0x1b3)],{'messageId':_0x43e7b5[_0x3a071b(0x1a4)]['id']});},_0x458aaf[_0xf38425(0x1b6)]=(_0x5708f4,_0x1efb6d=[],_0x52ece5,_0x8f295a,_0x1ef7d7='',_0x315d3a={})=>{const _0xdb3165=_0xf38425;let _0x430138={'text':_0x52ece5,'footer':_0x8f295a,'buttons':_0x1efb6d,'headerType':0x2,..._0x315d3a};_0x458aaf[_0xdb3165(0x1f7)](_0x5708f4,_0x430138,{'quoted':_0x1ef7d7,..._0x315d3a});},_0x458aaf[_0xf38425(0x1af)]=async(_0x389048,_0x484d5a,_0x6b2e54,_0x3cabca=[],_0x563974)=>{const _0x26e95d=_0xf38425;let _0x6a0071={'text':_0x484d5a,'footer':_0x6b2e54,'buttons':_0x3cabca,'headerType':0x1};return _0x458aaf[_0x26e95d(0x1f7)](_0x389048,_0x6a0071,{'quoted':_0x563974});},_0x458aaf[_0xf38425(0x1ec)]=(_0xf8591d='')=>{const _0x3aecb1=_0xf38425;return[..._0xf8591d['matchAll'](/@([0-9]{5,16}|0)/g)][_0x3aecb1(0x1d7)](_0x52f141=>_0x52f141[0x1]+'@s.whatsapp.net');},_0x458aaf[_0xf38425(0x196)]=(_0x2e7494,_0x41c6d7,_0x6ee882='',_0x2536af)=>_0x458aaf['sendMessage'](_0x2e7494,{'text':_0x41c6d7,..._0x2536af},{'quoted':_0x6ee882}),_0x458aaf['sendImage']=async(_0x40bcee,_0x5740d3,_0x1664dd='',_0x256270='',_0x15f675)=>{const _0x3ca4bb=_0xf38425;let _0x2cdcac=Buffer['isBuffer'](_0x5740d3)?_0x5740d3:/^data:.*?\/.*?;base64,/i['test'](_0x5740d3)?Buffer[_0x3ca4bb(0x17e)](_0x5740d3[_0x3ca4bb(0x1b0)]`,`[0x1],_0x3ca4bb(0x1ba)):/^https?:\/\//[_0x3ca4bb(0x17f)](_0x5740d3)?await await getBuffer(_0x5740d3):fs[_0x3ca4bb(0x1d8)](_0x5740d3)?fs[_0x3ca4bb(0x197)](_0x5740d3):Buffer[_0x3ca4bb(0x1d9)](0x0);return await _0x458aaf[_0x3ca4bb(0x1f7)](_0x40bcee,{'image':_0x2cdcac,'caption':_0x1664dd,..._0x15f675},{'quoted':_0x256270});},_0x458aaf[_0xf38425(0x1cf)]=async(_0x40a7ce,_0x360b4e,_0x4c624b='',_0x58e1a8='',_0x500d51=![],_0x1f22d3)=>{const _0x40e8bd=_0xf38425;let _0x38fb38=Buffer[_0x40e8bd(0x1f0)](_0x360b4e)?_0x360b4e:/^data:.*?\/.*?;base64,/i['test'](_0x360b4e)?Buffer[_0x40e8bd(0x17e)](_0x360b4e['split']`,`[0x1],_0x40e8bd(0x1ba)):/^https?:\/\//['test'](_0x360b4e)?await await getBuffer(_0x360b4e):fs[_0x40e8bd(0x1d8)](_0x360b4e)?fs[_0x40e8bd(0x197)](_0x360b4e):Buffer[_0x40e8bd(0x1d9)](0x0);return await _0x458aaf[_0x40e8bd(0x1f7)](_0x40a7ce,{'video':_0x38fb38,'caption':_0x4c624b,'gifPlayback':_0x500d51,..._0x1f22d3},{'quoted':_0x58e1a8});},_0x458aaf[_0xf38425(0x1a3)]=async(_0x387072,_0x4b73f3,_0x2f76e0='',_0x446f6f=![],_0x1c6a8a)=>{const _0x249636=_0xf38425;let _0xc5cb7f=Buffer[_0x249636(0x1f0)](_0x4b73f3)?_0x4b73f3:/^data:.*?\/.*?;base64,/i['test'](_0x4b73f3)?Buffer[_0x249636(0x17e)](_0x4b73f3[_0x249636(0x1b0)]`,`[0x1],_0x249636(0x1ba)):/^https?:\/\//[_0x249636(0x17f)](_0x4b73f3)?await await getBuffer(_0x4b73f3):fs[_0x249636(0x1d8)](_0x4b73f3)?fs[_0x249636(0x197)](_0x4b73f3):Buffer['alloc'](0x0);return await _0x458aaf[_0x249636(0x1f7)](_0x387072,{'audio':_0xc5cb7f,'ptt':_0x446f6f,..._0x1c6a8a},{'quoted':_0x2f76e0});},_0x458aaf[_0xf38425(0x1e8)]=async(_0x22a75a,_0x609b07,_0x15922f,_0x4e9385={})=>_0x458aaf[_0xf38425(0x1f7)](_0x22a75a,{'text':_0x609b07,'contextInfo':{'mentionedJid':[..._0x609b07[_0xf38425(0x18f)](/@(\d{0,16})/g)][_0xf38425(0x1d7)](_0x41f8c1=>_0x41f8c1[0x1]+_0xf38425(0x1dd))},..._0x4e9385},{'quoted':_0x15922f}),_0x458aaf['sendImageAsSticker']=async(_0xa324cc,_0x4de489,_0x59a1df,_0x378852={})=>{const _0x1c21f0=_0xf38425;let _0x5a22ca=Buffer[_0x1c21f0(0x1f0)](_0x4de489)?_0x4de489:/^data:.*?\/.*?;base64,/i[_0x1c21f0(0x17f)](_0x4de489)?Buffer[_0x1c21f0(0x17e)](_0x4de489[_0x1c21f0(0x1b0)]`,`[0x1],'base64'):/^https?:\/\//[_0x1c21f0(0x17f)](_0x4de489)?await await getBuffer(_0x4de489):fs[_0x1c21f0(0x1d8)](_0x4de489)?fs[_0x1c21f0(0x197)](_0x4de489):Buffer[_0x1c21f0(0x1d9)](0x0),_0x1a6706;return _0x378852&&(_0x378852[_0x1c21f0(0x182)]||_0x378852['author'])?_0x1a6706=await writeExifImg(_0x5a22ca,_0x378852):_0x1a6706=await imageToWebp(_0x5a22ca),await _0x458aaf[_0x1c21f0(0x1f7)](_0xa324cc,{'sticker':{'url':_0x1a6706},..._0x378852},{'quoted':_0x59a1df}),_0x1a6706;},_0x458aaf['sendVideoAsSticker']=async(_0x3b90b6,_0x47949f,_0x14499a,_0x55e330={})=>{const _0x5b8c74=_0xf38425;let _0x3634e9=Buffer[_0x5b8c74(0x1f0)](_0x47949f)?_0x47949f:/^data:.*?\/.*?;base64,/i['test'](_0x47949f)?Buffer['from'](_0x47949f['split']`,`[0x1],'base64'):/^https?:\/\//['test'](_0x47949f)?await await getBuffer(_0x47949f):fs[_0x5b8c74(0x1d8)](_0x47949f)?fs[_0x5b8c74(0x197)](_0x47949f):Buffer[_0x5b8c74(0x1d9)](0x0),_0x288a20;return _0x55e330&&(_0x55e330[_0x5b8c74(0x182)]||_0x55e330[_0x5b8c74(0x205)])?_0x288a20=await writeExifVid(_0x3634e9,_0x55e330):_0x288a20=await videoToWebp(_0x3634e9),await _0x458aaf[_0x5b8c74(0x1f7)](_0x3b90b6,{'sticker':{'url':_0x288a20},..._0x55e330},{'quoted':_0x14499a}),_0x288a20;},_0x458aaf[_0xf38425(0x1b2)]=async(_0x27eb2c,_0x441781,_0x4d96cc=!![])=>{const _0x415b09=_0xf38425;let _0x86775d=_0x27eb2c[_0x415b09(0x1a5)]?_0x27eb2c[_0x415b09(0x1a5)]:_0x27eb2c,_0x41ce75=(_0x27eb2c['msg']||_0x27eb2c)[_0x415b09(0x19f)]||'',_0x57bc14=_0x27eb2c[_0x415b09(0x1c3)]?_0x27eb2c[_0x415b09(0x1c3)][_0x415b09(0x19d)](/Message/gi,''):_0x41ce75[_0x415b09(0x1b0)]('/')[0x0];const _0x2fd3f0=await downloadContentFromMessage(_0x86775d,_0x57bc14);let _0x31bd95=Buffer[_0x415b09(0x17e)]([]);for await(const _0x50a0dc of _0x2fd3f0){_0x31bd95=Buffer[_0x415b09(0x1ab)]([_0x31bd95,_0x50a0dc]);}let _0xd1e25b=await FileType['fromBuffer'](_0x31bd95);return trueFileName=_0x4d96cc?_0x441781+'.'+_0xd1e25b[_0x415b09(0x1a1)]:_0x441781,await fs[_0x415b09(0x1f4)](trueFileName,_0x31bd95),trueFileName;},_0x458aaf[_0xf38425(0x198)]=async _0x438faf=>{const _0x35ae28=_0xf38425;let _0x3bf943=(_0x438faf[_0x35ae28(0x1a5)]||_0x438faf)['mimetype']||'',_0x2e19f2=_0x438faf[_0x35ae28(0x1c3)]?_0x438faf[_0x35ae28(0x1c3)][_0x35ae28(0x19d)](/Message/gi,''):_0x3bf943[_0x35ae28(0x1b0)]('/')[0x0];const _0x1626d5=await downloadContentFromMessage(_0x438faf,_0x2e19f2);let _0x52f3f0=Buffer[_0x35ae28(0x17e)]([]);for await(const _0x139ecb of _0x1626d5){_0x52f3f0=Buffer['concat']([_0x52f3f0,_0x139ecb]);}return _0x52f3f0;},_0x458aaf[_0xf38425(0x1c4)]=async(_0x454d8a,_0x28d7d,_0xdf9609=![],_0x35f2a6={})=>{const _0xda302f=_0xf38425;let _0xda29d1;_0x35f2a6[_0xda302f(0x190)]&&(_0x28d7d[_0xda302f(0x1b3)]=_0x28d7d[_0xda302f(0x1b3)]&&_0x28d7d['message'][_0xda302f(0x1e1)]&&_0x28d7d[_0xda302f(0x1b3)]['ephemeralMessage'][_0xda302f(0x1b3)]?_0x28d7d['message'][_0xda302f(0x1e1)]['message']:_0x28d7d[_0xda302f(0x1b3)]||undefined,_0xda29d1=Object[_0xda302f(0x193)](_0x28d7d[_0xda302f(0x1b3)][_0xda302f(0x188)][_0xda302f(0x1b3)])[0x0],delete(_0x28d7d[_0xda302f(0x1b3)]&&_0x28d7d[_0xda302f(0x1b3)][_0xda302f(0x1d6)]?_0x28d7d[_0xda302f(0x1b3)][_0xda302f(0x1d6)]:_0x28d7d[_0xda302f(0x1b3)]||undefined),delete _0x28d7d['message'][_0xda302f(0x188)]['message'][_0xda29d1][_0xda302f(0x1be)],_0x28d7d['message']={..._0x28d7d[_0xda302f(0x1b3)][_0xda302f(0x188)][_0xda302f(0x1b3)]});let _0x2ea074=Object['keys'](_0x28d7d['message'])[0x0],_0x16b8b9=await generateForwardMessageContent(_0x28d7d,_0xdf9609),_0xdaef4b=Object[_0xda302f(0x193)](_0x16b8b9)[0x0],_0x9b7310={};if(_0x2ea074!='conversation')_0x9b7310=_0x28d7d[_0xda302f(0x1b3)][_0x2ea074][_0xda302f(0x202)];_0x16b8b9[_0xdaef4b]['contextInfo']={..._0x9b7310,..._0x16b8b9[_0xdaef4b][_0xda302f(0x202)]};const _0xb1c58b=await generateWAMessageFromContent(_0x454d8a,_0x16b8b9,_0x35f2a6?{..._0x16b8b9[_0xdaef4b],..._0x35f2a6,..._0x35f2a6['contextInfo']?{'contextInfo':{..._0x16b8b9[_0xdaef4b][_0xda302f(0x202)],..._0x35f2a6[_0xda302f(0x202)]}}:{}}:{});return await _0x458aaf[_0xda302f(0x1fd)](_0x454d8a,_0xb1c58b[_0xda302f(0x1b3)],{'messageId':_0xb1c58b[_0xda302f(0x1a4)]['id']}),_0xb1c58b;},_0x458aaf[_0xf38425(0x183)]=(_0x5ae91e,_0x26a6dd,_0x483d20='',_0x20e05a=_0x458aaf[_0xf38425(0x1de)]['id'],_0x288e5c={})=>{const _0x58acd3=_0xf38425;let _0x194624=Object[_0x58acd3(0x193)](_0x26a6dd[_0x58acd3(0x1b3)])[0x0],_0x16567c=_0x194624===_0x58acd3(0x1e1);_0x16567c&&(_0x194624=Object['keys'](_0x26a6dd['message']['ephemeralMessage'][_0x58acd3(0x1b3)])[0x0]);let _0x15a3a9=_0x16567c?_0x26a6dd['message']['ephemeralMessage'][_0x58acd3(0x1b3)]:_0x26a6dd[_0x58acd3(0x1b3)],_0x514825=_0x15a3a9[_0x194624];if(typeof _0x514825==='string')_0x15a3a9[_0x194624]=_0x483d20||_0x514825;else{if(_0x514825[_0x58acd3(0x1ac)])_0x514825[_0x58acd3(0x1ac)]=_0x483d20||_0x514825[_0x58acd3(0x1ac)];else{if(_0x514825[_0x58acd3(0x1e6)])_0x514825['text']=_0x483d20||_0x514825[_0x58acd3(0x1e6)];}}if(typeof _0x514825!==_0x58acd3(0x199))_0x15a3a9[_0x194624]={..._0x514825,..._0x288e5c};if(_0x26a6dd[_0x58acd3(0x1a4)][_0x58acd3(0x1cd)])_0x20e05a=_0x26a6dd[_0x58acd3(0x1a4)][_0x58acd3(0x1cd)]=_0x20e05a||_0x26a6dd[_0x58acd3(0x1a4)][_0x58acd3(0x1cd)];else{if(_0x26a6dd['key'][_0x58acd3(0x1cd)])_0x20e05a=_0x26a6dd[_0x58acd3(0x1a4)]['participant']=_0x20e05a||_0x26a6dd[_0x58acd3(0x1a4)][_0x58acd3(0x1cd)];}if(_0x26a6dd[_0x58acd3(0x1a4)]['remoteJid'][_0x58acd3(0x1ed)](_0x58acd3(0x1dd)))_0x20e05a=_0x20e05a||_0x26a6dd[_0x58acd3(0x1a4)]['remoteJid'];else{if(_0x26a6dd[_0x58acd3(0x1a4)]['remoteJid'][_0x58acd3(0x1ed)](_0x58acd3(0x1e5)))_0x20e05a=_0x20e05a||_0x26a6dd[_0x58acd3(0x1a4)][_0x58acd3(0x1c0)];}return _0x26a6dd[_0x58acd3(0x1a4)]['remoteJid']=_0x5ae91e,_0x26a6dd[_0x58acd3(0x1a4)][_0x58acd3(0x1ea)]=_0x20e05a===_0x458aaf[_0x58acd3(0x1de)]['id'],proto[_0x58acd3(0x1b9)]['fromObject'](_0x26a6dd);},_0x458aaf[_0xf38425(0x1d0)]=async(_0x1a8562,_0x4dd8d7)=>{const _0x3398a2=_0xf38425;let _0x23909c,_0x131caf=Buffer['isBuffer'](_0x1a8562)?_0x1a8562:/^data:.*?\/.*?;base64,/i['test'](_0x1a8562)?Buffer[_0x3398a2(0x17e)](_0x1a8562[_0x3398a2(0x1b0)]`,`[0x1],'base64'):/^https?:\/\//[_0x3398a2(0x17f)](_0x1a8562)?await(_0x23909c=await getBuffer(_0x1a8562)):fs[_0x3398a2(0x1d8)](_0x1a8562)?(filename=_0x1a8562,fs['readFileSync'](_0x1a8562)):typeof _0x1a8562===_0x3398a2(0x199)?_0x1a8562:Buffer[_0x3398a2(0x1d9)](0x0),_0x3f0a09=await FileType[_0x3398a2(0x1ca)](_0x131caf)||{'mime':_0x3398a2(0x1db),'ext':_0x3398a2(0x1f1)};filename=path[_0x3398a2(0x180)](__filename,_0x3398a2(0x1cb)+new Date()*0x1+'.'+_0x3f0a09[_0x3398a2(0x1a1)]);if(_0x131caf&&_0x4dd8d7)fs[_0x3398a2(0x1f2)]['writeFile'](filename,_0x131caf);return{'res':_0x23909c,'filename':filename,'size':await getSizeMedia(_0x131caf),..._0x3f0a09,'data':_0x131caf};},_0x458aaf;}startxd();let file=require[_0x32daec(0x1d2)](__filename);fs[_0x32daec(0x1df)](file,()=>{const _0xfcbef=_0x32daec;fs[_0xfcbef(0x1a0)](file),console['log'](chalk['yellowBright'](_0xfcbef(0x195)+__filename)),delete require[_0xfcbef(0x19e)][file],require(file);});