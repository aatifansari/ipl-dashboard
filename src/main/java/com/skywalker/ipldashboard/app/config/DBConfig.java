package com.skywalker.ipldashboard.app.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.io.File;

@Configuration
public class DBConfig {

    @Bean
    public DataSource getDataSource(){

        DatasourceParam dsp = null;
        try {
            ObjectMapper mapper = new ObjectMapper(new YAMLFactory());
            dsp = mapper.readValue(new File(System.getProperty("user.home")+"/config2.yaml"), DatasourceParam.class);
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return DataSourceBuilder
                .create()
                .url(dsp.getUrl())
                .username(dsp.getUsername())
                .password(dsp.getPassword())
                .build();
    }
}
