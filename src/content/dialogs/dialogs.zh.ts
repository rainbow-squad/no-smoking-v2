import { Content } from "../../constants";
import { MultilineContent } from "../types";
import { NL, N2, ND, B, I } from "./constants";

const donate_link = process.env.DONATE_LINK;
const tg_group_link = process.env.TG_GROUP_LINK;

export const dialogsZh: MultilineContent = {
  [Content.MESSAGE]: "已收到您的消息",
  [Content.ERROR]: "🍄 出了点问题。{{error}}",
  [Content.USER_UNKNOWN]: `
    🤖 ${B}此功能仅对已授权用户开放${B}${ND}
    请点击下方按钮登录。
  `,
  [Content.START_NEW]: `
    你好！🙂${N2}
    烟草公司在靠你的健康赚钱？${NL}
    你在寻找戒烟的方法吗？${N2}
    ${B}明智的决定！${B}${N2}
    我们一起能做到 🤙${ND}
    Supported languages${NL}
    Click here ➤ /lang ${NL}
    🇷🇺 🇬🇧 🇪🇸 🇩🇪 🇮🇹 🇹🇷 🇨🇳
  `,
  [Content.START_EXISTING]: `
    你好！✌️${N2}
    我们看到你在我们的应用中已经取得了一些进展。${NL}
    你的账户已重新激活！${N2}
    你有三个选项：${N2}
    1. ${B}完全重置账户。${B}${NL}
    这将把你带回第一阶段。${NL}
    吸烟间隔：已重置。${N2}
    2. ${B}清除进度。${B}${NL}
    你将从第二阶段开始，但初始时间会重置。${NL}
    吸烟间隔：${I}{{min_delta}}${I}。${N2}
    3. ${B}保持原样。${B}${NL}
    你将从上次停下的地方继续。${NL}
    ${B}不推荐${B}。${NL}
    吸烟间隔：${I}{{delta_time}}${I}。
  `,
  [Content.START_EXISTING_STAGE_1]: `
    你好！✌️${N2}
    你的账户已重新激活，${NL}
    所有数据已更新。${N2}
    你需要重新完成第一阶段 ⤵️
  `,
  [Content.START_VALID_USER]: `
    👁 激活尝试${N2}
    检测到重复激活账户的尝试。${NL}
    这通常是由于技术故障引起的。${ND}
    为安全起见，以下是你的当前状态：${N2}
    ⏱️ 吸烟间隔：${B}{{delta_time}}${B}。${NL}
    ⏰ 下次吸烟时间：${B}{{time_to_get_smoke}}${B}
  `,
  [Content.START_RESET_IGNORE]: `
    你选择了${B}"保持原样"${B}。${NL}
    这完全是你的决定。${NL}
    你可以随时输入 /start 重置所有进度。${NL}
    ⚔️ ${B}第二阶段${B}已激活 ⚔️${N2}
    吸烟间隔初始值${NL}
    已设置为 ${B}{{delta_time}}${B}。${N2}
    下次点击${B}"我在吸烟"${B}按钮时，将计算你的下次吸烟时间。
  `,
  [Content.START_RESET_TO_STAGE_1]: `
    你的进度${B}已完全重置${B}。${N2}
    这是最好的决定 👑${ND}
    你需要重新完成第一阶段 ⤵️
  `,
  [Content.START_RESET_TO_STAGE_2]: `
    你选择了${B}"重置到第二阶段"${B}。${NL}
    当前阶段进度已清零。${ND}
    ⚔️ ${B}第二阶段${B}已激活 ⚔️${N2}
    吸烟间隔初始值${NL}
    已设置为 ${B}{{delta_time}}${B}。${N2}
    下次点击${B}"我在吸烟"${B}按钮时，将计算你的下次吸烟时间。
  `,
  [Content.LANG]: "Please choose a language to use:",
  [Content.LANG_APPLIED]: "🇨🇳 已设置为简体中文。",
  [Content.STAGE_1]: `
    ${B}第一阶段${B}${N2}
    首先，我们需要了解你吸烟的频率。${NL}
    这个时间将作为后续计算的基准。${N2}
    为此，我们将测量你的吸烟间隔 20 次。这只是一包烟的量。${N2}
    过长或过短的间隔不会被计入，${NL}
    所以如果你去睡觉或忘记按按钮，不用担心。${N2}
    ${B}好，我们开始吧！${B}${ND}
    下次想吸烟时，请按${B}"我在吸烟"${B}按钮。
  `,
  [Content.FIRST_STEP]: `
    你的时间已记录！${N2}
    恭喜！你迈出了第一步！👍${N2}
    重要的是坚持下去，每次吸烟时都不要忘记按按钮。${ND}
    ✅️ 还剩 {{stage_1_left}} 次
  `,
  [Content.STAGE_1_FORGOT_TO_CLICK]: `
    忘记按了？没关系！🙃${N2}
    刚开始使用机器人时，这种情况很常见。${N2}
    ${B}最重要的${B}是养成习惯，${B}坚持到底${B}。
  `,
  [Content.STAGE_1_IGNORE_MIN]: `
    你按按钮的频率太高了。${N2}
    如果不是你的错——我们理解——${NL}
    请养成阅读消息后${I}立即关闭机器人${I}的习惯。${N2}
    可计入的最小间隔为 {{min_stage_1}}。${ND}
    💢 还剩 {{stage_1_left}} 次
  `,
  [Content.STAGE_1_IGNORE_MAX]: `
    可记录的最小间隔为 {{max_stage_1}} 分钟。${N2}
    我们不计入如此长的间隔，以确保准确计算吸烟时间。${N2}
    下次请不要忘记按${B}"我在吸烟"${B}按钮。${ND}
    💫 还剩 {{stage_1_left}} 次
  `,
  [Content.STAGE_1_PROCESSING]: `
    你的时间已记录！${ND}
    ✅️ 还剩 {{stage_1_left}} 次
  `,
  [Content.STAGE_1_YOU_CAN_RESET]: `
    💡 在这个阶段，不错过任何吸烟时刻非常重要，${NL}
    因为你的初始间隔将根据这些数据计算。${N2}
    如果你迷失了方向，最好输入 /start 重新开始。
  `,
  [Content.STAGE_1_END]: `
    ${B}第一阶段完成！🎉${B}${N2}
    恭喜你！${N2}
    凭借你的坚持，我们计算出了可以开始的平均时间。${N2}
    这个时间是 ${B}{{delta_time}}${B}。${ND}
    进入第二阶段 ⤵️
  `,
  [Content.NEXT_SMOKING_TIME]: `
    下次吸烟时间在 {{time_to_get_smoke}} 之后 ⏰️
  `,
  [Content.STAGE_2_INITIAL]: `
    ${B}一切就绪！${B}${N2}
    🕒 当前吸烟间隔：${B}{{delta_time}}${B}${N2}
    现在我们将尝试遵守吸烟计划。${NL}
    每天根据所选难度级别调整几分钟。${N2}
    如果你没能遵守计划，没关系。${NL}
    只要不忘记按${B}"我在吸烟"${B}按钮。${NL}
    我们会记录下来，但这不会阻止你的进步。${N2}
    开始吧！
  `,
  [Content.STAGE_2_HINT]: `
    ⚠️ ${B}重要提示！${B}${N2}
    吸烟的欲望${I}最多持续 5 分钟${I}❗️${NL}
    所以如果你突然想吸烟但时间还没到——${NL}
    只需让自己忙起来，5 分钟后${NL}
    你就会忘记想吸烟这件事。${NL}
    就是这样运作的！
  `,
  [Content.STAGE_2]: `
    时间已记录 ✅️
  `,
  [Content.STAGE_2_SUCCESS]: `
    时间已记录。做得好！👍
  `,
  [Content.STAGE_2_IGNORE_MIN]: `
    你按按钮的频率太高了 ⏳${NL}
    可计入的最小间隔为 ${B}{{min_interval}}${B}。${N2}
    ${I}在现代手机上，这种情况可能不是用户的错。${NL}
    我们知道这很烦人。${NL}
    为了避免这种情况——看到时间后立即关闭聊天。${I}
  `,
  [Content.STAGE_2_PROPS_MISSING]: `
    💢 错误：未找到设置。${N2}
    要访问此命令，你的账户必须完全配置好。${ND}
    如果你认为这是一个错误，请在[我们的群组](${tg_group_link})联系开发者。
  `,
  [Content.PENALTY]: `
    应用中有一个激励性惩罚系统。${N2}
    如果你不遵守计划，我们会稍微降低难度。${N2}
    惩罚将在下次长间隔后应用。${ND}
    🚭 当前惩罚积分：${B}{{penalty}}${B}
  `,
  [Content.PENALTY_3]: `
    🤯 大多数人都能轻松遵守吸烟计划。${NL}
    但我们注意到你的惩罚积分在累积。${NL}
    你需要稳定下来。${N2}
    这正是${B}训练模式${B}的用途！${N2}
    我们强烈建议你${I}切换到训练模式并稳定下来${I}。
  `,
  [Content.IDLE_NO_CIGARETTES]: `
    🌀 ${B}新的一天再次开始${B}${N2}
    由于某种原因，你上次没有记录吸烟时间。${NL}
    但你没有放弃戒烟目标，这证明了你的坚定。${N2}
    ${B}请继续坚持！${B} 🚀
  `,
  [Content.TIME_FOR_A_SMOKE]: "🔥 吸烟时间到！🔥",
  [Content.ON_IDLE_START]: `💤💤💤 ${B}长间隔${B}${N2}`,
  [Content.ON_IDLE_TIME_CONFIRMATION]: `⏰️ 对一下时间。你那边现在是 ${B}{{local_time}}${B} 吗？`,
  [Content.ON_IDLE_STATS_1]: `昨天你吸了 ${B}{{cigarettes}}${B} 支烟${NL}`,
  [Content.ON_IDLE_STATS_2]: `
    你的吸烟间隔已重新计算：${NL}
    上次间隔：{{prev_delta}}${NL}
    \\- 惩罚积分：{{penalty}} \\[{{penalty_mins}}\\]${NL}
    \\+ 步进 {{step}}${NL}
    \\= 更新后间隔 ${I}{{new_delta}}${I}
  `,
  [Content.WINSTRIKE]: `
    ⚡️ 你已经坚持了 {{winstrike}}！太棒了！
  `,
  [Content.WINSTRIKE_BASE]: `
    📚 要退出训练模式，请完成几天无惩罚记录。{{day}} / {{of_days}}
  `,
  [Content.WINSTRIKE_MEDIUM]: `
    ⚔️ 连续完成几天无惩罚记录即可进入快速模式！${N2}
    📆 当前进度：${B}{{day}} / {{of_days}}${B}
  `,
  [Content.WINSTRIKE_BASE_FAILED]: `
    ⭐️ 你处于${B}训练${B}难度级别。${N2}
    ✨${I}惩罚积分不计入。${I}✨${N2}
    尽管如此，还是尽量不要产生惩罚 😉
  `,
  [Content.WINSTRIKE_BASE_SUCCESS]: `
    🥁 我们看到你已经适应了，准备好改变难度了！
  `,
  [Content.DIFFICULTY]: `
    📈 ${B}选择你的难度级别${B}${N2}
    - ${B}{{ difficulty_easy }}${B}：${NL}
     每天 +0.5 分钟${NL}
    帮助你适应间隔系统。${N2}
    - ${B}{{ difficulty_medium }}${B}：${NL}
    每天 +2 分钟。${I}最优选择${I}。${NL}
    如果你想保持适中的节奏，这就是你的选择。${N2}
    - ${B}{{ difficulty_hard }}${B}：${NL}
    每天 +5 分钟${NL}
    仅适合${I}认真努力戒烟的人${I}。${NL}
    1 次错误就会降回普通级别。${N2}
    当前难度级别 🏂 ${B}{{difficulty}}${B}。
  `,
  [Content.DIFFICULTY_EASY]: "训练",
  [Content.DIFFICULTY_MEDIUM]: "普通",
  [Content.DIFFICULTY_HARD]: "快速",
  [Content.DIFFICULTY_SELECTED]: `
    你选择了${B}"{{difficulty}}"${B}难度级别。
  `,
  [Content.DIFFICULTY_DESCRIPTION]: `
    📌 请阅读此消息${N2}
    你已被分配训练难度级别。${ND}
    ${B}为什么从"训练"级别开始很重要？${B}${N2}
    在这个阶段，${B}主要目标是打破习惯性的吸烟模式${B}。
    例如，喝咖啡时吸烟、在公交站等车时吸烟、
    和同事一起休息时吸烟等。${N2}
    这是最难的部分。我们的统计数据显示：${NL}
    - 在${B}前 3 天${B}，95% 的用户无法遵守计划。${NL}
    - 在${B}前 5 天${B}，100% 的用户都会这样。${N2}
    ${I}训练模式正是为了解决这个问题而设计的。${I}${ND}
    📃 ${B}它是如何工作的？${B}${N2}
    ${B}1. 即使不遵守计划，也要按"我在吸烟"按钮。${B}${NL}
    这帮助你意识到自己的习惯，分析在哪里最容易失控。${N2}
    ${B}2. 在这个阶段不会施加惩罚。${B}${NL}
    相反，你会看到自己的违规行为，并逐渐学会控制它们。${N2}
    ${B}3. 适应系统。${B}${NL}
    每天你都会注意到自己变得更有纪律，更好地遵守计划。${ND}
    ${B}接下来是什么？${B}${N2}
    当你感到违规减少或完全消失时，
    ${B}你可以自行切换到更高的难度级别${B}。
    惩罚将会生效，但不会困扰你，因为你已经准备好了。${ND}
    ⬆️ ⬆️ ⬆️ ⬆️ ⬆️${NL}
    你的账户设置将${NL}
    🔜 ${B}在 1 分钟内自动完成${B}。${NL}
    这个暂停是为了确保你阅读了上面的消息。
  `,
  [Content.DIFFICULTY_HARD_DECREASED]: `
    你偏离了计划！${N2}
    你的难度级别已${NL}
    ${B}降低至普通${B} 🔻${N2}
    🚭 惩罚积分未计入。
  `,
  [Content.DIFFICULTY_HARD_AUTO]: `
    ✨ 难度级别已更改为${B}快速${B} 🚀 ✨
  `,
  [Content.TIMEZONE]: `
    🌐 ${B}时区设置${B}${N2}
    要设置你的时区，请按以下步骤操作：${N2}
    1. 打开 ${B}Google${B} 并输入"timezone"。${NL}
    2. 搜索栏下方会立即显示你的时区（括号内）。${NL}
    3. 复制括号内的内容并${B}发送给我们${B}。${ND}
    [点击前往 Google](https://www.google.com/search?q=my+timezone)
  `,
  [Content.TIMEZONE_INTRO]: `
    为了正确显示时间，我们需要确定你的时区。
  `,
  [Content.TIMEZONE_SELECTED]: `
    🕰️ 已选择时区：${B}{{timezone}}${B}${N2}
    ${B}这很重要${B}❗${NL}
    请检查你的当前时间。${NL}
    我们的系统检测到你那边现在是 ${B}{{local_time}}${B}。${N2}
    几分钟的误差无关紧要，${NL}
    但如果时间偏差半小时或更多，${NL}
    你需要更新时区。${ND}
    你的当前时间是 ${B}{{local_time}}${B} 吗？
  `,
  [Content.TIMEZONE_INVALID]: `
    💢 ${B}错误：无效的时区${B}${N2}
    正确的时区示例：GMT+8${NL}
    请重试。
  `,
  [Content.LOCAL_TIME_NEW]: `
    🌐 ${B}时区配置${B}${N2}
    请查看你手机或电脑上的时钟，
    并以 24 小时格式输入时间。${N2}
    示例：${NL}
    {{time_sample}}，0:21，19:00，01:14
  `,
  [Content.LOCAL_TIME]: `
    👉 你的当前时间应该是 ${B}{{local_time}}${B} ⏳${N2}
    请使用按钮确认或调整。
  `,
  [Content.SETTINGS]: `
    ${B}第二阶段。配置。${B}${NL}
    是时候配置时区和难度级别等设置了。
  `,
  [Content.SETTINGS_DONE]: `
    ${B}账户设置完成！${B} 🎉${NL}
    开始使用机器人 ⤵️
  `,
  [Content.SETTINGS_UPDATED]: `
    ${B}你的设置已更新${B} ✔️${N2}
    🕒 当前吸烟间隔：${B}{{delta_time}}${B}
  `,
  [Content.SETTINGS_UPDATED_ON_IDLE]: `
    ✅ 完成！${N2}
    每次吸烟时，只需按「我在吸烟」按钮。
  `,
  [Content.BOT_IGNORE]: `
    🕵️ ${B}我们找不到你了！${B}${N2}
    距离你上次与机器人互动已过去${I} 2 天${I}。${N2}
    ${B}你打算继续吗？${B}${ND}
    ❌ 如果你${B}不打算${B}继续使用机器人——请选择原因：${N2}
    - ${I}你戒烟了吗？${I}——那么恭喜你！🎊${N2}
    - ${I}你决定不戒了${I}——很遗憾，但这是你的选择。${ND}
    ✅ 如果你${B}打算继续${B}，有几个选项：${N2}
    1. ${B}{{from_scratch_message}}${B}——如果你当前的间隔约为两小时或更短。${NL}
    这将重置你的进度，让你${I}从头开始${I}。${N2}
    2. ${B}{{no_penalty_message}}${B}——从上次停下的地方继续（如果暂停时间不长，有时很有用）。${NL}
    你的计时器将设置为 ${B}{{ no_penalty_time }}${B}。${N2}
    3. ${B}{{set_own_interval}}${B}——适合不想从零重置的有经验用户。${NL}
    设置你认为合适的间隔，格式为 ${B}3:17${B}（直接输入）
  `,
  [Content.BOT_IGNORE_JUST_GO_ON]: `
    ${B}继续吧！${B}太好了！👍${ND}
    我们理解，现在的生活确实快节奏且忙碌。${N2}
    正因如此，你不应该放弃戒烟的目标。${NL}
    你只需要完成你已经开始的事情。
  `,
  [Content.BOT_IGNORE_SET_OWN_INTERVAL]: `
    你选择了"${B}自行设置间隔${B}"。${N2}
    这是有经验用户的最佳选择。${N2}
    请以 24 小时格式输入你需要的间隔。${ND}
    示例：${NL}
    2:30，3:15，5:55
  `,
  [Content.BOT_IGNORE_FAILED]: `
    你决定${B}不戒烟${B} 🤯${ND}
    我们真诚地希望你以后会改变主意。${N2}
    机器人将不再向你发送消息。${N2}
    要重新激活机器人，请输入 /start。
  `,
  [Content.BOT_IGNORE_SUCCESS]: `
    🎈 你${B}戒烟了${B}！🎉${ND}
    这说明一切都值得 👍${N2}
    我们想与你分享一些建议：${N2}
    - 记住，第一周是最难的${NL}
    - 多喝水——有帮助${NL}
    - 学习一种新技巧：当某事让你感到压力时，深呼吸。
    这是吸烟冲动的绝佳替代方式。${N2}
    吸烟是一个陷阱。${NL}只是一种从你身上赚钱的方式。${N2}
    ${B}我们为你的成就感到无比自豪！${B}${ND}
    这个机器人完全是非商业性的。我不打算从中获利。
    但如果你想以一杯咖啡表示感谢，我将非常荣幸。
    请访问下面的链接并点击"Donate €3"按钮。${NL}
    链接：[${donate_link}](${donate_link})${NL}
    谢谢！👍${ND}
    希望你不需要这个，${NL}
    但如果你再次开始吸烟，请输入 /start。
  `,
  [Content.CUSTOM_INTERVAL_SUCCESS]: `
    你选择的间隔已成功设置。${N2}
    难度级别已降至普通，以帮助你适应。${N2}
    继续像以前一样使用机器人。
  `,
  [Content.CUSTOM_INTERVAL_ERROR]: `
    无法设置间隔。请尝试以不同格式输入。
  `,
  [Content.STATS]: `
    📋 ${B}你的统计数据${B}：${NL}
    - 当前难度级别 🏂 ${B}{{difficulty}}${B}${NL}
    - 你于 {{start_date}} 开始使用机器人${NL}
    - 自那以来的天数：{{days_from_start}}${NL}
    - 总共吸烟次数：{{cigarettes}}${NL}
    - 累计惩罚积分：{{penalty_all}}${NL}
    - 初始间隔 {{delta_min}}${NL}
    - 当前间隔 {{delta_time}}${NL}
  `,
  [Content.HOW]: `
    ${B}你如何支持机器人的创作者：${B}${N2}
    ${B}你可以通过自愿捐款提供财务支持。${B}${NL}
    重要的是要明白，这个机器人完全是非商业性的。${NL}
    这意味着无论你捐多少，我都不会更改机器人的功能或添加广告。${NL}
    默认捐款金额为 3 欧元，但如果你愿意，可以捐更多。${NL}
    链接：[${donate_link}](${donate_link})${N2}
    ${B}你可以帮助翻译成其他语言。${B}${NL}
    如果你有兴趣，请发送电子邮件至 {{admin_email}}，我会尽力在一周内回复。${N2}
    ${B}你可以通过向朋友介绍机器人来提供帮助。${B}${NL}
    当然，人气不是这个项目的目标。${NL}
    但承认吧，如果没有人知道它，一切都毫无意义。${N2}
    ${I}无论你如何帮助，谢谢！${I}${NL}
    ${I}你关心我的项目的未来对我来说意义重大${I} 💓
  `,
  [Content.MAXIMUM_REACHED]: `
    ${B}⚜️ 你已达到最大值！⚜️${B}${N2}
    难以置信但却是事实——你已经突破了所有可能的界限！${N2}
    ${I}遗憾的是，我们的应用不支持如此大的间隔，因此间隔将不再增加。${I}${ND}
    ${B}如果你还没有戒烟：${B}${N2}
    是时候把吸烟留在过去了。你的间隔已经很大了，继续下去没有意义。${N2}
    查看我们的建议，帮助你彻底戒烟。只需点击下面的按钮 💙${ND}
    无论如何，祝你成功！💪
  `,
  [Content.JOIN_OUR_CHAT]: `
    我们为用户创建了${B}一个温馨的聊天群${B}${N2}
    在那里你可以认识新朋友，${NL}
    分享想法并获得灵感 💫${N2}
    加入我们 👉 [链接](${tg_group_link})
  `,
  // dev
  [Content.DEV]: `⚒️ ${B}Development Mode is ON${B} ⚒️`,
  [Content.DEV_OFF]: "Dev Mode is Off ⛔️",
  [Content.DEV_USER_DELETED]: "🔮 User Deleted /start",
  [Content.DEV_TO_STAGE_1]: "🔮 Your user was reset to Stage 1",
  [Content.DEV_FILL_STAGE_1]: "🔮 Stage 1 was filled, {{stepsAdded}} steps added",
  [Content.DEV_LAST_TIME_MINUS_HOUR]: "🔮 Last time set to 1 hour ago",
  [Content.DEV_STAGE_1_MORE_THAN_MAX]: "🔮 Last time set to more than max value",
  [Content.DEV_TO_IDLE]: "🔮 User switched to Idle mode",
  [Content.DEV_NEXT]: `
    🔮 Next smoke break will happen in 1 minute${N2}
    Waiting for timer... 🧭
  `,
  [Content.DEV_MOTIVIZER]: "🔮 Motivizer Updated",
  [Content.DEV_IGNORE]: `
    🔮 The application lost the user${N2}
    Waiting for timer... 🧭
  `,
  [Content.DEV_LANG]: "🕉️ Select language:",
};
