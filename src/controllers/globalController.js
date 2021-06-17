import student from "../models/Desk";

export const mainController = (req, res) => {
  res.render("global/main");
};

export const resultController = async (req, res) => {
  const { c, h, w } = req.query;
};

if (c === "--선택--" || h === "--선택--" || w === "--선택--") {
  res.render("global/main", { errorMsg: "색, 높이, 넓이를 선택하세요" });
} else {
  console.log(c);
  console.log(h);
  console.log(w);

  try {
    const deskList = await Desk.find(
      {
        color: parseInt(c),
        height: h,
        width: w,
      },
      {}
    );
    res.render("global/result", { list: deskList });
  } catch (e) {
    console.log(e);
    mainconroller(req, res);
  }
}
