import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Col from "../components/Col";
import Container from "../components/Container";
import Section from "../components/Section";
import Card from "../components/Card";

class SangiBarGoori extends React.Component {
    render() {
        return (
            <>
                <Breadcrumb items={[{name:"سنگی بر گوری"}]}/>
                <Col className="s12">
                    <Container>
                        <Section>
                            <Card>
                                <p className="caption mb-0">
                                    سنگی بر گوری کتابی در گونهٔ خودزندگی‌نامه که در سال ۱۳۴۲ توسط جلال آل‌احمد به
                                    نگارش درآمد، ولی تا ۱۳۶۰ منتشر نشد. آل‌احمد این کتاب را به احترام همسرش، سیمین
                                    دانشور، منتشر نکرد؛ امّا پس از مرگش شمس آل‌احمد آن را به چاپ سپرد. در سال ۱۳۸۴
                                    انتشارات جامه‌دران سنگی بر گوری را تجدید چاپ کرد؛ و پس از محدودیت‌هایی تا
                                    سال‌های منتهی به ۱۳۹۲، از آن پس بارها به وسیلهٔ ناشران مختلف منتشر شده‌است. این
                                    کتاب کوتاه است و در شش فصل نوشته شده‌است. با این که نوشتن خودزندگی‌نامه یکی از
                                    وجوه برجستهٔ ادبیات مدرن مغرب‌زمین است، امّا در ادبیات فارسی معاصر آل‌احمد از
                                    اندک‌شمار نویسندگانی است که به آن توجّه داشته است. سنگی بر گوری در سال ۲۰۰۸
                                    میلادی به انگلیسی ترجمه و در سری کتاب‌خانه ایرانیکا منتشر شده‌است.
                                </p>
                            </Card>
                        </Section>
                    </Container>
                    <div className="content-overlay"/>
                </Col>
            </>
        );
    }
}

export default SangiBarGoori;