import React, { Component } from 'react';

export default class Posts extends Component {
    render() {

        //get magazine posts as props from App
        const zines = this.props.magazines

        let magazinePosts = zines.filter((magazine, index) => {
            //if has value props get the cat. else show all
            if(this.props.value ){
                //make the values strings - find better way to deal with this
                const subArray = magazine.categories.toString();
                const subArray2 = this.props.value.toString();

                return subArray === subArray2
            } else{
                return magazine.categories.toString();
            }

        }).map((magazine, index) =>{
            return (
                <div key={index} className="col-md-12 data-wrap clearfix">
                    <div className="col-sm-4 col-md-3 img-wrap">
                        <img src={magazine.my_featured_image_src} className="img-responsive" alt={magazine.title.rendered} />
                    </div>

                     <div className="col-sm-8 col-md-9 copy-section">
                     <h2 className="page-title">{magazine.title.rendered}</h2>
                     <p dangerouslySetInnerHTML={ {__html: magazine.content.rendered} } />
                     </div>
                </div>
            )
         });

         return (
             <div className="posts-section">
                {magazinePosts}
             </div>
         );

  }
}
