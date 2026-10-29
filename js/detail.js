const items = {};

/* รายการ Spirited Away */
items.spirited = {
    id: "spirited",
    name: "Manchester United (Home) - 1999/00",
    group: "films",
    category: "Manchester United",
    maker: "Umbro",
    makerLabel: "แบรนด์ผู้ผลิต",
    caption: "เสื้อเหย้าสีแดงในตำนาน",
    description:
        "เสื้อเหย้าสีแดงของแมนเชสเตอร์ ยูไนเต็ด จากแบรนด์ Umbro โดดเด่นด้วยลายเพชรสีดำและขาวบริเวณไหล่ " +
        "พร้อมโลโก้ SHARP สปอนเซอร์บนหน้าอก",
    story:
        "เสื้อฟุตบอลแมนเชสเตอร์ ยูไนเต็ด ยุค 90s ตัวนี้ สะท้อนเสน่ห์ของฟุตบอลยุคคลาสสิกและความทรงจำของแฟนปีศาจแดง โดยเป็นเสื้อที่ผูกพันกับ David Beckham " +
        "หนึ่งในนักฟุตบอลคนสำคัญผู้โดดเด่นด้วยการเปิดบอลที่แม่นยำและลูกฟรีคิกอันเป็นเอกลักษณ์ ซึ่งมีส่วนสำคัญอย่างยิ่งในการพาทีมคว้าทริปเปิลแชมป์ในฤดูกาล 1998/99",
    image: "assets/images/collection/เสื้อแมนเชสเตอร์ยูไนเต็ดวินเทจสีแดง.png",
    related: ["ram", "converse"],
};

/* รายการ Random Access Memories */
items.ram = {
    id: "ram",
    name: "Inter Milan (Third) - 1997/98",
    group: "music",
    category: "Inter Milan ",
    maker: "Umbro",
    makerLabel: "แบรนด์ผู้ผลิต",
    caption: "O Fenômeno",
    description:
        "เสื้อเยือนสีเงินแถบคาดกลางอกอันล้ำยุค " +
        "ผูกพันกับปรากฏการณ์ลูกหนังระดับโลกในยุคทองของ R9",
    story:
        "เสื้อตัวนี้ไม่ได้เป็นเพียงแค่ชุดแข่งสีเทาเงินสะดุดตาที่มีสปอนเซอร์ Pirelli คาดกลางอก แต่เป็นสัญลักษณ์ของฤดูกาลแรกที่ โรนัลโด้ (Ronaldo Nazário - R9) ย้ายมาสร้างปรากฏการณ์กระชากลากเลื้อยสะท้านอิตาลีด้วยความเร็วและทักษะที่หยุดไม่อยู่" +
        "ทูร์นาเมนต์ที่เต็มไปด้วยความทรงจำ และพางูใหญ่คว้าแชมป์ยูฟ่า คัพ มาครองได้อย่างยิ่งใหญ่",
    image: "assets/images/collection/เสื้อฟุตบอลอินเตอร์ มิลานย้อนยุค 90s.png",
    related: ["prince", "budapest"],
};

/* รายการ The Little Prince */
items.prince = {
    id: "prince",
    name: "Fiorentina (Home) – 1992/93",
    group: "books",
    category: "Fiorentina (Serie A)",
    maker: "Lotto",
    makerLabel: "แบรนด์ผู้ผลิต",
    caption: "เสื้อนักแข่งที่ถูกแบน ?",
    description:
        "เสื้อลายเรขาคณิตที่กลายเป็นความผิดพลาดระดับตำนาน " +
        "และถูกสั่งเรียกเก็บด่วนทั่วอิตาลี",
    story:
        "แบรนด์ Lotto ได้ออกแบบเสื้อลายเรขาคณิตสีม่วง-ขาวให้กับสโมสรฟิออเรนติน่า แต่เมื่อมองภาพจากมุมสูงหรือระยะไกล ลวดลายตารางสีดำตรงหัวไหล่ดันเรียงตัวกันออกมาคล้ายกับ" +
        "สวัสติกะ (Nazi Swastika) โดยไม่ได้ตั้งใจ ทำให้เกิดเสียงวิพากษ์วิจารณ์และเป็นข่าวใหญ่โตทั่วอิตาลี จนสโมสรต้องรีบสั่งยกเลิกการผลิตและดึงเสื้อกลับอย่างเร่งด่วน ",
    image: "assets/images/collection/jersey_patterns_circled.png",
    related: ["am", "x100"],
};

/* รายการ Fujifilm X100 */
items.x100 = {
    id: "x100",
    name: "West Germany (Home) - 1990",
    group: "cameras",
    category: "ทีมชาติเยอรมนีตะวันตก",
    maker: "Adidas",
    makerLabel: "ผู้ผลิต",
    caption: "เสื้อบอลกับประวัติศาสตร์โลก",
    description:
        "เสื้อทีมชาติเยอรมนีตะวันตก ปี 1990 เสื้อสีขาวลายซิกแซ็กสีดำ แดง และทอง ซึ่งเป็นสีธงชาติเยอรมนี " +
        "กลายเป็นหนึ่งในเสื้อฟุตบอลที่มีเอกลักษณ์ที่สุดในยุค 90",
    story:
        "หลังสงครามโลกครั้งที่ 2 เยอรมนีถูกแบ่งออกเป็นเยอรมนีตะวันตกและเยอรมนีตะวันออก ก่อนที่กำแพงเบอร์ลินจะพังลง พฤศจิกายน 1989 และเยอรมนีจะกลับมารวมชาติอย่างเป็นทางการในวันที่ 3 ตุลาคม 1990 " +
        "ในปีเดียวกันทีมชาติเยอรมนีตะวันตกคว้าแชมป์ฟุตบอลโลก 1990 ด้วยการเอาชนะอาร์เจนตินา 1–0 ทั้งชัยชนะในสนามและการกลับมารวมชาติอีกครั้ง",
    image: "assets/images/collection/เสื้อฟุตบอลเยอรมนีลายเชฟรอน 1990.png",
    related: ["spirited", "hobbit"],
};

/* รายการ The Grand Budapest Hotel */
items.budapest = {
    id: "budapest",
    name: "Colombia (Home) - 1994",
    group: "films",
    category: "ทีมชาติโคลอมเบีย",
    maker: "Umbro ",
    makerLabel: "แบรนด์ผู้ผลิต",
    caption: "โศกนาฏกรรมเสื้อสีเหลือง",
    description:
        "เสื้อทีมชาติโคลอมเบียสีเหลืองจากปี 1994 ผลิตโดย Umbro กลายเป็นภาพจำของฟุตบอลโลกที่เต็มไปด้วยความหวัง " +
        "ก่อนจะเชื่อมโยงกับหนึ่งในโศกนาฏกรรมที่สะเทือนใจที่สุดในประวัติศาสตร์ฟุตบอล ",
    story:
        "วันที่ 22 มิถุนายน 1994 Andrés Escobar กองหลังทีมชาติโคลอมเบียทำเข้าประตูตัวเองในเกมพบสหรัฐอเมริกา ทำให้โคลอมเบียแพ้ 1–2 ท่ามกลางความผิดหวังของแฟนบอลที่คาดหวังกับทีมชุดนี้อย่างสูง" +
        "เพียง 10 วันต่อมา วันที่ 2 กรกฎาคม 1994 Escobar ถูกยิงเสียชีวิตในประเทศโคลอมเบียรายงานข่าวในเวลานั้นเชื่อมโยงเหตุการณ์กับความโกรธแค้นจากการทำเข้าประตูตัวเอง รวมถึงประเด็นการพนันที่เกี่ยวข้องกับฟุตบอลโลก เสื้อสีเหลืองตัวนี้จึงไม่ได้เป็นเพียงสัญลักษณ์ของการแข่งขัน แต่ยังเป็นเครื่องเตือนใจว่า ฟุตบอลเป็นเพียงเกม และไม่มีความผิดพลาดใดในสนามที่ควรนำไปสู่การสูญเสียชีวิต",
    image: "assets/images/collection/colombia_jersey_no_tag.png",
    related: ["converse", "ram"],
};

/* รายการ AM */
items.am = {
    id: "am",
    name: "Cultural Leonesa (Third) - 2014/15",
    group: "music",
    category: "Deportiva Leonesa",
    maker: "Hummel",
    makerLabel: "แบรนด์ผู้ผลิต",
    caption: "The Tuxedo Kit",
    description:
        "เสื้อฟุตบอลที่ฉีกกฎการออกแบบ ด้วยลวดลายชุดทักซิโด้สีดำ โบว์ไท และเชิ้ตสีขาว " +
        "ผลิตโดย Hummel ในรูปแบบเสื้อรุ่นพิเศษ เพื่อสร้างความแปลกใหม่และรายได้ให้สโมสร",
    story:
        "ในเดือนกรกฎาคม 2014 สโมสรจากสเปนแห่งนี้เปิดตัวเสื้อทักซิโด้รุ่นพิเศษสำหรับการแข่งขันฟุตบอลกระชับมิตรสามเส้าเพื่อสนับสนุนอุตสาหกรรมเหมืองแร่ แม้ช่วงแรกดีไซน์จะได้รับเสียงวิจารณ์ " +
        "แต่กระแสกลับแพร่กระจายไปทั่วโลก เสื้อ 1,000 ตัวแรกขายหมดอย่างรวดเร็ว และมีคำสั่งซื้อจากหลายประเทศ",
    image: "assets/images/collection/เสื้อฟุตบอลทักซิโดสีดำ Hummel.png",
    related: ["hobbit", "x100"],
};

/* รายการ The Hobbit */
items.hobbit = {
    id: "hobbit",
    name: "CD Palencia (Home) - 2016/17",
    group: "books",
    category: "CD Palencia",
    maker: "Kappa",
    makerLabel: "แบรนด์ผู้ผลิต",
    caption: "The Anatomy Kit",
    description:
        "เสื้อฟุตบอลสีแดงที่จำลองกล้ามเนื้อและกายวิภาคของมนุษย์แบบสมจริง " +
        "ผลิตโดย Kappa จนกลายเป็นหนึ่งในชุดแข่งขันที่แปลกตาและถูกพูดถึงอย่างมากในวงการฟุตบอล",
    story:
        "คำขวัญภาษาสเปนที่แปลได้ว่า “เราทุ่มเทจนสุดตัว” เป็นแนวคิดหลักของเสื้อชุดนี้ โดยนำสำนวนที่หมายถึงการทุ่มเทอย่างเต็มกำลังมาตีความเป็นภาพกล้ามเนื้อที่ปรากฏบนเสื้อและกางเกง " +
        "ชุดนี้เปิดตัวในเดือนพฤษภาคม 2016 เพื่อใช้ในรอบเพลย์ออฟเลื่อนชั้นสู่ Segunda División B และได้รับความสนใจจากสื่อทั่วโลก ด้วยการออกแบบที่แตกต่างจากเสื้อฟุตบอลทั่วไป",
    image: "assets/images/collection/เสื้อฟุตบอลลายกล้ามเนื้อ CD Palencia.png",
    related: ["budapest", "converse"],
};

/* รายการ Converse All Star */
items.converse = {
    id: "converse",
    name: "Japan GK (Home) 1998",
    group: "objects",
    category: "ทีมชาติญี่ปุ่น",
    maker: "ASICS",
    makerLabel: "แบรนด์ผู้ผลิต",
    caption: "The Flame of the Samurai",
    description:
        "เสื้อผู้รักษาประตูทีมชาติญี่ปุ่นสีดำ ตัดด้วยลวดลายเปลวไฟสีแดง ส้ม และเหลือง " +
        "ผลิตโดย ASICS สำหรับฟุตบอลโลก 1998 ที่ฝรั่งเศส",
    story:
        "ฟุตบอลโลก 1998 คือการลงแข่งขันรอบสุดท้ายเป็นครั้งแรกของญี่ปุ่น เสื้อชุดนี้โดดเด่นด้วยลายเปลวไฟที่พาดผ่านทั้งตัวและแขน สะท้อนภาพลักษณ์ที่ทรงพลังจนกลายเป็นหนึ่งในเสื้อผู้รักษาประตูที่แฟนฟุตบอลจดจำได้" +
        "แต่เสื้อตัวนี้ก็กลายเป็นสัญลักษณ์ของยุคเริ่มต้นบนเวทีฟุตบอลโลกของญี่ปุ่น",
    image: "assets/images/collection/เสื้อฟุตบอลญี่ปุ่นลายเปลวเพลิง Retro 98.png",
    related: ["prince", "am"],
};

/* อ่าน id จาก URL */
const itemId =
    new URLSearchParams(window.location.search).get("id") || "spirited";
const item = Object.hasOwn(items, itemId) ? items[itemId] : null;

/* ฟังก์ชันแสดงข้อมูล */
function showDetail(item) {
    document.title = "Detail | Personal Collection";
    document.querySelectorAll("[data-field]").forEach(function (element) {
        element.textContent = item[element.dataset.field];
    });
    const image = document.querySelector("#detail-image");
    image.src = item.image;
    image.alt = item.name;
}

/* ฟังก์ชันรายการที่เกี่ยวข้อง */
function showRelated(item) {
    item.related.forEach(function (id, index) {
        const related = items[id];
        const suffix = index === 0 ? "" : "-2";
        document.querySelector("#related-link" + suffix).href =
            "detail.html?id=" + id;
        document.querySelector("#related-image" + suffix).src = related.image;
        document.querySelector("#related-name" + suffix).textContent = related.name;
        document.querySelector("#related-caption" + suffix).textContent =
            related.caption;
    });
}

/* เลือกการแสดงผล */
if (item) {
    showDetail(item);
    showRelated(item);
} else {
    document.querySelector("#detail-content").hidden = true;
    document.querySelector("#not-found").hidden = ture;
    document.title = "Detail | Personal Collection";
}