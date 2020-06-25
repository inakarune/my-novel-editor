import React from 'react';

class EpisodeList extends React.Component {
    render(): JSX.Element {
        return (
            <table className="episode-table">
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Created</th>
                        <th>Last updated</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>공작부인과의 한판!</td>
                        <td>작성중</td>
                        <td>2020.05.25</td>
                        <td>2020.06.25</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default EpisodeList;
