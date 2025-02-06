---
sidebar_position: 4
---
# Design

## System Architecture Overview

HySDS (Hybrid-Cloud Science Data Processing System) uses a distributed architecture designed to support scalable science data processing across hybrid cloud environments. Below is the high-level architecture:

```mermaid
flowchart TB
    subgraph PCM[Processing Control and Management]
        GRQ[GRQ - Geospatial Data Management]
        MOZ[Mozart - Job Management] 
        MET[Metrics - Runtime Analytics]
        FAC[Factotum - Hot Helper Workers]
    end

    subgraph AWS[AWS Auto-Scaling Fleet]
        V1[Verdi Worker]
        V2[Verdi Worker]
        V3[Verdi Worker]
    end

    subgraph HECC[NASA HECC]
        H1[Verdi Worker]
        H2[Verdi Worker]
        H3[Verdi Worker]
    end

    subgraph ONPREM[On-Premise]
        O1[Verdi Worker]
        O2[Verdi Worker]
        O3[Verdi Worker]
    end

    GRQ <--> MOZ
    MOZ <--> MET
    MOZ <--> FAC
    
    MOZ --> AWS
    MOZ --> HECC
    MOZ --> ONPREM

    AWS --> MET
    HECC --> MET
    ONPREM --> MET
```

## Core Components

### GRQ (Geo Region Query)
The geospatial data management system that handles data discovery and cataloging.

```mermaid
flowchart LR
    subgraph GRQ[GRQ System]
        ES[ElasticSearch/OpenSearch]
        API[REST API]
        TR[Trigger Rules]
    end

    DATA[Data Products] --> ES
    ES <--> API
    ES <--> TR
    TR --> JOBS[Job Submission]
    API --> UI[Web Interface]
```

### Mozart
Job management and orchestration system.

```mermaid
flowchart TB
    subgraph Mozart[Mozart System]
        RMQ[RabbitMQ Queues]
        RD[Redis Job Status]
        ES[ElasticSearch/OpenSearch]
        API[Job Management API]
    end

    subgraph Scaling[Auto-Scaling]
        TT[Target Tracking]
        ASG[Auto-Scaling Groups]
    end

    API --> RMQ
    RMQ --> Workers[Verdi Workers]
    Workers --> RD
    RD --> ES
    ES --> TT
    TT --> ASG
    ASG --> Workers
```

### Verdi Worker Architecture

```mermaid
flowchart TB
    subgraph Verdi[Verdi Worker]
        JW[Job Worker]
        HK[Harikiri Monitor]
        CD[Container Daemon]
        WC[Work Cache]
    end

    subgraph PCM[PCM Services]
        Q[Job Queues]
        R[Redis Events]
        M[Metrics]
    end

    Q --> JW
    JW --> R
    JW --> M
    HK --> JW
    JW --> CD
    CD --> WC
```

## Data Flow Architecture

```mermaid
flowchart LR
    subgraph Input[Data Sources]
        S3[AWS S3]
        ON[On-Premise Storage]
        EXT[External Archives]
    end

    subgraph Processing[HySDS Processing]
        GRQ[GRQ]
        MOZ[Mozart]
        VW[Verdi Workers]
    end

    subgraph Output[Data Delivery]
        DAAC[DAACs]
        ARC[Archives]
        USER[User Access]
    end

    Input --> GRQ
    GRQ --> MOZ
    MOZ --> VW
    VW --> GRQ
    GRQ --> Output
```

## Auto-Scaling Architecture

```mermaid
flowchart TB
    subgraph Queues[Job Queues]
        Q1[Queue Type 1]
        Q2[Queue Type 2]
        Q3[Queue Type 3]
    end

    subgraph Tracking[Target Tracking]
        TT1[Tracker 1]
        TT2[Tracker 2]
        TT3[Tracker 3]
    end

    subgraph ASG[Auto-Scaling Groups]
        ASG1[Group 1]
        ASG2[Group 2]
        ASG3[Group 3]
    end

    Q1 --> TT1
    Q2 --> TT2
    Q3 --> TT3

    TT1 --> ASG1
    TT2 --> ASG2
    TT3 --> ASG3
```

## Deployment Options

### Basic Deployment

```mermaid
flowchart TB
    subgraph ES[ElasticSearch Deployment]
        ES1[Mozart ES]
        ES2[GRQ ES]
        ES3[Metrics ES]
    end

    subgraph Services[Core Services]
        MOZ[Mozart]
        GRQ[GRQ]
        MET[Metrics]
        FAC[Factotum]
    end

    ES1 --- MOZ
    ES2 --- GRQ
    ES3 --- MET
```

### High-Availability Deployment

```mermaid
flowchart TB
    subgraph ES[ElasticSearch Cluster]
        MN[Master Node]
        DN1[Data Node 1]
        DN2[Data Node 2]
    end

    subgraph Services[Core Services]
        MOZ[Mozart]
        GRQ[GRQ]
        MET[Metrics]
    end

    MN --- DN1
    MN --- DN2
    DN1 --- DN2

    DN1 --- Services
    DN2 --- Services
```

## Security Architecture

```mermaid
flowchart TB
    subgraph External[External Access]
        UI[Web UI]
        API[REST API]
    end

    subgraph Security[Security Layer]
        AUTH[Authentication]
        RBAC[Role-Based Access]
        VPC[VPC/Firewall]
    end

    subgraph Internal[Internal Services]
        PCM[PCM Services]
        DATA[Data Services]
        PROC[Processing Services]
    end

    External --> Security
    Security --> Internal
```

## Key Design Considerations

1. **Scalability**
   - Horizontal scaling through auto-scaling groups
   - Distributed processing across multiple environments
   - Queue-based job distribution

2. **Reliability**
   - Fault-tolerant job execution
   - Automatic job recovery
   - Redundant service deployment options

3. **Flexibility**
   - Support for multiple cloud providers
   - Hybrid deployment capabilities
   - Pluggable architecture for different processing needs

4. **Security**
   - Integration with various authentication systems
   - Network isolation through VPCs
   - Role-based access control

5. **Monitoring**
   - Real-time metrics collection
   - Performance monitoring
   - Cost tracking and optimization

## Deployment Best Practices

1. **Resource Sizing**
   - Right-size ElasticSearch clusters based on workload
   - Configure appropriate auto-scaling thresholds
   - Monitor and adjust queue depths

2. **Network Configuration**
   - Ensure proper VPC setup
   - Configure security groups appropriately
   - Set up required VPN connections for hybrid deployments

3. **Storage Management**
   - Implement data lifecycle policies
   - Configure appropriate storage classes
   - Monitor storage usage and costs

4. **Security Configuration**
   - Follow principle of least privilege
   - Regular security updates
   - Audit logging and monitoring

5. **Performance Optimization**
   - Cache frequently accessed data
   - Optimize job scheduling
   - Monitor and tune auto-scaling parameters
