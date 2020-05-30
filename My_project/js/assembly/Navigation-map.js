Vue.component("Navigationmap",{
    template:`
    <div class="Navigationmap_01">
      <div id='bg_01'>
        <ul>
          <li id='bg_01_li'>
            <Navi_left id='Navi01'></Navi_left>
          </li>
          <li id='bg_01_li'>
            <Navi_center id='Navi02'></Navi_center>
          </li>
          <li id='bg_01_li'>
            <Navi_right id='Navi03'></Navi_right>
          </li>
        </ul>
      </div>
    </div>
    
    `,
    data(){
      return {
    //     tasks:["吃饭","睡觉","打亮亮"]
      }
    },
    components:{
      Navi_left,Navi_center,Navi_right
    }
    // components:{ todoAdd, todoList }
  })