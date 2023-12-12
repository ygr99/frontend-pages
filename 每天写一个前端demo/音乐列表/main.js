$(document).ready(function() {
  // 用 jQuery 加载歌曲列表
  $.getJSON('songs.json', function(data) {
      var songs = data.songs;

      for (var i = 0; i < songs.length; i++) {
          var song = songs[i];
          var li = $('<li>' + (i+1) + '. ' + song.name + ' - ' + song.artist + '</li>');

          // 为每个列表项添加点击事件
          li.click(function() {
              var audio = $('#player')[0]; // 获取音频元素
              audio.src = $(this).data('url'); // 设置音频地址
              audio.play(); // 播放音乐
          });

          li.data('url', song.url); // 将歌曲地址保存到列表项数据中

          $('.music-list').append(li);
      }
  });
});
