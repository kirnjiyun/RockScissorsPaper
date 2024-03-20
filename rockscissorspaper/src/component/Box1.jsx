import React, { Component } from "react";
import styles from "./box1.module.css";

class Box1 extends Component {
    render() {
        // props에서 결과와 타이틀, 아이템을 추출합니다.
        const { result, title, item } = this.props;

        // 박스의 스타일을 조건에 따라 설정합니다.
        const boxStyle = {
            border:
                result === "짐"
                    ? "2px solid red"
                    : result === "이김"
                    ? "2px solid green"
                    : "",
        };

        // JSX로 컴포넌트를 렌더링합니다.
        return (
            <div className={styles.box} style={boxStyle}>
                <h1>{title}</h1>
                <img className={styles.img} src={item && item.img} alt="" />
                <h2>{result}</h2>
            </div>
        );
    }
}

export default Box1;
