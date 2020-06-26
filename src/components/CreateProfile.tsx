import React from 'react';
import './CreateProfile.scss';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CreateProfile extends React.Component {
    public state = {
        name: '',
        age: 0,
        height: 0,
        weight: 0,
    }
    render(): JSX.Element {
        return (
            <div className="create-profile-container">
                <div className="photo-zone">
                    <div className="photo-group">
                        <div className="photo-box">
                            <img src="../assets/images/kai.png" alt="profile-photo" />
                        </div>
                        <button className="upload-photo-btn"><FontAwesomeIcon icon={ faCameraRetro } size="1x" /></button>
                    </div>
                    <input type="file" />
                    <p>{ this.state.name }</p>
                </div>

                <div className="form-group">
                    <div className="input-box">
                        <p>Name</p>
                        <input type="text" className="text-input"/>
                    </div>

                    <div className="input-box">
                        <p>Age</p>
                        <input type="number" className="number-input" />
                    </div>

                    <div className="input-box">
                        <p>Height</p>
                        <input type="number" className="number-input" />
                    </div>

                    <div className="input-box">
                        <p>Weight</p>
                        <input type="number" className="number-input" />
                    </div>

                    <div className="input-box">
                        <p>Favorites</p>
                        <input type="text" className="text-input" />
                    </div>

                    <div className="input-box">
                        <p>Hate</p>
                        <input type="text" className="text-input" />
                    </div>

                    <div className="input-box">
                        <p>Hobby</p>
                        <input type="text" className="text-input" />
                    </div>
                    <div className="input-box">
                        <p>Hometown</p>
                        <input type="text" className="text-input" />
                    </div>

                    <div className="radio-box">
                        <p>Gender</p>
                        <input type="radio" name="gender" value="woman" /><label className="mr90">Woman</label>
                        <input type="radio" name="gender" value="man" /><label>Man</label>
                    </div>

                    <div className="radio-box">
                        <p>Main Or Not</p>
                        <input type="checkbox" />
                    </div>

                    <div className="input-box">
                        <p>Personality</p>
                        <textarea className="textarea"></textarea>
                    </div>

                    <button className="save-btn">Save</button>

                </div>
                

            </div>
        );
    }
}

export default CreateProfile;
