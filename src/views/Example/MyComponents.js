import React from "react";

/** 
 * (#4 Components - Viên Gạch Tạo Nên Bố Cục Của React.JS)
 * 2 components: class component / function component (function arrow).
 * 
 * Components cua React co gi dac biet so voi cac ngon ngu hay frameword khac thi component cua React su dung mot cu phap co ten la JSX (Javacript XML), JSX la mot function hay mot ham cua javascript tuy nhien thay vi tra ve mot bien thi no lai tra ve mot khoi HTML (chung ta code mot khoi HTML ben trong 1 file Javascript) thi day chinh la JSX.
 * 
 * (#5 State - Kiểm Soát Trạng Thái Ứng Dụng React.JS )
 * Muon dung Javascript ben trong HTML thi don gian chi can dung dau dong mo ngoac {}
 * JSX return ra 1 block (khoi).    
 * 
 * <React.fragment></React.fragment> la phien ban cu truoc do cua React va hien tai no duoc toi gian thanh <></>.
 * <></> day la mot khoi fragment cua React khong phai cua HTML.
 * 
 * State chinh la nhung du lieu ma no co the thay doi, ma moi lan thay doi thi giao dien se duoc update lai, giup cap nhat du lieu real time.
 * State (trang thai (status) ) duoc hieu nom na la memory (bo nho) cua React, no giup luu lai cac bien, thi React can biet bien do la gi thi no moi in ra man hinh duoc.
 * State cua React la mot Object gom co key va value
 * state{
 *        key:value;
 * }
 * dung state: {this.state.key} hoac {this.state['value']}.
 * state giup cap nhat lai du lieu ma khong can refresh lai trang. Mot khi state thay doi thi lap tuc JSX thay doi theo.
 * 
 * (#6 React Dev Tools - Công Cụ Hữu Ích Của Lập Trình Viên)
 * Tool components: React Developer Tools dung de doc data tai website React.
 * tab Component se in ra cay DOM hay tat ca components trong ung dung React.
 * tab Profiler dung de do hieu nang cua ung dung React.
 * 
 * (#7 DOM Events - Xử Lý Tất Tần Tật Events Với React.JS)
 * Trong constructor can su dung bind doi voi function truyen thong, con su dung arrow function thi khong can khai bao tu khoa bind(*).
 * Khi viet mot JSX thi phai can dau dong mo ngoac {}.
 * 
 * (#8 setState - Thay Đổi State và Re-render của React.JS)
 * Tai lieu tham khao chinh thong tren reactjs.org   
*/

class MyComponents extends React.Component {

    state = {
        name: 'James',
        age: '25'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        console.log('Hit the button')
        alert('Click me')
    }
    render() {
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My name is {this.state.name}
                </div>
                <div className="second">
                    My age is {this.state.age}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        );
    }
}
export default MyComponents;