import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Input, Space, Col  } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
import './Testing.css';
import { AudioOutlined } from '@ant-design/icons';
import MovieRow from "./MovieRow.js";

export function getMovie(query) {
  return axios.get("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "854503da84e66223de25373e314f52bf",
      query: query,
    },
  });
}

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const { Search } = Input;

//Search Bar Nav
const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

const onSearch = value => console.log(value);

class Element extends Component{
    
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getMovieAPI();
  }

  async getMovieAPI(query) {
    if(query === undefined){
      query = 'A';
    }

  try {
      const axiosResponse = await getMovie(query);
      this.setState({ movieData: axiosResponse.data.results });
    } catch (err) {
      console.log(err);
    }
  }
  
  searchMovie(search) {
    this.getMovieAPI(search);
  }

    state = {  }     
    render(){ 
    return (
          <Layout className="layout">
        <Header>
          <div className="logo" />
          <Col>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {new Array(1).fill(null).map((_, index) => {
              return <Menu.Item key='1'>Main Page</Menu.Item>;
            })}
          </Menu>
          </Col>
          <Col>
          <Space direction="horizontal">
                  <Search
                    placeholder="Cari Film"
                    onSearch={this.searchMovie.bind(this)}
                    style={{
                      width: 200,
                      position: "absolute",
                      left: "10%",
                      top: "-50%",
                      transform: "translate(0%, -50%)",
                    }}
                  />
                </Space>
          </Col>
        </Header>
        <Content style={{ padding: '0 50px' }}
        >
                  <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home Page</Breadcrumb.Item>
          </Breadcrumb>
      
          <div className="site-layout-content">   
          </div>
          <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {this.state.movieData && (
                  <MovieRow movie={this.state.movieData} />
                )}
              </Content>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
            );
            }
}
 
export default Element;
