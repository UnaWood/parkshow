	
function add(){
			var txt=document.getElementById("txt");
		   // var a=txt.value;
		   // a++;
			txt.value='dwefc';
		}
		function sub(){


		}
         function WebSocketTest()
         {
            if ("WebSocket" in window)
            {               
               // 打开一个 web socket
               var ws = new WebSocket("wss://vparking.vtrantech.com");
                
               ws.onopen = function()
               {
				    var send = {
					  code: "CarAllGroupInfo",
					  body: 2,
					};
                  // Web Socket 已连接上，使用 send() 方法发送数据
                  ws.send(JSON.stringify(send));
                  alert("数据发送中...");
               };
                
               ws.onmessage = function (evt) 
               { 
                  var received_msg = evt.data;
                  alert("receive = "+received_msg);
               };
                
               ws.onclose = function()
               { 
                  // 关闭 websocket
                  alert("连接已关闭..."); 
               };
            }
            
            else
            {
               // 浏览器不支持 WebSocket
               alert("您的浏览器不支持 WebSocket!");
            }
         }
      

