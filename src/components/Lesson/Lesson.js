import React, {Component} from 'react';
import Slideshow from './Slideshow/Slideshow';
import Breadcrumb from './BreadCrumb/BreadCrumb';
import counting from '../counting.png';
import counting2 from '../counting2.png';
import num1 from '../num1.png';
import num2 from '../num2.png';
import num3 from '../num3.png';
import num4 from '../num4.png';
import num5 from '../num5.png';
import num6 from '../num6.png';
import num7 from '../num7.png';
import num8 from '../num8.png';
import num9 from '../num9.png';
import num10 from '../num10.png';
import num11 from '../num11.png';
import equal1 from '../equal1.png';
import equal2 from '../equal2.png';
import equal3 from '../equal3.png';
import equal4 from '../equal4.png';
import equal5 from '../equal5.png';
import equal6 from '../equal6.png';
import equal7 from '../equal7.png';
import add1 from '../add1.png';
import add2 from '../add2.png';
import add3 from '../add3.png';
import subtract1 from '../subtract1.png';
import subtract2 from '../subtract2.png';
import subtract3 from '../subtract3.png';



const lessonNames = [
    {
        url: 'count',
        name: 'Counting',
        images: [counting, counting2],
    },
    {
        url: 'number-reg',
        name: 'Number Recognition',
        images: [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11]
    },
    {
        url: 'equality',
        name: 'Equality, More and Less',
        images: [equal5, equal6, equal7, equal1, equal2, equal3, equal4]
    },
    {
        url: 'add',
        name: 'Addition',
        images: [add1, add2, add3]
    },
    {
        url: 'subtract',
        name: 'Subtraction',
        images: [subtract1, subtract2, subtract3]
    }
]



class Lesson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: '', images: ''}
    }

    render() {
        return (
            <div>
                {
                    lessonNames.forEach(el => {
                        if (el.url === this.props.match.params.name) {
                            this.state.name = el.name
                            this.state.images = el.images
                        }
                    })    
                }
                <Breadcrumb name={this.state.name} />
                <Slideshow images={this.state.images}/>
            </div>
        )
    }
}

export default Lesson;


