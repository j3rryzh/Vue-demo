<template>
  <div ref="gantt"></div>
</template>

<script>
import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
export default {
  name: "gantt",
  props: {
    mainData: Array
  },
  data() {
    return {
      mainGanttData: {
        data: [],
        links: []
      },
      mainData: [
          {
            id: 1, // 任务ID
            project_num:'p1',
            project_type:'项目一',
            text: "任务一",
            start_date: "03-04-2020", // 日-月-年 
            type: "project",
            render: "split",
            parent: 0, //父任务ID  自己为父任务 ID为0
          },
          {
            id: 2,
            text: "第一阶段",
            start_date: "03-04-2020", //开始时间
            end_date: "03-12-2020", //结束时间
            parent: 1,
          },
          {
            id: 3,
            text: "第二阶段",
            start_date: "12-12-2020",
            end_date: "12-12-2021",
            duration: 2,
            parent: 1,
            color:'green'
          },
          {
            id: 4,
            text: "第三阶段",
            start_date: "12-12-2022",
            end_date: "12-12-2023",
            duration: 1,
            parent: 1,
          },
          {
            id: 5,
            project_num:'p2',
            project_type:'项目二',
            text: "任务二",
            start_date: "12-12-2024",
            type: "project",
            render: "split",
            parent: 0,
          },
        ],

      // demo数据
      // mainGanttData:{
      //   data:[
      // {
      //   id: "client",
      //   text: "客户端",
      //   start_date: "2020-4-12",
      //   demand: "-",
      //   duration: 3,
      // },
      // {
      //   id: "web",
      //   text: "Web开发组",
      //   start_date: "2020-4-12",
      //   demand: "-",
      //   duration: 1,
      //   parent: "client",
      // },
      // {
      //   id: "sakurahuang",
      //   text: "sakurahuang",
      //   start_date: "2020-4-12",
      //   demand: "联系我小程序插件的cgi从node迁移到hiweb",
      //   duration: 1,
      //   parent: "web",
      // },
      // {
      //   id: "sakurahuang1",
      //   text: "",
      //   start_date: "2020-4-12",
      //   demand: "自研白板",
      //   duration: 1,
      //   parent: "sakurahuang",
      // },
      // {
      //   id: "tdreamhuang",
      //   text: "tdreamhuang",
      //   start_date: "2020-4-12",
      //   demand: "联系我小程序插件的cgi从node迁移到hiweb",
      //   duration: 1,
      //   parent: "web",
      // },
      //   ],
      //   links: [],
      // },
    };
  },
  mounted() {
    this.handleGantt();
  },
  watch: {
    mainData() {
      this.handleGantt();
    }
  },
  methods: {
    handleGantt() {
      this.mainGanttData["data"] = this.mainData;
      const self = this;
      // 这里设置左边列的标题，宽度，标题对齐方式
      gantt.config.columns = [
      { name: "project_num", label: "项目编码", width: 80,align: "center"},
      { name: "project_type", label: "项目类别", width: 80, align: "center"},
      { name: "text", label: "项目名称", width: 100, align: "center" },
     // { name: "add", label: "" }, // ➕icon列显示 点击弹出添加框 隐藏没有
    ];
    // 时间安排显示代码块
gantt.config.scale_unit = "year"; //第一个时间尺度，即X轴的单位，包括："minute", "hour", "day", "week", "month", "year"
gantt.config.step = 1;
gantt.config.date_scale="%Y";
gantt.config.start_date= new Date(2020,0,1); // 0代表1月 11代表12月
gantt.config.end_date= new Date(2025,11,31) // 0代表1月 11代表12月
 

      // 使用气泡和竖线要在这里加配置
      gantt.plugins({
        tooltip: true,
        marker: true
      });

      gantt.init(this.$refs.gantt);
      // console.log("mainGanttData");
      // console.log(this.mainGanttData);
      // 这里要清一下，不然tab互切的时候，不同tab甘特图数据会相互影响
      gantt.clearAll();
      gantt.parse(this.mainGanttData);
      if (this.mainGanttData.data.length === 0) {
        gantt.clearAll();
      }
      gantt.eachTask(function(task) {
        task.$open = true;
      });
      gantt.render();
      // 设置柱形工作条颜色和文字
      this.setGanttTaskCSS(gantt);
      // 设置鼠标悬浮气泡
      this.setGanttTooltip(gantt);

      // 设置竖线
      this.setGanttMarker(gantt);

      // gantt.attachEvent("onError", function (errorMessage) {
      //   debugger;
      //   return true;
      // });
    },
    setGanttTaskCSS(gantt) {
      gantt.templates.task_text = function(start, end, task) {
        if (task.func_cnt || task.func_cnt === 0) {
          return `功能需求&技术需求：${task.func_cnt}个，工时： ${task.work_time} d`;
        } else {
          return "工时" + task.work_time + "d";
        }
        // return "<b>Text:</b> "+task.text+",<b> Holders:</b> "+task.users;
      };
      gantt.templates.task_class = function(start, end, task) {
        if (task.func_cnt || task.func_cnt === 0) {
          return "gantt_group_task_color";
        }
      };
    },
    setGanttTooltip(gantt) {
      const self = this;
      gantt.templates.tooltip_text = function(start, end, task) {
        // https://docs.dhtmlx.com/chart__dhxtooltip.html
        if (task.type === "client") {
          return self.handleTooltipClient(task);
        } else if (task.type === "group") {
          return self.groupToolTip(task);
        }
      };
    },
    setGanttMarker(gantt) {
      gantt.addMarker({
        start_date: new Date(),
        css: "gantt_today_marker",
        text: "今日"
      });
      if (this.ganttObj.ted_time) {
        gantt.addMarker({
          start_date: new Date(this.ganttObj.ted_time),
          css: "gantt_GM_Exper_marker",
          text: "ted体验"
        });
      }
    },
    handleTooltipClient(task) {
      let tpl = `<header style="display: flex;">
        <section style="width: 100px;"></section>
        <section style="width: 40px;">功能</section>
        <section style="width: 40px;">技术</section>
        <section style="width: 40px;">其他</section>
        <section style="width: 40px;">bug</section>
    </header>
    <section style="display: flex;">
        <section style="width: 100px;margin-right:5px;">总和</section>
        <section style="width: 40px;">${task.func_cnt}</section>
        <section style="width: 40px;">${task.tech_cnt}</section>
        <section style="width: 40px;">${task.other_cnt}</section>
        <section style="width: 40px;">${task.bug_cnt}</section>
    </section>`;
      if (task.groupInfo && task.groupInfo.length > 0) {
        task.groupInfo.forEach(group => {
          tpl += `<section style="display: flex;">
        <section style="width: 100px;overflow:hidden;margin-right:5px;">${group.text}</section>
        <section style="width: 40px;">${group.func_cnt}</section>
        <section style="width: 40px;">${group.tech_cnt}</section>
        <section style="width: 40px;">${group.other_cnt}</section>
        <section style="width: 40px;">${group.bug_cnt}</section>
    </section>`;
        });
      }
      return tpl;
    },
    groupToolTip(task) {
      let tpl = `<header style="display: flex;">
        <section style="width: 40px;">功能</section>
        <section style="width: 40px;">技术</section>
        <section style="width: 40px;">其他</section>
        <section style="width: 40px;">bug</section>
    </header>
    <section style="display: flex;">
        <section style="width: 40px;">${task.func_cnt}</section>
        <section style="width: 40px;">${task.tech_cnt}</section>
        <section style="width: 40px;">${task.other_cnt}</section>
        <section style="width: 40px;">${task.bug_cnt}</section>
    </section>`;
      return tpl;
    }
  }
};
</script>
